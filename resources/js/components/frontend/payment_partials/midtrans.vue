<template>
  <a href="javascript:void(0)" class="btn btn-primary w-100" id="pay-button">
    {{ lang.pay_now }}</a>
</template>

<script>
export default {
    name: "mid_trans",
    props: ['mid_token','trx_id', 'code', 'amount','type'],
    data() {
        return {
            name: '',
            email: '',
            phone: '',
        }
    },
    mounted() {
      const script = document.createElement("script")
      script.src = "https://app.midtrans.com/snap/snap.js";
      script.setAttribute('data-client-key', this.settings.mid_trans_client_id);
      document.body.appendChild(script);

      let token = this.mid_token;
      let authUser = this.authUser;
      let amount = this.amount;
      let code = this.code;
      let trx_id = this.trx_id;
      let that = this;

      document.getElementById('pay-button').onclick = function () {
        // SnapToken acquired from previous step
        snap.pay(token, {
          // Optional
          onSuccess: function (result) {
            let url = '';
            let data = {};

            if(this.type = 'wallet_recharge'){
              let payment_type = "mid_trans"
              url = this.getUrl('user/complete-recharge?amount' + this.amount + '&payment_type' + payment_type);
            }else{
              if (authUser)
                url = that.getUrl('user/complete-order?code=' + code + '&trx_id=' + trx_id);
              else
                url = that.getUrl('user/complete-order?code=' + code + '&guest=1' + '&trx_id=' + trx_id);
            }

            data.amount = amount;
            data.payment_type = 'google_pay';
            data.code = code;
            data.trx_id = trx_id;
            data.order = result;

            this.axios.post(url, data)
                .then((response) => {
                  if (response.data.error) {
                    toastr.error(response.data.error, that.lang.Error + ' !!');
                  } else {
                    this.loading = false;
                    if (this.code) {
                      this.$router.push({name: 'get.invoice', params: {orderCode: code}});
                    } else {
                      this.$router.push({name: 'invoice.list', params: {trx_id: trx_id}});
                    }
                    toastr.success(response.data.success, that.lang.Success + ' !!');
                  }
                }).catch((error) => {
              that.loading = false;
            })
          },
          // Optional
          onPending: function (result) {
          },
          // Optional
          onError: function (result) {
            that.$router.push('payment');
          }
        });
      }
    },
    methods: {
    }
}
</script>

<style scoped>

</style>
