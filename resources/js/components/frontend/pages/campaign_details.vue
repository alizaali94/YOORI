<template>
    <div class="sg-page-content">
        <section v-if="lengthCounter(productList)>0" class="sg-breadcumb-section"
                 :style="'background-image: url('+campaign.image_1920x412+')'">
            <div class="container">
                <div class="breadcumb-content"></div>
            </div><!-- /.container -->
        </section>
        <section class="shimmer-section" v-else-if="shimmer">
            <shimmer class="shimmer-rds" :height="412"></shimmer>
        </section>
        <section class="brand-section">
            <div class="container">
                <div class="title title-center" v-if="lengthCounter(productList)>0">
                    <h1>campign title</h1>
                    <p>{{ campaign.short_description }}</p>
                    <div class="sg-countdown" v-if="campaign && campaign.campaign_end_date">
                        <flip-countdown class="countdown" :deadline="campaign.end_date"></flip-countdown>
                    </div>
                </div>
                <div class="title title-center" v-else-if="shimmer">
                    <shimmer :height="100"></shimmer>
                </div>
                <div class="sg-menu-2" v-if="lengthCounter(productList)>0 && productList[0] != 'id'">
                    <ul class="global-list" role="tablist">
                        <li role="presentation" class="nav-item" @click="campaignProducts"
                            :class="{'show active' : activeNav == 'products'}"><a class="nav-link"
                                                                                  href="javaScript:void(0)"
                                                                                  aria-controls="products" role="tab"
                                                                                  data-bs-toggle="tab">{{
                                lang.products
                            }}</a>
                        </li>
                        <li class="nav-item" @click="brandActive" :class="{'show active' : activeNav == 'brands'}"
                            role="presentation"><a class="nav-link" href="javaScript:void(0)" aria-controls="brands"
                                                   role="tab" data-bs-toggle="tab"
                                                   aria-expanded="true">{{ lang.brands }}</a></li>
                        <li class="nav-item" @click="shopActive"
                            :class="{'show active' : activeNav == 'shops'}" role="presentation"><a class="nav-link"
                                                                                                   href="javaScript:void(0)"
                                                                                                   aria-controls="shops"
                                                                                                   role="tab"
                                                                                                   data-bs-toggle="tab"
                                                                                                   aria-expanded="true">{{
                                lang.shops
                            }}</a>
                        </li>
                    </ul>
                </div>

                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane fade" :class="{'show active' : activeNav == 'products'}"
                         id="products">
                        <section class="products-section bg-white" v-if="lengthCounter(productList)>0">
                            <div class="container">
                                <product :products="products.data" :grid_class="'grid-6'"></product>
                            </div>
                        </section>
                        <section class="products-section bg-white" v-else-if="shimmer">
                            <ul class="products" :class="'grid-6'">
                                <li v-for="(product,index) in 12" :key="index">
                                    <div class="sg-product">
                                        <a href="javaScript:void(0)">
                                            <shimmer :height="290"></shimmer>
                                        </a>
                                    </div><!-- /.sg-product -->
                                </li>
                            </ul>
                        </section>
                        <div class="col-md-12 text-center show-more" v-if="product_next_page_url && !loading">
                            <a href="javaScript:void(0)" @click="loadMoreData(product_next_page_url)"
                               class="btn btn-primary">{{ lang.show_more }}</a>
                        </div>
                    </div><!-- /.tab-pane -->
                    <div role="tabpanel" class="tab-pane fade" :class="{'show active' : activeNav == 'brands'}"
                         id="brands">
                        <div class="row">
                            <div class="col-6 col-sm-4 col-md-3 col-lg-2" v-for="(brand,i) in brands.data"
                                 :key="'brands'+i">
                                <div class="category-content">
                                    <div class="brand margin_right_18">
                                        <div class="brand_image">
                                            <a :href="getUrl('brand/'+brand.slug)"
                                               @click.prevent="routerNavigator('product.by.brand',brand.slug)">
                                                <img v-lazy="brand.image_130x93"
                                                     :alt="brand.title" class="img-fluid">
                                            </a>

                                        </div>
                                        <span class="brand_title">{{ brand.title }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 mt-2 text-center show-more" v-if="brand_next_page_url && !loading">
                                <a href="javaScript:void(0)" @click="loadMoreData(brand_next_page_url,'brand')"
                                   class="btn btn-primary">{{ lang.show_more }}</a>
                            </div>
                        </div>
                    </div>
                    <div role="tabpanel" class="tab-pane fade" :class="{'show active' : activeNav == 'shops'}"
                         id="shops">
                        <section class="sg-seller-product">
                                <seller :sellers="shops.data"></seller>
                        </section>
                    </div><!-- /.tab-pane -->
                </div><!-- /.tab-content -->

                <div class="col-md-12 text-center show-more" v-show="loading">
                    <loading_button :class_name="'btn btn-primary'"></loading_button>
                </div>
            </div><!-- /.container -->
        </section><!-- /.brand-section -->
        <section class="brand-section">
            <div class="container">
            </div>
        </section>
    </div>
</template>

<script>
import product from "./product";
import FlipCountdown from "vue2-flip-countdown";
import StarRating from 'vue-star-rating';
import shimmer from "../partials/shimmer";
import seller from "../partials/seller";


export default {
    name: "campaign_details",
    components: {
        product, FlipCountdown, StarRating, shimmer,seller
    },
    data() {
        return {
            activeClass: "",
            skip: 1,
            show_load_more: true,
            active: 0,
            loading: false,
            page: 1,
            activeNav: "products",
            product_next_page_url: false,
            brand_next_page_url: false,
            shop_next_page_url: false,
            url: "",
            fetched_campaign: '',
            checkListing: true
        }
    },
    mounted() {
        this.campaignProducts();
    },
    computed: {
        baseUrl() {
            return this.$store.getters.getBaseUrl;
        },
        products() {
            let products = this.$store.getters.getCampaignProducts;
            for (let i = 0; i < products.length; i++) {
                if (products[i].slug == this.$route.params.slug) {
                    return products[i].products;
                }
            }
            return [];
        },
        brands() {
            let brands = this.$store.getters.getCampaignBrands;
            for (let i = 0; i < brands.length; i++) {
                if (brands[i].slug == this.$route.params.slug) {
                    return brands[i].brands;
                }
            }
            return [];
        },
        shops() {
            let shops = this.$store.getters.getCampaignShops;
            for (let i = 0; i < shops.length; i++) {
                if (shops[i].slug == this.$route.params.slug) {
                    return shops[i].shops;
                }
            }
            return [];
        },
        campaign() {
            return this.fetched_campaign;
        },
        userShop() {
            return this.$store.getters.getShopFollwer
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
    methods: {
        campaignProducts() {
            let requestData = {
                slug: this.$route.params.slug,
            };
            this.activeNav = 'products'

            let url = this.baseUrl + '/home/campaign-products';

            if (this.lengthCounter(this.products) > 0) {
                this.product_next_page_url = this.products.next_page_url;
                return this.products;
            }

            axios.get(url, {params: requestData}).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
                this.fetched_campaign = response.data.campaign;

                this.product_next_page_url = response.data.products.next_page_url;
                let data = {
                    slug: this.$route.params.slug,
                    products: response.data.products
                };
                this.$store.commit('getCampaignProducts', data);
            })
        },
        loadMoreData(url,type) {
            let requestData = {
                slug: this.$route.params.slug,
                type: type,
            };
            this.loading = true
            axios.get(url, {params: requestData}).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.loading = false;
                    if (response.data.products) {
                        this.product_next_page_url = response.data.products.next_page_url;
                        let data = {
                            slug: this.$route.params.slug,
                            products: response.data.products
                        };
                        this.$store.commit('getCampaignProducts', data);
                    } else if (response.data.brands) {
                        let data = {
                            slug: this.$route.params.slug,
                            brands: response.data.brands
                        };
                        this.brand_next_page_url = response.data.brands.next_page_url;
                        this.$store.commit('getCampaignBrands', data);
                    } else if (response.data.shops) {
                        let data = {
                            slug: this.$route.params.slug,
                            shops: response.data.shops
                        };
                        this.shop_next_page_url = response.data.shops.next_page_url;
                        this.$store.commit('getCampaignShops', data);
                    }
                }
            });
        },
        brandActive() {
            this.activeNav = 'brands'
            if (this.lengthCounter(this.brands) != 0) {
                this.brand_next_page_url = this.brands.next_page_url;
                return this.brands;
            }
            let url = this.baseUrl + '/home/campaign-brands';
            this.loading = true
            let requestData = {
                slug: this.$route.params.slug,
                type: 'brand',
            };
            axios.get(url, {params: requestData}).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
                this.loading = false;
                let data = {
                    slug: this.$route.params.slug,
                    brands: response.data.brands
                };
                this.brand_next_page_url = response.data.brands.next_page_url;
                this.next_page_url = this.brand_next_page_url;
                this.$store.commit('getCampaignBrands', data);
            })
        },
        shopActive() {
            this.activeNav = 'shops'
            if (this.lengthCounter(this.shops) != 0) {
                this.shop_next_page_url = this.shops.next_page_url;
                return this.shops;
            }
            let url = this.baseUrl + '/home/campaign-brands';
            this.loading = true
            let requestData = {
                slug: this.$route.params.slug,
                type: 'shop',
            };
            axios.get(url, {params: requestData}).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
                this.loading = false;
                let data = {
                    slug: this.$route.params.slug,
                    shops: response.data.shops
                };
                this.shop_next_page_url = response.data.shops.next_page_url;
                this.$store.commit('getCampaignShops', data);
            })
        },
        follow(id) {
            let requestData = {
                id: id,
            };
            let url = this.baseUrl + '/user/follow-shop';
            axios.get(url, {params: requestData}).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
                for (let i = 0; i < response.data.follower.length; i++) {
                    if (response.data.follower[i].pivot.seller_profile_id == id) {
                        this.$store.commit('getShopFollower', response.data.follower[i].pivot);
                    }
                }
                this.shopActive();
            })

        },
        checkFollowed(shop) {

            let length = Object.keys(this.userShop).length;
            for (let i = 0; i < length; i++) {
                if (this.userShop[i] && shop.id == this.userShop[i].seller_id && this.userShop[i].status == 1) {
                    return true;
                }
            }
            return false;

        },
        removeFollowed(id) {

            this.checkListing = false;
            let requestData = {
                id: id,
            };
            let url = this.getUrl('user/remove-followed');
            axios.get(url, {params: requestData}).then((response) => {
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.checkListing = true;
                    let data = {user_id: this.authUser.id, seller_id: id, status: 0};
                    this.$store.commit('getRemoveFollower', data);
                    this.shopActive();
                }
            });

        },
    }
}
</script>
