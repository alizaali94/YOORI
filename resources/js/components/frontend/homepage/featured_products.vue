<template>
  <section class="products-section bg-white featured" v-if="lengthCounter(products)>0">
    <div class="container" v-if="products[0] != 'id'">
      <div class="title justify-content-between">
        <h1>{{ lang.featured_products }}</h1>
        <a href="javascript:void(0)" @click="navigator">{{ lang.more_products }}<span
            class="icon mdi mdi-name mdi-arrow-right"></span></a>
      </div>
      <productCarousel :products="products" :number="12" :grid_class="'grid-6'"></productCarousel>
    </div><!-- /.container -->
  </section><!-- /.section -->
  <section class="products-section bg-white featured" v-else-if="show_shimmer">
    <div class="container">
      <ul class="products grid-6">
        <li v-for="(product, index) in 6" :key="index">
          <div class="sg-product">
            <a href="javascript:void(0)">
              <shimmer :height="364"></shimmer>
            </a> </div
          ><!-- /.sg-product -->
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import productCarousel from "../pages/product-carousel";
import shimmer from "../partials/shimmer";

export default {
  name: "featured_products",
  components: {
    productCarousel,shimmer
  },
  props: ['featured_products'],
  data() {
    return {
      show_shimmer: true,
    };
  },
  mounted() {
    this.checkShopComponent("featured_products");
  },
  watch: {
    shop() {
      this.checkShopComponent("featured_products");
    }
  },
  computed: {
    products() {
      if (this.featured_products && this.featured_products.length == 0) {
        return ['id'];
      } else if (this.featured_products && this.featured_products.length > 0) {
        return this.featured_products;
      } else {
        return [];
      }
    },
  },
  methods: {
    navigator() {
      if (this.$route.name == 'shop') {
        window.scroll(0, 500);
        this.$store.commit('setActiveTab', 'product');
      } else {
        this.$router.push({name: 'product.by.selling'});
      }
    },
    checkShopComponent(component_name) {
      let component = this.shopResponse ? this.shopResponse.find((data) => data == component_name) : '';

      if (component) {
        return (this.show_shimmer = false);
      }
    },
  }
}
</script>
