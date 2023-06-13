\<template>
    <div class="sg-page-content">
        <section class="campaign-section">
            <div class="container">
                <div class="title justify-content-between b-0">
                    <h1 v-if="is_shimmer">
                        {{ lengthCounter(campaigns) > 0 ? lang.campaigns : lang.no_campaign_founds }}</h1>
                    <h1 v-else>{{ lang.content_loading }}</h1>
                </div>
                <div class="row" v-if="is_shimmer">
                    <div class="col-md-4" v-for="(campaign,index) in campaigns" :key="index">
                        <div class="campaign campaign-style-1">
                            <a :href="getUrl('campaign/'+campaign.slug)" @click.prevent="routerNavigator('campaign.details',campaign.slug)">
                                <img v-lazy="campaign.image_374x374" :alt="campaign.title" class="img-fluid">
                            </a>
                            <span v-if="campaign.campaign_start_date && campaign.campaign_end_date"><span
                                class="icon mdi mdi-calendar-month"></span>{{ campaign.campaign_start_date }} - {{
                                    campaign.campaign_end_date
                                }}</span>
                            <h2 class="campaign_title">
                                <router-link :to="{ name : 'campaign.details',params : { slug : campaign.slug } }">
                                    {{ campaign.title }}
                                </router-link>
                            </h2>
                            <p>{{ campaign.short_description }}</p>
                            <a :href="getUrl('campaign/'+campaign.slug)" class="btn btn-primary" @click.prevent="routerNavigator('campaign.details',campaign.slug)">{{ lang.get_discount }}
                            </a>
                        </div>
                    </div>
                </div><!-- /.row -->
                <div class="row" v-else-if="shimmer">
                    <div class="col-md-4" v-for="(campaign,index) in 6" :key="index">
                        <shimmer class="mb-3" :height="576"></shimmer>
                    </div>
                </div><!-- /.row -->
                <div class="col-md-12 text-center show-more" v-if="paginate && !loading">
                    <a href="javaScript:void(0)" @click="loadMoreData()" class="btn btn-primary">{{ lang.show_more }}</a>
                </div>
                <div class="col-md-12 text-center show-more" v-show="loading">
                    <loading_button :class_name="'btn btn-primary'"></loading_button>
                </div>
            </div><!-- /.container -->
        </section><!-- /.campaign-section -->
    </div>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
    name: "campaign",
    data() {
        return {
            loading: false,
            is_shimmer: false,
        }
    },
    components: {
        shimmer
    },
    mounted() {
        if (this.lengthCounter(this.campaigns) == 0) {
            this.loadMoreData();
        }
        if (this.lengthCounter(this.campaigns) > 0) {
            this.is_shimmer = true
        }
    },
    computed: {
        baseUrl() {
            return this.$store.getters.getBaseUrl;
        },
        campaigns() {
            return this.$store.getters.getAllCampaign
        },
        shimmer() {
            return this.$store.state.module.shimmer
        },
      paginate(){
          return this.$store.state.module.campaign_paginate_url;
      }
    },
    methods: {
        loadMoreData() {
            if (this.$store.state.module.campaign_paginate_page != 1) {
                this.loading = true;
            }
            let url = this.baseUrl + '/home/campaign-lists?page=' + this.$store.state.module.campaign_paginate_page;
            this.$Progress.start();
            axios.get(url).then((response) => {
                this.is_shimmer = true
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.loading = false;
                    this.$store.commit('getAllCampaign', response.data.campaigns);
                    this.$Progress.finish();
                }
            }).catch((error) => {
                this.is_shimmer = true
                this.loading = false;
                this.$Progress.fail();
                if (error.response && error.response.status == 422) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
            });
        }
    }
}
</script>
