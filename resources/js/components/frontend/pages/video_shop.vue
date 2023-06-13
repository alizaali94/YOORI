<template>
    <section class="video-section">
        <div class="container">
            <div class="title justify-content-between">
                <h1>{{ lang.video_shopping }}</h1>
            </div>
            <div class="row" v-if="is_shimmer">
                <div class="col-lg-3 col-md-4 col-sm-6 mb-3" v-for="(video,index) in videoShops" :key="index">
                    <div class="video--thumb">
                        <div class="video-play--thumb">
                            <router-link :to="{ name : 'video.shopping.details',params : { slug : video.slug } }"><img
                                :src="video.thumbnail" :alt="video.title" class="img-fluid"></router-link>
                        </div>
                        <div class="video--details">
                            <span class="base" v-if="video.is_live">{{ lang.live }}</span>
                            <p class="video-title">{{ video.title }}</p>
                            <router-link :to="{ name : 'video.shopping.details',params : { slug : video.slug } }"
                                         class="playIcon"><span class="mdi mdi-name mdi-play"></span></router-link>
                        </div>
                    </div>
                </div>
                <div class="show-more mt-4">
                    <a href="javascript:void(0)" v-if="next_page_url && !loading" @click="getVideos"
                       class="btn">{{ lang.show_more }}</a>
                    <loading_button :class_name="'btn btn-primary'" v-if="loading"></loading_button>
                </div>
            </div>
            <div class="row" v-else-if="shimmer">
                <div class="col-lg-3 col-md-4 col-sm-6 mb-3" v-for="(video,index) in 4" :key="index">
                    <div class="video--thumb">
                        <div class="video-play--thumb">
                            <shimmer :height="536"></shimmer>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /.container -->
    </section>
</template>

<script>

import shimmer from "../partials/shimmer";

export default {
    name: "video_shop",
    data() {
        return {
            page: 1,
            loading: false,
            next_page_url: false,
            is_shimmer: false,
        }
    },
    components : {
        shimmer
    },
    computed: {
        videoShops() {
            return this.$store.getters.getVideoShops;
        }
    },
    mounted() {
        if (this.videoShops.length == 0) {
            this.getVideos();
        }
        else {
            this.is_shimmer = true;
        }
    },
    methods: {
        getVideos() {
            if (this.page > 1) {
                this.loading = true;
            } else {
                this.$Progress.start();
            }

            let url = this.getUrl('get/video-shops?page=' + this.page);
            axios.get(url).then(response => {
                this.is_shimmer = true
                if (this.page > 1) {
                    this.loading = false;
                }
                if (response.data.error) {
                    if (this.page == 1) {
                        this.$Progress.fail();
                    }
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    if (this.page == 1) {
                        this.$Progress.finish();
                    }
                    this.$store.commit('setVideoShops', response.data.videos.data);
                    this.next_page_url = response.data.videos.next_page_url;
                    this.page++;
                }
            }).catch(error => {
                this.is_shimmer = true;
                if (this.page > 1) {
                    this.loading = false;
                } else {
                    this.$Progress.fail();
                }
                if (error.response) {
                    toastr.error(error.response.statusText, this.lang.Error + ' !!');
                } else {
                    toastr.error('Something Went Wrong', this.lang.Error + ' !!');
                }
            });
        }
    }
}
</script>

<style scoped>

</style>
