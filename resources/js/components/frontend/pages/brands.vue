<template>
    <section class="brand-section">
        <div class="container">
            <div class="title justify-content-between">
                <h1 v-if="is_shimmer">{{ lengthCounter(brands) > 0 ? lang.brands : lang.no_brands_found }}</h1>
                <h1 v-else>{{ lang.content_loading }}</h1>
            </div>
            <div class="row" v-if="is_shimmer">
                <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="(brand,index) in brands" :key="index">
                    <div class="brand">
                        <div class="brand_image">
                            <a :href="getUrl('brand/'+brand.slug)" @click.prevent="routerNavigator('product.by.brand',brand.slug)">
                                <img v-lazy="brand.image_130x93"
                                     :alt="brand.title" class="img-fluid">
                            </a>
                        </div>
                        <span class="brand_title">{{ brand.title }}</span>
                    </div>
                </div>
            </div>
            <div class="row" v-else-if="shimmer">
                <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="(attr,i) in 12">
                    <shimmer class="mb-3" :height="155"></shimmer>

                </div>
            </div>
            <div class="col-md-12 text-center show-more" v-if="paginate && !loading">
                <a href="javascript:void(0)" @click="loadBrands()" class="btn btn-primary">{{ lang.show_more }}</a>
            </div>
            <div class="col-md-12 text-center show-more" v-show="loading">
                <loading_button :class_name="'btn btn-primary'"></loading_button>
            </div>
        </div><!-- /.container -->
    </section>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
    name: "brands",
    data() {
        return {
            loading: false,
            next_page_url: false,
            is_shimmer: false,
        }
    },
    components: {
        shimmer
    },

    mounted() {
        if (this.lengthCounter(this.brands) == 0) {
            this.loadBrands();
        }
        if (this.lengthCounter(this.brands) > 0) {
            this.is_shimmer = true
        }
    },
    computed: {
        brands() {
            return this.$store.getters.getAllBrands
        },
        shimmer() {
            return this.$store.state.module.shimmer
        },
      paginate(){
        return this.$store.state.module.brand_paginate_url;
      }

    },
    methods: {
        loadBrands() {
            let url = this.url + '/home/brands?page=' + this.$store.state.module.brand_paginate_page;
            if (this.$store.state.module.brand_paginate_page != 1) {
                this.loading = true;
            }
            this.$Progress.start();
            axios.get(url).then((response) => {
                this.is_shimmer = true
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    if (this.$store.state.module.brand_paginate_page != 1) {
                        this.loading = false
                    }
                    this.$store.commit('getAllBrands', response.data.brands);
                    this.$Progress.finish();
                }
            }).catch((error) => {
                this.loading = false;
                this.is_shimmer = true
                this.$Progress.fail();

                if (error.response && error.response.status == 422) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
            })
        },
    }
}
</script>
