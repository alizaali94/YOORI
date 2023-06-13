<template>
	<div class="sg-page-content">
		<section class="edit-profile">
			<div class="container">
				<div class="row">
					<user_sidebar :current="current"></user_sidebar>
					<div class="col-lg-9 pl-lg-5">
						<div class="sg-shipping">
							<div class="title justify-content-between">
								<h1>{{ lengthCounter(sellers) == 0 ? lang.no_seller_founds : lang.all_seller }}</h1>
							</div>
							<div class="sg-seller-product">
								<seller :sellers="sellers" :class_name="'grid-3'" :number="12" :shimmer="shimmer" :is_shimmer="is_shimmer"></seller>
							</div>

							<div class="col-md-12 text-center show-more" v-if="next_page_url && !loading">
								<a href="javascript:void(0)" @click="loadSellers()" class="btn btn-primary">{{ lang.show_more }}</a>
							</div>
							<div class="col-md-12 text-center show-more" v-show="loading">
								<a href="javascript:void(0)" class="btn btn-primary"><img width="20" :src="getUrl('public/images/default/preloader.gif')" alt="preloader" /> {{ lang.loading }}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import user_sidebar from "../../partials/user_sidebar";
import shimmer from "../../partials/shimmer";
import StarRating from "vue-star-rating";
import seller from "../../partials/seller";

export default {
	name: "followed-shop",
	data() {
		return {
			current: "followed_shop",
			page: 1,
			loading: false,
			next_page_url: false,
			is_shimmer: false,
		};
	},
	mounted() {
		if (this.lengthCounter(this.sellers) == 0) {
			// this.$store.dispatch('FollowedSellers');
			this.$store.dispatch("FollowedSellers");
		}

		if (this.lengthCounter(this.sellers) > 0) {
			this.is_shimmer = true;
		}
	},
	components: {
		user_sidebar,
		shimmer,
		StarRating,
		seller,
	},
	watch: {
		sellers(newValue, oldValue) {
			this.is_shimmer = true;
		},
	},
	computed: {
		shimmer() {
			return this.$store.state.module.shimmer;
		},
		sellers() {
			return this.$store.getters.getFollowedSellers.filter((seller) => seller.id > 0);
		},
		userShop() {
			return this.$store.getters.getShopFollwer;
		},
	},
	methods: {
		loadSellers() {
			let url = this.getUrl("user/followed-sellers?page=" + this.page);
			this.$Progress.start();
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.commit("setFollowedSellers", response.data.sellers.data);
					this.next_page_url = response.data.sellers.next_page_url;
					this.page++;
					this.$Progress.finish();
				}
			});
		},
	},
};
</script>
