<template>
  <google
      id="google-pay-btn"
      :options="options"
      @payed="payed()"
      @cancel="cancelled"
  />
</template>

<script>
import google from 'vue-google-pay';

export default {
  name: "google_pay",
  components: {google},
  props: ['trx_id', 'code', 'amount','type'],
  data() {
    return {
      options: {
        environment: 'TEST',
        buttonColor: 'black',
        buttonType: 'pay',
        allowedCardNetworks: [
          'AMEX',
          'DISCOVER',
          'INTERAC',
          'JCB',
          'MASTERCARD',
          'VISA'
        ],
        allowedCardAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        merchantInfo: {
          merchantName: '',
          merchantId: ''
        },
        transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '',
          currencyCode: 'USD',
          countryCode: 'US'
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: '',
            gatewayMerchantId: ''
          }
        }
      }
    }
  },
  mounted() {
    this.options.transactionInfo.totalPrice = this.round(this.amount, 2);
    this.options.merchantInfo.merchantName = this.settings.google_pay_merchant_name;
    this.options.merchantInfo.merchantId = this.settings.google_pay_merchant_id;
    this.options.tokenizationSpecification.parameters.gateway = this.settings.google_pay_gateway;
    this.options.tokenizationSpecification.parameters.gatewayMerchantId = this.settings.google_pay_gateway_merchant_id;
  },
  methods: {
    payed(paymentData) {
      let url = '';
      let data = {};

      if(this.type = 'wallet_recharge'){
        let payment_type = "google_pay"
          url = this.getUrl('user/complete-recharge?amount' + this.amount + '&payment_type' + payment_type);
      }else{
        if (this.authUser)
          url = this.getUrl('user/complete-order?code=' + this.code + '&trx_id=' + this.trx_id);
        else
          url = this.getUrl('user/complete-order?code=' + this.code + '&guest=1' + '&trx_id=' + this.trx_id);
      }

      data.amount = this.amount;
      data.payment_type = 'google_pay';
      data.code = this.code;
      data.trx_id = this.trx_id;
      data.order = paymentData;

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
          }).catch((error) => {
        this.loading = false;
      })
    },
    cancelled() {
    }
  }
}
</script>

<style scoped>

</style>