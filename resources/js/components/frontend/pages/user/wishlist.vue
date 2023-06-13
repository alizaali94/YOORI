<template>
    <div class="sg-page-content">
        <section class="sg-global-content">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="sg-table">
                            <div class="title justify-content-between">
                                <h1 v-if="lengthCounter(wishlists.data)>0">{{ lang.my_wishlist }}</h1>
                                <h1 v-else-if="is_shimmer">{{ lang.no_wishlist_found }}</h1>
                                <h1 v-else>{{ lang.loading }}</h1>
                            </div>
                            <form class="woocommerce-cart-form" action="#">
                                <table class="table" v-if="is_shimmer">
                                    <thead>
                                    <tr>
                                        <th scope="col">{{ lang.product }}</th>
                                        <th scope="col">{{ lang.date }}</th>
                                        <th scope="col">{{ lang.status }}</th>
                                        <th scope="col">{{ lang.total }}</th>
                                        <th scope="col">{{ lang.action }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(product,i) in wishlists.data" :key="i"
                                        v-if="product.id && product.product">
                                        <th scope="row">
                                            <div class="product">
                                                <router-link
                                                    :to="{name: 'product.details', params: {slug:product.slug}}">
                                                            <span class="product-thumb">
                                                                <img v-lazy="product.image_72x72"
                                                                     :alt="product.product_name"
                                                                     class="img-fluid">
                                                            </span>
                                                    <div class="text">
                                                        <p class="text-ellipse">{{ product.product_name }}</p>
                                                        <span></span>
                                                    </div>
                                                </router-link>
                                            </div><!-- /.product -->
                                        </th>
                                        <td>{{ product.date }}</td>
                                        <td>
                                            <div class="complete" v-if="product.current_stock > 0">
                                                <span>{{ lang.in_stock }}</span>
                                            </div>
                                            <div class="cancel" v-else>
                                                <span>{{ lang.out_of_stock }}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span class="price"><del v-if="product.special_discount_check > 0">{{
                                                    priceFormat(product.price)
                                                }}</del>
                                            <span v-if="product.special_discount_check > 0">{{
                                                    priceFormat(product.discount_percentage)
                                                }}</span>
                                            <span v-else>{{ priceFormat(product.price) }}</span>
                                    </span>
                                        </td>
                                        <td>
                                            <div class="add-to-cart">
                                                <a v-if="product.status == 'published'" href="javascript:void(0)"
                                                   @click="cartBtn(product.product)"
                                                   class="btn">{{ lang.add_to_cart }}</a>
                                                <a href="javascript:void(0)" @click="removeProduct(product.product,i)"
                                                   class="btn">{{ lang.remove }}</a>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table class="table mb-3" v-for="(orders,index) in 8 " v-else-if="shimmer">
                                    <shimmer :height="70" :key="index"></shimmer>
                                </table>
                            </form>
                            <div class="show-more-button" v-if="next_page_url">
                                <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                                <a href="javascript:void(0)" v-else @click="loadMoreData()"
                                   class="btn btn-primary">{{ lang.show_more }}</a>
                            </div>
                        </div>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.profile-section -->
    </div>
</template>

<script>

import user_sidebar from "../../partials/user_sidebar";
import detailsView from "../../partials/details-view";
import shimmer from "../../partials/shimmer";


export default {
    name: "wishlist",
    data() {
        return {
            current: 'wishlist',
            url: "",
            show_load_more: true,
            page: 2,
            next_page_url: false,
            active_modal: '',
            is_shimmer: false,
            loading: false,
        }
    },
    components: {
        user_sidebar, detailsView, shimmer
    },

    computed: {
        wishlists() {
            return this.$store.getters.getAllWishlists;
        },
        shimmer() {
            return this.$store.state.module.shimmer
        },
    },
    mounted() {

        if (this.lengthCounter(this.wishlists.data) == 0) {
            this.allWishlists();
        }
        if (this.lengthCounter(this.wishlists.data) > 0) {
            this.is_shimmer = true
        }
    },
    methods: {
        loadMoreData() {
            let data = {
                page: this.page,
            };
            this.loading = true;
            this.url = this.getUrl('user/wishlists/?page=' + data.page);
            this.$Progress.start();
            axios.get(this.url).then((response) => {
                this.loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    let products = response.data.wishlist.data;

                    if (products.length > 0) {
                        for (let i = 0; i < products.length; i++) {
                            this.wishlists.data.push(products[i]);
                        }
                    }
                    this.page++;
                    this.next_page_url = response.data.wishlist.next_page_url;
                    this.$Progress.finish();
                }
            }).catch((error) => {
                this.is_shimmer = true
                this.$Progress.fail();
                if (error.response && error.response.status == 422) {
                    toastr.error('Something Went Wrong', this.lang.Error + ' !!');
                }
            });
        },
        removeProduct(product, i) {
            let url = this.getUrl('user/remove-wishlist-product/' + product.id);
            axios.get(url).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    toastr.success(response.data.success, this.lang.Success + ' !!');
                    this.$store.dispatch('wishlists', response.data.totalWishlist);
                    this.$store.commit('getRemoveWishlist', response.data.wishlist);
                    this.wishlists.data[i].id = '';
                    this.wishlists.data.splice(i, 1);

                }
            });
        },
        allWishlists() {
            this.$Progress.start();
            this.url = this.getUrl('user/wishlists')
            axios.get(this.url).then((response) => {
                this.is_shimmer = true
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.next_page_url = response.data.wishlist.next_page_url;
                    this.$store.commit('getWishlists', response.data.wishlist);
                    this.$store.commit('setShimmer', 0);
                    this.$Progress.finish();

                }
            }).catch((error) => {
                this.is_shimmer = true
                this.$Progress.fail();
                if (error.response && error.response.status == 422) {
                    toastr.error('Somthing Went Wrong', this.lang.Error + ' !!');
                }
            });
        },
    }
}
</script>
