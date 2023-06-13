<template>
    <div>
        <ul class="products" :class="class_name ? class_name : 'grid-4'" v-if="is_shimmer">
            <li v-for="(shop,i) in sellers">
                <div class="sg-product">
                    <div class="product-thumb">
                        <a :href="getUrl('shop/'+shop.slug)" @click.prevent="routerNavigator('shop',shop.slug)"><img
                            v-lazy="shop.image_297x203" alt="Image" class="img-fluid"></a>
                    </div>

                    <div class="favorite-icon" v-if="authUser">
                        <a href="javascript:void(0)" :class="{ 'disable_btn' : btn_disabled }" @click="removeFollowed(shop.id)" v-if="checkFollowed(shop)"><span
                            class="mdi mdi-name mdi-heart"></span></a>
                        <a href="javascript:void(0)" :class="{ 'disable_btn' : btn_disabled }" @click="follow(shop.id)" v-else><span
                            class="mdi mdi-name mdi-heart-outline"></span></a>
                    </div>

                    <div class="seller-product-grid-view">
                        <div class="product-info">
                            <div class="seller-logo">
                              <a :href="getUrl('shop/'+shop.slug)" @click.prevent="routerNavigator('shop',shop.slug)"><img
                                  v-lazy="shop.image_82x82" alt="Image" class="img-fluid"></a>
                            </div>
                            <h3><a :href="getUrl('shop/'+shop.slug)"
                                   @click.prevent="routerNavigator('shop',shop.slug)">{{ shop.shop_name }}</a></h3>
                            <div class="sg-rating">
                                <span class="pe-2 fw-bold">{{ shop.rating_count }}</span>
                                <star-rating class="pb-1 seller_min_margin" v-model:rating_count="shop.rating_count"
                                             :read-only="true" :star-size="12"
                                             :round-start-rating="false"></star-rating>
                                <span class="rating-count">({{ shop.reviews_count }} {{ lang.ratings }})</span>
                            </div>
                        </div>
                        <div class="product-info-bottom">
                            <ul class="global-list">
                                <li>{{ lang.products }}: {{ shop.total_products }}</li>
                                <li>{{ lang.joined }}: {{ shop.join_date }}</li>
                            </ul>
                            <a :href="getUrl('shop/'+shop.slug)" @click.prevent="routerNavigator('shop',shop.slug)"
                               class="store-btn">{{ lang.visit_store }} <span
                                                                              class="icon mdi mdi-name mdi-arrow-right"></span>
                            </a>
                        </div>
                    </div>
                </div><!-- /.sg-product -->
            </li>
        </ul>
        <ul class="products" :class="class_name ? class_name : 'grid-4'" v-else-if="shimmer">
            <li v-for="(seller,index) in number" :key="index">
                <div class="sg-product">
                    <div class="product-thumb">
                        <a href="javascript:void(0)"><shimmer></shimmer></a>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

import StarRating from 'vue-star-rating';
import shimmer from "./shimmer";

export default {
    name: "seller",
    props: ['sellers', 'class_name','number','is_shimmer'],
    components: {
        StarRating,shimmer
    },
    data() {
        return {}
    },
    computed: {

    },
    methods: {
    }
}
</script>
