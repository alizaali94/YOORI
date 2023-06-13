<template>
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
                        <paystack :class="{ 'overlay_btn' : !name || !email || !phone }"
                                  :amount="round(amount*100*activeCurrency.exchange_rate)"
                                  :email="email"
                                  :phone="phone"
                                  :name="name"
                                  :paystackkey="paystack_key"
                                  :callback="callback"
                                  :reference="reference"
                                  :channels="channels"
                                  :currency="activeCurrency.code"
                                  :close="close"
                                  :embed="false">
                            <i class="bx bx-money"></i>
                            {{ lang.pay }} {{ priceFormat(amount) }}
                        </paystack>
                    </div>
                </div>
</template>

<script>
import paystack from 'vue-paystack';

export default {
    name: "pay-stack",
    props: ['trx_id', 'code', 'amount', 'type','paystack_key','ngn_exchange_rate','transaction_type'],
    components: {
        paystack
    },
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            channels: ['card', 'bank', 'ussd', 'mobile_money']
        }
    },
    mounted() {
    },
    computed: {
        reference() {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (let i = 0; i < 10; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }
    },
    methods: {
        callback: function (response) {
            $('#paystack_modal').modal('hide');
            if (response.status == 'success') {
                let form = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    payment_type: this.type,
                    trx_id: this.trx_id,
                    amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                    code: this.code,
                    ref: response.reference,
                };

                if(this.transaction_type == 'wallet_recharge'){
                  let url = this.getUrl('user/recharge-wallet');
                  axios.post(url,form).then(response => {
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
                        this.$router.push({name: 'get.invoice', params: {orderCode: this.code}});
                      } else {
                        this.$router.push({name: 'invoice.list', params: {trx_id: this.trx_id}});
                      }
                    }
                  }).catch(error => {
                    alert(this.lang.something_went_wrong);
                  });
                }

            } else {
                alert(this.lang.something_went_wrong);
            }
        },
        close: function () {
        }
    }
}
</script>

<style scoped>

</style>
