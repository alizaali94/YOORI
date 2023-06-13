<template>
	<section class="sg-global-content">
		<div class="container">
			<div class="sg-breadcrumb">
				<div class="container">
					<ol class="breadcrumb justify-content-center">
						<li class="breadcrumb-item">{{ lang.compare_list }}</li>
					</ol>
				</div>
			</div>
			<div class="row" v-if="is_shimmer">
				<div v-if="compare > 0" class="col-lg-12">
					<table class="table table-bordered">
						<thead>
							<tr>
								<th>{{ lang.name }}</th>
								<th v-for="(product, index) in products" :key="index" class="one-line-text">
									<router-link :to="{ name: 'product.details', params: { slug: product.slug } }">
										{{ product.product_name }}
									</router-link>
									<a class="compare_delete_btn" @click="removeProduct(product.id)" href="javascript:void(0)"><i class="mdi mdi-close"></i></a>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{{ lang.image }}</td>
								<td v-for="(product, index) in products" :key="'image' + index">
									<router-link :to="{ name: 'product.details', params: { slug: product.slug } }">
										<img v-lazy="product.image_190x230" :alt="product.product_name" />
									</router-link>
								</td>
							</tr>
							<tr>
								<td>{{ lang.price }}</td>
								<td v-for="(product, index) in products" :key="'price' + index">
									<span class="price"
										><del v-if="product.special_discount_check > 0">{{ priceFormat(product.price) }}</del>
										<span v-if="product.special_discount_check > 0">
											{{ priceFormat(product.discount_percentage) }}
										</span>
										<span v-else>{{ priceFormat(product.price) }}</span>
									</span>
								</td>
							</tr>
							<tr>
								<td>{{ lang.brand }}</td>
								<td v-for="(product, index) in products" :key="'brand' + index">
									{{ product.brand }}
								</td>
							</tr>
							<tr>
								<td>{{ lang.category }}</td>
								<td v-for="(product, index) in products" :key="'category' + index">
									{{ product.category }}
								</td>
							</tr>
							<tr>
								<td></td>
								<td v-for="(product, index) in products" :key="'btn' + index">
									<div class="text-center show-more">
										<a v-if="product.status == 'published'" href="javascript:void(0)" @click="cartBtn(product)" class="btn btn-primary">{{ lang.add_o_cart }}</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div v-else class="col-lg-12 text-center">
					<h4 class="breadcrumb-item text-danger">
						{{ lang.no_product_found }}
					</h4>
				</div> </div
			><!-- /.row -->
			<div class="row" v-else-if="shimmer">
				<div class="col-lg-12">
					<table class="table table-bordered" v-for="(compare, i) in 3" :key="i">
						<tr>
							<shimmer :height="150"></shimmer>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import detailsView from "../partials/details-view";
import shimmer from "../partials/shimmer";

export default {
	name: "compare-list",

	data() {
		return {
			products: [],
			active_modal: "",
			is_shimmer: false,
		};
	},
	components: {
		detailsView,
		shimmer,
	},
	mounted() {
		this.compareList();
	},
	computed: {
		compare() {
			return this.$store.getters.getCompareList;
		},
		shimmer() {
			return this.$store.state.module.shimmer;
		},
	},
	methods: {
		compareList() {
			let url = this.getUrl("home/compare-list");
			this.$Progress.start();
			axios.get(url).then((response) => {
				this.is_shimmer = true;
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.products = response.data.products;
					this.$Progress.finish();
				}
			});
		},
		removeProduct(id) {
			let url = this.getUrl("home/remove-compare_product/" + id);
			axios.get(url).then((response) => {
				this.is_shimmer = true;
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.products = response.data.products;
					this.$store.commit("getRemoveCompare", response.data.product);
					this.$store.dispatch("compareList", response.data.compare_list);
				}
			});
		},
	},
};
</script>
