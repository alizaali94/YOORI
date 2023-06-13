<template>
    <div class="sg-page-content">
        <section class="sg-global-content">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="sg-table">
                            <div class="title justify-content-between">
                                <h1 v-if="lengthCounter(orders.data)>0">{{lang.order_history}}</h1>
                                <h1 v-else-if="lengthCounter(orders.data)==0">{{lang.no_order_founds}}</h1>
                                <h1 v-else >{{lang.loading}}</h1>
                            </div>
                            <form class="woocommerce-cart-form" action="#">
                                <orders :orders="orders.data" :user_dashboard="false"  v-if="is_shimmer"></orders>
                                <table class="table mb-3" v-for="(orders,index) in 8 " v-else-if="shimmer">
                                    <shimmer  :height="70" :key="index" ></shimmer>
                                </table>
                            </form>
                            <div class="show-more-button" v-if="next_page_url">
                                <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                                <a href="javascript:void(0)" v-else @click="loadMoreData()" class="btn btn-primary">{{lang.show_more}}</a>
                            </div>
                        </div>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.profile-section -->
    </div>
</template>

<script>
import user_sidebar from "../../partials/user_sidebar";
import orders from "./../../partials/orders";
import shimmer from "../../partials/shimmer";
export default {
    name: "order-history",
    components : {
        user_sidebar,orders,shimmer
    },
    data() {
        return {
            current: 'order_history',
            url:"",
            page: 2,
            next_page_url:false,
            is_shimmer:false,
            loading : false
        }
    },

    mounted() {
            this.getOrders();
    },
    computed:{
        orders(){
           return this.$store.getters.getUserOrderList;
        },

        baseUrl() {
            return this.$store.getters.getBaseUrl;
        },
        shimmer(){
            return this.$store.state.module.shimmer
        }
    },
    methods:{
        loadMoreData()
        {
            let data = {
                page: this.page,
            };
            this.loading = true;
            this.url = this.baseUrl + '/home/user/order-list/?page=' + data.page;
            axios.get(this.url).then((response) => {
                this.loading = false;
                // this.$store.commit('setShimmer',false)
                if (response.data.error)
                {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                }
                else{
                    let orders = response.data.orderList;
                    if (orders.data.length > 0) {
                        for (let i = 0; i < orders.data.length; i++) {
                            this.orders.data.push(orders.data[i])
                        }
                    }
                }
                this.next_page_url = response.data.orderList.next_page_url;
                // this.show_load_more = !!response.data.orderList.next_page_url;
                this.page++;

            }).catch(error => {
                this.loading = false;
            });
        },
        getOrders(){
            let url = this.baseUrl + '/home/user/order-list/?page=1';
            axios.get(url).then((response) => {
                this.next_page_url = response.data.orderList.next_page_url;
                this.$store.commit("getUserOrderList", response.data.orderList);
                this.is_shimmer = true;
            }).catch((error) => {
                this.is_shimmer = true;
                if (error.response.status == 401) {
                }
            });
        }
    }
}
</script>
