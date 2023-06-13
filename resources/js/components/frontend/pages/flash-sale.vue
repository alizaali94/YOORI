<template>
    <section class="products-section" v-if="is_shimmer">
        <div class="container">
            <div class="title d-flex">
                <h1>{{lang.flash_sale}}</h1>
            </div>
            <product :products="products" :grid_class="'grid-2'" :type="'flash'"></product>
            <div class="col-md-12 text-center show-more" v-if="next_page_url && !loading">
                <a href="javascript:void(0)" @click="nextPageData()" class="btn btn-primary">{{lang.show_more}}</a>
            </div>
            <div class="col-md-12 text-center show-more" v-show="loading">
                <loading_button :class_name="'btn btn-primary'"></loading_button>
            </div>
        </div><!-- /.container -->
    </section>
    <section class="products-section" v-else-if="shimmer">
        <div class="container">
            <ul class="products grid-2">
                <li v-for="(product,index) in 2" :key="index">
                    <div class="sg-product">
                        <a href="javaScript:void(0)">
                            <shimmer :height="252"></shimmer>
                        </a>
                    </div><!-- /.sg-product -->
                </li>
            </ul>
        </div><!-- /.container -->
    </section>
</template>

<script>
import product from "../pages/product";
import shimmer from "../partials/shimmer";


export default {
    name: "flash_sale_products",
    components: {
        product,shimmer
    },
    data() {
        return {
            page: 1,
            products: [],
            show_load_more: true,
            total_product: 0,
            currentUrl: "",
            activeClass:"",
            is_shimmer : false,
            next_page_url: false,
            loading:false,
        }
    },
    mounted() {
        this.loadMoreData();
    },
    computed: {
        baseUrl() {
            return this.$store.getters.getBaseUrl;
        },
        shimmer() {
            return this.$store.state.module.shimmer
        }
    },
    methods: {
        loadMoreData() {
            let data = {
                slug: this.$route.params.slug,
                name: this.$route.name,
                page: this.page,
            };
            this.currentUrl = this.baseUrl + '/home/flash-sale-products/?page=' + data.page;
            axios.get(this.currentUrl).then((response) => {
                this.is_shimmer = true;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    let products = response.data.products;
                    if (products.data.length > 0) {
                        for (let i = 0; i < products.data.length; i++) {
                            this.products.push(products.data[i]);
                        }
                    }
                    this.next_page_url = response.data.products.next_page_url;
                    this.total_product = response.data.products.total;
                    this.page++;
                }
            });
        },
        nextPageData() {
            this.loading = true;
            axios.get(this.next_page_url).then((response) => {
                this.loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    let products = response.data.products;
                    if (products.data.length > 0) {
                        for (let i = 0; i < products.data.length; i++) {
                            this.products.push(products.data[i]);
                        }
                    }
                    this.next_page_url = response.data.products.next_page_url;
                    this.total_product = response.data.products.total;
                    this.page++;
                }
            });
        }
    }
}
</script>
