<template>
    <div class="sg-page-content">
        <section class="edit-profile">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="edit-profile-box">
                            <div class="title justify-content-between">
                                <h1>{{lang.edit_profile}}</h1>
                            </div>
                            <form @submit.prevent="updateProfile">
                                <div class="sg-card" v-if="lengthCounter(authUser)>0">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="first_name">{{lang.first_name}}</label>
                                                <input type="text" class="form-control" id="first_name" :class="{ 'error_border' : errors.first_name }"
                                                       v-model="form.first_name" :placeholder="lang.first_name">
                                            </div>
                                            <span class="validation_error" v-if="errors.first_name">{{ errors.first_name[0] }}</span>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="last_name">{{lang.last_name}}</label>
                                                <input type="text" class="form-control" v-model="form.last_name" :class="{ 'error_border' : errors.last_name }"
                                                       id="last_name" :placeholder="lang.last_name">
                                            </div>
                                            <span class="validation_error" v-if="errors.last_name">{{ errors.last_name[0] }}</span>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="email">{{lang.email}}</label>
                                                <input type="email" class="form-control" disabled :value="form.email" id="email" :class="{ 'error_border' : errors.email }"
                                                       :placeholder="lang.email">
                                            </div>
                                            <span class="validation_error" v-if="errors.email">{{ errors.email[0] }}</span>
                                        </div>
                                        <div class="col-md-6">
                                                <label>{{lang.phone}}</label>
                                          <telePhone  @phone_no="getNumber"></telePhone>
                                          <span class="validation_error" v-if="errors.phone">{{ errors.phone[0] }}</span>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="gender">{{lang.gender}}</label>
                                                <select class="form-control" id="gender" v-model="form.gender" :class="{ 'error_border' : errors.gender }">
                                                    <option selected>{{lang.select_gender}}</option>
                                                    <option value="male">{{lang.male}}</option>
                                                    <option value="female">{{lang.female}}</option>
                                                    <option value="others">{{lang.others}}</option>
                                                </select>
                                            </div>
                                            <span class="validation_error" v-if="errors.gender">{{ errors.gender[0] }}</span>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="date_of_birth">{{lang.date_of_birth}}</label>
                                                <input type="date" class="form-control" id="date_of_birth" :class="{ 'error_border' : errors.date_of_birth }"
                                                       v-model="form.date_of_birth" :placeholder="lang.select_date_of_birth">
                                            </div>
                                            <span class="validation_error" v-if="errors.date_of_birth">{{ errors.date_of_birth[0] }}</span>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="profile_image">{{lang.profile_image}}</label>
                                                <div class="input-group">
                                                    <div class="custom-file d-flex">
                                                        <label class="upload-image form-control" for="upload-1"
                                                               id="profile_image">
                                                            <input type="file" id="upload-1" @change="imageUp($event)">
                                                            <i id="upload-image">{{lang.choose_file}}</i>
                                                        </label>
                                                        <label class="upload-image upload-text" for="upload-1">
                                                            <input type="file" id="upload-2" @change="imageUp($event)">
                                                            <img v-lazy="getUrl('public/images/others/env.svg')" alt="Svg Icon"
                                                                 class="img-fluid">
                                                            {{lang.upload}}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="facebook">{{lang.facebook}}</label>
                                                <input type="url" class="form-control" v-model="socials.facebook"
                                                       id="facebook" placeholder="https://facebook.com/xxxxxxxx">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="twitter">{{lang.twitter}}</label>
                                                <input type="url" class="form-control" v-model="socials.twitter"
                                                       id="twitter" placeholder="https://twitter.com/xxxxxxxx">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="linkedin">{{lang.linkedin}}</label>
                                                <input type="url" class="form-control" v-model="socials.linkedin"
                                                       id="linkedin" placeholder="https://LinkedIn.com/xxxxxxxx">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="instagram">{{lang.instagram}}</label>
                                                <input type="url" class="form-control" v-model="socials.instagram"
                                                       id="instagram" placeholder="https://instagram.com/xxxxxxxx">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="pinterest">{{lang.pinterest}}</label>
                                                <input type="url" class="form-control" v-model="socials.pinterest"
                                                       id="pinterest" placeholder="https://pinterest.com/xxxxxxxx">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="youtube">{{lang.youTube}}</label>
                                                <input type="url" class="form-control" v-model="socials.youtube"
                                                       id="youtube" placeholder="https://youtube.com/xxxxxxxx">
                                            </div>
                                        </div>
                                    </div><!-- /.row -->
                                </div>
                                <div class="sg-card" v-else-if="shimmer">
                                    <div class="row">
                                        <div class="col-md-6 mb-3" v-for="(num,i) in 12">
                                            <div class="form-group">
                                                <shimmer :height="100"></shimmer>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-button">
                                    <loading_button v-if="loading" :class_name="'btn btn-primary disable_btn'"></loading_button>
                                    <button class="btn btn-primary" v-else>{{lang.update}}</button>
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
import shimmer from "../../partials/shimmer";
import telePhone from "../../partials/telephone";



export default {
    name: "edit-profile",
    data() {
        return {
            current: 'edit_profile',
            loading: false,
            form: {
                first_name: '',
                last_name: '',
                phone: '',
                gender: '',
                date_of_birth: '',
            },
            socials: {
                facebook: "",
                twitter: "",
                linkedin: "",
                instagram: "",
                pinterest: "",
                youtube: "",
            },
          country_code : [],
        }
    },
    components: {
        user_sidebar,telePhone,shimmer
    },
    mounted() {
        this.form = this.authUser;
        if (this.authUser.socials) {
            this.socials = this.authUser.socials;
        }
        this.$store.commit('setMobileNo',this.form.phone);
    },
    methods: {
        profile() {
            let keys = Object.keys(this.authUser);
            for (let i = 0; i < keys.length; i++) {

                if (keys[i] == 'socials' && this.authUser['socials'] && typeof this.authUser['socials'] != 'object') {
                    delete this.authUser['socials'];
                }
            }
            Object.assign(this.form, this.authUser);
            // this.form = this.authUser;
        },
        imageUp(event) {
            this.form.image = event.target.files[0];
            document.getElementById('upload-image').innerHTML = this.form.image.name;
        },
        updateProfile() {
            this.form.socials = this.socials;
            this.loading = true;
            this.form.sellers = null;
            let url = this.getUrl('user/update-profile');
            axios.post(url, this.form, {
                transformRequest: [function (data, headers) {
                    return objectToFormData(data)
                }]
            }).then((response) => {
                this.loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    this.errors = [];
                    toastr.success(response.data.success, this.lang.Success +' !!' );
                    this.$store.dispatch('user', response.data.user)
                }
            }).catch((error) => {
                this.loading = false;
                if (error.response.status == 422)
                {
                    this.errors = error.response.data.errors;
                }
            });
        },
      getNumber(number){
        this.form.phone = number;
      }
    }
}
</script>
