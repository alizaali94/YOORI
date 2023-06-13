<template>
	<section class="sg-seller-product sg-feature-shop item-space-rmv" v-if="lengthCounter(countShop) > 0">
		<div class="container">
			<div class="title">
				<h1>{{ lang.featured_shops }}</h1>
			</div>
			<div class="sg-category-content sg-filter" :class="list_class">
				<ul class="products grid-4">
					<li v-for="(shop, i) in featured_shop">
						<div class="sg-product">
							<div class="product-thumb">
								<a :href="getUrl('shop/' + shop.slug)" @click.prevent="routerNavigator('shop', shop.slug)"><img :src="shop.image_297x203" alt="Image" class="img-fluid" /></a>
							</div>

							<div class="favorite-icon" v-if="authUser">
								<a href="javascript:void(0)" @click="removeFollowed(shop.id)" v-if="checkFollowed(shop)"><span class="mdi mdi-name mdi-heart"></span></a>
								<a href="javascript:void(0)" @click="follow(shop.id)" v-else><span class="mdi mdi-name mdi-heart-outline"></span></a>
							</div>

							<div class="seller-product-grid-view">
								<div class="product-info">
									<div class="seller-logo">
										<img :src="shop.image_82x82" :alt="shop.image_82x82" class="img-fluid" />
									</div>
									<h3
										><a :href="getUrl('shop/' + shop.slug)" @click.prevent="routerNavigator('shop', shop.slug)">{{ shop.shop_name }}</a></h3
									>
									<div class="sg-rating">
										<span class="pe-2 fw-bold">{{ shop.rating_count }}</span>
										<star-rating class="pb-1 seller_min_margin" v-model:rating_count="shop.rating_count" :read-only="true" :star-size="12" :round-start-rating="false"></star-rating>
										<span class="rating-count">({{ shop.reviews_count }} {{ lang.ratings }})</span>
									</div>
								</div>
								<div class="product-info-bottom">
									<ul class="global-list">
										<li>{{ lang.products }}: {{ shop.total_products }}</li>
										<li>{{ lang.joined }}: {{ shop.join_date }}</li>
									</ul>
									<a :href="getUrl('shop/' + shop.slug)" @click.prevent="routerNavigator('shop', shop.slug)" class="store-btn">{{ lang.visit_store }} <span data-v-e4caeaf8="" class="icon mdi mdi-name mdi-arrow-right"></span> </a>
								</div>
							</div> </div
						><!-- /.sg-product -->
					</li>
				</ul>
			</div> </div
		><!-- /.container --> </section
	><!-- /.sg-feature-shop -->
	<section class="sg-seller-product sg-feature-shop" v-else-if="show_shimmer">
		<div class="container">
			<div class="sg-category-content shimmer sg-filter" :class="list_class">
				<ul class="products grid-2">
					<li v-for="(shop, i) in 2">
						<div class="sg-product">
							<div class="product-thumb">
								<a href="#"><shimmer :height="225"></shimmer></a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
import StarRating from "vue-star-rating";
import shimmer from "../partials/shimmer";
import seller from "../partials/seller";

export default {
	name: "featured_shop",
	components: { shimmer, seller, StarRating },
	props: ["featured_shop"],
	watch: {
		homeResponse() {
			let component = this.homeResponse.find((data) => data == "featured_sellers");
			if (component) {
				this.show_shimmer = false;
			}
		},
	},
	data: () => ({
		list_class: "",
		slick_settings: {
			dots: false,
			edgeFriction: 0.35,
			infinite: true,
			arrows: false,
			autoplay: false,
			slidesToShow: 2,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 1,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 320,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		},
		show_shimmer: true,
	}),

	computed: {
		countShop() {
			if (this.featured_shop && this.featured_shop.length > 0) {
				return this.featured_shop;
			} else {
				return [];
			}
		},
	},
	mounted() {
		let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
		if (width > 480) {
			this.list_class = "list-view-tab";
		}
	},
};
</script>
