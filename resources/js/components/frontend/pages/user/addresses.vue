<template>
  <div class="sg-page-content">
    <section class="sg-global-content">
      <div class="container">
        <div class="row">
          <user_sidebar :current="current"></user_sidebar>
          <div class="col-lg-9">
            <div class="sg-shipping">
              <div class="title">
                <h1>{{ lang.addresses }}</h1>
              </div>
              <addressForm ref="address_form"></addressForm>
              <!-- /.accordion -->
              <div class="row" v-if="lengthCounter(addresses) > 0">
                <div class="col-lg-6"
                     v-for="(address, index) in addresses" :key="index">
                  <div class="sg-card address">
                    <div class="justify-content-between d-flex">
                      <div class="text">
                        <ul class="global-list">
                          <li>{{ lang.name }}: {{ address.name }}</li>
                          <li>{{ lang.email }}: {{ address.email }}</li>
                          <li>{{ lang.phone }}: {{ address.phone_no }}</li>
                          <li>{{ lang.street_address }}: {{ address.state }}</li>
                          <li>{{ lang.city }}: {{ address.city }}</li>
                          <li>{{ lang.country }}: {{ address.country }}</li>
                        </ul>
                      </div>
                      <div class="dropdown float-right">
                        <span class="mdi mdi-name mdi-dots-vertical dropbtn"></span>
                        <div class="dropdown-content">
                          <a href="javascript:void(0)"
                             @click="$refs.address_form.edit(address)">{{ lang.edit }}</a>
                          <a href="javascript:void(0)" v-if="!address.default_shipping"
                             @click="makeDefault(address.id, 'shipping')">{{ lang.make_default_shipping }}</a>
                          <a href="javascript:void(0)" v-if="!address.default_billing"
                             @click="makeDefault(address.id, 'billing')">{{ lang.make_default_billing }}</a>
                          <a href="javascript:void(0)"
                             v-if="!address.default_shipping && !address.default_billing"
                             @click="$refs.address_form.deleteAddress(address.id)">{{ lang.delete }}</a>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="default-batch"
                           v-if="address.default_shipping && address.default_billing">
                        {{ lang.default_shipping_billing }}
                      </div>
                      <div class="default-batch" v-else-if="address.default_shipping">
                        {{ lang.default_shipping }}
                      </div>
                      <div class="default-batch" v-else-if="address.default_billing">
                        {{ lang.default_billing }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-else-if="shimmer">
                <div class="col-lg-6 mb-3" v-for="(address, index) in 4" :key="'address'+index">
                  <shimmer :height="200"></shimmer>
                </div>
              </div>
            </div><!-- /.sg-shipping -->
          </div>
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section><!-- /.profile-section -->

  </div>
</template>

<script>
import user_sidebar from "../../partials/user_sidebar";
import shimmer from "../../partials/shimmer";
import addressForm from "../../partials/addressForm";

export default {
  name: "addresses",
  components: {
    user_sidebar, shimmer,addressForm
  },
  data() {
    return {
      current: 'addresses',
      default_shipping: this.$store.getters.getUser.billing_address,
      default_billing: this.$store.getters.getUser.shipping_address,
      is_edit: false,
    }
  },
  mounted() {
    if (this.lengthCounter(this.addresses) == 0) {
      this.getAddress();
    }
  },

  computed: {
    addresses() {
      return this.$store.getters.getUserAddresses
    },
    shimmer() {
      return this.$store.state.module.shimmer
    },
    flags() {
      return this.$store.getters.getFlags
    }
  },
  methods: {
    getAddress() {
      let url = this.getUrl('user/address');
      this.$Progress.start();
      axios.get(url).then((response) => {
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$store.commit('getUserAddresses', response.data.addresses);
          this.$store.commit('setShimmer', false)
          if (this.addresses.length == 0) {
            this.address_area = true;
          }
          this.$Progress.finish();
        }
      }).catch((error) => {
        this.$Progress.fail();
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      })
    },

    makeDefault(id, type) {
      let url = this.getUrl('default/user-address/' + type + '/' + id);
      axios.post(url).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, this.lang.Success + ' !!');
          this.$store.dispatch('user', response.data.user);
          this.default_shipping = response.data.user.shipping_address;
          this.default_billing = response.data.user.billing_address;
          this.getAddress();
        }
      })
    },
  }
}
</script>
