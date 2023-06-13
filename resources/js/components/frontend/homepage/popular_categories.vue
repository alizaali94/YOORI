<template>
  <section class="categories-section">
    <div class="container" v-if="lengthCounter(countCategories) >0">
      <div class="title justify-content-between">
        <h1>{{ lang.popular_categories }}</h1>
        <a :href="getUrl('categories')"
           @click.prevent="routerNavigator('categories',null)">{{ lang.browse_all_categories }} <span
            class="icon mdi mdi-name mdi-arrow-right"></span></a>
      </div>
      <div class="category-content">
        <VueSlickCarousel v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
          <div class="global-list category-slider"
               v-for="(category,index) in popular_categories" :key="index">
            <a :href="getUrl('category/'+category.slug)"
               @click.prevent="routerNavigator('product.by.category',category.slug)">
              <img :src="category.popular_image"
                   :alt="category.title" class="img-fluid"><span>{{ category.title }}</span>
            </a>
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <div class="container" v-else-if="show_shimmer">
      <div class="category-content">
        <VueSlickCarousel v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
          <div class="global-list category-slider"
               v-for="(category,index) in 6" :key="index">
            <a :href="getUrl('category/'+category.slug)">
              <shimmer :height="160"></shimmer>
            </a>
          </div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>

<script>
import shimmer from "../partials/shimmer";
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  name: "popular_categories",
  components: {shimmer, VueSlickCarousel},
  props: ['popular_categories'],
  data() {
    return {
      slick_settings: {
        "dots": false,
        "edgeFriction": 0.35,
        "infinite": true,
        "arrows": false,
        "autoplay": false,
        "slidesToShow": 6,
        "slidesToScroll": 6,
        "centerPadding": '50px',
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 5,
              "slidesToScroll": 5,
            }
          },
          {
            "breakpoint": 768,
            "settings": {
              "slidesToShow": 3,
              "slidesToScroll": 3,
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
      },
      show_shimmer: true
    }
  },

  mounted() {
    this.checkHomeComponent("popular_category");
  },
  watch: {
    homeResponse() {
      this.checkHomeComponent("popular_category");
    }
  },
  computed: {
    countCategories() {
      if (this.popular_categories && this.popular_categories.length > 0) {
        return this.popular_categories;
      } else {
        return [];
      }
    },
  },
  methods: {
    checkHomeComponent(component_name) {
      let component = this.homeResponse.find(data => data == component_name);

      if (component) {
        return this.show_shimmer = false;
      }
    }
  }
}
</script>
