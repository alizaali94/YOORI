<template>
    <div class="sg-page-content">
        <section class="grid-view-tab daily-deals">
            <div class="container" v-if="lengthCounter(productList)>0">
                <div class="sg-category-content sg-filter" :class="activeClass">
                    <div class="d-flex justify-content-between mb-4">
                        <div class="left-content align-self-center">
                            <div class="title d-flex">
                                <h1>{{ lang.daily_deals }}</h1>
                            </div>
                        </div>
                        <div class="right-content">
                            <div class="d-flex align-items-center">
                                <div class="sg-countdown">
                                    <flip-countdown class="countdown" :deadline="countDownTimer()"></flip-countdown>
                                </div>

                                <div class="form-group">
                                    <select v-model="form.paginate" @change="filterProducts" class="form-control">
                                        <option value="12">{{ lang.show_12 }}</option>
                                        <option value="15">{{ lang.show_15 }}</option>
                                        <option value="20">{{ lang.show_20 }}</option>
                                        <option value="30">{{ lang.show_30 }}</option>
                                    </select>
                                </div>
                                <ul class="filter-tabs global-list">
                                    <li class="grid-view-tab" @click="activeClass = 'grid-view-tab'"
                                        :class="{'active' : activeClass == 'grid-view-tab' || activeClass == ''}">
                                        <span class="mdi mdi-name mdi-grid"></span></li>
                                    <li class="list-view-tab" @click="activeClass = 'list-view-tab'"
                                        :class="{'active' : activeClass == 'list-view-tab' }"><span
                                        class="mdi mdi-name mdi-format-list-bulleted"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <product :products="productList" :grid_class="'grid-6'"></product>
                    <div class="text-center show-more" v-if="products.next_page_url && !loading">
                        <a href="javaScript:void(0)" @click="loadMoreData()" class="btn btn-primary">{{ lang.show_more }}</a>
                    </div>
                    <div class="col-md-12 text-center show-more" v-show="loading">
                        <loading_button :class_name="'btn btn-primary'"></loading_button>
                    </div>
                </div><!-- /.sg-category-content -->
            </div><!-- /.container -->
            <div class="container" v-else-if="shimmer">
                <ul class="products grid-6">
                    <li v-for="(product,index) in 12" :key="index">
                        <div class="sg-product">
                            <a href="javaScript:void(0)">
                                <shimmer :height="290"></shimmer>
                            </a>
                        </div><!-- /.sg-product -->
                    </li>
                </ul>
            </div>
        </section><!-- /.category-section -->

    </div>
</template>

<script>
import product from "./product";
import FlipCountdown from 'vue2-flip-countdown';
import shimmer from "../partials/shimmer";


export default {
    name: "daily-deals",
    metaInfo() {
        return {
            title: "Daily-Deals"
        }
    },
    components: {
        product, FlipCountdown, shimmer
    },
    data() {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            page: 1,
            form: {
                paginate: 12
            },
            activeClass: "",
            loading: false,
        }
    },
    mounted() {
        if (this.lengthCounter(this.products) == 0) {
            this.$store.dispatch('dailyDeals', this.form);
        }
    },
    computed: {
        products() {
            return this.$store.getters.getDailyDeals;
        },
        shimmer() {
            return this.$store.state.module.shimmer
        },
        productList() {
            if (this.products && this.products.data && this.products.data.length == 0) {
                return ['id'];
            } else if (this.products && this.products.data && this.products.data.length > 0) {
                return this.products.data;
            } else {
                return [];
            }
        },
    },

    created() {
    },
    methods: {
        countDownTimer() {
            const now = new Date().getTime();
            // let startOfDay = new Date(now - (now % 86400000)).toUTCString();
            let end_time = new Date(now - (now % 86400000) + 86400000); //2022-12-25 09:33:00
            let final_end_time = '';
            final_end_time += end_time.getFullYear() + '-';
            final_end_time += end_time.getMonth() + 1 + '-';
            final_end_time += end_time.getDate() - 1 + ' ';
            final_end_time += '23:';
            final_end_time += '59:';
            final_end_time += '59';
            return final_end_time;
        },
        filterProducts() {
            this.$store.dispatch('dailyDeals', this.form);
        },
        loadMoreData() {
            if (this.page == 1) {
                this.loading = true
            }
            this.page++;
            let url = this.url + '/home/daily-deals/?page=' + this.page;
            this.$Progress.start();
            axios.get(url, {params: this.form}).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.loading = false
                    let products = response.data.products.data;

                    if (products.length > 0) {
                        for (let i = 0; i < products.length; i++) {
                            this.products.data.push(products[i]);
                        }
                    }

                }
                this.products.next_page_url = response.data.products.next_page_url;
                this.$Progress.finish();

            });
        }
    }
}
</script>
