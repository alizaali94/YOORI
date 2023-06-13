<template>
  <div class="modal fade ModalId" id="user-address" tabindex="-1" aria-labelledby="user-address" aria-hidden="true">
    <div class="modal-width modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ lang.address }}</h5>
          <button type="button" id="close" class="close modal_close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <input type="hidden" name="draft_user" value="40" class="draft_user" id="draft_user"/>
        </div>
        <div class="modal-body shopping-cart">
          <div class="sg-shipping">
            <div class="card-body p-0">
              <section class="shopping-cart">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12 text-right">
                      <a href="javascript:void(0)" @click="showForm"><i class="mdi mdi-plus"></i> {{ lang.address_area_title }}</a>
                    </div>
                    <div class="col-lg-6 pb-0 pt-0" v-for="(address, index) in addresses" :key="index">
                      <label :for="'shipping_'+address.id" class="address_selector">
                        <div class="sg-card address chekout">
                          <div class="address_cart" :class="{ 'active' : shipping_address.id == address.id }">
                              <div class="mt-1">
                                <input type="radio" v-model="shipping_address.id" :value="address.id" @change="$emit('shippingAddress', address)"
                                       name="radioNoLabel" :id="'shipping_'+address.id"
                                       aria-label="...">
                              </div>
                              <div class="address-right">
                                <ul class="global-list">
                                  <li>{{ lang.name }} : {{ address.name }}</li>
                                  <li>{{ lang.email }} : {{ address.email }}</li>
                                  <li>{{ lang.phone }} : {{ address.phone_no }}</li>
                                  <li class="address_short">{{ lang.street_address }} : {{ address.address }}</li>
                                </ul>
                              </div>

                            <div class="dropdown">
                              <span class="mdi mdi-name mdi-dots-vertical dropbtn"></span>
                              <ul class="dropdown-content">
                                <li @click="addressFillUp(address)"><a href="javascript:void(0)" >{{ lang.edit }}</a></li>
                                <li @click="deleteAddress(address.id)" v-if="!address.default_shipping && !address.default_billing"><a  href="javascript:void(0)">{{ lang.delete }}</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                    <div id="address_form" class="col-lg-12 border-top pt-3 mt-3 middle">
                      <form v-if="add_new" @submit.prevent="saveAddress()">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.name }}</label>
                              <input v-model="shipping_address.name" type="text" class="form-control"
                                     :placeholder="lang.name" required>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.email }}</label>
                              <input v-model="shipping_address.email" type="email" class="form-control"
                                     :placeholder="lang.email" required>

                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.phone }}</label>
                              <input class="form-control" v-model="shipping_address.phone_no"
                                     :placeholder="lang.phone" required>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.country }}</label>
                              <select class="form-control"
                                      v-model="shipping_address.country_id"
                                      @change="getStates()" required>
                                <option value="">{{ lang.select_country }}</option>
                                <option v-for="(country,index) in countries"
                                        :key="'country'+index" :value="country.id">
                                  {{ country.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.state }}</label>
                              <select class="form-control"
                                      v-model="shipping_address.state_id"
                                      @change="getCities()" required>
                                <option value="">{{ lang.select_state }}</option>
                                <option v-for="(state,index) in states"
                                        :key="'state'+index" :value="state.id">
                                  {{ state.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.city }}</label>
                              <select class="form-control" required
                                      v-model="shipping_address.city_id">
                                <option value="">{{ lang.select_city }}</option>
                                <option v-for="(city,index) in cities"
                                        :key="'city'+index" :value="city.id">
                                  {{ city.name }}
                                </option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-group">
                              <label>{{ lang.postal_code }}</label>
                              <input type="text" v-model="shipping_address.postal_code"
                                     class="form-control" :placeholder="lang.postal_code" required>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <div class="form-group">
                              <label>{{ lang.address }}</label>
                              <textarea v-model="shipping_address.address"
                                        class="form-control" :placeholder="lang.street_address" required></textarea>
                            </div>
                          </div>
                          <div class="col-md-12 text-center">
                            <pos_loading_button v-if="save_loading" :class_name="'btn-primary'"></pos_loading_button>
                            <button type="submit" v-else class="btn btn-outline-primary">
                              {{ lang.confirm }}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <!-- /.row -->
                </div>
              </section>
              <!-- /.shopping-cart -->
            </div>
          </div>
        </div>
        <!-- /.modal-body -->
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";
import pos_loading_button from './pos_loading_button'


