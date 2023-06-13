<template>
  <div>
    <section class="sg-bannger-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="banner-contact">
              <div class="title b-0">
                <h1>{{ lang.send_message_to_seller }}</h1>
              </div>
              <form class="contact-form" name="contact-form" @submit.prevent="submit">
                <div class="form-group">
                  <label>{{ lang.name }}</label>
                  <input type="text" class="form-control" v-model="contact_form.name" :placeholder="lang.name"
                         :class="{ 'is-invalid': errors.name }"/>
                </div>
                <span class="validation_error" v-if="errors.name">{{ errors.name[0] }}</span>
                <div class="form-group">
                  <label>{{ lang.email }}</label>
                  <input type="email" class="form-control" v-model="contact_form.email" :placeholder="lang.email"
                         :class="{ 'is-invalid': errors.email }"/>
                </div>
                <span class="validation_error" v-if="errors.email">{{ errors.email[0] }}</span>
                <div class="form-group">
                  <label>{{ lang.subject }}</label>
                  <input type="text" class="form-control" v-model="contact_form.subject" :placeholder="lang.subject"
                         :class="{ 'is-invalid': errors.subject }"/>
                </div>
                <span class="validation_error" v-if="errors.subject">{{ errors.subject[0] }}</span>
                <div class="form-group">
                  <label>{{ lang.message }}</label>
                  <textarea class="form-control" v-model="contact_form.message" :placeholder="lang.write_your_message"
                            :class="{ 'is-invalid': errors.message }"></textarea>
                </div>
                <span class="validation_error" v-if="errors.message">{{ errors.message[0] }}</span>
                <loading_button v-if="loading" :class_name="'btn btn-primary d-block'"></loading_button>
                <button type="submit" v-else class="btn btn-primary d-block">
                  {{ lang.send }}
                </button>
              </form>
            </div>
          </div>
          <div class="col-lg-8 col-md-6">
            <div class="banner d-flex align-items-end" :style="'background-image: url(' + shop.image_899x480 + ')'">
              <div class="banner-content">
                <div class="banner-contact-info" :class="{ 'banner-contact-info-center': !shop.shop_tagline }">
                  <div class="contact-icon" :class="{ 'contact-icon-left': !shop.shop_tagline }">
                    <img :src="shop.image_82x82" :alt="shop.shop_name" class="img-fluid"/>
                  </div>
                  <div class="feature-text text-center">
                    <h2>{{ shop.shop_name }}</h2>
                    <div class="sg-rating">
                      <span>{{ shop.rating_count }}</span>
                      <star-rating v-model:rating_count="shop.rating_count" :read-only="true" :star-size="15"
                                   :round-start-rating="false"></star-rating>
                      <span>({{ shop.reviews_count }} {{ lang.reviews }})</span>
                    </div>
                    <ul class="global-list d-flex">
                      <li class="pe-3"
                      >{{ lang.products }}: <span>{{ shop.total_products }}</span>
                      </li>
                      <li>{{ lang.joined }}: {{ shop.join_date }}</li>
                    </ul>
                  </div>
                </div>
                <div class="banner-details" v-if="shop.shop_tagline">
                  <p>{{ shop.shop_tagline }}</p>
                </div>
              </div>
            </div>
          </div>
        </div
        ><!--/.row --> </div
      ><!--/.container -->
    </section>
    <!--        <section class="shimmer-section" v-else-if="shimmer">
                <shimmer class="shimmer-rds" :height="350"></shimmer>
            </section>-->
    <section class="sg-feature-product">
      <div class="sg-page-menu">
        <ul class="global-list">
          <li :class="{ active: activeTab == 'store' }" @click="$store.commit('setActiveTab', 'store')"
          ><a href="javascript:void(0)">{{ lang.store }}</a></li
          >
          <li v-if="settings.coupon_system == 1" :class="{ active: activeTab == 'coupons' }"
              @click="$store.commit('setActiveTab', 'coupons')"
          ><a href="javascript:void(0)">{{ lang.coupons }}</a></li
          >
          <li :class="{ active: activeTab == 'product' }" @click="$store.commit('setActiveTab', 'product')"
          ><a href="javascript:void(0)">{{ lang.all_products }}</a></li
          >
        </ul>
      </div>
      <div class="container" v-if="lengthCounter(productList) > 0">
        <div class="header-products-description">
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade" :class="{ 'active show': activeTab == 'store' }" id="store">
              <div v-for="(componentName, index) in supportedComponents" :key="index">
                <component
                    :is="componentName"
                    :banners="componentName == 'banner' ? results[index].data : []"
                    :featured_products="componentName == 'featured_products' ? results[index].data : []"
                    :new_arrival="componentName == 'new_arrival' ? results[index].data : []"
                    :best_rated="componentName == 'best_rated_products' ? results[index].data : []"
                    :best_selling_product="componentName == 'best_selling_products' ? results[index].data : []"
                    :offer_ending_products="componentName == 'offer_ending_soon' ? results[index].data : []">
                </component>
              </div>
            </div><!-- /.tab-pane -->

            <div v-if="settings.coupon_system == 1" role="tabpanel" class="tab-pane fade" id="coupons"
                 :class="{ 'active show': activeTab == 'coupons' }">
              <div class="row">
                <div class="col-md-4" v-for="(coupon, i) in coupons.data" :key="i">
                  <div class="coupon-text-thumb">
                    <div class="coupon-text">
                      <h3
                      ><a href="javascript:void(0)">{{
                          coupon.discount_type == "flat" ? priceFormat(coupon.discount) : coupon.discount + "% OFF"
                        }}</a></h3
                      >
                      <p>{{ coupon.title }}</p>
                      <a href="javaScript:void(0)" @click="copyTestingCode(coupon.code)" class="btn">{{
                          lang.get_code
                        }}</a>
                      <div class="form-group">
                        <input type="hidden" class="form-control" :id="'testing-code_' + coupon.code"
                               :value="coupon.code"/>
                      </div>
                    </div>
                    <div class="coupon-thumb">
                      <img v-lazy="coupon.image_145x110" :alt="coupon.title" class="img-fluid"/>
                    </div>
                  </div>
                </div>
                <div class="show-more mt-4" v-if="coupons && coupons.next_page_url && !loading">
                  <a href="javascript:void(0)" @click="loadCoupon" class="btn btn-primary">{{ lang.show_more }}</a>
                </div>
                <loading_button v-if="loading" :class_name="'show-more border-0 bg_none'"></loading_button>
              </div>
            </div
            ><!-- /.tab-pane -->

            <div role="tabpanel" class="tab-pane fade" id="product" :class="{ 'active show': activeTab == 'product' }">
              <div class="row">
                <div class="col-md-4 col-lg-3">
                  <div class="sg-sitebar new-shop-sitebar">
                    <div class="accordion" id="accordionExample">
                      <div class="accordion-item">
                        <div class="accordion-header" id="ac3">
                          <button class="accordion-button" @click="price = !price" :class="{ collapsed: !price }"
                                  type="button" data-bs-toggle="collapse" data-bs-target="#price_collapse"
                                  aria-expanded="false" aria-controls="collapse2"
                          >{{ lang.price }}
                          </button>
                        </div>
                        <div id="price_collapse" class="accordion-collapse collapse" :class="{ show: price }"
                             aria-labelledby="ac3">
                          <div class="accordion-body">
                            <div class="price-top">
                              <div class="form-group">
                                <input type="text" min="0" :max="min_amount" @focusout="filterProducts"
                                       v-model="form.price.min" class="form-control" :placeholder="lang.min"/>
                              </div>
                              <div class="form-group">
                                <input type="text" :min="min_amount" @focusout="filterProducts" :max="max_amount"
                                       v-model="form.price.max" class="form-control" :placeholder="lang.max"/>
                              </div>
                            </div>
                            <div class="range-slider">
                              <input type="range" min="0" :max="max_amount" step="1" @change="filterProducts"
                                     v-model="form.price.min" id="min_range"/>
                              <input type="range" :min="min_amount" :max="max_amount" step="1" @change="filterProducts"
                                     v-model="form.price.max" id="max_range"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item" v-if="form.route != 'product.by.brand'">
                        <div class="accordion-header" id="ac4">
                          <button class="accordion-button" @click="brand = !brand" :class="{ collapsed: !brand }"
                                  type="button" data-bs-toggle="collapse" data-bs-target="#brand_collapse"
                                  aria-expanded="false" aria-controls="brand_collapse"
                          >{{ lang.brand }}
                          </button>
                        </div>
                        <div id="brand_collapse" :class="{ show: brand }" class="accordion-collapse collapse"
                             aria-labelledby="ac4">
                          <div class="accordion-body">
                            <form action="#" class="form-checkbox">
                              <div class="form-group" v-for="(brand, i) in brands.data" :key="i">
                                <input type="checkbox" :id="'brand' + brand.id" @change="filterProducts"
                                       :value="brand.id" v-model="form.brand"/>
                                <label :for="'brand' + brand.id">{{ brand.title }}</label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item" v-for="(attribute, index) in attributes" :key="'attribute' + index">
                        <div class="accordion-header" :id="'attribute_' + attribute.id">
                          <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                  :data-bs-target="'#collapse_attribute_' + attribute.id" aria-expanded="true"
                                  :aria-controls="'attribute_' + attribute.id">{{ attribute.title }}
                          </button>
                        </div>
                        <div :id="'collapse_attribute_' + attribute.id" class="accordion-collapse collapse"
                             :aria-labelledby="'attribute_' + attribute.id">
                          <div class="accordion-body">
                            <form action="#" class="form-checkbox">
                              <div class="form-group" v-for="(value, index) in attribute.attribute_value"
                                   :key="'value' + index">
                                <input type="checkbox" :id="attribute.id + 'attribute' + value.id"
                                       @change="filterProducts(attribute.id, value.id)" :value="value.id"
                                       v-model="form.attribute_value_id"/>
                                <label :for="attribute.id + 'attribute' + value.id">{{ value.value }}</label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item" v-if="settings.color == 1">
                        <div class="accordion-header" id="ac5">
                          <button class="accordion-button" @click="color = !color" :class="{ collapsed: !color }"
                                  type="button" data-bs-toggle="collapse" data-bs-target="#collapse5"
                                  aria-expanded="false" aria-controls="collapse5">{{ lang.color }}
                          </button>
                        </div>
                        <div id="collapse5" class="accordion-collapse collapse" :class="{ show: color }"
                             aria-labelledby="ac5">
                          <div class="accordion-body">
                            <form action="#" class="form-checkbox">
                              <div class="form-group" v-for="(color, index) in colors.data" :key="'color' + index">
                                <input type="checkbox" :id="'filter_color' + color.id" @change="filterProducts"
                                       :value="color.id" v-model="form.color"/>
                                <label :for="'filter_color' + color.id">{{ color.name }}</label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <div class="accordion-item">
                        <div class="accordion-header" id="ac6">
                          <button class="accordion-button" @click="ratting = !ratting" :class="{ collapsed: !ratting }"
                                  type="button" data-bs-toggle="collapse" data-bs-target="#collapse6"
                                  aria-expanded="false" aria-controls="collapse6"
                          >{{ lang.ratting }}
                          </button>
                        </div>
                        <div id="collapse6" class="accordion-collapse collapse" :class="{ show: ratting }"
                             aria-labelledby="ac6">
                          <div class="accordion-body">
                            <form action="#" class="form-checkbox">
                              <div class="form-group">
                                <input type="checkbox" id="rating5" @change="filterProducts" value="5"
                                       v-model="form.rating"/>
                                <label for="rating5">
                                  <ul class="global-list">
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                  </ul>
                                </label>
                              </div>
                              <div class="form-group">
                                <input type="checkbox" id="rating4" @change="filterProducts" value="4"
                                       v-model="form.rating"/>
                                <label for="rating4">
                                  <ul class="global-list">
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                  </ul>
                                </label>
                              </div>
                              <div class="form-group">
                                <input type="checkbox" id="rating3" @change="filterProducts" value="3"
                                       v-model="form.rating"/>
                                <label for="rating3">
                                  <ul class="global-list">
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                  </ul>
                                </label>
                              </div>
                              <div class="form-group">
                                <input type="checkbox" id="rating2" @change="filterProducts" value="2"
                                       v-model="form.rating"/>
                                <label for="rating2">
                                  <ul class="global-list">
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                  </ul>
                                </label>
                              </div>
                              <div class="form-group">
                                <input type="checkbox" id="rating1" @change="filterProducts" value="1"
                                       v-model="form.rating"/>
                                <label for="rating1">
                                  <ul class="global-list">
                                    <li><span class="mdi mdi-name mdi-star"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                    <li><span class="mdi mdi-name mdi-star-outline"></span></li>
                                  </ul>
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div
                    ><!-- /.accordion -->
                  </div>
                </div>
                <div class="col-md-8 col-lg-9">
                  <div class="sg-category-content sg-filter" :class="activeClass">
                    <div class="d-flex justify-content-between mb-4">
                      <div class="left-content">
                        <div class="title">
                          <h1>{{ lang.sort_by }}</h1>
                          <select v-model="form.sort" @change="sortProducts" class="form-control">
                            <option value="newest">{{ lang.newest }}</option>
                            <option value="oldest">{{ lang.oldest }}</option>
                            <option value="top_rated">{{ lang.top_rated }}</option>
                            <option value="top_selling">{{ lang.top_selling }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="right-content">
                        <div class="d-flex">
                          <form>
                            <div class="form-group">
                              <select v-model="form.paginate" @change="sortProducts" class="form-control">
                                <option value="12">{{ lang.show_12 }}</option>
                                <option value="16">{{ lang.show_16 }}</option>
                                <option value="20">{{ lang.show_20 }}</option>
                                <option value="24">{{ lang.show_24 }}</option>
                              </select>
                            </div>
                          </form>
                          <ul class="filter-tabs global-list">
                            <li class="grid-view-tab" @click="activeClass = 'grid-view-tab'"
                                :class="{ active: activeClass == 'grid-view-tab' || activeClass == '' }"><span
                                class="mdi mdi-name mdi-grid"></span></li>
                            <li class="list-view-tab" @click="activeClass = 'list-view-tab'"
                                :class="{ active: activeClass == 'list-view-tab' }"><span
                                class="mdi mdi-name mdi-format-list-bulleted"></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div class="mt-2" v-if="products && products.total == 0"></div>
                      <product v-if="products" :products="productList" :number="8" :grid_class="'grid-4'"></product>
                      <div class="show-more" v-if="products && products.next_page_url && !loading">
                        <a href="javascript:void(0)" @click="loadProduct" class="btn">{{ lang.show_more }}</a>
                      </div>
                      <div class="col-md-12 text-center show-more" v-show="loading">
                        <loading_button :class_name="'btn btn-primary'"></loading_button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div
            ><!-- /.tab-pane --> </div><!-- /.tab-content -->
        </div>
      </div><!-- /.container -->
      <div class="container" v-else-if="shimmer">
        <div class="offers-section p-0">
          <div class="row">
            <div class="col-md-3" v-for="(attr, i) in 4">
              <a href="javascript:void(0)" class="add-banner">
                <shimmer :height="200"></shimmer>
              </a>
            </div>
          </div>
        </div>
        <ul class="products grid-6">
          <li v-for="(product, index) in 12" :key="index">
            <div class="sg-product">
              <a href="javascript:void(0)">
                <shimmer :height="290"></shimmer>
              </a></div
            ><!-- /.sg-product -->
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import shimmer from "../partials/shimmer";
import StarRating from "vue-star-rating";
import addBanner from "../homepage/add-banner";
import new_arrival from "../homepage/new_arrival";
import best_selling_product from "../homepage/best_selling_product";
import best_rated from "../homepage/best_rated";
import offer_ending from "../homepage/offer_ending";
import featured_products from "../homepage/featured_products";
import product from "./product";

export default {
  name: "shop",
  data() {
    return {
      supportedComponents: [],
      results: [],
      //for filter products
      activeClass: "",
      category_load_more: false,
      form: {
        category: [],
        child_category: [],
        price: {
          min: 0,
          max: 0,
        },
        brand: [],
        color: [],
        rating: [],
        attribute_value_id: [],
        paginate: 12,
        sort: "newest",
        slug: this.$route.params.slug,
        page: 1,
        route: this.$route.name,
        key: this.$route.query.key,
      },
      category_routes: ["product.by.gadget", "product.by.category"],
      total_product: 0,

      loading: false,
      category: true,
      child_category: true,
      price: false,
      brand: true,
      size: false,
      color: false,
      ratting: false,
      min_amount: 0,
      max_amount: 0,

      collapseAttribute: [],
      category_page: 1,
      brand_page: 1,
      color_page: 1,
      attribute_value_page: 1,
      coupon_page: 1,
      contact_form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  components: {
    StarRating,
    shimmer,
    product,
    banner: addBanner,
    featured_products: featured_products,
    new_arrival: new_arrival,
    best_selling_products: best_selling_product,
    best_rated_products: best_rated,
    offer_ending_soon: offer_ending,
  },

  watch: {
    priceRange(newValue, oldValue) {
      this.min_amount = newValue.min;
      this.max_amount = newValue.max;
      this.form.price.min = newValue.min;
      this.form.price.max = newValue.max;
    },
  },
  mounted() {
    this.loadContents();
    if (!this.filterLoaded) {
      this.$store.dispatch("filterData");
      this.$store.commit("getFilterLoaded", true);
    }
    this.$store.commit("setActiveTab", "store");

    if (this.priceRange) {
      this.min_amount = this.priceRange.min;
      this.max_amount = this.priceRange.max;
      this.form.price.min = this.priceRange.min;
      this.form.price.max = this.priceRange.max;
    }
  },
  computed: {
    shop() {
      let shop = this.$store.getters.getShopContents;
      for (let i = 0; i < shop.length; i++) {
        if (shop[i].slug == this.$route.params.slug) {
          return shop[i].contents;
        }
      }
      return false;
    },
    products() {
      let products = this.$store.getters.getSellerProducts;
      for (let i = 0; i < products.length; i++) {
        if (products[i].slug == this.$route.params.slug) {
          return products[i].products;
        }
      }
      return [];
    },
    coupons() {
      let coupons = this.$store.getters.getSellerCoupons;
      for (let i = 0; i < coupons.length; i++) {
        if (coupons[i].slug == this.$route.params.slug) {
          return coupons[i].coupons;
        }
      }
      return [];
    },
    attributes() {
      let attributes = this.$store.getters.getShopAttributes;
      let attribute_index = attributes.findIndex((attribute) => attribute.slug == "all");
      if (attribute_index > -1) {
        return attributes[attribute_index].attributes;
      } else {
        return [];
      }
    },
    priceRange() {
      return this.$store.getters.getPriceRange;
    },
    categories() {
      return this.$store.getters.getShopCategories;
    },
    brands() {
      return this.$store.getters.getShopBrands;
    },
    colors() {
      return this.$store.getters.getShopColors;
    },
    activeTab() {
      return this.$store.getters.getActiveTab;
    },
    shimmer() {
      return this.$store.state.module.shimmer;
    },
    productList() {
      if (this.products && this.products.data && this.products.data.length == 0) {
        return ["id"];
      } else if (this.products && this.products.data && this.products.data.length > 0) {
        return this.products.data;
      } else {
        return [];
      }
    },
  },
  methods: {
    loadContents() {
      let url = this.getUrl("shop-page-data/" + this.$route.params.slug);
      if (!this.shop) {
        this.$Progress.start();
        axios
            .get(url)
            .then((response) => {
              if (response.data.error) {
                toastr.error(response.data.error, this.lang.Error + " !!");
              } else {
                let shop = response.data.shop;

                this.$store.commit("setShopContents", shop);
                this.$store.commit("setShopComponents", shop);
                this.contentCreator(shop);
                let coupon_data = {
                  slug: shop.slug,
                  coupons: response.data.coupons,
                };
                let product_data = {
                  slug: shop.slug,
                  products: response.data.products,
                };
                // this.style.backgroundImage = shop.image_1905x350;
                this.$store.commit("setSellerCoupons", coupon_data);
                this.$store.commit("setSellerProducts", product_data);
                this.$Progress.finish();
              }
            })
            .catch((error) => {
              this.$Progress.fail();
            });
      } else {
        this.contentCreator(this.shop);
      }
    },
    contentCreator(shop) {
      for (let i = 0; i < shop.shop_page_contents.length; i++) {
        this.supportedComponents.push(Object.keys(shop.shop_page_contents[i])[0]);
      }

      let data = Object.keys(shop.contents);
      for (let i = 0; i < data.length; i++) {
        this.results.push({key: Object.keys(shop.shop_page_contents[i])[0], data: shop.contents[data[i]]});
      }
    },
    copyTestingCode(code) {
      var copyText = document.getElementById("testing-code_" + code);

      /* Select the text field */
      if (copyText) {
        copyText.setAttribute("type", "text");
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        // navigator.clipboard.writeText(copyText.value);
        document.execCommand("copy");

        /* Alert the copied text */
        alert("Copied the text: " + copyText.value);
        copyText.setAttribute("type", "hidden");
        window.getSelection().removeAllRanges();
      }
    },
    //products
    loadCategories() {
      this.category_page++;
      let url = this.url + "/home/load-categories?page=" + this.category_page;
      this.loading = true;
      axios.get(url).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.loading = false;
          let length = response.data.categories.total;
          let products = response.data.categories.data;

          if (length > 0) {
            for (var i in products) {
              this.categories.data.push(products[i]);
            }
          }
          this.category_load_more = !!response.data.categories.next_page_url;
          this.categories.next_page_url = response.data.categories.next_page_url;
        }
      });
    },
    loadBrands() {
      this.brand_page++;
      let url = this.url + "/home/load-brands?page=" + this.brand_page;
      this.loading = true;
      axios.get(url).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.loading = false;
          let length = response.data.brands.total;
          let products = response.data.brands.data;

          if (length > 0) {
            for (var i in products) {
              this.brands.data.push(products[i]);
            }
          }
          this.brand_load_more = !!response.data.brands.next_page_url;
          this.brands.next_page_url = response.data.brands.next_page_url;
        }
      });
    },
    loadColors() {
      this.color_page++;
      let url = this.url + "/home/load-colors?page=" + this.color_page;
      this.loading = true;
      axios.get(url).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.loading = false;
          let length = response.data.colors.total;
          let colors = response.data.colors.data;

          if (length > 0) {
            for (var i in colors) {
              this.colors.data.push(colors[i]);
            }
          }
          this.color_load_more = !!response.data.colors.next_page_url;
          this.colors.next_page_url = response.data.colors.next_page_url;
        }
      });
    },
    filterProducts(attribute = null, value = null) {
      this.form.page = 1;
      if (attribute) {
        this.form.attribute_value_id.push(value);
      }
      if (attribute && this.form.attribute_value_id.includes(value)) {
        var index = this.form.attribute_value_id.indexOf(value);
        if (index > -1) {
          this.form.attribute_value_id.splice(index, 1);
        }
      }

      let url = this.getUrl("home/filtered_products");
      this.loading = true;
      axios.get(url, {params: this.form}).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.loading = false;
          this.products.data = response.data.products.data;
          this.products.next_page_url = response.data.products.next_page_url;
        }
      });
    },
    updatePrice() {
      if (this.form.price.min == "") {
        this.form.price.min = 0;
      }
      this.filterProducts();
    },
    loadProduct() {
      this.form.page++;
      let url = this.getUrl("home/filtered_products");
      this.loading = true;
      axios.get(url, {params: this.form}).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.loading = false;
          let products = response.data.products.data;

          if (products.length > 0) {
            for (var i in products) {
              this.products.data.push(products[i]);
            }
          }
          this.products.next_page_url = response.data.products.next_page_url;
        }
      });
    },
    sortProducts() {
      this.form.page = 1;
      this.$store.dispatch("products", this.form);
    },
    loadCoupon() {
      this.coupon_page++;
      let url = this.getUrl("seller/coupons/" + this.shop.user_id + "/?page=" + this.coupon_page);
      this.loading = true;
      axios.get(url).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + " !!");
        } else {
          this.loading = false;
          let coupons = response.data.coupons.data;

          if (coupons.length > 0) {
            for (var i in coupons) {
              this.coupons.data.push(coupons[i]);
            }
          }
          this.coupons.next_page_url = response.data.coupons.next_page_url;
        }
      });
    },
    submit() {
      this.loading = true;
      this.contact_form.seller_id = this.shop.id;
      let url = this.getUrl("send-message");
      axios
          .post(url, this.contact_form)
          .then((response) => {
            this.loading = false;
            if (response.data.success) {
              toastr.success(this.lang.message_sent_successfully, this.lang.Success + " !!");
              this.errors = [];
              this.contact_form.email = "";
              this.contact_form.name = "";
              this.contact_form.subject = "";
              this.contact_form.message = "";
            } else {
              if (response.data.error) {
                toastr.error(response.data.error, this.lang.Error + " !!");
              }
            }
          })
          .catch((error) => {
            this.loading = false;
            if (error.response.status == 422) {
              this.errors = error.response.data.errors;
            }
          });
    },
  },
};
</script>
