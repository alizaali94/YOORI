<template>
	<div v-if="lengthCounter(countCampaigns) > 0">
		<section class="campaign-section item-space-rmv">
			<div class="container">
				<div class="title justify-content-between">
					<h1>{{ lang.campaign }}</h1>
					<a :href="getUrl('campaigns')" @click.prevent="routerNavigator('campaigns', null)">{{ lang.more_campaign }} <span class="icon mdi mdi-name mdi-arrow-right"></span></a>
				</div>
				<VueSlickCarousel v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
					<div v-for="(campaign, index) in campaigns" :key="index">
						<div class="campaign campaign-style-1">
							<a :href="getUrl('campaign/' + campaign.slug)" @click.prevent="routerNavigator('campaign.details', campaign.slug)">
								<img :src="campaign.image_374x374" :alt="campaign.title" class="img-fluid" />
							</a>
							<span v-if="campaign.campaign_start_date && campaign.campaign_end_date"><span class="icon mdi mdi-calendar-month"></span>{{ campaign.campaign_start_date }} - {{ campaign.campaign_end_date }}</span>
							<h2 class="campaign_title">
								<a :href="getUrl('campaign/' + campaign.slug)" @click.prevent="routerNavigator('campaign.details', campaign.slug)">{{ campaign.title }}</a>
							</h2>
							<p>{{ campaign.short_description }}</p>
							<a :href="getUrl('campaign/' + campaign.slug)" @click.prevent="routerNavigator('campaign.details', campaign.slug)" class="btn btn-primary">{{ lang.get_discount }}</a>
						</div>
					</div>
				</VueSlickCarousel> </div
			><!-- /.container --> </section
		><!-- /.campaign-section -->
	</div>
	<div v-else-if="show_shimmer">
		<section class="campaign-section">
			<div class="container">
				<div class="row">
					<div class="col-md-4" v-for="(campaign, index) in 3" :key="index">
						<shimmer class="mb-3" :height="576"></shimmer>
					</div> </div
				><!-- /.row -->
			</div>
		</section>
	</div>
</template>

<script>
import shimmer from "../partials/shimmer";
import VueSlickCarousel from "vue-slick-carousel";

export default {
	name: "campaign",
	components: {
		shimmer,
		VueSlickCarousel,
	},
	data() {
		return {
			slick_settings: {
				dots: false,
				infinite: true,
				arrows: false,
				autoplay: false,
				slidesToShow: 3,
				slidesToScroll: 3,
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
		};
	},
	mounted() {
		this.checkHomeComponent("campaign");
	},
	watch: {
		homeResponse() {
			this.checkHomeComponent("campaign");
		},
	},
	props: ["campaigns"],
	computed: {
		countCampaigns() {
			if (this.campaigns && this.campaigns.length > 0) {
				return this.campaigns;
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
