<template>
  <div class="sg-page-content">
    <section class="contact-section">
      <div class="container">
        <div class="page-title">
          <h1>{{ contact.title }}</h1>
        </div>
        <div class="contact-content">
          <div class="row">
            <div class="col-md-6">
              <div class="title b-0">
                <h1>{{ lang.send_message }}</h1>
              </div>
              <form @click.prevent>
                  <div class="form-group">
                    <label>{{ lang.name }}</label>
                    <input type="text" v-model="form.name" class="form-control"
                           :class="{ 'error_border' : errors.name }" :placeholder="lang.name">
                  </div>
                  <span class="validation_error"
                        v-if="errors.name">{{ errors.name[0] }}</span>
                  <div class="form-group">
                    <label>{{ lang.email }}</label>
                    <input type="email" v-model="form.email" class="form-control"
                           :class="{ 'error_border' : errors.email }" :placeholder="lang.email">
                  </div>
                  <span class="validation_error"
                        v-if="errors.email">{{ errors.email[0] }}</span>
                  <div class="form-group">
                    <label>{{ lang.subject }}</label>
                    <input type="text" v-model="form.subject" class="form-control"
                           :class="{ 'error_border' : errors.subject }" :placeholder="lang.subject">
                  </div>
                  <span class="validation_error"
                        v-if="errors.subject">{{ errors.subject[0] }}</span>
                  <div class="form-group">
                    <label>{{ lang.message }}</label>
                    <textarea class="form-control" v-model="form.message"
                              :class="{ 'error_border' : errors.message }"
                              :placeholder="lang.write_your_message"></textarea>
                  </div>
                  <span class="validation_error"
                        v-if="errors.message">{{ errors.message[0] }}</span>
                  <div>
                    <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                    <button type="submit" v-else @click="submit" class="btn btn-primary">
                      {{ lang.send }}
                    </button>
                  </div>
              </form><!-- /.contact-form -->
            </div>
            <div class="col-md-6">
              <div class="contact-info">
                <div class="title b-0">
                  <h1>{{ lang.reach_on_us }}</h1>
                </div>
                <div class="contact-list">
                  <ul class="global-list">
                    <li v-if="contact.address"><span class="mdi mdi-name mdi-map-marker"></span>{{ contact.address }}
                    </li>
                    <li v-if="contact.phone || contact.optional_phone"><span class="mdi mdi-name mdi-phone"></span> <a
                        :href="'tel:'+contact.phone">{{ contact.phone }}</a> <a
                        :href="'tel:'+contact.optional_phone">{{ contact.optional_phone }}</a></li>
                    <li v-if="contact.email || contact.optional_email"><span class="mdi mdi-name mdi-email"></span> <a
                        :href="'mailto:'+contact.email">{{ contact.email }}</a> <a
                        :href="'mailto:'+contact.optional_email">{{ contact.optional_email }}</a></li>
                  </ul>
                </div>
                <div class="social"
                     v-if="settings.show_social_links && settings.show_social_links == 1">
                  <div class="title b-0 mb-0">
                    <h1>{{ lang.follow_us }}</h1>
                  </div>
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
                <div class="map" id="map" style="height: 250px"></div>
              </div>
            </div>
          </div>
        </div><!-- /.contact-content -->
      </div><!-- /.container -->
    </section><!-- /.contact-section -->
  </div>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
  name: "contact",
  components: {
    shimmer
  },
  mounted() {
    let that = this;
    if (!that.contact) {
      that.$store.dispatch('contactPage');
    }
    if (that.settings.map_api_key) {
      var script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?key=' + that.settings.map_api_key + '&callback=initMap&v=weekly';
      script.async = true;
      window.initMap = function () {
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 23.822141, lng: 90.440813},
          zoom: parseInt(that.settings.zoom_level)
        });
        new google.maps.Marker({
          position: new google.maps.LatLng(23.822141, 90.440813),
          map: map,
          title: 'Cryptox'
        });
      };
      document.head.appendChild(script);
    }
  },
  data() {
    return {
      loading: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      map: '',
    }
  },

  computed: {
    contact() {
      return this.$store.getters.getContactPage;
    },
    shimmer() {
      return this.$store.state.module.shimmer
    }
  },
  methods: {
    submit() {
      this.loading = true
      let url = this.getUrl('send-message');
      axios.post(url, this.form)
          .then((response) => {
            this.loading = false;
            if (response.data.success) {
              toastr.success(this.lang.message_sent_successfully, this.lang.Success + ' !!');
              this.errors = [];
              this.form.email = '';
              this.form.name = '';
              this.form.subject = '';
              this.form.message = '';
            } else {
              if (response.data.error) {
                toastr.error(response.data.error, this.lang.Error + ' !!');
              }
            }
          }).catch((error) => {
        this.loading = false;
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      })
    }
  }
}
</script>
<style>
#map {
  height: 100%;
}
</style>
