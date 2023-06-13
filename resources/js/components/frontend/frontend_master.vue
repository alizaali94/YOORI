<template>
  <div>
    <router-view></router-view>
    <vue-progress-bar></vue-progress-bar>
    <div class="product_modal home_modal">
      <div class="modal fade" id="pop_up" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
              <div class="row">
                <div class="col-md-6">
                  <img :src="settings.popup_image" :alt="settings.popup_title" class="img-fluid">
                </div>
                <div class="col-md-6">
                  <h2>{{ settings.popup_title }}</h2>
                  <p class="text-start">{{ settings.popup_description }}</p>
                  <form @submit.prevent="submit">
                    <div class="form-group">
                      <input type="email" v-model="form.email" class="form-control"
                             required="required" :placeholder="lang.email">
                    </div>
                    <button class="btn btn-primary btn-block text-uppercase" name="submit"
                            type="submit">
                      {{ lang.subscribe }}
                    </button>
                  </form>
                  <div class="social">
                    <ul class="global-list">
                      <li v-if="settings.facebook_link"><a :href="settings.facebook_link"><span
                          class="mdi mdi-name mdi-facebook"></span></a></li>
                      <li v-if="settings.twitter_link"><a :href="settings.twitter_link"><span
                          class="mdi mdi-name mdi-twitter"></span></a></li>
                      <li v-if="settings.linkedin_link"><a :href="settings.linkedin_link"><span
                          class="mdi mdi-linkedin"></span></a></li>
                      <li v-if="settings.instagram_link"><a :href="settings.instagram_link"><span
                          class="mdi mdi-instagram"></span></a></li>
                      <li v-if="settings.youtube_link"><a :href="settings.youtube_link"><span
                          class="mdi mdi-youtube"></span></a></li>
                    </ul>
                  </div>
                  <div class="left-content margin_left_75">
                    <form class="form-checkbox">
                      <div class="form-group">
                        <input type="checkbox" id="tnc" value="2"
                               v-model="dont_show" @change="removeModal"
                               class="form-check-input">
                        <label for="tnc">{{ lang.don_this_popup_again }}</label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div><!-- /.modal-body -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "frontend_master",
  data() {
    return {
      form: {
        email: ""
      },
      popup: false,
      dont_show: 0,
      modal_height: 450,
      modal_width: 900,
    }
  },
  components: {},
  props: ['languages', 'flags', 'currencies', 'user', 'active_language', 'active_currency', 'wishlists', 'carts', 'categories', 'sliders', 'services', 'settings_data', 'viewed_products', 'pages', 'compare_list', 'default_currency',
    'home_components', 'default_assets', 'add_ons', 'shop_follower', 'lang_keywords', 'banners'],

  mounted() {
    let element = document.getElementById("37142846");
    if (!element) {
      alert('Something went wrong with your Script, Please contact to the script author');
    }
    setTimeout(() => {
      this.changeCurrency(this.active_currency);
      this.showModal();
      this.viewedProducts();
    }, 10000);

    this.$store.dispatch('languages', this.languages);
    this.$store.dispatch('currencies', this.currencies);
    this.$store.dispatch('user', this.user);
    this.$store.dispatch('activeLanguage', this.active_language);
    this.$store.dispatch('activeCurrency', this.active_currency);
    this.$store.dispatch('wishlists', this.wishlists);
    this.$store.dispatch('carts', this.carts);
    this.$store.dispatch('categories', this.categories);
    this.$store.dispatch('sliders', this.sliders);
    this.$store.dispatch('services', this.services);
    this.$store.dispatch('settings', this.settings_data);
    this.$store.dispatch('pages', this.pages);
    this.$store.dispatch('compareList', this.compare_list);
    this.$store.dispatch('defaultCurrency', this.default_currency);
    this.$store.dispatch('homeComponents', this.home_components);
    this.$store.dispatch('defaultAssets', this.default_assets);
    this.$store.commit('setSliderBanner', this.banners);
    this.$store.commit('getAddons', this.add_ons);
    for (let i = 0; i < this.shop_follower.length; i++) {
      this.$store.commit('getShopFollower', this.shop_follower[i]);
    }
    if (this.settings.demo_mode) {
      this.colorChanger();
    }
  },
  created() {
    if (this.settings.pushar_activated) {
      this.listenForChanges();
    }

  },
  computed: {},

  methods: {
    submit() {
      let url = this.getUrl('home/subscribers');
      axios.post(url, this.form)
          .then((response) => {
            if (response.data.success) {
              $('#pop_up').modal('hide');
              toastr.success(response.data.success, this.lang.Success + ' !!');
              this.form.email = '';
            } else {
              if (response.data.error) {
                toastr.error(response.data.error, this.lang.Error + ' !!');
              }
            }
          }).catch((error) => {
        if (error.response.status == 422) {
          let errors = Object.keys(error.response.data.errors);
          for (let i = 0; i <= errors.length; i++) {
            toastr.error(error.response.data.errors[errors[i]][0], this.lang.Error + ' !!');
          }

        }
      })
    },
    showModal() {
      let status = localStorage.getItem('popup');

      if (status || this.settings.site_popup_status == 0) {
        return $('#pop_up').modal('hide');
      } else if (this.settings.popup_show_in == 'home_page' && this.$route.name == 'home') {
        return $('#pop_up').modal('show');
      } else if (this.settings.popup_show_in == 'all_page') {
        return $('#pop_up').modal('show');
      }
    },
    removeModal() {
      if (this.dont_show) {
        localStorage.setItem('popup', '1');
      } else {
        localStorage.removeItem('popup');
      }
    },
    listenForChanges() {
      Echo.channel('notification-send-4')
          .listen('PusherNotification', post => {
            if (!('Notification' in window)) {
              alert('Web Notification is not supported');
              return;
            }
            let notification = post;
            if (notification) {
              if (notification.message_type == 'success') {
                toastr.success(notification.message, this.lang.Success + '!!');
              } else if (notification.message_type == 'error') {
                toastr.error(notification.message, this.lang.Error + ' !!');
              } else if (notification.message_type == 'warning') {
                toastr.warning(notification.message, this.lang.Warning + ' !!');
              } else {
                toastr.info(notification.message, this.lang.Info + ' !!');
              }
            }
          })
    },
    colorChanger() {
      let accent_color = document.getElementById('colorPicker-accent');
      let menu_color = document.getElementById('colorPicker-bg');
      let menu_text_color = document.getElementById('colorPicker-m-text');

      $(".sg-yoori-switcher-close").on("click", (function (t) {
        $(".sg-yoori-switcher").toggleClass("active");
      }));

      if (localStorage.getItem('primary-color')) {
        let selected = localStorage.getItem('primary-color');
        accent_color.value = selected;
        document.documentElement.style.setProperty('--primary-color', selected);
        document.documentElement.style.setProperty('--sidebar-base-color', selected + '20');
      }
      if (localStorage.getItem('menu-bg-color')) {
        let selected = localStorage.getItem('menu-bg-color');
        menu_color.value = selected;
        document.documentElement.style.setProperty('--menu-bg-color', selected);
        document.documentElement.style.setProperty('--profile-sidebar', selected + '10');
      }
      if (localStorage.getItem('menu-text-color')) {
        let selected = localStorage.getItem('menu-text-color');
        menu_text_color.value = selected;
        document.documentElement.style.setProperty('--menu-text-color', selected);
      }

      accent_color.addEventListener('input', function () {
        let val = $(this).val();
        localStorage.removeItem('primary-color');
        localStorage.setItem('primary-color', val);
        document.documentElement.style.setProperty('--primary-color', val);
        document.documentElement.style.setProperty('--sidebar-base-color', val + '20');
      });

      menu_color.addEventListener('input', function () {
        let val = $(this).val();
        let side_val = val + '20';
        localStorage.removeItem('menu-bg-color');
        localStorage.setItem('menu-bg-color', val);
        localStorage.removeItem('profile-sidebar');
        localStorage.setItem('profile-sidebar', side_val);
        document.documentElement.style.setProperty('--menu-bg-color', val);
        document.documentElement.style.setProperty('--profile-sidebar', side_val);
      });

      menu_text_color.addEventListener('input', function () {
        let val = $(this).val();
        localStorage.removeItem('menu-text-color');
        localStorage.setItem('menu-text-color', val);
        document.documentElement.style.setProperty('--menu-text-color', val);
      });
    },
    settingData() {
      let url = this.getUrl('settings-data');
      axios.get(url).then(response => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$store.dispatch('settings', response.data.settings);
        }
      })
    },
    viewedProducts() {
      let url = this.getUrl('viewed-products');
      axios.get(url).then(response => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$store.dispatch('viewedProducts', response.data.viewed_products);
        }
      })
    },
    changeCurrency(currency) {
      let url = this.getUrl("change/currency/" + currency.code);
      this.currency_dropdown = false;
      axios.get(url).then((response) => {
        if (response.data.error) {
          toastr.info(response.data.error, this.lang.Info + " !!");
        } else {
          this.$store.dispatch("activeCurrency", response.data.active_currency);
        }
      });
    },
  }
}
</script>