export default {
  name: "user-address",
  props: [
    'countries', 'userAddress', 'lang','user_id'
  ],
  components: {pos_loading_button},
  data() {
    return {
      shipping_address: {
        user_id: '',
        name: '',
        email: '',
        phone_no: '',
        country_id: "",
        state_id: "",
        city_id: "",
        postal_code: '',
        address: ''
      },
      states: [],
      cities: [],
      url: document.getElementById('url').value,
      add_new: false,
      save_loading: false,
      addresses : []
    }
  },
  watch : {
    userAddress()
    {
      this.add_new = false;
      this.addresses = this.userAddress;
    }
  },
  mounted() {
    this.addresses = this.userAddress;
  },
  methods: {
    getStates(address) {
      let country_id = this.shipping_address.country_id;

      let url = this.url + '/state/by-country/' + country_id;
      axios.get(url).then((response) => {
        if (response.data.error) {
          this.$toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.states = response.data.states;
          if (address && address.address_ids) {
            this.getCities(address);
          }
        }
      });
    },
    getCities(address) {
      let state_id = this.shipping_address.state_id;

      let url = this.url + '/city/by-state/' + state_id;
      axios.get(url).then((response) => {
        if (response.data.error) {
          this.$toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.cities = response.data.cities;
        }
      });
    },
    addressFillUp(address) {
      this.showForm();
      this.add_new = true;
      this.shipping_address.id            = address.id;
      this.shipping_address.name        = address.name;
      this.shipping_address.email       = address.email;
      this.shipping_address.phone_no    = address.phone_no;
      this.shipping_address.postal_code = address.postal_code;
      this.shipping_address.address     = address.address;
      this.shipping_address.country_id       = address.address_ids.country_id;
      this.shipping_address.state_id         = address.address_ids.state_id;
      this.shipping_address.city_id          = address.address_ids.city_id;

      this.getStates();
      this.getCities();

    },
    confirmAddress(confirm) {
      this.$emit('shippingAddress', this.shipping_address);

    },
    showForm()
    {
      this.add_new = !this.add_new;
      $('#user-address').animate({ scrollTop: $('#user-address .modal-dialog').height() }, 500);
    },
    resetShippingForm()
    {
      for (var key in this.shipping_address)
      {
        this.shipping_address[key] = '';
      }
      this.add_new = false;
    },
    saveAddress() {
      this.save_loading = true;
      let url;

      if (this.shipping_address.id)
      {
        url = this.url +'/admin/pos/update-address';
      }
      else{
        url = this.url +'/admin/pos/store-address';
      }
      this.shipping_address.user_id = this.user_id;

      axios.post(url, this.shipping_address).then((response) => {
        this.save_loading = false;
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.resetShippingForm();
          this.addresses = response.data.addresses;
          toastr['success'](response.data.error);
        }
      }).catch((error) => {
        this.save_loading = false;
        if (error.response.status == 422) {
          this.errors = error.response.data.errors;
        }
      })
    },

    deleteAddress(id) {
      if (confirm("Are you sure?")) {
        let params = {
          id : id,
          user_id : this.user_id,
        }
        let url = this.url +'/admin/pos/delete-address';
        axios.get(url, {params : params}).then((response) => {
          if (response.data.error) {
            toastr['error'](response.data.error);
          } else {
            this.addresses = response.data.addresses;
            toastr['success'](response.data.success);
          }
        })
      }

    },
  }

}
</script>

<style scoped>

</style>
