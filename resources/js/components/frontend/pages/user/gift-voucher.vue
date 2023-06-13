<template>
    <div class="sg-page-content">

        <section class="sg-global-content">
            <div class="container">
                <div class="row" >
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="coupon-content">
                            <div class="title justify-content-between">
                                <h1 v-if="coupons.data">{{lang.coupons_code}}</h1>
                                <h1 v-else-if="!shimmer">{{lang.no_founds_coupons_code}}</h1>
                                <h1 v-else >{{lang.loading}}</h1>
                            </div>
                            <div class="row" v-if="is_shimmer">
                                <div class="col-md-6" v-for="(coupon,i) in coupons.data" :key="i">
                                    <div class="coupon-text-thumb">
                                        <div class="coupon-text">
                                            <h3><a href="javascript:void(0)">{{ coupon.discount_type == 'flat' ? priceFormat(coupon.discount) : coupon.discount +'% OFF' }}</a></h3>
                                            <p>{{coupon.title}}</p>
                                            <a href="javaScript:void(0)" @click="copyTestingCode(coupon.code)" class="btn" >{{lang.get_code}}</a>
                                            <div class="form-group">
                                                <input type="hidden" class="form-control" :id="'testing-code_'+coupon.code" :value="coupon.code">
                                            </div>
                                        </div>
                                        <div class="coupon-thumb">
                                            <img v-lazy="coupon.image_145x110" alt="Image" class="img-fluid">
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.row -->
                            <div class="row" v-else-if="shimmer">
                                <div class="col-md-6 pb-2" v-for="(coupon,i) in 4" :key="i">
                                    <a href="javascript:void(0)">
                                        <shimmer :height="160"></shimmer>
                                    </a>
                                </div>
                            </div><!-- /.row -->
                        </div>
                    </div>
                </div><!-- /.row -->
                <div class="row" >

                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.profile-section -->

    </div>
</template>

<script>
import user_sidebar from "../../partials/user_sidebar";
import shimmer from "../../partials/shimmer";

export default {
    name: "gift-voucher",
    data() {
        return {
            current: 'gift_voucher',
            testingCode: "",
            is_shimmer:false
        }
    },
    components : {
        user_sidebar,
        shimmer
    },
    mounted() {
        if (this.settings.coupon_system != 1)
        {
            this.$router.push({ name : 'home' });
        }
        if(this.lengthCounter(this.coupons.data) == 0 && this.settings.coupon_system == 1){
            this.userCoupon();
        }
        if(this.lengthCounter(this.coupons.data) > 0){
          this.is_shimmer = true
        }
    },
    computed:{
        coupons(){
            return this.$store.getters.getUserCoupons
        },
        shimmer(){
            return this.$store.state.module.shimmer
        },
    },
    methods:{
        copyTestingCode (code) {
            var copyText = document.getElementById('testing-code_'+code);

            /* Select the text field */
            if (copyText)
            {
                copyText.setAttribute('type','text');
                copyText.select();
                copyText.setSelectionRange(0, 99999); /* For mobile devices */

                /* Copy the text inside the text field */
                // navigator.clipboard.writeText(copyText.value);
                document.execCommand("copy");

                /* Alert the copied text */
                alert("Copied the text: " + copyText.value);
                copyText.setAttribute('type','hidden');
                window.getSelection().removeAllRanges();
            }

        },
        userCoupon() {
            let url = this.getUrl('user/coupons/')
            axios.get(url).then((response) => {
                this.is_shimmer = true
                this.$store.commit("getUserCoupons", response.data.coupons);
            });
        },
}
}
</script>
