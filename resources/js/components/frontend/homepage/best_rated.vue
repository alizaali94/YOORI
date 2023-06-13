<template>
  <section class="products-section bg-white best_rated" v-if="lengthCounter(products)>0">
    <div class="container" v-if="products[0] != 'id'">
      <div v-if="lengthCounter(products)>0" class="title justify-content-between">
        <h1>{{ lang.best_related_products }}</h1>
        <a href="javascript:void(0)" @click="navigator">{{ lang.more_products }} <span
            class="icon mdi mdi-name mdi-arrow-right"></span></a>
      </div>
      <productCarousel :products="products" :number="12"
                       :grid_class="'grid-6'"></productCarousel>
    </div><!-- /.container -->
  </section>
  <section class="products-section bg-white best_rated" v-else-if="show_shimmer">
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
  name: "best_rated",
  components: {
    productCarousel,shimmer
  },
  data() {
    return {
      show_shimmer: true,
    };
  },
  props: ['best_rated'],

  mounted()
  {
    this.checkShopComponent("best_rated_products");
  },
  watch: {
    shopResponse() {
      this.checkShopComponent("best_rated_products");
    }
  },
  computed: {
    products() {
      if (this.best_rated && this.best_rated.length == 0) {
        return ['id'];
      } else if (this.best_rated && this.best_rated.length > 0) {
        return this.best_rated;
      } else {
        return [];
      }
    },
  },
  methods: {
    navigator() {
      window.scroll(0, 500);
      this.$store.commit('setActiveTab', 'product');
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
