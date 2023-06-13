<template>
  <div class="pos-section pos-section--modal mb-5">
    <form action="#">
      <div class="row">
        <div class="col-lg-6">
          <div class="form-group d-flex justify-content-center">
            <input type="text" v-model="form.q" @keyup="sortProducts"
                   style="width: 70%;height: 50px;border-color: #0fac81;" class="form-control"
                   :placeholder=lang.scan_barcode_or_product_name>
          </div>
          <div class="sg-card-header d-flex justify-content-between">
            <div class="form-group">
              <select v-model="form.category_id" class="form-control" @change="sortProducts">
                <option value="">{{ lang.all_categories }}</option>
                <option v-for="(category,categoryIndex) in categories" :key="categoryIndex"
                        :value="category.id">
                  {{ category.title }} ({{ category.total_products }})
                </option>
              </select>
            </div>
            <div class="form-group">
              <select v-model="form.brand_id" class="form-control" @change="sortProducts">
                <option value="">{{ lang.brands }}</option>
                <option :value="brand.id" v-for="(brand,brandIndex) in brands"
                        :key="brandIndex">{{ brand.title }} ({{ brand.total_products }})
                </option>
              </select>
            </div>
          </div>
          <div class="sg-card-content text-center">
            <div class="row">
              <div class="col-md-3" v-for="(stockProduct,productIndex) in searchingProduct"
                   :key="productIndex">
                <a class="custom--card-style" href="javascript:void(0)"
                   @click="cartProduct(stockProduct,productIndex)">
                  <div class="card pos-card">

                    <div class="thumb mb_39">
                      <img  :src="stockProduct.image"
                           class="img-fluid" :alt="stockProduct.product_name">
                    </div>
                    <p class="text-ellipse-one">
                      {{ stockProduct.product_name }}</p>
                    <div class="sg-price justify-content-center">
                                                <span class="price"><del
                                                    v-if="stockProduct.special_discount > 0">{{
                                                    priceFormat(stockProduct.price)
                                                  }}</del>
                                                    <span v-if="stockProduct.special_discount > 0">
                                                            {{ priceFormat(stockProduct.discount_price) }}
                                                        </span>
                                                    <span v-else>{{ priceFormat(stockProduct.price) }}</span>
                                                </span>
                      <span v-if="stockProduct.current_stock > 0"
                            class="stock-badge">in Stock: {{ stockProduct.current_stock }}</span>
                      <span v-else class="stock-badge"
                            :class="{ 'red_badge' : stockProduct.current_stock == 0 }">Out Of Stock</span>
                      <span class="variant_badge"
                            v-if="stockProduct.has_variant == 1 && stockProduct.name">{{ stockProduct.name }}</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-12" v-if="searchingProduct.length == 0"><p><strong
                  class="text-danger">{{ lang.no_product_found }}</strong></p></div>
            </div>
            <div class="button" v-if="!load_more_loading && products.next_page_url">
              <a href="javascript:void(0)"
                 @click="loadMore()" class="btn btn-outline-info">{{ lang.load_more }}</a>
            </div>
            <div v-if="load_more_loading">
              <pos_loading_button :loading_image="loading_image"></pos_loading_button>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="cart-details">
            <div class="card">
              <div class="sg-card-header d-flex justify-content-between">
                <div class="form-group">
                  <div class="dropdown pos_dropdown">
                    <input type="text" v-model="form.p" @keyup="sortProducts($event,'p')"
                           class="form-control" @click.stop="searchDropdown"
                           :placeholder=lang.scan_barcode_or_product_name>
                    <ul @click.stop class="dropdown-menu show" aria-labelledby="dropdownMenuButton"
                        v-if="searching_product.length > 0 && search_key_focus">
                      <li @click="cartProduct(product,'search')" class="dropdown-item"
                          v-for="(product,index) in searching_product" :key="index">

                        <p class="product-info-ellipse"> {{ product.product_name }}</p>
                        <!--                                                <p class="price"> {{ product.product_price }}</p>-->
                        <div class="d-flex justify-content-between">
                                                    <span class="price"><del
                                                        v-if="product.stock_discount_price > 0">{{
                                                        priceFormat(product.product_price)
                                                      }}</del>
                                                            <span v-if="product.stock_discount_price > 0">
                                                                    {{ priceFormat(product.discount_price) }}
                                                                </span>
                                                            <span v-else>{{ priceFormat(product.product_price) }}</span>
                                                        </span>
                          <span v-if="product.current_stock > 0" class="price">in Stock: {{
                              product.current_stock
                            }}</span>
                          <span v-else class="price"
                                :class="{ 'red_badge' : product.current_stock == 0 }">{{ lang.out_of_stock }}</span>
                          <span class="price"
                                v-if="product.name">{{ product.name }}</span>
                        </div>

                      </li>
                    </ul>
                  </div>
                </div>
                <div class="form-group icon-upper">
                  <select id="on_change_user" class="form-control select2 pos-customer">
                  </select>
                  <div class="icon">
                    <a href="javascript:void(0)" data-target="#user-address"
                       data-toggle="modal"><i class='bx bx-map pos-address-icon'></i></a>
                  </div>
                </div>
              </div>
              <div id="cart_list" class="cart-list cart-list-height">
                <ul class="global-list">
                  <li v-for="(cart,i) in cartProducts" :key="i">
                    <div class="justify-content-between d-flex">
                      <div class="quantity" data-trigger="spinner">
                        <a class="btn" href="javascript:void(0);"
                           @click="cartMinus(cart)" data-spin="down"><i
                            class="bx bx-minus"></i></a>
                        <input type="text" v-model="cartProducts[i].product.qty"
                               title="quantity"
                               class="input-text" disabled>
                        <a class="btn" href="javascript:void(0);"
                           @click="cartPlus(cart)" data-spin="up"><i
                            class="bx bx-plus"></i></a>
                      </div>
                      <div class="text">
                        <p class="text-ellipse-two mrg-pos-product">{{
                            cart.product.product_name
                          }}</p>
                      </div>
                    </div>
                    <div class="justify-content-between d-flex">
                      <div class="price">
                        <p>{{ priceFormat(cart.product.price) }} x {{ cart.product.qty }}</p>
                        <p><strong>{{ priceFormat(cart.product.sub_total) }}</strong></p>
                      </div>
                      <a href="javascript:void(0)" @click="removeFromCart(i,cart)"
                         class="pos-delete"><i class="bx bx-trash"></i></a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="sub-total">
                <ul class="global-list">
                  <li>{{ lang.sub_total }}<span>{{ priceFormat(orderAmount.subTotal) }}</span></li>
                  <li v-if="order_tax_type == 'before_tax' || vat_type == 'product_base'">{{ lang.tax }}<span>{{ priceFormat(orderAmount.taxes) }}</span></li>
                  <li>{{ lang.discount }}<span>{{ priceFormat(orderAmount.discount) }}</span></li>
                  <li>{{ lang.shipping_cost }}<span>{{ priceFormat(orderAmount.shipping_fee) }}</span>
                  </li>
                </ul>
                <div class="order-total" v-if="order_tax_type == 'after_tax' && vat_type == 'order_base'">
                  <p class="font_weight_400">{{ lang.total }} <span>{{ priceFormat(orderAmount.total) }}</span></p>
                  <p class="font_weight_400">{{ lang.tax }}<span>{{ priceFormat(orderAmount.taxes) }}</span></p>
                  <p>{{ lang.grand_total }}<span>{{ priceFormat(orderAmount.taxes + orderAmount.total) }}</span></p>
                </div>
                <div class="order-total" v-else>
                  <p>{{ lang.total }} <span>{{ priceFormat(orderAmount.total) }}</span></p>
                </div>
              </div>
              <div class="pos-footer">
                <div class="form-group">
                  <label>{{ lang.discount }}</label>
                  <input type="number" @keyup="totalAmount" v-model="custom_discount"
                         class="form-control" placeholder="0">
                </div>
                <div class="form-group">
                  <label>{{ lang.shipping_cost }}</label>
                  <input type="number" @keyup="totalAmount" v-model="custom_shipping_cost"
                         class="form-control" placeholder="0">
                </div>

              </div><!-- /.pos-footer -->
              <div class="form-group pos_payment_dropdown text-right">
                <div class="btn-group" v-if="!process_loading">
                  <button type="button" class="btn btn-outline-info dropdown-toggle dropdown-toggle-split"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                          :class="{ 'disable_btn' : cartProducts.length == 0 }"><span
                  >{{ lang.confirm }}</span></button>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" v-if="offline_methods.length>0"
                       href="#" data-target="#offline_payment"
                       data-toggle="modal">{{ lang.offline_payment }}</a>
                    <a class="dropdown-item" href="javaScript:void(0)"
                       @click="confirmOrder('cash_on_delivery')">{{ lang.cash_on_delivery }}</a>
                    <a class="dropdown-item" href="javaScript:void(0)"
                       @click="confirmOrder('cash_payment')">{{ lang.cash_payment }}</a>
                    <a class="dropdown-item" href="javaScript:void(0)"
                       @click="confirmOrder('draft')">{{ lang.keep_in_draft }}</a>
                  </div>
                </div>
                <pos_loading_button v-if="process_loading" :img="'process-img-size'"
                                    :class_name="'btn btn-secondary'"
                                    :loading_image="loading_image"></pos_loading_button>

                <button class="btn btn-outline-info btn-circle" type="button" data-toggle="modal"
                        @click="draftList()" data-target="#draft-list">{{ lang.recent_orders }}
                </button>
                <!--                <a :href="url + '/admin/pos/print-invoice/' + this.order.id" target="_blank"-->
                <!--                   class="btn btn-outline-warning btn-circle" :class="{ 'disable_btn' : !trx_for_invoice }"-->
                <!--                   type="button"><i-->
                <!--                    class="bx bx-printer"></i></a>-->

              </div>
            </div><!-- /.card -->
            <div class="col-lg-12 pl-0 pr-0" v-if="order && order.is_draft == 0">
              <div class="cart-details">
                <div class="card">
                  <div class="sg-card-header d-flex justify-content-between">
                    <table class="table table-striped table-md">
                      <tbody>
                      <tr>
                        <th>#</th>
                        <th>{{ lang.date }}</th>
                        <th>{{ lang.customer }}</th>
                        <th>{{ lang.total_amount }}</th>
                        <th>{{ lang.actions }}</th>
                      </tr>
                      <tr class="table-data-row">
                        <td>1</td>
                        <td>{{ order.order_date }}</td>
                        <td>{{ order.customer_name }}</td>
                        <td>{{ priceFormat(order.total_payable) }}</td>
                        <td>
                          <button v-if="!download_loading" class="btn btn-outline-danger btn-circle"
                                  :class="{ 'disable_btn' : !trx_for_invoice }" type="button"
                                  data-original-title="PDF" @click="download('')"><i
                              class="bx bxs-file-pdf"></i></button>
                          <pos_loading_button v-if="download_loading" :img="'img_size'"
                                              :class_name="'btn-danger'"
                                              :loading_image="loading_image"></pos_loading_button>
                          <a :href="url + '/admin/pos/print-invoice/' + this.order.id" target="_blank"
                             class="btn btn-outline-warning btn-circle"
                             :class="{ 'disable_btn' : invoice_download_loading }"
                             type="button"><i
                              class="bx bx-printer"></i></a>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- /.cart-details -->
        </div>
      </div>
    </form>
    <input type="hidden" name="changed_user" :value="walking_customer.id" class="changed_user" id="changed_user">

    <draft :draft="draft" :loading_image="loading_image" @invoiceDownload="invoiceDownload" :lang="lang"
           :loading_for_draft=loading_for_draft
           :cartProducts="cartProducts" :invoice_download_loading="invoice_download_loading"
           :recent_orders_length="recent_orders" @draftOrder="getDraftOrder"/>
    <div class="modal fade" v-if="offline_methods.length>0" id="offline_payment" tabindex="-1"
         aria-labelledby="offline_payment"
         aria-hidden="true">
      <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ lang.offline_payment }}</h5>
            <button type="button" id="close" class="close modal_close" data-dismiss="modal"
                    aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body shopping-cart">
            <div class="sg-shipping">
              <div class="card-list">
                <ul class="global-list grid-3">
                  <li class="pl-0" v-for="(method,methodIndex) in offline_methods" :key="methodIndex">
                    <div class="input-checkbox">
                      <input type="radio" :id="'offline'+method.id"
                             value="offline_method"
                             @change="offlineCheck(method)"
                             name="radio">
                      <label :for="'offline'+method.id">
                        <img :src="method.image" :alt="method.name"
                             class="img-fluid">
                        {{ method.name }}
                      </label>
                    </div>
                  </li>
                </ul>
                <div class="col-md-12 padding-unset" v-if="offline_method.payment_details.name != ''">
                  <div class="form-group">
                    <label>{{ lang.upload_file }}</label>
                    <div class="input-group">
                      <div class="custom-file d-flex">
                        <label class="upload-image form-control" for="upload-1">
                          <input type="file" id="upload-1" @change="imageUp($event)">
                          <i id="upload-image">{{ lang.upload_file }}</i>
                        </label>
                        <label class="upload-image upload-text" for="upload-2">
                          <input type="file" id="upload-2" @change="imageUp($event)">
                          {{ lang.upload }}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label>{{ lang.transaction_id }}</label>
                    <input type="text" v-model="offline_method.trx_id"
                           class="form-control focus-unset" :placeholder=lang.transaction_id>
                  </div>
                  <div v-if="offline_method.instructions">
                    <div class="form-group">
                      <label>{{ lang.instructions }}</label>
                      <div class="instruction" v-html="offline_method.instructions"></div>
                    </div>
                  </div>
                  <div class="text-center mt-3 button">
                    <button @click="confirmOrder('offline_method')" class="btn btn-outline-primary"
                            v-if="!payment_process_loading">
                      {{ lang.proceed }}
                    </button>
                    <pos_loading_button v-if="payment_process_loading" :img="'process-img-size'"
                                        :class_name="'btn btn-warning'"
                                        :loading_image="loading_image"></pos_loading_button>
                  </div>
                </div>
              </div>
            </div>
          </div><!-- /.modal-body -->
        </div>
      </div>
    </div>
    <user-address :countries="countries" :userAddress="userAddress" :user_id="user_id" @shippingAddress="getAddress"
                  :lang="lang"></user-address>
  </div>
