<template>

</template>

<script>
import pos_loading_button from "./pos_loading_button";

export default {
  name: "offline_method",
  props : ['offline_methods','lang','orderAmount','shipping_address','cartProducts'],
  components : {
    pos_loading_button
  },
  data() {
    return {
      loading_image : '',
    }
  },
  methods: {

    confirmOrder(paymentType) {
      if (!confirm("Are you sure?")) {
        return false;
      }

      if (this.orderAmount.user_id == '') {
        return toastr['warning']('customer not selected');
      } else if (this.cartProducts.length == 0) {
        return toastr['warning']('product not selected');
      } else if (paymentType == 'offline_method' && this.offline_method.payment_details.name == '') {
        return toastr['warning']('Please select the payment method');
      }

      if (this.orderAmount.user_id == 'Walk-In Customer') {
        this.orderAmount.user_id = this.walking_customer.id
      }
      if (this.shipping_address.length == 0) {
        if (!confirm("Are you sure? Do you want to order without shipping address")) {
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

      /*axios.post(this.getUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then((response) => {
        if (paymentType == 'offline_method') {
          this.payment_process_loading = false
        } else {
          this.process_loading = false
        }
        if (response.data.type == 'error') {
          toastr[response.data.type](response.data.message);
        } else {
          // this.cartProducts = []
          if (paymentType == 'draft' && this.orderAmount.orderType == 'create') {
            toastr[response.data.type](response.data.draftMessage);
            this.makeZero();
            this.makeNull();
          } else {
            toastr[response.data.type](response.data.message);
          }
          this.trx_for_invoice = response.data.order.trx_id;
          this.orderAmount.orderType = 'create'
          this.custom_discount = 0;
          this.custom_shipping_cost = 0;
          $('.modalHide').modal('hide')
          // $('#invoice').modal('show')
        }
      }).catch((error) => {
        this.process_loading = false;
      })*/
    },
  }
}
</script>

<style scoped>

</style>