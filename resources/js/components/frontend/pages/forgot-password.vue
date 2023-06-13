<template>
    <div class="sg-page-content">
        <section class="ragister-account text-center">
            <div class="container">
                <div class="account-content">
                    <div class="thumb">
                        <img :src="settings.forgot_password_banner" alt="forgot_password" class="img-fluid">
                    </div>
                    <div class="form-content">
                        <h1>{{lang.fORGOT_pASSWORD}}</h1>
                        <p v-if="form.resetCode == null">{{lang.enter_email_recover_your_password}}</p>
                        <p v-if="form.resetCode != null">{{lang.enter_your_new_password}}</p>
                        <form class="ragister-form" name="ragister-form" @submit.prevent>
                            <div class="form-group" v-if="form.resetCode == null">
                                <span class="mdi mdi-name mdi-email-outline"></span>
                                <input type="email" v-model="form.email" class="form-control"
                                       :placeholder="lang.email" :class="{ 'error_border' : errors.email }">
                            </div>
                            <span class="validation_error" v-if="errors.email">{{ errors.email[0] }}</span>
                            <div class="form-group" v-if="form.resetCode != null">
                                <span class="mdi mdi-name mdi-lock-outline"></span>
                                <input type="password"  v-model="form.newPassword" class="form-control"
                                       :placeholder="lang.new_password" :class="{ 'error_border' : errors.newPassword }">
                            </div>
                            <span class="validation_error" v-if="errors.newPassword">{{ errors.newPassword[0] }}</span>
                            <div class="form-group" v-if="form.resetCode != null">
                                <span class="mdi mdi-name mdi-lock-outline"></span>
                                <input type="password" v-model="form.confirmPassword" class="form-control" :class="{ 'error_border' : errors.confirmPassword }"
                                       :placeholder="lang.confirm_password">
                            </div>
                            <span class="validation_error" v-if="errors.confirmPassword">{{ errors.confirmPassword[0] }}</span>
                            <button  @click="submit" type="submit" v-if="!form.resetCode && !loading" class="btn" :class="{ 'disable_btn' : this.loading }">{{lang.send}}</button>
                            <loading_button v-if="loading" :class_name="'btn'"></loading_button>
                            <button @click.prevent="createPassword" v-if="form.resetCode && !loading" type="submit" class="btn">{{lang.create_new_password}}</button>
                            <p>Back to <router-link :to="{ name : 'login' }">Sign in</router-link></p>
                        </form>
                    </div>

                </div><!-- /.account-content -->
            </div><!-- /.container -->
        </section><!-- /.ragister-account -->
    </div>
</template>

<script>

export default {
    name: "forgot_password",
    components: {
    },
    data() {
        return {
            form: {
                email: this.$route.params.email,
                newPassword:"",
                confirmPassword:"",
                resetCode: this.$route.params.code
            },
            loading : false,
        }
    },

    methods: {

        submit(){
            this.loading = true;
            let url = this.getUrl('reset-password')
            axios.post(url,this.form).then((response)=>{
                this.loading = false;
                if (response.data.error)
                {

                    toastr.error(response.data.error, this.lang.Error +' !!' );
                }
                if (response.data.success)
                {
                    this.errors = [];
                    toastr.success(response.data.success, this.lang.Success +' !!' );
                }
            }).catch((error)=>{
                this.loading = false;
                if (error.response && error.response.status == 422)
                {
                    this.errors = error.response.data.errors;
                }
            })
        },
        createPassword(){
            let url = this.getUrl('create-new-password');
            this.loading = true;
            axios.post(url,this.form).then((response)=>{
                this.loading = false;
                if (response.data.error)
                {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                }
                if (response.data.success)
                {
                    this.errors = [];
                    toastr.success(response.data.success, this.lang.Success +' !!' );
                    this.$router.push({name: 'login'});
                }
            }).catch((error)=>{
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
