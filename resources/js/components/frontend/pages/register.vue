<template>
    <div class="sg-page-content">
        <section class="ragister-account text-center">
            <div class="container">
                <div class="account-content">
                    <div class="thumb">
                        <img v-lazy="settings.sign_up_banner" :alt="form.user_type" class="img-fluid img-fit"/>
                    </div>
                    <div class="form-content">
                        <h1>{{ lang.sign_up }} </h1>
                        <p v-if="otp">{{ lang.enter_to_complete_registration }}</p>
                        <p v-else>{{ lang.sign_to_continue_shopping }}</p>
                        <h5 class="registration_heading" v-if="form.user_type == 'seller'">{{ lang.personal_info }}</h5>
                        <form class="ragister-form" name="ragister-form" @submit.prevent="register">
                            <div>
                                <div class="form-group">
                                    <span class="mdi mdi-name mdi-account-outline"></span>
                                    <input type="text" v-model="form.first_name" class="form-control"
                                           :class="{ 'error_border' : errors.first_name }"
                                           :placeholder="lang.first_name"/>
                                </div>
                                <span class="validation_error" v-if="errors.first_name">{{
                                        errors.first_name[0]
                                    }}</span>
                                <div class="form-group">
                                    <span class="mdi mdi-name mdi-account-outline"></span>
                                    <input type="text" v-model="form.last_name" class="form-control"
                                           :class="{ 'error_border' : errors.last_name }"
                                           :placeholder="lang.last_name"/>
                                </div>
                                <span class="validation_error" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                                <div class="form-group" v-if="optionTo == 'phone'">
                                    <span class="mdi mdi-name mdi-email-outline"></span>
                                    <input type="email" v-model="form.email" class="form-control mb-0"
                                           :class="{ 'error_border mb-0' : errors.email }" :placeholder="lang.email"/>
                                </div>
                                <span class="validation_error"
                                      v-if="errors.email && optionTo == 'phone'">{{ errors.email[0] }}</span>

                                <div v-if="optionTo == 'email' && addons.includes('otp_system')">
<!--                                    <vue-tel-input v-bind="bindProps" class="form-control phone_intl"-->
<!--                                                   :class="{ 'error_border mb-0' : errors.phone }"-->
<!--                                                   v-model="form.phone"></vue-tel-input>-->
                                    <telePhone  @phone_no="getNumber"></telePhone>

                                    <span class="validation_error" v-if="errors.phone">{{ errors.phone[0] }}</span>
                                </div>
                                <div v-if="addons.includes('otp_system')" class="form-group text-end mb-3">
                                    <a v-if="!otp" href="javascript:void(0)" class="btn sign-in-option"
                                       @click="loginOptions(optionTo)">{{
                                            optionTo == 'email' ? lang.use_email_instead : lang.use_phone_instead
                                        }}</a>
                                </div>
                                <div class="form-group" v-if="optionTo == 'phone'"
                                     :class="{ 'mt-4' : !addons.includes('otp_system') }">
                                    <span class="mdi mdi-name mdi-lock-outline"></span>
                                    <input type="password" v-model="form.password" class="form-control"
                                           :class="{ 'error_border' : errors.password }" :placeholder="lang.Password"/>
                                </div>
                                <span class="validation_error"
                                      v-if="errors.password && optionTo == 'phone'">{{ errors.password[0] }}</span>
                            </div>
                            <div class="form-group mt-4" v-if="addons.includes('otp_system') && otp">
                                <span class="mdi mdi-name mdi-lock-outline"></span>
                                <input type="text" v-model="form.otp" class="form-control otp mb-0"
                                       :class="{ 'error_border' : errors.otp }" :placeholder="lang.enter_oTP"/>
                            </div>
                            <div v-if="addons.includes('otp_system') && otp">
                                <p class="count_down_timer">
                                    <span v-if="otp && (minute >=0 && second >= 0)">0{{ minute }}:{{ second }}</span>
                                    <span @click="registerByPhone" v-else>{{ lang.otp_request }}</span>
                                </p>

                                <button type="submit" class="btn" v-if="otp && !loading"
                                        :class="{ 'disable_btn' : form.otp.length != 5 }">{{ lang.sign_up }}
                                </button>
                            </div>
                            <div class="form-checkbox">
                                <div class="form-group" v-if="settings.customer_agreement">
                                    <input type="checkbox" id="tnc" value="2"
                                           v-model="agreement"
                                           class="form-check-input">
                                    <label for="tnc">{{ lang.agreement }}
                                        <a v-if="urlCheck(settings.customer_agreement)"
                                           :href="settings.customer_agreement">{{ lang.terms }}</a>
                                        <router-link v-else :to="'page/'+settings.customer_agreement">{{
                                                lang.terms
                                            }}
                                        </router-link>
                                    </label>
                                </div>
                            </div>
                            <button type="submit" class="btn" v-if="optionTo == 'phone' && !loading">
                                {{ lang.sign_up }}
                            </button>
                            <loading_button v-if="loading" :class_name="'btn'"></loading_button>
                            <button type="button" @click="registerByPhone" class="btn"
                                    v-else-if="optionTo == 'email' && !otp">{{ lang.get_oTP }}
                            </button>
                            <p>{{ lang.have_an_account }}
                                <router-link :to="{ name : 'login' }">{{ lang.sign_in }}</router-link>
                            </p>
                            <div class="continue-with"
                                 v-if="settings.is_facebook_login_activated == 1 || settings.is_google_login_activated == 1 || settings.is_twitter_login_activated == 1">
                                <p>{{ lang.or_continue_with }}</p>
                            </div>
                            <ul class="global-list" v-if="form.user_type != 'seller'">
                                <li v-if="settings.is_facebook_login_activated == 1">
                                    <a class="facebook" href="javascript:void(0)" @click="socialLogin('facebook')"><span
                                        class="mdi mdi-name mdi-facebook"></span>{{ lang.facebook }}</a>
                                </li>
                                <li v-if="settings.is_twitter_login_activated == 1">
                                    <a class="twitter" href="javascript:void(0)" @click="socialLogin('twitter')"><span
                                        class="mdi mdi-name mdi-twitter"></span>{{ lang.twitter }}</a>
                                </li>
                                <li v-if="settings.is_google_login_activated == 1">
                                    <a class="google" href="javascript:void(0)" @click="socialLogin('google')"><span
                                        class="mdi mdi-name mdi-google"></span>{{ lang.google }}</a>
                                </li>
                            </ul>
                        </form>
                        <!-- /.contact-form -->
                    </div>
                </div>
                <!-- /.account-content -->
            </div>
            <!-- /.container -->
        </section>
        <!-- /.ragister-account -->
    </div>

