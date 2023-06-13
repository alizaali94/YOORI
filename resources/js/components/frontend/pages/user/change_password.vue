<template>
    <div class="sg-page-content">

        <section class="edit-profile">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="edit-profile-box">
                            <div class="title justify-content-between">
                                <h1>{{lang.change_password}}</h1>
                            </div>
                            <form @submit.prevent="changPassword()">
                                <div class="sg-card">
                                    <div class="form-group" v-if="authUser.is_password_set == 1">
                                        <label>{{lang.current_password}}</label>
                                        <input type="password" class="form-control" :class="{ 'error_border' : errors.current_password }" v-model="formData.current_password" :placeholder="lang.current_password" />
                                    </div>
                                    <span class="validation_error"
                                          v-if="errors.current_password">{{ errors.current_password[0] }}</span>
                                    <div class="form-group">
                                        <label>{{lang.new_password}}</label>
                                        <input type="password" v-model="formData.new_password" class="form-control" :class="{ 'error_border' : errors.new_password }"  :placeholder="lang.new_password">
                                    </div>
                                    <span class="validation_error"
                                          v-if="errors.new_password">{{ errors.new_password[0] }}</span>
                                    <div class="form-group">
                                        <label>{{lang.confirm_new_password}}</label>
                                        <input type="password" v-model="formData.confirm_password" class="form-control" :class="{ 'error_border' : errors.confirm_password }" :placeholder="lang.confirm_new_password">
                                    </div>
                                    <span class="validation_error"
                                          v-if="errors.confirm_password">{{ errors.confirm_password[0] }}</span>
                                    <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                                    <button  type="submit" v-else class="btn btn-primary">{{lang.save_change}}</button>
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

export default {
    name: "change_password",
    data() {
        return {
            current: 'change_password',
            loading: false,
            formData:{
                current_password:"",
                new_password:"",
                confirm_password:"",
                is_password_set: this.$store.getters.getUser.is_password_set
            }
        }
    },
    components : {
        user_sidebar
    },
    methods:{
        changPassword(){
            let url = this.getUrl('user/change-password');
            this.loading = true;
            axios.post(url,this.formData)
            .then((response)=>{
                this.loading = false;
                if (response.data.success) {
                    toastr.success(response.data.success, this.lang.Success +' !!' );
                    this.formData.confirm_password = '';
                    this.formData.new_password = '';
                    this.formData.current_password = '';
                    this.formData.is_password_set = response.data.data.is_password_set
                    this.$store.dispatch('user',response.data.data)
                }
                else{
                    if (response.data.error) {
                        toastr.error(response.data.error, this.lang.Error +' !!' );
                    }
                }
            })
            .catch((error)=>{
                this.loading = false;
                if (error.response.status == 422)
                {
                    this.errors = error.response.data.errors;
                }
            })
        }
    },


}
</script>
