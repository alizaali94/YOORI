<template>
	<section class="sg-seller-product">
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-lg-12">
					<div class="sg-category-content sg-filter" :class="activeClass">
						<div class="d-flex justify-content-between mb-4">
							<div class="left-content">
								<div class="title b-0 pb-0">
									<h1>{{ lang.all_seller }}</h1>
								</div>
							</div>
							<div class="right-content">
								<div class="d-flex align-items-center">
									<span class="me-3">{{ lang.sort_by }}</span>
									<select name="order" v-model="filter.sort" class="form-control mr-1" @change="filterData">
										<option value="newest">{{ lang.newest }}</option>
										<option value="oldest">{{ lang.oldest }}</option>
										<option value="top_rated">{{ lang.top_rated }}</option>
										<option value="top_selling">{{ lang.top_selling }}</option>
									</select>
									<select name="paginate" v-model="filter.paginate" class="form-control" @change="filterData">
										<option value="12">{{ lang.show_12 }}</option>
										<option value="16">{{ lang.show_16 }}</option>
										<option value="20">{{ lang.show_20 }}</option>
										<option value="24">{{ lang.show_24 }}</option>
									</select>
									<ul class="filter-tabs global-list">
										<li class="grid-view-tab" @click="activeClass = 'grid-view-tab'" :class="{ active: activeClass == 'grid-view-tab' || activeClass == '' }"> <span class="mdi mdi-name mdi-grid"></span></li>
										<li class="list-view-tab" @click="activeClass = 'list-view-tab list_restore'" :class="{ active: activeClass == 'list-view-tab' || activeClass == 'list-view-tab list_restore' }">
											<span class="mdi mdi-name mdi-format-list-bulleted"></span
										></li>
									</ul>
								</div>
							</div>
						</div>
						<seller :sellers="sellers" :class_name="'grid-4'" :number="12" :is_shimmer="is_shimmer"></seller>
						<div class="show-more">
							<a href="javascript:void(0)" v-if="paginate && !loading" @click="loadSellers()" class="btn btn-primary">{{ lang.show_more }}</a>
							<loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
						</div> </div
					><!-- /.sg-category-content -->
				</div> </div
			><!-- /.row --> </div
		><!-- /.container -->
	</section>
</template>

<script>
import StarRating from "vue-star-rating";
import seller from "../partials/seller";

export default {
	name: "sellers",

	data() {
		return {
			loading: false,
			is_shimmer: false,
			rating: 5,
			activeClass: "",
			filter: {
				sort: "newest",
				paginate: 12,
				page: this.$store.state.module.seller_paginate_page,
			},
		};
	},
	mounted() {
		if (this.lengthCounter(this.sellers) == 0) {
			this.loadSellers();
		}
		if (this.lengthCounter(this.sellers) > 0) {
			this.is_shimmer = true;
		}
	},
	computed: {
		baseUrl() {
			return this.$store.getters.getBaseUrl;
		},
		shimmer() {
			return this.$store.state.module.shimmer;
		},
		sellers() {
			return this.$store.getters.getAllSellers;
		},
		userShop() {
			return this.$store.getters.getShopFollwer;
		},
		paginate() {
			return this.$store.state.module.seller_paginate_url;
		},
	},
	components: {
		StarRating,
		seller,
	},

	methods: {
		loadSellers() {
			let url = this.baseUrl + "/home/sellers";
			this.$Progress.start();
			this.loading = true;
			axios
				.get(url, { params: this.filter })
				.then((response) => {
					this.is_shimmer = true;
					this.loading = false;
					if (response.data.error) {
						this.$Progress.fail();
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						this.$store.commit("getAllSellers", response.data.sellers);
						// this.next_page_url = response.data.sellers.next_page_url;
						this.filter.page++;
						this.$Progress.finish();
					}
				})
				.catch((error) => {
					this.loading = false;
					this.is_shimmer = true;
					this.$Progress.fail();

					toastr.error(error.response.statusText, this.lang.Error + " !!");
				});
		},

		filterData() {
			this.$store.commit("setEmptySeller", []);
			this.filter.page = 1;
			this.loadSellers();
		},
	},
};
</script>
