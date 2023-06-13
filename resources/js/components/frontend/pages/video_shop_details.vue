<template>
    <div>
        <section class="products-section category-products bg-white video-section" v-if="is_shimmer">
            <div class="container" v-if="video" >
                <div class="row" v-if="video.style == 'style_4'">
                    <div class="col-md-4 mb-5">
                        <div class="small-title">
                            <h2>{{ video.title }}</h2>
                        </div>
                        <video_section :video="video"></video_section>
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-8 mt-30" v-if="video.products.length > 0">
                        <div class="small-title justify-content-between">
                            <h2>{{ lang.recommended_products }}</h2>
                        </div>
                        <product :products="video.products"
                                 :grid_class="'grid-4'"></product>

                        <div class="recent--product mt-4" v-if="video.related_products.length > 0">
                            <div class="small-title justify-content-between">
                                <h2>{{ lang.related_products }}</h2>
                            </div>
                            <product :products="video.related_products"
                                     :grid_class="'grid-4'"></product>
                        </div>
                    </div>
                </div>
                <div class="row" v-if="video.style == 'style_3'">
                    <div class="col-lg-6 col-md-6 mb-5">
                        <div class="video--thumb">
                            <div class="small-title">
                                <h2>{{ video.title }}</h2>
                            </div>
                            <video_section :video="video"></video_section>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 mt-30" v-if="video.products.length > 0">
                        <div class="small-title justify-content-between">
                            <h2>{{ lang.recommended_products }}</h2>
                        </div>
                        <product :products="video.products"
                                 :grid_class="'grid-3'"></product>
                    </div>
                    <div class="container mt-4" v-if="video.related_products.length > 0">
                        <div class="small-title justify-content-between">
                            <h2>{{ lang.related_products }}</h2>
                        </div>
                        <product :products="video.related_products"
                                 :grid_class="'grid-6'"></product>
                    </div>
                </div>
                <div class="row" v-if="video.style == 'style_2' || video.style == 'style_1'">
                    <div :class="{ 'col-lg-6' : video.style == 'style_1' , 'col-lg-4' : video.style == 'style_2'}">
                        <div class="video--thumb">
                            <div class="small-title">
                                <h2>{{ video.title }}</h2>
                            </div>
                            <video_section :video="video"></video_section>
                        </div>
                    </div>

                    <div class="mt-30 col-lg-6 col-md-6" v-if="video.products.length > 0">
                        <div class="small-title justify-content-between">
                            <h2>{{ lang.recommended_products }}</h2>
                        </div>
                        <product :products="video.products"
                                 :grid_class="'grid-1 video-3'" :type="'flash'"></product>
                    </div>
                    <section class="products-section bg-white" v-if="video.related_products.length > 0">
                        <div class="small-title justify-content-between">
                            <h2>{{ lang.related_products }}</h2>
                        </div>
                        <product :products="video.related_products"
                                 :grid_class="'grid-6'"></product>
                    </section>
                </div>
            </div>
        </section>
        <section class="products-section category-products bg-white video-section" v-else-if="!is_shimmer">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <shimmer :height="1150"></shimmer>
                    </div><!-- /.col-lg-6 -->
                    <div class="col-md-8 mt-30">
                        <ul class="products" :class="'grid-4'">
                            <li v-for="(product,index) in 12" :key="index">
                                <div class="sg-product">
                                    <a href="javaScript:void(0)">
                                        <shimmer :height="364"></shimmer>
                                    </a>
                                </div><!-- /.sg-product -->
                            </li>
                        </ul>
                    </div>
                </div><!-- /.col-lg-6 -->
            </div>
        </section>
        <section class="popular-video-section" v-if="video && video.popular_videos.length > 0">
            <div class="container">
                <div class="small-title">
                    <h2>{{ lang.popular_videos }}</h2>
                </div>
                <div class="video-content">
                    <div class="row">
                        <div class="col-lg-2 col-md-3 col-sm-6 mb-3" v-for="(video,index) in video.popular_videos"
                             :key="'popular_video'+index">
                              <a href="javaScript:void(0)" @click="popularVideos(video.slug)">
                            <div class="video--thumb">
                                <div class="video-play--thumb">

                                       <img
                                        v-lazy="video.thumbnail" :alt="video.title">
                                </div>
                                <div class="video--details">
                                    <span class="base">Live</span>
                                    <p class="video-title">{{ video.title }}</p>
                                    <router-link
                                        :to="{ name : 'video.shopping.details',params : { slug : video.slug } }"
                                        class="playIcon"><span class="mdi mdi-name mdi-play"></span></router-link>
                                </div>
                            </div>
                              </a>

                        </div>
                    </div>
                </div>
            </div><!-- /.container -->
        </section>
    </div>
</template>

<script>

import product from "./product";
import video_section from "../partials/video_section";
import shimmer from "../partials/shimmer";


export default {
    name: "video_shop_details",
    components: {
        product, video_section,shimmer
    },
    data(){
        return {
            is_shimmer: false,
        }
    },
    mounted() {
        if (!this.video) {
            this.videoDetails();
        }
        if(this.video){
            this.is_shimmer = true
        }
    },
    computed: {
        video() {
            let videos = this.$store.getters.getVideoDetails;
            let index = videos.findIndex(video => video.slug == this.$route.params.slug);

            if (index > -1) {
                return videos[index];
            }
            return null;
        }
    },
    methods: {
        videoDetails() {
            this.$Progress.start();
            let url = this.getUrl('get/video-shops-details/' + this.$route.params.slug);
            axios.get(url).then(response => {
                this.is_shimmer = true
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.$Progress.finish();
                    this.$store.commit('setVideoDetails', response.data.video);
                }
            }).catch(error => {
                this.$Progress.fail();
                this.is_shimmer = true
            })
        },
      popularVideos(slug) {
        this.$Progress.start();
        this.is_shimmer = false
        this.$router.push({ name : 'video.shopping.details',params : { slug : slug } })
        this.videoDetails();
      }
    }
}
</script>

<style scoped>

</style>
