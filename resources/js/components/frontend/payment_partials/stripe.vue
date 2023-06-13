<template>
    <div class="modal fade" id="stripe_modal" tabindex="-1" aria-labelledby="stripe_modal"
         aria-hidden="true">
        <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ lang.pay_with_stripe }}</h5>
                    <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12 text-center">
                            <div class="form-group">
                                <div class="form-group">
                                    <input type="text" v-model="stripe_form.name" class="form-control"
                                           :placeholder="lang.name">
                                </div>
                                <input type="email" v-model="stripe_form.email" class="form-control"
                                       :placeholder="lang.email">
                            </div>

                            <div class="form-group">
                                <input type="tel" v-model="stripe_form.phone" class="form-control"
                                       :placeholder="lang.phone">
                            </div>
                            <StripeElements
                                ref="stripe_ref"
                                :pk="settings.stripe_key"
                                locale="auto"
                                @token="tokenCreated"
                                @loading="stripe_form.loading = $event"
                            ></StripeElements>
                            <button @click="submit" class="btn btn-primary" v-show="!loading">{{ lang.pay }}
                                {{ priceFormat(this.amount) }}
                            </button>
                            <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {StripeElements} from "vue-stripe-checkout";

export default {
    name: "stripe",
    props : ['trx_id','code','amount'],
    components :{
        StripeElements
    },
    data(){
        return {
            stripe_form: {
                name: null,
                email: null,
                phone: null,
                description: null,
            },
            loading : false
        }
    },
    methods : {
        submit() {
            if (!this.stripe_form.email) {
                return toastr.warning(this.lang.email_required, this.lang.Warning + ' !!');
            }
            if (!this.stripe_form.phone) {
                return toastr.warning(this.lang.phone_required, this.lang.Warning + ' !!');
            }
            this.$refs.stripe_ref.submit();
        },
        sendTokenToServer(charge) {
            let url ='';
            if (this.authUser) {
                url = this.getUrl('user/complete-order?code=' + this.code);
            } else {
                url = this.getUrl('user/complete-order?code=' + this.code + '&guest=1');
            }

            this.loading = true;

            axios.post(url, charge)
                .then((response) => {
                    this.loading = false;
                    if (response.data.error) {
                        toastr.error(this.lang.something_went_wrong, this.lang.Error + ' !!');

                    } else {
                        toastr.success(response.data.success, this.lang.Success + ' !!');
                        $('#stripe_modal').modal('hide');
                        this.showStripeModal = false;
                        if (this.code) {
                            this.$router.push({name: 'get.invoice', params: {orderCode: this.code}});
                        } else {
                            this.$router.push({name: 'invoice.list', params: {trx_id: this.trx_id}});
                        }
                    }
                }).catch((error) => {
                this.loading = false;
            });
        },
        tokenCreated(token) {
            this.stripe_form.token = token;
            // for additional charge objects go to https://stripe.com/docs/api/charges/object
            let charge = {
                name: this.stripe_form.name,
                email: this.stripe_form.email,
                phone: this.stripe_form.phone,
                source: token.id,
                payment_type: 'stripe',
                trx_id: this.trx_id,
                amount: this.amount, // the amount you want to charge the customer in cents. $100 is 1000 (it is strongly recommended you use a product id and quantity and get calculate this on the backend to avoid people manipulating the cost)
                description: this.stripe_form.description // optional description that will show up on stripe when looking at payments
            };
            this.sendTokenToServer(charge);
        },
    }
}
</script>

<style scoped>

</style>
