<template>
  <section class="products-section new_arrival" v-if="lengthCounter(products)>0">
    <div class="container" v-if="products[0] != 'id'">
      <div class="title justify-content-between">
        <h1>{{ lang.new_arrival }}</h1>
        <a href="javascript:void(0)" @click="navigator">{{ lang.more_products }} <span
            class="icon mdi mdi-name mdi-arrow-right"></span></a>
      </div>
      <productCarouselList :products="products" :grid_class="'grid-2'" :type="'flash'"></productCarouselList>
    </div><!-- /.container -->
  </section><!-- /.products-section -->
  <section class="products-section bg-white new_arrival" v-else-if="show_shimmer">
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
import productCarouselList from "../pages/product-carousel-list";
import shimmer from "../partials/shimmer";

export default {
  name: "new_arrival",
  components: {
    productCarouselList,shimmer
  },
  data(){
    return {
      show_shimmer: true,
    }
  },
  props: ['new_arrival'],

  mounted() {
    this.checkShopComponent("new_arrival");
  },
  watch: {
    shopResponse() {
      this.checkShopComponent("new_arrival");
    },
  },
  computed: {
    products() {
      if (this.new_arrival && this.new_arrival.length == 0) {
        return ['id'];
      } else if (this.new_arrival && this.new_arrival.length > 0) {
        return this.new_arrival;
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
