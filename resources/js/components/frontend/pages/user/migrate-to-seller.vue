<template>
    <div class="sg-page-content">
        <section class="edit-profile">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="edit-profile-box">
                            <div class="title justify-content-between">
                                <h1>{{lang.shop_information}}</h1>
                            </div>
                            <form @submit.prevent="register">
                                <div class="sg-card">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="name">{{lang.shop_name}}</label>
                                                <input type="text" class="form-control"
                                                       :class="{ 'error_border' : errors.shop_name }"
                                                       v-model="form.shop_name" id="name"
                                                       placeholder="Enter Your Shop Name">
                                            </div>
                                            <span class="validation_error" v-if="errors.shop_name">{{
                                                    errors.shop_name[0]
                                                }}</span>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <label for="address">{{lang.shop_address}}</label>
                                                <input type="text" class="form-control" v-model="form.address"
                                                       :class="{ 'error_border' : errors.address }" id="address"
                                                       :placeholder="lang.enter_your_shop_address">
                                            </div>
                                            <span class="validation_error" v-if="errors.address">{{
                                                    errors.address[0]
                                                }}</span>
                                        </div>
                                        <div class="col-md-12">
                                            <div :class="{ 'mb-4' : !errors.phone_no }">
                                                <label>{{lang.phone}}</label>
                                                <telePhone  @phone_no="getNumber"></telePhone>
                                            </div>
                                            <span class="validation_error" v-if="errors.phone_no">{{
                                                    errors.phone_no[0]
                                                }}</span>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label for="address">{{lang.license_no}}</label>
                                                <input type="text" class="form-control" v-model="form.license_no"
                                                       :class="{ 'error_border' : errors.license_no }" id="license_no"
                                                       placeholder="Enter Your License No">
                                            </div>
                                            <span class="validation_error"
                                                  v-if="errors.license_no">{{ errors.license_no[0] }}</span>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>{{lang.tax_paper}}</label>
                                                <div class="input-group">
                                                    <div class="custom-file d-flex">
                                                        <label class="upload-image form-control" for="tax_paper1">
                                                            <input type="file" id="tax_paper1" :class="{ 'error_border' : errors.logo }"
                                                                   @change="taxUp($event)">
                                                            <i ref="taxUpload">{{
                                                                    product_form.image_text
                                                                }}</i>
                                                        </label>
                                                        <label class="upload-image upload-text d-flex" for="tax_paper2">
                                                            <input type="file" id="tax_paper2"
                                                                   @change="taxUp($event)">
                                                            <img v-lazy="getUrl('public/images/others/env.svg')" class="img-fluid">
                                                            {{lang.upload}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>{{lang.logo}}</label>
                                                <div class="input-group">
                                                    <div class="custom-file d-flex">
                                                        <label class="upload-image form-control" for="logo">
                                                            <input type="file" id="logo" @change="logoUp($event)" :class="{ 'error_border' : errors.banner }">
                                                            <i ref="logoUpload">{{
                                                                    product_form.image_text
                                                                }}</i>
                                                        </label>
                                                        <label class="upload-image upload-text d-flex" for="logo-2">
                                                            <input type="file" id="logo-2"
                                                                   @change="logoUp($event)">
                                                            <img v-lazy="getUrl('public/images/others/env.svg')" alt="file up icon"
                                                                 class="img-fluid">
                                                            {{lang.upload}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-group">
                                                <label>{{lang.banner}}</label>
                                                <div class="input-group">
                                                    <div class="custom-file d-flex">
                                                        <label class="upload-image form-control" for="banner">
                                                            <input type="file" id="banner" @change="bannerUp($event)">
                                                            <i ref="bannerUpload">{{
                                                                    product_form.image_text
                                                                }}</i>
                                                        </label>
                                                        <label class="upload-image upload-text d-flex" for="banner-2">
                                                            <input type="file" id="banner-2"
                                                                   @change="bannerUp($event)">
                                                            <img v-lazy="getUrl('public/images/others/env.svg')" alt="file up icon"
                                                                 class="img-fluid">
                                                            {{lang.upload}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="col-lg-12 mt-2">
                                            <div class="form-button">
                                                <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                                                <button class="btn btn-primary" v-else>{{lang.update}}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.profile-section -->
    </div>
</template>

<script>
import user_sidebar from "../../partials/user_sidebar";
import telePhone from "../../partials/telephone";


export default {
    name: "migrate-to-seller",
    data() {
        return {
            current: 'migrate_to_seller',
            loading: false,
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                shop_name: '',
                phone: '',
                address: '',
                phone_no: '',
                user_type : 'seller-migrate',
                tax_paper : '',
                logo : '',
                banner : '',
            },
        }
    },
    components: {
        user_sidebar,
        telePhone

    },
    methods: {
        register() {
            let url = this.getUrl('user/user-to-seller');
            if (confirm("Are you sure, You want to be Seller?")) {
                this.loading = true;
                axios.post(url, this.form, {
                    transformRequest: [function (data, headers) {
                        return objectToFormData(data)
                    }]
                }).then((response) => {
                    this.loading = false;
                    if (response.data.error) {
                        toastr.error(response.data.error, this.lang.Error +' !!' );
                    }
                    else{
                        toastr.success(response.data.migrate_msg, this.lang.Success +' !!');
                        this.$store.dispatch('user', null);
                        // document.location.href = this.getUrl('seller/login');
                        this.$router.push({name: 'home'});
                        this.$Progress.finish();
                    }
                }).catch((error) => {
                    this.loading = false;
                    if (error.response.status == 422)
                    {
                        this.errors = error.response.data.errors;
                    }
                });
            }else{
                return false
            }
        },

        taxUp(event) {
            this.form.tax_paper = event.target.files[0];
            this.$refs.taxUpload.innerHTML = this.form.tax_paper.name;
        },
        logoUp(event) {
            this.form.logo = event.target.files[0];
            this.$refs.logoUpload.innerHTML = this.form.logo.name;
        },
        bannerUp(event) {
            this.form.banner = event.target.files[0];
            this.$refs.bannerUpload.innerHTML = this.form.banner.name;
        },
        getNumber(number){
            this.form.phone_no = number;
        }
    }
}
</script>
