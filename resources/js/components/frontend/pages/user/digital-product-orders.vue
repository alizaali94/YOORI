<template>
    <div class="sg-page-content">
        <section class="sg-global-content">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9">
                        <div class="sg-table">
                            <div class="title justify-content-between">
                                <h1 v-if="lengthCounter(download_urls)>0">{{lang.order_history}}</h1>
                                <h1 v-else-if="is_shimmer">{{lang.no_order_founds}}</h1>
                                <h1 v-else >{{lang.loading}}</h1>
                            </div>
                            <form class="woocommerce-cart-form" action="#">
                                <table class="table" v-if="is_shimmer">
                                    <thead>
                                    <tr>
                                        <th scope="col">{{lang.product}}</th>
                                        <th scope="col">{{lang.date}}</th>
                                        <th scope="col">{{lang.total}}</th>
                                        <th scope="col">{{lang.download}}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="(url,i) in download_urls" :key="i">
                                        <th scope="row">
                                            <div class="product">
                                                <div class="text pl-1">
                                                    <p class="text-ellipse">{{ url.product_name }}</p>
                                                </div>
                                            </div><!-- /.product -->
                                        </th>
                                        <td>{{ url.date }}</td>
                                        <td><span>{{ priceFormat(url.total) }}</span></td>

                                        <td>
                                            <a :href="url.url" class=""><span class="mdi mdi-download-outline btn btn-primary"></span></a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <table class="table mb-3" v-for="(orders,index) in 8 " v-else-if="shimmer">
                                    <shimmer  :height="70" :key="index" ></shimmer>
                                </table>
                            </form>
                            <div class="show-more-button" v-if="next_page_url">
                                <a href="javascript:void(0)" @click="loadMoreData()" class="btn btn-primary">{{lang.show_more}}</a>
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
import shimmer from "../../partials/shimmer";

export default {
    name: "digital-product-order",
    components: {
        user_sidebar,
        shimmer
    },
    data() {
        return {
            current: 'digital_product_order_history',
            page: 1,
            loading: false,
            next_page_url: false,
            download_urls: [],
            is_shimmer:false
        }
    },

    mounted() {
            this.loadMoreData();
    },
    computed: {
        shimmer(){
            return this.$store.state.module.shimmer
        },
    },
    methods: {
        loadMoreData() {
            let url = this.getUrl('user/digital-product-order-list?page=' + this.page);
            axios.get(url).then((response) => {
                this.is_shimmer = true
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    let urls = response.data.download_urls;

                    if (urls.length > 0) {
                        for (let i = 0; i < urls.length; i++) {
                            this.download_urls.push(urls[i])
                        }
                    }
                }
                this.next_page_url = response.data.next_page_url;
                this.page++;

            });
        },
    }
}
</script>
