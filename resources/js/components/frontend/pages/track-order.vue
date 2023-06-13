<template>
    <div class="sg-page-content">

        <section class="track-order-section text-center">
            <div class="container">
                <div class="page-title">
                    <h1>{{lang.track_order}}</h1>
                </div>
                <form @submit.prevent>
                    <div class="track-order">
                        <div class="d-flex">
                            <input type="text" class="form-control" v-model="order_id" :placeholder="lang.enter_your_parcel_id">
                            <button type="submit" @click="trackOrder" class="btn btn-primary">{{lang.track}}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section><!-- /.track-order -->

    </div>
</template>

<script>
export default {
    name: "track-order",
    mounted() {
        /*if (!this.authUser) {
            toastr.error(this.lang.login_first, this.lang.Error +' !!' );

            this.$store.commit('setLoginRedirection',this.$route.name);
            this.$router.push({name: 'login'});
        }
        this.$store.commit('setLoginRedirection','');*/
    },
    data() {
        return {
            order_id : null
        }
    },
    methods: {
        trackOrder() {
            this.$router.push({name: 'get.invoice',params:{orderCode:this.order_id}})
        }
    }
}
</script>
