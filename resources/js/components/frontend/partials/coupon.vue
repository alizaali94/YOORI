<template>
  <div class="accordion" id="couponAccordion">
    <div class="accordion-item">
      <div class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                data-bs-target="#couponCollapse" aria-expanded="true"
                aria-controls="collapseOne"><span>
                                            <img :src="getUrl('public/images/others/pencil1.png')" alt="Image"
                                                 class="img-fluid"></span>{{ lang.apply_coupon_code }}
        </button>
      </div>
      <div id="couponCollapse" class="accordion-collapse collapse"
           aria-labelledby="headingOne" data-bs-parent="#couponAccordion">
        <div class="accordion-body">
          <div class="coupon-code-list">
            <div class="coupon-code" v-for="(coupon,index) in coupon_list"
                 :key="index">
              <h5>{{ coupon.title }}</h5>
              <P>{{
                  coupon.discount_type == 'flat' ? priceFormat(coupon.discount) : coupon.coupon_discount + '% ' + lang.off
                }}</P>
              <button type="button" class="btn-close" @click="removeCoupon(coupon.coupon_id)"
                      aria-label="Close" :disabled="disabled"></button>
            </div>
          </div>
          <form @submit.prevent="applyCoupon">
            <input type="text" v-model="payment_form.coupon_code"
                   class="form-control" :placeholder="lang.enter_coupon_code" required>
            <loading_button v-if="loading" :class_name="'opacity_5'"></loading_button>
            <button v-else>{{ lang.apply }}</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coupon",
  props: ['coupon_list', 'cartList'],
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    applyCoupon() {
      let url = this.getUrl('user/apply_coupon');
      this.payment_form.trx_id = this.cartList[0].trx_id;
      this.loading = true;
      axios.post(url, this.payment_form).then((response) => {
        this.loading = false;
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          toastr.success(response.data.success, this.lang.Success + ' !!');
          this.carts = [];
          let carts = response.data.carts;
          let checkouts = response.data.checkouts;
          let coupons = response.data.coupons;
          this.$parent.parseData(carts, checkouts, coupons);
          this.payment_form.coupon_code = '';
        }
      }).catch(error => {
        this.loading = false;
        toastr.success('Something Went Wrong', 'Error !!');
      });
    },
    removeCoupon(id) {
      if (confirm('Are You Sure ?')) {
        let url = this.getUrl('user/coupon-delete');
        this.disabled = true;
        let form = {
          trx_id: this.cartList[0].trx_id,
          coupon_id: id,
          user_id: this.authUser.id,
        }

        axios.post(url, form).then((response) => {
          this.disabled = false;
          if (response.data.error) {
            toastr.error(response.data.error, this.lang.Error + ' !!');
          } else {
            toastr.success(response.data.success, this.lang.Success + ' !!');
            this.carts = [];
            let carts = response.data.carts;
            let checkouts = response.data.checkouts;
            let coupons = response.data.coupons;
            this.$parent.parseData(carts, checkouts, coupons);
            this.payment_form.coupon_code = '';
          }
        }).catch(error => {
          this.disabled = false;
          toastr.success('Something Went Wrong', 'Error !!');
        });
      }
    },
  }
}
</script>

<style scoped>

</style>
