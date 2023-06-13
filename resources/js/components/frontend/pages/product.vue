<template>
	<div>
		<ul class="products" :class="grid_class" v-if="products && products.length > 0">
			<li  v-for="(product, index) in products" :key="index">
				<div v-if='products[0] != "id"' class="sg-product" :class="{ 'style-1': type == 'flash' }">
					<a :href="getUrl('product/' + product.slug)" @click.prevent="routerNavigator('product.details', product.slug)">
						<div class="product-thumb">
							<span class="base" v-if="product.special_discount_check > 0">{{ product.special_discount_type == "flat" ? priceFormat(product.special_discount_check) + " " + lang.off : product.special_discount_check + "% " + lang.off }} </span>
							<span v-if="product.current_stock == 0 && !product.is_classified" class="base stock_badge">{{ lang.out_of_stock }}</span>
							<span class="base reword-badge" v-if="addons.includes('reward') && product.reward > 0">{{ lang.reward_point }}: {{ product.reward }}</span>
							<img :src="product.image_190x230" :alt="product.product_name" class="img-fluid" />
						</div>
					</a>
					<div class="product-info">
						<span class="price" v-if="product.price !== 0">
							<del v-if="product.special_discount_check > 0">{{ priceFormat(product.price) }}</del>
							<span v-if="product.special_discount_check > 0">
								{{ priceFormat(product.discount_percentage) }}
							</span>
							<span>{{ priceFormat(product.price) }}</span>
						</span>
						<h1 class="product-name text-ellipse-one" :title="product.product_name">
							<a :href="getUrl('product/' + product.slug)" @click.prevent="routerNavigator('product.details', product.slug)">
								{{ product.product_name }}
							</a>
						</h1>
						<div class="sg-rating">
							<star-rating v-model="product.rating" :read-only="true" :star-size="12" :round-start-rating="false"></star-rating>
							<span class="reviews" v-if="product.reviews_count > 0">({{ product.reviews_count }} {{ lang.reviews }})</span>
						</div>
						<div class="icons">
							<ul class="global-list">
								<li v-if="product.minimum_order_quantity <= product.current_stock && !product.is_catalog && !product.is_classified" >
									<a href="javaScript:void(0)" @click="cartBtn(product, index)"><span class="mdi mdi-name mdi-shopping-outline"></span></a>
								</li>
								<div v-if="authUser">
									<li v-if="checkWishlist(product) || product.user_wishlist">
										<a href="javaScript:void(0)" @click="removeWishlist(product.id)"><span class="mdi mdi-name mdi-heart"></span></a>
									</li>
									<li v-else>
										<a href="javaScript:void(0)" :class="{ disable_btn: is_disabled == true }" @click="addToWishlist(product.id)"><span class="mdi mdi-name mdi-heart-outline"></span></a>
									</li>
								</div>
								<li v-if="compareCheck(product)">
									<a class="active_compare" :class="{ disable_btn: is_disabled == true }" @click="removeCompare(product.id)" href="javaScript:void(0)"><span class="mdi mdi-name mdi-scale-balance"></span></a>
								</li>
								<li v-else>
									<a @click="addToCompare(product)" :class="{ disable_btn: is_disabled == true }" href="javaScript:void(0)"><span class="mdi mdi-name mdi-scale-balance"></span></a>
								</li>
								<li>
									<a href="javaScript:void(0)" @click="productFetch(product.slug)"><span class="mdi mdi-name mdi-magnify"></span></a>
								</li>
							</ul>
						</div>
					</div>
				</div><!-- /.sg-product -->
			</li>
		</ul>
		<ul class="products" v-else-if="shimmer" :class="grid_class">
			<li v-for="(product, index) in number" :key="index">
				<div class="sg-product">
					<a href="javaScript:void(0)">
						<shimmer :height="290"></shimmer>
					</a>
				</div><!-- /.sg-product -->
			</li>
		</ul>
		<!-- //product modal-->
	</div>
</template>

<script>
import StarRating from "vue-star-rating";
import FlipCountdown from "vue2-flip-countdown";
import shimmer from "../partials/shimmer";
import detailsView from "../partials/details-view";

