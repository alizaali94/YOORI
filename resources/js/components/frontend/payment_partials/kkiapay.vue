<template>
  <div class="home">
    <button class="btn btn-primary kkiapay-button" >{{ lang.pay_now }}</button>
  </div>
</template>

<script>


export default {
  name: "kkiaPay",
  props: ['trx_id', 'code', 'amount', 'payment_type','xof','type'],
  mounted() {
    const script = document.createElement("script")
    script.src = this.getUrl('public/frontend/js/k.js');
    let amount = this.type == 'wallet' ? this.round((this.amount / this.activeCurrency.exchange_rate) * this.xof.exchange_rate) : this.round(this.amount* this.xof.exchange_rate);
    script.setAttribute('amount', amount);
    script.setAttribute('url', this.settings.dark_logo);
    script.setAttribute('position', 'center');
    script.setAttribute('theme', this.settings.menu_background_color);
    script.setAttribute('sandbox', this.settings.is_kkiapay_sandboxed);
    script.setAttribute('key', this.settings.kkiapay_public_key);
    let url = this.type == 'wallet' ? this.getUrl('user/recharge-wallet?amount='+this.amount+'&type=wallet&payment_type=kkiapay') : this.getUrl('user/complete-order?payment_type=kkiapay&code=' + this.code + '&trx_id=' + this.trx_id);
    script.setAttribute('callback', url);
    document.body.appendChild(script);
  },
  methods: {
    successHandler(response) {
      let form = {
        payment_type: 'kkiapay',
        trx_id: this.trx_id,
        code: this.code,
        account: response.account,
        transaction_id: response.transactionId,
      };

      let url = this.getUrl('user/complete-order');
      axios.post(url, form).then(response => {
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
    },
  },
  beforeDestroy() {

  },
}
</script>

<style scoped>

</style>
