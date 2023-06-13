
<template>
    <div class="sg-page-content">
        <section class="ragister-account text-center">
            <div class="container">
                <div class="account-content">
                    <div class="thumb">
                        <img :src="settings.seller_sing_up_banner" :alt="form.user_type" class="img-fluid img-fit" />
                    </div>
                    <div class="form-content">
                        <h1>{{lang.sign_up}}</h1>
                        <p>{{lang.sign_up_to_continue_shopping}}</p>
                        <h5 class="registration_heading" v-if="form.user_type == 'seller'">{{lang.personal_info}}</h5>
                        <form class="ragister-form" name="ragister-form" @submit.prevent="register">
                            <div>
                                <div class="form-group">
                                    <span class="mdi mdi-name mdi-account-outline"></span>
                                    <input type="text" v-model="form.first_name" class="form-control" :class="{ 'error_border' : errors.first_name }" :placeholder="lang.first_name" />
                                </div>
                                <span class="validation_error" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                                <div class="form-group">
                                    <span class="mdi mdi-name mdi-account-outline"></span>
                                    <input type="text" v-model="form.last_name" class="form-control" :class="{ 'error_border' : errors.last_name }" :placeholder="lang.last_name" />
                                </div>
                                <span class="validation_error" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                                <div class="form-group">
                                    <span class="mdi mdi-name mdi-email-outline"></span>
                                    <input type="email" v-model="form.email" class="form-control" :class="{ 'error_border' : errors.email }" :placeholder="lang.email" />
                                </div>
                                <span class="validation_error" v-if="errors.email">{{ errors.email[0] }}</span>

                                <div class="mb-4">
                                  <telePhone  @phone_no="getNumber"></telePhone>
                                    <span class="validation_error" v-if="errors.phone">{{ errors.phone[0] }}</span>
                                </div>
                                <div class="form-group">
                                    <span class="mdi mdi-name mdi-lock-outline"></span>
                                    <input type="password" v-model="form.password" class="form-control" :class="{ 'error_border' : errors.password }" :placeholder="lang.password" />
                                </div>
                                <span class="validation_error" v-if="errors.password">{{ errors.password[0] }}</span>
                            </div>

                            <h5 class="registration_heading" v-if="form.user_type == 'seller'">{{lang.shop_info}}</h5>

                            <div class="form-group">
                                <span class="mdi mdi-name mdi-shopping-outline"></span>
                                <input type="text" v-model="form.shop_name" class="form-control" :class="{ 'error_border' : errors.shop_name }" :placeholder="lang.shop_name" />
                            </div>
                            <span class="validation_error" v-if="errors.shop_name">{{ errors.shop_name[0] }}</span>
                            <div class="form-group">
                                <span class="mdi mdi-name mdi-map-marker-outline"></span>
                                <input type="text" v-model="form.address" class="form-control" :class="{ 'error_border' : errors.address }" :placeholder="lang.shop_address" />
                            </div>
                            <span class="validation_error" v-if="errors.address">{{ errors.address[0] }}</span>
                            <div class="form-checkbox">
                                <div class="form-group" v-if="settings.seller_agreement">
                                    <input type="checkbox" id="tnc" value="2"
                                           v-model="agreement"
                                           class="form-check-input">
                                    <label for="tnc">{{ lang.agreement }}
                                        <a v-if="urlCheck(settings.seller_agreement)"
                                           :href="settings.seller_agreement">{{ lang.terms }}</a>
                                        <router-link v-else :to="'/page/'+settings.seller_agreement">{{
                                                lang.terms
                                            }}
                                        </router-link>
                                    </label>
                                </div>
                            </div>
                            <loading_button v-if="loading" :class_name="'btn'"></loading_button>
                            <button type="submit" v-else class="btn">{{lang.sign_up}}</button>
                            <p>{{lang.have_an_account}} <router-link :to="{ name : 'login' }">{{lang.sign_in}}</router-link></p>
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
    data()
    {
        return {
            form : {
                first_name : '',
                last_name : '',
                email : '',
                password : '',
                shop_name : '',
                phone : '',
                address : '',
                phone_no:'',
                otp:'',
                user_type: this.$route.params.type,
            },

            loading : false,
            agreement : null,
        }
    },

    mounted() {
    },

    methods : {
      getNumber(number){
        this.form.phone = number;
      },
        register()
        {
            if (this.settings.seller_agreement && !this.agreement)
            {
                return toastr.info(this.lang.accept_terms, this.lang.Error + ' !!');
            }

            let url = this.getUrl('seller-register');
            this.loading = true;
            this.form.real_otp = this.otp;
            axios.post(url,this.form).then((response) => {
                this.loading = false;
                if (response.data.error)
                {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                }
                if (response.data.success)
                {
                    this.$router.push({name:'login'})
                    this.errors = [];
                    toastr.success(response.data.success, this.lang.Success +' !!' );
                }
            })
            .catch((error)=>{
                this.loading = false;
                this.$Progress.fail();
                if (error.response && error.response.status == 422)
                {
                    this.errors = error.response.data.errors;
                }
            })
        },


    },
    computed: {
    }
}
</script>
