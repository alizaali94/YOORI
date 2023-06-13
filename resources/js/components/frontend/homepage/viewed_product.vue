<template>
    <section class="product-section pt-2" v-if="lengthCounter(products) > 0">
        <div class="container">
            <div class="title justify-content-between">
                <h1>{{lang.recently_viewed}}</h1>
            </div>
            <VueSlickCarousel class="recent-product-slider" v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
                <div class="recent-product" v-for="(product,index) in products" :key="index">
                    <div class="product-thumb">
                        <a :href="getUrl('product/'+product.slug)" @click.prevent="routerNavigator('product.details',product.slug)"><img :src="product.image_72x72" :alt="product.product_name" class="img-fluid"></a>
                    </div>
                    <div class="overlay">
                        <h2><a class="text-ellipse" :href="getUrl('product/'+product.slug)" @click.prevent="routerNavigator('product.details',product.slug)">{{ product.product_name }}</a></h2>
                    </div>
                </div>
            </VueSlickCarousel>
        </div><!-- /.container -->
    </section><!-- /.product-section -->
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'


export default {
    name: "viewed_product",
    components : {VueSlickCarousel},
    data:()=>({
        slick_settings : {
            "dots": false,
            "edgeFriction": 0.35,
            "infinite": true,
            "arrows": false,
            "autoplay": false,
            "slidesToShow": 8,
            "slidesToScroll": 4,
            "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 4,
                        "slidesToScroll": 4,
                        "initialSlide": 1
                    }
                },
                {
                    "breakpoint": 768,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 1
                    }
                },
                {

                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2
                    }
                },
                {

                    "breakpoint": 320,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2
                    }
                }
            ]
        }
    }),
    computed : {
        products() {
            return this.$store.getters.getViewedProducts;
        }
    }
}
</script>