</template>
<script>
import draft from './pos_partial/draft-list'
import userAddress from './pos_partial/user_address'
import pos_loading_button from './pos_partial/pos_loading_button';
import offline_method from "./pos_partial/offline_method";

export default {
  name: "pos",
  props: [
    'settings',
    'active_currency',
    'loading_image',
    'products',
    'vat_tax',
    'vat_type',
    'walking_customer',
    'lang',
    'order_tax_type'
  ],
  components: {
    draft,
    pos_loading_button,
    userAddress,
    offline_method
  },

  data() {
    return {
      form: {
        q: '',
        p: '',
        category_id: '',
        brand_id: '',
      },
      order: '',
      user_id: '',
      invoice: '',
      show: false,
      loading: false,
      loading_for_draft: false,
      cartProducts: [],
      page: 1,
      custom_discount: '',
      custom_shipping_cost: '',
      orderAmount: {
        subTotal: 0,
        total: 0,
        taxes: 0,
        shipping_fee: 0,
        discount: 0,
        user_id: this.walking_customer.id,
        payment_type: '',
        payment_status: 'unpaid',
        is_draft: 0,
        orderType: 'create',
        coupon_discount: {
          code: "",
          discount: 0
        },
        shipping_cost: {
          type: "",
          depend_on_quantity: 0,
          per_cost: 0,
          total_cost: 0
        },
        trx_id: '',
      },
      isModalVisible: false,
      url: document.getElementById('url').value,
      getUrl: "",
      draft: {
        draft_list: [],
        paginate: ''
      },
      copyProductList: [],
      trx_for_invoice: '',
      load_more_loading: '',
      download_loading: false,
      print_loading: false,
      process_loading: false,
      search_key_focus: false,
      searching_product: [],
      userAddress: [],
      searchingProduct: [],
      shipping_address: [],
      offline_method: {
        id: '',
        instructions: '',
        payment_prof_file: '',
        trx_id: '',
        payment_type: 'offline_method',
        payment_details: {
          name: '',
          image: '',
          type: 'custom_payment'
        }
      },
      payment_process_loading: false,
      brands: [],
      countries: [],
      categories: [],
      offline_methods: [],
      all_products: [],
      invoice_download_loading: false,
      recent_orders: ""
    }
  },
  mounted() {
    this.getData();
    this.searchingProduct = this.products.data;
    this.copyProductList = this.products;
    this.pushProducts(this.products.data);

    let that = this;
    that.user_id = that.walking_customer.id;

    $(document).ready(function () {
      that.initiateSelect2();
      $("#on_change_user")
          .on("select2:select", e => {
            that.orderAmount.user_id = e.params.data.id;
            that.user_id = e.params.data.id;
            axios.get(document.getElementById('url').value + '/admin/pos/get-user-address/' + that.orderAmount.user_id)
                .then((response) => {
                  that.userAddress = response.data;
                  that.shipping_address = [];
                })
          })
    });
  },
  computed: {},
  watch: {
    searchingProduct() {
      this.stockManage();
    },
    searching_product() {
      this.stockManage();
    }
  },
  methods: {
    getData() {
      let url = this.url + '/admin/pos/get-data';

      axios.get(url).then(response => {
        if (response.data.error) {
          return toastr['warning'](response.data.error);
        } else {
          this.brands = response.data.brands;
          this.categories = response.data.categories;
          this.countries = response.data.countries;
          this.offline_methods = response.data.offline_methods;
        }
      });
    },
    sortProducts(e, pq) {
      if (e.keyCode == 13) {
        if (this.searching_product.length == 1) {
          return this.cartProduct(this.searching_product[0], 'search');
        }
        return false;
      }

      let p = this.form.p;

      if (pq != 'p') {
        delete this.form.p;
      }

      this.loading = true;
      this.page = 1;
      let url = this.url + '/admin/pos/get-product';
      axios.post(url, this.form).then((response) => {
        this.loading = false;
        this.form.p = p;
        if (response.data.error) {
        } else {
          if (pq == 'p') {
            if (this.form.p == '') {
              this.searching_product = [];
            } else {
              let products = response.data.products.data;
              this.searching_product = products;
              this.pushProducts(products);
            }
          } else {
            let products = response.data.products;
            this.searchingProduct = products.data;
            this.copyProductList.data = products.data;
            this.products.next_page_url = products.next_page_url;
            this.pushProducts(products.data);
          }
        }
      }).catch((error) => {
        this.loading = false;
      })
    },
    cartProduct(stock, search) {
      if (!this.cartProducts.some(el => el.id === stock.id)) {
        if (stock.current_stock > 0) {
          this.checkStock(stock, 'minus', stock.min_order_quantity, search);
          let price = stock.price;
          if (search == 'search') {
            let search = 'search'
          }
          this.cartProducts.push({
            id: stock.id,
            product: {
              price: price,
              variation: stock.name,
              tax: stock.tax,
              qty: stock.min_order_quantity,
              sub_total: price,
              search: search,
              seller_id: stock.seller_id,
              product_id: stock.product_id,
              product_name: stock.product_name,
              discount: stock.discount_amount,
              min_order_quantity: stock.min_order_quantity
            },
          });
          this.totalAmount();
          this.scrollBottom();
        } else {
          return toastr['warning'](this.lang.product_out_of_stock);
        }
      } else {
        let i = this.cartProducts.findIndex(product => product.id == stock.id);

        if (i > -1) {
          let product = '';
          if (search == 'search') {
            product = this.searching_product.find(el => el.id === stock.id);
          } else {
            product = this.searchingProduct.find(el => el.id === stock.id);
          }

          if (product && stock.current_stock > 0) {
            this.checkStock(stock, 'minus');

            this.cartProducts[i].product.qty++;
            if (search == 'search') {
              this.cartProducts[i].product['search'] = 'search'
            }
            this.cartProducts[i].product.tax = product.tax * this.cartProducts[i].product.qty;
            this.cartProducts[i].product.discount = product.discount_amount * this.cartProducts[i].product.qty;
            this.cartProducts[i].product.sub_total = product.price * this.cartProducts[i].product.qty;
          } else {
            return toastr['warning'](this.lang.product_out_of_stock);
          }
          this.totalAmount();
          this.scrollBottom();
        }
        this.stockManage();
      }
    },
    scrollBottom() {
      const element = $('#cart_list');
      element.animate({
        scrollTop: element.prop("scrollHeight")
      }, 500);
    },
    makeZero() {
      this.orderAmount.subTotal = 0;
      this.orderAmount.total = 0;
      this.orderAmount.taxes = 0;
      this.orderAmount.discount = 0;
      this.orderAmount.shipping_fee = 0;
      this.offline_method.trx_id = '';
    },
    makeNull() {
      this.shipping_address = [];
    },
    totalAmount() {
      this.makeZero();
      for (let i = 0; i < this.cartProducts.length; i++) {
        let product = this.cartProducts[i].product;
        this.orderAmount.subTotal += product.price * product.qty;
        this.orderAmount.taxes = product.tax;
        this.orderAmount.discount += product.discount;
      }

      let discount = this.custom_discount;
      let shipping_cost = this.custom_shipping_cost;

      if (!discount) {
        discount = 0;
      }

      if (!shipping_cost) {
        shipping_cost = 0;
      }

      let main_discount = discount / this.active_currency.exchange_rate;
      let main_shipping_cost = shipping_cost / this.active_currency.exchange_rate;

      if (this.vat_tax > 0) {
        this.orderAmount.taxes += ((this.orderAmount.subTotal - this.orderAmount.discount) * this.vat_tax) / 100;
      }

      if (discount != '') {
        this.orderAmount.discount = parseFloat(this.orderAmount.discount) + parseFloat(main_discount);
      }

      if (this.custom_shipping_cost != '') {
        this.orderAmount.shipping_fee = parseFloat(this.orderAmount.shipping_fee) + parseFloat(main_shipping_cost)
      }

      if(this.order_tax_type == 'after_tax' && this.vat_type == 'order_base')
      {
        this.orderAmount.total = (parseFloat(this.orderAmount.subTotal) + parseFloat(this.orderAmount.shipping_fee)) - parseFloat(this.orderAmount.discount);
      }
      else{
        this.orderAmount.total = (parseFloat(this.orderAmount.subTotal) + parseFloat(this.orderAmount.taxes) + parseFloat(this.orderAmount.shipping_fee)) - parseFloat(this.orderAmount.discount);
      }
    },
    cartPlus(cart) {
      // let product = this.copyProductList.data.find(el => el.id === cart.id);
      let product = '';
      if (cart.product.search == 'search') {
        product = this.searching_product.find(el => el.id === cart.id);
      } else {
        product = this.copyProductList.data.find(el => el.id === cart.id);
        if (!product) {
          product = this.all_products.find(el => el.id === cart.id);
        }
      }

      if (product) {

        if (cart.product.qty < product.current_stock) {
          let i = this.cartProducts.findIndex(sku_product => sku_product.id == cart.id);

          if (i > -1) {
            this.cartProducts[i].product.qty++
            this.cartProducts[i].product.tax = product.tax * this.cartProducts[i].product.qty;
            this.cartProducts[i].product.discount = product.discount_amount * this.cartProducts[i].product.qty;
            this.cartProducts[i].product.sub_total = this.cartProducts[i].product.price * this.cartProducts[i].product.qty;
            this.checkStock(cart, 'minus');
            this.totalAmount();
          }
        } else {
          return toastr['warning'](this.lang.product_out_of_stock);
        }
      } else {
        return toastr['warning'](this.lang.oops);
      }

    },
    cartMinus(cart) {
      let stock_product = this.all_products.find(stock => stock.id == cart.id);
      if (cart.product.qty > stock_product.min_order_quantity) {
        let stock_index = this.cartProducts.findIndex(stock => stock.id == cart.id);

        if (stock_index > -1) {
          let product;
          if (cart.product.search == 'search') {
            product = this.searching_product.find(el => el.id === cart.id);
          } else {
            product = this.copyProductList.data.find(el => el.id === cart.id);
            if (!product) {
              product = this.all_products.find(el => el.id === cart.id);
            }
          }
          this.cartProducts[stock_index].product.qty--
          this.cartProducts[stock_index].product.tax = product.tax * this.cartProducts[stock_index].product.qty;
          this.cartProducts[stock_index].product.discount = product.discount_amount * this.cartProducts[stock_index].product.qty;
          this.cartProducts[stock_index].product.sub_total = this.cartProducts[stock_index].product.price * this.cartProducts[stock_index].product.qty;
          this.checkStock(product, 'plus');
          this.totalAmount();
        }

      } else {
        return toastr['warning'](this.lang.please_order_minimum_of + ' ' + cart.product.min_order_quantity + ' ' + this.lang.quantity);
      }
    },
    loadMore() {
      this.load_more_loading = true;
      this.page++;

      let p = this.form.p;
      delete this.form.p;

      axios.post(this.url + '/admin/pos/get-product?page=' + this.page, this.form).then((response) => {
        this.load_more_loading = false;
        this.form.p = p;
        if (response.data.error) {

        } else {
          for (let i = 0; i < response.data.products.data.length; i++) {
            let product = response.data.products.data[i]
            let stock_product = this.products.data.find(el => el.id === product.id);
            if (!stock_product) {
              this.products.data.push(response.data.products.data[i]);
              this.copyProductList.data.push(response.data.products.data[i])
            }
          }
          this.products.next_page_url = response.data.products.next_page_url;
        }

      }).catch((error) => {
        this.load_more_loading = false;
      })
    },
    removeFromCart(i, cart) {
      if (confirm("Are you sure?")) {
        this.cartProducts.splice(i, 1)
        this.totalAmount();
      }

      this.checkStock(cart, 'plus', cart.product.qty);
    },
    confirmOrder(paymentType) {
      if (!confirm("Are you sure?")) {
        return false;
      }

      if (!this.orderAmount.user_id) {
        return toastr['warning'](this.lang.customer_not_selected);
      } else if (this.cartProducts.length == 0) {
        return toastr['warning'](this.lang.product_not_selected);
      } else if (paymentType == 'offline_method' && this.offline_method.payment_details.name == '') {
        return toastr['warning'](this.lang.select_payment_method);
      }

      if (!this.shipping_address.id) {
        if (!confirm(this.lang.confirm_without_address)) {
          return false;
        }
      }

      if (paymentType == 'cash_payment') {
        this.orderAmount.payment_status = 'paid'
      }
      if (paymentType == 'draft') {
        this.orderAmount.is_draft = 1
      } else {
        this.orderAmount.is_draft = 0
      }
      this.orderAmount.payment_type = paymentType;
      let formData = new FormData();

      let orderCarts = []
      for (let i = 0; i < this.cartProducts.length; i++) {
        let orderinfo = {
          product_id: this.cartProducts[i].product.product_id,
          seller_id: this.cartProducts[i].product.seller_id,
          quantity: this.cartProducts[i].product.qty,
          price: this.cartProducts[i].product.price,
          tax: this.cartProducts[i].product.tax,
          total_price: this.cartProducts[i].product.sub_total,
          variation: this.cartProducts[i].product.variation,
          stockId: this.cartProducts[i].id,
          order_id: this.cartProducts[i].product.order_id,
          order_details_id: this.cartProducts[i].product.order_details_id,
        }
        orderCarts.push(orderinfo)
      }

      formData.append('image', this.offline_method.payment_prof_file);
      formData.append('carts', JSON.stringify(orderCarts));
      formData.append('shippingAddress', JSON.stringify(this.shipping_address));
      formData.append('offline_method_details', JSON.stringify(this.offline_method));
      formData.append('orderAmount', JSON.stringify(this.orderAmount));

      if (paymentType == 'offline_method') {
        this.payment_process_loading = true
      } else {
        this.process_loading = true;
      }
      if (this.orderAmount.orderType == 'update' && paymentType == 'draft') {
        this.getUrl = this.url + '/admin/pos/update-draft'
      } else {
        this.getUrl = this.url + '/admin/pos/confirm-order'
      }
      axios.post(this.getUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        this.cartProducts = [];
        if (paymentType == 'offline_method') {
          $('#offline_payment').hide();
          const body = document.querySelector("body");
          body.style.overflow = "auto";
          this.payment_process_loading = false;
        } else {
          this.process_loading = false;
        }
        if (response.data.type == 'error') {
          toastr[response.data.type](response.data.message);
        } else {

          // this.cartProducts = []
          if (paymentType == 'draft' && this.orderAmount.orderType == 'create') {

            this.draft.draft_list = [];
            toastr[response.data.type](response.data.draftMessage);
            this.makeNull();
          } else {

            toastr[response.data.type](response.data.message);
          }
          this.recent_orders = [];
          let order = response.data.order;
          this.process_loading = false;
          this.order = order;
          this.trx_for_invoice = order.trx_id;
          this.orderAmount.orderType = 'create'
          this.makeZero();
          this.custom_discount = '';
          this.custom_shipping_cost = '';
          // $('#invoice').modal('show')
        }
      }).catch((error) => {
        this.process_loading = false;
      })
    },
    checkStock(product, checkFor, qty) {
      if (!qty) {
        qty = 1;
      }

      // let stock_product = this.searchingProduct.findIndex(st_pro => st_pro.id == product.id);
      let all_index = this.all_products.findIndex(st_pro => st_pro.id == product.id);
      let searching_index = this.searching_product.findIndex(st_pro => st_pro.id == product.id);

      if (all_index > -1) {
        if (checkFor == 'minus') {
          this.all_products[all_index].current_stock -= qty;
        } else {
          this.all_products[all_index].current_stock += qty;
        }
      }
      if (searching_index > -1) {
        if (checkFor == 'minus') {
          this.searching_product[searching_index].current_stock -= qty;
        } else {
          this.searching_product[searching_index].current_stock -= qty;
        }
      }
      return true;
    },
    imageUp(event) {
      this.offline_method.payment_prof_file = event.target.files[0];
      document.getElementById('upload-image').innerHTML = this.offline_method.payment_prof_file.name;
    },
    showModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    draftList() {
      if (this.draft.draft_list.length == 0) {
        this.loading_for_draft = true;
        axios.post(this.url + '/admin/pos/draft-list').then((response) => {
          this.loading_for_draft = false;
          this.draft.draft_list = response.data.draftList.data
          this.draft.paginate = response.data.draftList.next_page_url;
        }).catch((error) => {
          this.loading_for_draft = false;
        })
      }
    },
    getDraftOrder(trx_id) {
      let trxId = {
        trxId: trx_id
      }

      this.orderAmount.orderType = 'update'
      axios.post(this.url + '/admin/pos/draft-to-cart', trxId).then((response) => {
        let order = response.data.order;

        this.cartProducts = [];
        for (let i = 0; i < response.data.product.length; i++) {
          let product = response.data.product[i];
          if (this.cartProducts.length > 0) {
            let findIndex = this.cartProducts.findIndex(stock => product.product.id == stock.id);
            if (findIndex > -1) {
              this.cartProducts[findIndex].product.qty += response.data.product[i].product.qty;
              this.checkStock(product.product, 'minus', product.product.qty)
              this.totalAmount();
            } else {
              this.cartProducts.push(product);
              this.checkStock(product.product, 'minus', product.product.qty);
              this.totalAmount();
            }
          } else {
            this.cartProducts.push(product);
            this.checkStock(product.product, 'minus', product.product.qty)
            this.totalAmount();

          }
          this.copyProductList.data.push(product.product)
        }
        this.orderAmount.subTotal = order.sub_total;
        this.orderAmount.taxes = order.tax;
        this.orderAmount.shipping_fee = order.shipping_cost;
        this.orderAmount.discount = order.discount;
        if (this.order_tax_type == 'after_tax' && this.vat_type == 'order_base')
        {
          this.orderAmount.total = order.total_amount;
        }
        else{
          this.orderAmount.total = order.total_payable;
        }
        this.orderAmount.trx_id = trx_id;
        this.shipping_address = order.shipping_address;
        this.cartProducts.trxId = this.orderAmount.trx_id;
        this.searchingProduct = this.searchingProduct.filter(product => product.image);
      }).catch((error) => {

      })
    },
    download(type) {
      if (!this.order.id) {
        return toastr['error'](this.lang.no_order_found);
      }
      if (type != 'fromList') {
        this.download_loading = true;
      } else {
        this.invoice_download_loading = true;
      }
      axios.get(this.url + '/admin/pos/invoice-download/' + this.order.id, {responseType: 'arraybuffer'})
          .then(response => {
            this.download_loading = false;
            this.invoice_download_loading = false;
            if (response.data.error) {
              this.$toastr.error(response.data.error, this.lang.Error + ' !!');
            } else {
              let blob = new Blob([response.data], {type: 'application/pdf'});
              let link = document.createElement('a');
              link.href = window.URL.createObjectURL(blob);
              link.download = this.order.code + '.pdf';
              link.click();
              this.makeZero();
              this.makeNull();
              this.cartProducts = []

            }
          }).catch(error => {
        this.download_loading = false;
        this.$toastr.error(error.response.statusText, this.lang.Error + ' !!');
      })
    },
    priceFormat(amount) {
      // amount = amount/this.defaultCurrency.exchange_rate;
      amount = amount * this.active_currency.exchange_rate;

      let no_of_decimals, decimal_separator, thousands_separator, currency_symbol_format, fixed_amount,
          formatted_amount = '';
      no_of_decimals = this.settings.no_of_decimals ? this.settings.no_of_decimals : 2;

      decimal_separator = this.settings.decimal_separator ? this.settings.decimal_separator : '.';
      thousands_separator = decimal_separator == ',' ? '.' : ',';
      currency_symbol_format = this.settings.currency_symbol_format ? this.settings.currency_symbol_format : 'amount_symbol';


      if (currency_symbol_format == 'amount_symbol')
        formatted_amount = this.$options.filters.currency(amount, this.active_currency.symbol, no_of_decimals, {
          symbolOnLeft: false,
          thousandsSeparator: thousands_separator,
          decimalSeparator: decimal_separator
        });
      if (currency_symbol_format == 'symbol_amount')
        formatted_amount = this.$options.filters.currency(amount, this.active_currency.symbol, no_of_decimals, {
          thousandsSeparator: thousands_separator,
          decimalSeparator: decimal_separator
        });
      if (currency_symbol_format == 'amount__symbol')
        formatted_amount = this.$options.filters.currency(amount, this.active_currency.symbol, no_of_decimals, {
          symbolOnLeft: false,
          thousandsSeparator: thousands_separator,
          decimalSeparator: decimal_separator,
          spaceBetweenAmountAndSymbol: true
        });
      if (currency_symbol_format == 'symbol__amount')
        formatted_amount = this.$options.filters.currency(amount, this.active_currency.symbol, no_of_decimals, {
          thousandsSeparator: thousands_separator,
          decimalSeparator: decimal_separator,
          spaceBetweenAmountAndSymbol: true
        });

      return formatted_amount;
    },
    hideSearchDropdown: function () {
      this.search_key_focus = false;
      document.removeEventListener('click', this.hideSearchDropdown)
    },
    searchDropdown: function () {
      this.search_key_focus = true;
      this.search_key_focus && this.$nextTick(() => {
        document.addEventListener('click', this.hideSearchDropdown)
      })
    },
    getAddress(address) {
      this.shipping_address = address;
    },
    initiateSelect2() {
      let that = this;

      $('.pos-customer').select2({
        placeholder: 'Select Customer',
        minimumInputLength: 2,
        ajax: {
          type: "GET",
          dataType: 'json',
          url: document.getElementById('url').value + '/admin/pos/get-user-by-search',


          data: function (params) {
            that.orderAmount.user_id = ''
            return {
              q: params.term // search term
            };
          },
          delay: 250,
          headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
          },
          processResults: function (data) {
            return {
              results: data,
            };
          },
          cache: true
        },
      });

      if ($('.pos-customer').find("option[value='" + that.walking_customer.id + "']").length) {
        $('.pos-customer').val(that.walking_customer.id).trigger('change');
      } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option(that.walking_customer.full_name, that.walking_customer.id, true, true);
        // Append it to the select
        $('.pos-customer').append(newOption).trigger('change');
      }
    },
    methods(method) {
      this.offline_method = method;
    },
    offlineCheck(offline) {
      this.offline_method.id = offline.id;
      this.offline_method.payment_details.name = offline.name;
      this.offline_method.payment_details.image = offline.image;
      this.offline_method.instructions = offline.instructions;
    },
    pushProducts(products) {
      for (let i = 0; i < products.length; i++) {
        let stock = products[i];
        let index = this.all_products.findIndex(product => stock.id == product.id);
        if (index == -1) {
          this.all_products.push(stock);
        }
      }


    },
    stockManage() {
      for (let i = 0; i < this.searchingProduct.length; i++) {
        let search_product = this.searchingProduct[i];
        let product = this.all_products.find(stock => stock.id == search_product.id);
        if (product) {
          this.searchingProduct[i].current_stock = product.current_stock;
        }
      }
      for (let i = 0; i < this.searching_product.length; i++) {
        let search_product = this.searching_product[i];
        let product = this.all_products.find(stock => stock.id == search_product.id);
        if (product) {
          this.searching_product[i].current_stock = product.current_stock;
        }
      }
    },
    invoiceDownload(order_for_invoice) {
      this.order = order_for_invoice
      this.download('fromList');
    }
  },
}
</script>

<style scoped>


</style>