export default {
	name: "product",
	props: ["products", "grid_class", "type", "number"],
	components: {
		FlipCountdown,
		StarRating,
		shimmer,
		detailsView,
	},
	data() {
		return {
			checkListing: true,
			showModal: false,
			modal_height: 600,
			modal_width: 990,
			is_disabled: false,
		};
	},

	mounted() {
		if (this.authUser) {
			this.pushWishlists();
		}
		this.compareList();
	},
	computed: {
		activeCurrency() {
			return this.$store.getters.getActiveCurrency;
		},
		wishlists() {
			return this.$store.getters.getUserWishlist;
		},
		compareLists() {
			return this.$store.getters.getUserCompare;
		},
		count_compare() {
			return this.$store.getters.getCountCompare;
		},

		productDetails() {
			let products = this.$store.getters.getProductDetails;
			for (let i = 0; i < products.length; i++) {
				if (products[i].slug == this.active_modal) {
					return products[i].product;
				}
			}
			return false;
		},
		productList() {
			if (this.products && this.products.data && this.products.data.length == 0) {
				return (this.products.data = ["id"]);
			} else if (this.products && this.products.data && this.products.data.length > 0) {
				return this.products.data;
			} else {
				return [];
			}
		},
	},

	methods: {
		addToWishlist(id) {
			this.is_disabled = true;
			let url = this.getUrl("user/add-to-wishlist/" + id);
			axios.get(url).then((response) => {
				this.is_disabled = false;
				if (response.data.error) {
					this.$Progress.error();
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.dispatch("userWishlistProduct", response.data.wishlist);
					this.$store.dispatch("wishlists", response.data.wishlists);
					toastr.success(response.data.success, this.lang.Success + " !!");
				}
			});
		},
		checkWishlist(product) {
			if (this.checkListing) {
				let length = Object.keys(this.wishlists).length;

				for (let i = 0; i < length; i++) {
					if (this.wishlists[i] && product.id == this.wishlists[i].product_id) {
						return true;
					}
				}
				return false;
			}
		},
		compareCheck(product) {
			let length = Object.keys(this.compareLists).length;

			for (let i = 0; i < length; i++) {
				if (product.id == this.compareLists[i].id) {
					return true;
				}
			}
			return false;
		},
		removeWishlist(id) {
			this.checkListing = false;

			let url = this.getUrl("user/remove-wishlist-product/" + id);
			axios.get(url).then((response) => {
				if (response.data.error) {
					this.$Progress.fail();
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.checkListing = true;
					this.$store.commit("getRemoveWishlist", response.data.wishlist);
					this.$store.dispatch("wishlists", response.data.totalWishlist);
					toastr.success(response.data.success, this.lang.Success + " !!");
				}
			});
		},
		pushWishlists() {
			if (this.wishlists.length > 0) {
				let length = Object.keys(this.wishlists).length;

				if (length == 0) {
					let product_length = this.products.length;
					for (let i = 0; i < product_length; i++) {
						let wishlist = this.products[i].user_wishlist;
						if (wishlist) {
							this.$store.dispatch("userWishlistProduct", wishlist);
						}
					}
				}
			}
		},
		compareList() {
			let length = this.compareLists.length;
			let flag = this.count_compare;

			if (length == 0 && flag) {
				this.$store.commit("getCountCompare", false);
				let url = this.getUrl("home/compare-list");
				axios.get(url).then((response) => {
					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						let products = response.data.products;
						for (let i = 0; i < products.length; i++) {
							let compare = products[i];
							if (compare) {
								this.$store.dispatch("userCompareProduct", compare);
							}
						}
						// this.pushCompare();
					}
				});
			}
		},
		addToCompare(product) {
			this.is_disabled = true;
			let url = this.getUrl("home/add-to-compare/" + product.id);
			axios.get(url).then((response) => {
				this.is_disabled = false;
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.commit("getUserCompare", response.data.product);
					this.$store.dispatch("compareList", response.data.compare_list);
				}
			});
		},
		removeCompare(id) {
			let url = this.getUrl("home/remove-compare_product/" + id);
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.commit("getRemoveCompare", response.data.product);
					this.$store.dispatch("compareList", response.data.compare_list);
				}
			});
		},
	},
};
</script>
