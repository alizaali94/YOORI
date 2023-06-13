<template>
	<section class="products-section category-products bg-white" v-if="lengthCounter(products) > 0">
		<div class="container">
			<div v-if="offer_ending_products && offer_ending_products.length > 0" class="title justify-content-between">
				<h1>{{ lang.offer_ending_soon }}</h1>
				<a href="javascript:void(0)" @click="navigator">{{ lang.more_products }} <span class="icon mdi mdi-name mdi-arrow-right"></span></a>
			</div>
			<div class="row">
				<div class="col-md-4" v-if="offer_ending_banner && $route.name == 'home' && window.width >= 1200">
					<div class="products">
						<div class="category-product">
							<div>
								<a v-if="urlCheck(offer_ending_banner_url)" :href="offer_ending_banner_url">
									<img :src="offer_ending_banner" :alt="offer_ending_banner" class="img-fluid" />
								</a>
								<router-link v-if="offer_ending_banner_url" v-else :to="offer_ending_banner_url">
									<img :src="offer_ending_banner" :alt="offer_ending_banner" class="img-fluid" />
								</router-link>
							</div>
							<div class="thumb" v-if="offer_ending_banner">
								<a href="javascript:void(0)" class="add-banner"><img :src="offer_ending_banner" :alt="offer_ending_banner" class="img-fluid" /></a>
							</div>
						</div>
					</div>
				</div>
				<div v-if="is_shop" :class="'col-lg-12'">
					<product :products="products" :grid_class="window.width < 1200 ? 'grid-4 grid-show' : 'grid-6 product-space'"></product>
				</div>
				<div v-else :class="[window.width < 1200 ? 'col-lg-12' : 'col-lg-8']">
					<product :products="products" :grid_class="window.width < 1200 ? 'grid-4 grid-show' : 'grid-4 product-space'"></product>
				</div>
			</div>
		</div>
	</section>
	<section class="products-section category-products bg-white" v-else-if="show_shimmer">
		<div class="container">
			<div class="row">
				<div class="col-md-4" v-if="$route.name == 'home' && window.width >= 1200">
					<div class="products">
						<div class="category-product">
							<div>
								<a href="#"><shimmer :height="754"></shimmer></a>
							</div>
							<div class="thumb">
								<a href="javascript:void(0)"><img :src="offer_ending_banner" :alt="offer_ending_banner" class="img-fluid" /></a>
							</div>
						</div>
					</div>
				</div>
				<div :class="[window.width < 1200 ? 'col-lg-12' : 'col-lg-8']">
					<ul class="products" :class="window.width < 1200 ? 'grid-4 grid-show' : 'grid-4 product-space'">
						<li v-for="(product, index) in 8" :key="index">
							<div class="sg-product">
								<a href="javaScript:void(0)">
									<shimmer :height="364"></shimmer>
								</a> </div
							><!-- /.sg-product -->
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import product from "../pages/product";
import shimmer from "../partials/shimmer";

export default {
	name: "offer_ending",
	components: {
		product,
		shimmer,
	},
	data() {
		return {
			window: {
				width: 0,
				height: 0,
			},
			show_shimmer: true,
			is_shop: false,
		};
	},

	mounted() {
		this.checkHomeComponent("offer_ending_soon");
    this.checkShopComponent("offer_ending_soon");
		if(this.$route.name == 'shop'){
			this.is_shop = true
		}
  },
	watch: {
		homeResponse() {
			this.checkHomeComponent("offer_ending_soon");
		},
    shopResponse() {
      this.checkShopComponent("offer_ending_soon");
    },
	},

	props: ["offer_ending_products", "offer_ending_banner", "offer_ending_banner_url"],

	computed: {
		products() {
			if (this.offer_ending_products && this.offer_ending_products.length > 0) {
				return this.offer_ending_products;
			} else {
				return [];
			}
		},
	},
	created() {
		window.addEventListener("resize", this.handleResize);
		this.handleResize();
	},
	destroyed() {
		window.removeEventListener("resize", this.handleResize);
	},
	methods: {
		navigator() {
			if (this.$route.name == "shop") {
				window.scroll(0, 500);
				this.$store.commit("setActiveTab", "product");
			} else {
				this.$router.push({ name: "product.by.offer" });
			}
		},
		handleResize() {
			this.window.width = window.innerWidth;
			this.window.height = window.innerHeight;
			console.log(this.$route.name);
		},
		checkHomeComponent(component_name) {
			let component = this.homeResponse.find((data) => data == component_name);

			if (component) {
				return (this.show_shimmer = false);
			}
		},
    checkShopComponent(component_name) {
      let component = this.shopResponse ? this.shopResponse.find((data) => data == component_name) : '';

      if (component) {
        return (this.show_shimmer = false);
      }
    },
	},
};
</script>