</template>

<script>
import telePhone from "../partials/telephone";


export default {
    name: "register",
    components: {
        telePhone,
    },
    data() {
        return {
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                phone_no: '',
                otp: '',
                user_type: this.$route.params.type,
            },
            optionTo: 'phone',
            loading: false,
            buttonText: 'Get OTP',
            phone_no: '',
            minute: 1,
            second: 60,
            otp: '',
            agreement: '',
            country_code:[]

        }
    },
    watch: {
        $route(from, to) {
            this.form.user_type = from.params.type;
        }
    },

    mounted() {
        this.loginOptions();
    },

    methods: {
        countDownTimer() {
            this.minute = 1;
            this.second = 60;
            setInterval(() => {
                this.second--;
                if (this.second == 0) {
                    this.minute--;
                    this.second = 60;
                    if (this.minute == 0) {
                        this.minute = 0;
                    }
                }
            }, 1000);
        },
        register() {

            if (this.settings.customer_agreement && !this.agreement) {
                return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
            }
            this.loading = true;
            let url = this.getUrl('register');
            this.form.real_otp = this.otp;
            if (this.form.real_otp != this.otp) {
                toastr.error(this.lang.OTP_doesnt_match, this.lang.Error + ' !!');
            }
            axios.post(url, this.form).then((response) => {
                this.loading = false;
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
                if (response.data.success) {
                    if (response.data.type == 1) {
                        this.$store.dispatch('user', response.data.auth_user);
                        this.$router.push({name: 'dashboard'});
                    } else {
                        this.$router.push({name: 'login'});
                    }

                    this.errors = [];
                    toastr.success(response.data.success, this.lang.Success + ' !!');
                }
            })
                .catch((error) => {
                    this.loading = false;
                    this.$Progress.fail();
                    if (error.response && error.response.status == 422) {
                        this.errors = error.response.data.errors;
                    }
                })
        },
        socialLogin(provider) {
            let url = this.getUrl('login/' + provider);
            axios.get(url).then((response) => {
                window.location.href = response.data;
            })
        },
        loginOptions(optionTo) {
            if (optionTo) {
                if (optionTo == 'phone') {
                    this.buttonText = 'Get OTP';
                    this.optionTo = 'email';
                } else {
                    this.buttonText = 'Sign Up';
                    this.optionTo = 'phone';
                }
            } else {
                if (this.addons.includes('otp_system')) {
                    this.optionTo = 'email';
                    this.buttonText = 'Get OTP';
                } else {
                    this.buttonText = 'Sign Up';
                    this.optionTo = 'phone';
                }
            }

        },
        registerByPhone() {
            this.form.email = null;
            if (this.settings.customer_agreement && !this.agreement) {
                return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
            }
            let url = this.getUrl('register/by-phone');

            this.loading = true;
            axios.post(url, this.form).then((response) => {
                this.loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    toastr.success(response.data.data, this.lang.Success + ' !!');
                    this.errors = [];
                    this.otp = true;
                    this.countDownTimer();
                }
            }).catch((error) => {
                this.loading = false;
                this.$Progress.fail();
                if (error.response && error.response.status == 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getNumber(number){
            this.form.phone = number;
        }

    },
    computed: {}
}
</script>
