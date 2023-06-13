<template>
  <div class="order-table">
    <table class="table">
      <thead>
      <tr>
        <th scope="col">{{ lang.product }}</th>
        <th scope="col">{{ lang.date }}</th>
        <th scope="col">{{ lang.delivery_status }}</th>
        <th scope="col">{{ lang.pay_status }}</th>
        <th scope="col">{{ lang.total }}</th>
        <th scope="col">{{ lang.action }}</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(orderDetails,i) in orders" :key="i" v-if="orderDetails.is_deleted == 0">
        <th scope="row">
          <div class="product">
            <a href="javascript:void(0)">
                        <span class="product-thumb">
                          <img :src="orderDetails.image" :alt="orderDetails.product_name"
                               class="img-fluid">
                        </span>
              <div class="text">
                <p>{{ orderDetails.product_name }}</p>
                <span v-if="orderDetails.variation"> {{ orderDetails.variation }}</span>
                <span v-else> {{ orderDetails.sku }}</span>
              </div>
            </a>
          </div><!-- /.product -->
        </th>
        <td>{{ orderDetails.order_date }}</td>
        <td class="text-capitalize">
          <div
              :class="orderDetails.delivery_status == 'pending' ? 'pending' : (orderDetails.delivery_status == 'delivered' ? 'complete' : (orderDetails.delivery_status == 'canceled' ? 'cancel' : 'delivery-info'))">
                    <span>
                        {{
                        orderDetails.delivery_status == 'pending' ? lang.Pending :
                            (orderDetails.delivery_status == 'delivered' ? lang.delivered :
                                (orderDetails.delivery_status == 'canceled' ? lang.Canceled :
                                    (orderDetails.delivery_status == 'confirmed' ? lang.Confirmed :
                                        (orderDetails.delivery_status == 'picked_up' ? lang.picked_up :
                                            (orderDetails.delivery_status == 'on_the_way' ? lang.on_the_way : "")))))
                      }}
                    </span>
          </div>
        </td>
        <td>
          <div class="paid od_payment_status" :class="orderDetails.payment_status == 'paid' ? 'paid' : 'unpaid'">
                    <span>
                        {{ orderDetails.payment_status == 'paid' ? lang.Paid : (orderDetails.payment_status == 'unpaid' ? lang.Unpaid : lang.refunded_to_wallet) }}
                    </span>
          </div>
        </td>
        <td><span>{{ priceFormat(orderDetails.total_payable) }}</span></td>
        <td>
          <div class="dropdown">
            <button class="dropdown-toggle btn-primary" type="button" id=""
                    @click="orderDropdown(orderDetails.order_id)"
                    :class="orderDetails.order_id == order_dropdown ? 'show' : ''" data-bs-toggle="dropdown"
                    aria-expanded="false">{{ lang.Actions }}
            </button>
            <ul class="dropdown-menu text-capitalize" :class="orderDetails.order_id == order_dropdown ? 'show' : ''">
              <li v-if="orderDetails.delivery_status == 'pending'">
                <a href="javascript:void(0)" @click="cancelOrder(orderDetails.order_id,i)">{{ lang.cancel }}</a>
              </li>
              <li>
                <router-link
                    v-if="orderDetails.payment_status == 'unpaid' && orderDetails.payment_type != 'cash_on_delivery' && orderDetails.delivery_status != 'cancelled' && orderDetails.delivery_status != 'offline_method'"
                    :to="{name: 'payment' , params : { code : orderDetails.code } }">{{ lang.pay_now }}
                </router-link>
              </li>
              <li>
                <router-link :to="{name: 'get.invoice',params:{orderCode:orderDetails.code}}">{{ lang.view }}
                </router-link>
              </li>
              <li>
                <a href="javascript:void(0)"
                   @click="download(orderDetails.order_id, orderDetails.code)">{{ lang.download }}</a>
              </li>
              <li v-if="orderDetails.product_file_id && orderDetails.payment_status == 'paid'">
                <a v-for="(url,index) in orderUrls" :key="index" v-if="index == orderDetails.id"
                   :href="url">{{ lang.download_file }}</a>
              </li>
              <li v-if="orderDetails.delivery_status == 'delivered' || orderDetails.delivery_status == 'canceled'">
                <a href="javascript:void(0)" @click="removeOrder(orderDetails.order_id,i)">{{ lang.delete }}</a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "orders",
  props: [
    'orders',
    'user_dashboard'
  ],
  data() {
    return {
      url: "",
      order_dropdown: "",
      page: 2,
    }
  },
  mounted() {
  },
  computed: {
    orderUrls() {
      return this.$store.getters.getOrderUrl
    }
  },
  methods: {
    removeOrder(order_id, i) {
      let url = this.getUrl('user/remove-order/' + order_id);
      this.$Progress.start();
      axios.get(url).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, this.lang.Success + ' !!');
          this.show_load_more = this.orders.next_page_url
          this.page--
          this.orders.splice(i,1);
        }
        this.order_dropdown = ""
        this.$Progress.finish();
      });
    },
    cancelOrder(order_id, i) {
      let url = this.getUrl('user/cancel-order/' + order_id);
      if (confirm("Are you sure?")) {
        this.$Progress.start();
        axios.get(url).then((response) => {
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            this.orders[i].delivery_status = 'canceled'
            this.orders[i].payment_status = this.orders[i].payment_status == 'unpaid' ? 'unpaid' : this.lang.refunded_to_wallet
            this.$store.dispatch('user', response.data.user);
          }
          this.order_dropdown = ""
          this.$Progress.finish();
        });
      }
    },
    orderDropdown(id) {
      if (this.order_dropdown == '') {
        this.order_dropdown = id;
      } else {
        this.order_dropdown = '';
      }
    },
    download(id, code) {
      axios.get(this.getUrl('user/invoice/download/' + id), {responseType: 'arraybuffer'})
          .then(response => {
            let blob = new Blob([response.data], {type: 'application/pdf'})
            let link = document.createElement('a')
            link.href = window.URL.createObjectURL(blob)
            link.download = code + '.pdf'
            link.click()
            this.order_dropdown = '';
          })
    },
  }
}
</script>
