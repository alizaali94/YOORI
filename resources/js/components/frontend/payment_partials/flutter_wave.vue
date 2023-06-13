<template>
  <div>
    <a href="#" class="btn btn-primary w-100" data-bs-toggle="modal" data-bs-target="#fw_modal"
       v-if="type == 'flutter_wave' ">
      {{ lang.pay_now }}</a>
    <div class="modal fade" id="fw_modal" tabindex="-1" aria-labelledby="fw_modal"
         aria-hidden="true">
      <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ lang.pay_with_flutter }}</h5>
            <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-group">
                  <input type="text" v-model="name" class="form-control"
                         :placeholder="lang.name" required>
                </div>
              </div>
              <div class="col-lg-12">
                <input type="email" v-model="email" class="form-control"
                       :placeholder="lang.email" required>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <input type="tel" v-model="phone" class="form-control"
                         :placeholder="lang.phone" required>
                </div>
              </div>
            </div>
            <div class="col-lg-12 text-center">
              <a href="javascript:void(0)" class="btn btn-primary flutter_wave" @click="initiatePopup">
                {{ lang.pay }} {{ priceFormat(amount) }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "flutter_wave",
    props: ['trx_id', 'code', 'amount','transaction_type','type'],
    data() {
        return {
            name: '',
            email: '',
            phone: '',
        }
    },
    mounted() {
        const script = document.createElement("script")
        script.src = "https://checkout.flutterwave.com/v3.js";
        document.body.appendChild(script);
    },
    methods: {
        initiatePopup() {
            let that = this;
            FlutterwaveCheckout({
                public_key: this.settings.flw_public_key,
                tx_ref: that.reference(),
                amount: that.round(that.amount*that.activeCurrency.exchange_rate,2),
                currency: this.activeCurrency.code,
                payment_options: "card, banktransfer,mobilemoneyghana, ussd",
                // redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",

                callback: function (payment) {
                    that.verifyTransaction(payment);
                },
                meta: {
                    consumer_id: 23,
                    consumer_mac: "92a3-912ba-1192a",
                },
                customer: {
                    email: that.email,
                    phone_number: that.phone,
                    name: that.name,
                },
                customizations: {
                    title: that.settings.system_name,
                    description: "Payment for an awesome cruise",
                    logo: that.settings.dark_logo,
                },
            });
        },
        reference() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        },
        verifyTransaction(payment)
        {
            let form = {
                transaction_id : payment.transaction_id,
                name: this.name,
                email: this.email,
                phone: this.phone,
                payment_type: 'flutter_wave',
                trx_id: this.trx_id,
                amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                code: this.code,
            };
            if(this.transaction_type == 'wallet_recharge'){
              let url = this.getUrl('user/recharge-wallet');
              axios.post(url, form).then(response => {
                if (response.data.error) {
                  toastr.error(this.lang.something_went_wrong, this.lang.Error + ' !!');
                } else {
                  toastr.success(response.data.success, this.lang.Success + ' !!');
                }
              }).catch(error => {
                alert(this.lang.something_went_wrong);
              });
            }else{
              let url = this.getUrl('user/complete-order');
              axios.post(url,form).then(response => {
                if (response.data.error) {
                  toastr.error(this.lang.something_went_wrong, this.lang.Error + ' !!');
                } else {
                  toastr.success(response.data.success, this.lang.Success + ' !!');

                  if (this.code) {
                    window.location.href = this.getUrl('get-invoice/'+this.code);
                  } else {
                    window.location.href = this.getUrl('invoice/'+this.trx_id);
                  }
                }
              }).catch(error => {
                alert(this.lang.something_went_wrong);
              });
            }


        }
    }
}
</script>

<style scoped>

</style>
