<template>
  <div class="mx-auto w_40" v-show="payment_type == 'paypal'"
       id="paypal-button-container" ref="paypal"></div>
</template>

<script>
export default {
    name: "paypal",
    props : ['trx_id','code','amount','payment_type','type'],
    mounted() {
      this.loadPaypal();
    },
    methods : {
        loadPaypal() {
            const script = document.createElement("script")
            script.src = "https://www.paypal.com/sdk/js?client-id=" + this.settings.paypal_key;
            script.setAttribute('data-namespace', 'paypal_sdk');
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        setLoaded: function () {
            window.paypal_sdk.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "Product Purchase",
                                amount: {
                                    currency_code: "USD",
                                    value: this.round(this.amount / this.activeCurrency.exchange_rate, 2)
                                }
                            }
                        ]
                    });
                },
                onApprove: async (data, actions) => {
                    const order = await actions.order.capture();
                    // this.data;
                    this.loading = true;
                    let url ='';

                    if (this.type == 'wallet') {
                        url = this.getUrl('user/recharge-wallet');
                    } else {
                      if (this.authUser)
                        url = this.getUrl('user/complete-order?code=' + this.code + '&trx_id=' + this.trx_id);
                      else
                        url = this.getUrl('user/complete-order?code=' + this.code + '&guest=1' + '&trx_id=' + this.trx_id);
                    }


                    data.amount = this.payment_form.total;
                    data.payment_type = this.payment_type;
                    data.order = order;
                    this.axios.post(url, data)
                        .then((response) => {
                            if (response.data.error) {
                                toastr.error(response.data.error, this.lang.Error + ' !!');
                            } else {
                                this.loading = false;
                                if (this.code) {
                                    this.$router.push({name: 'get.invoice', params: {orderCode: this.code}});
                                } else {
                                    this.$router.push({name: 'invoice.list', params: {trx_id: this.trx_id}});
                                }
                                toastr.success(response.data.success, this.lang.Success + ' !!');
                            }
                        })
                },
                onError: err => {
                    alert('Error')
                }
            }).render('#paypal-button-container');
        },
    }
}
</script>

<style scoped>

</style>
