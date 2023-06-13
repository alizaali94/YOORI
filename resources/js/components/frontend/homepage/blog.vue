<template>
	<section class="sg-blog-section item-space-rmv" v-if="lengthCounter(countBlog) > 0">
		<div class="container">
			<div class="title justify-content-between">
				<h1>{{ lang.latest_news }}</h1>
				<router-link :to="{ name: 'blogs' }">{{ lang.more }}<span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
			</div>
			<VueSlickCarousel v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
				<div v-for="(blog, index) in blogs" :key="index" class="blog-pad">
					<div class="post">
						<div class="entry-header">
							<div class="entry-thumbnail">
								<a :href="getUrl('blog/' + blog.slug)" @click.prevent="routerNavigator('blog.details', blog.slug)">
									<img :src="blog.thumbnail" :alt="blog.title" class="img-fluid" />
								</a>
							</div>
							<div class="entry-content">
								<h2 class="entry-title text-ellipse">
									<router-link :to="{ name: 'blog.details', params: { blogId: blog.id, slug: blog.slug } }">
										{{ blog.title }}
									</router-link>
								</h2>
								<p class="text-ellipse">{{ blog.short_description }}</p>
								<a class="read-more" :href="getUrl('blog/' + blog.slug)" @click.prevent="routerNavigator('blog.details', blog.slug)">
									{{ lang.read_more }}
								</a>
							</div>
						</div>
					</div>
				</div>
			</VueSlickCarousel> </div
		><!-- /.container --> </section
	><!-- /.sg-blog-section -->
	<section class="sg-blog-section" v-else-if="show_shimmer">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-lg-3" v-for="(count, index) in 4" :key="index">
					<div class="post">
						<div class="entry-header">
							<div class="entry-thumbnail">
								<shimmer :height="347"></shimmer>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import shimmer from "../partials/shimmer";
import VueSlickCarousel from "vue-slick-carousel";

export default {
	name: "blog",
	components: { shimmer, VueSlickCarousel },
	data: () => ({
		slick_settings: {
			dots: false,
			edgeFriction: 0.35,
			infinite: true,
			arrows: false,
			autoplay: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			// adaptiveHeight: true,
			centerPadding: "50px",
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
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

	props: ["blogs"],

	mounted() {
		this.checkHomeComponent("latest_product");
	},
	watch: {
		homeResponse() {
			this.checkHomeComponent("latest_product");
		},
	},
	computed: {
		countBlog() {
			if (this.blogs && this.blogs.length > 0) {
				return this.blogs;
			} else {
				return [];
			}
		},
	},
	methods: {
		checkHomeComponent(component_name) {
			let component = this.homeResponse.find((data) => data == component_name);

			if (component) {
				return (this.show_shimmer = false);
			}
		},
	},
};
</script>
