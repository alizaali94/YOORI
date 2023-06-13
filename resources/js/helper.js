import Vue from 'vue/dist/vue'

export default Vue.mixin({
    data() {
        return {
            url: document.querySelector('meta[name="base_url"]').getAttribute('content'),
            token: document.getElementById('token').value,
            product_form: {
                rating: 0,
                title: '',
                comment: '',
                image: '',
                product_id: '',
                review_id: '',
                reply: '',
                id: '',
                color_id: '',
                quantity: 1,
                attribute_values: [],
                variants_ids: '',
                variants_name: '',
                trx_id: '',
                image_text: 'Choose File',
            },
            payment_form: {
                payment_type: '',
                sub_total: 0,
                discount_offer: 0,
                shipping_tax: 0,
                tax: 0,
                coupon_discount: 0,
                total: 0,
                quantity: [],
            },
            errors: [],
            converted_reward: '',
            blog_like_loading: false,
            search_products: [],
            btn_disabled : false
        }
    },
    mounted() {
        // this.$store.commit('setShimmer','1');
    },
    watch: {
        $route(to, from) {
            this.search_products = [];
            if (this.$route.name != 'home') {
                this.$store.commit('setShimmer', '1');
            }
            this.$store.dispatch('defaultCategoryShow', false);
        },

    },
    computed: {
        shimmer() {
            return this.$store.getters.getShimmer;
        },
        authUser() {
            return this.$store.getters.getUser;
        },
        activeCurrency() {
            return this.$store.getters.getActiveCurrency
        },
        settings() {
            return this.$store.getters.getSettings;
        },
        defaultCurrency() {
            return this.$store.getters.getDefaultCurrency;
        },

        defaultAssets() {
            return this.$store.getters.getDefaultAssets;
        },
        lang() {
            return this.$store.getters.getLangKeywords;
        },
        defaultCategoryShow() {
            return this.$store.getters.getDefaultCategory;
        },
        addons() {
            return this.$store.getters.getAddons;
        },
        homeResponse() {
            return this.$store.getters.getResponseDone;
        },
        shopResponse() {
            let shop = this.$store.getters.getShopComponent;
            console.log(shop);
            for (let i = 0; i < shop.length; i++) {
                if (shop[i].slug == this.$route.params.slug) {
                    return shop[i].contents;
                }
            }
            return false;
        },

        userShop() {
            return this.$store.getters.getShopFollwer
        }
    },
    created() {
    },
    methods: {
        urlCheck(link) {
            if (link == 'javascript:void(0)') {
                return true;
            } else if (link) {
                return link.includes("http");
            } else {
                return false;
            }
        },
        imageUp(event) {
            this.product_form.image = event.target.files[0];
            document.getElementById('upload-image').innerHTML = this.product_form.image.name;
        },
        getUrl(url) {
            let base_url = document.querySelector('meta[name="base_url"]').getAttribute('content');
            return base_url + '/' + url;
        },
        logout() {
            this.$store.commit('getCountCompare', true);
            let url = this.getUrl('logout');
          /*  let config = {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
            let url = 'https://licenseplatedata.com/consumer-api/CRYPTO-LPDEMTK7O/1FM5K8D84FGA81501';*/
            axios.get(url).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, 'Error!!');
                }
                if (response.data.success) {
                    this.$store.dispatch('user');
                    this.$store.dispatch('compareList', 0);
                    this.$store.dispatch('carts', 0);
                    this.$router.push({name: 'login'});
                    this.$store.dispatch('wishlists', 0);
                    document.getElementById('token').value = response.data.token;
                    this.token = response.data.token;
                }
            });
        },
        alreadyLiked(obj) {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i]['user_id'] == this.authUser.id) {
                    return true;
                }
            }
            return false;
        },
        likeReply(id, comment_id) {
            let data = {
                id: id,
                comment_id: comment_id,
            };
            this.blog_like_loading = true;

            let url = this.getUrl('blog/like-reply');
            axios.post(url, data).then((response) => {
                this.blog_like_loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.success);
                } else {
                    this.comment.comment_replies = response.data.comment.comment_replies;

                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success + ' !!');
                    }
                }
            }).catch((error) => {
                this.blog_like_loading = false;
            });
        },
        unLike(id, comment_id) {
            let data = {
                id: id,
                comment_id: comment_id,
            };
            this.blog_like_loading = true;

            let url = this.getUrl('blog/unlike-reply');
            axios.post(url, data).then((response) => {
                this.blog_like_loading = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.comment.comment_replies = response.data.comment.comment_replies;

                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success + ' !!');
                    }
                }
            }).catch((error) => {
                this.blog_like_loading = false;
            });
        },
        resetForm() {
            this.product_form.rating = 0;
            this.product_form.title = '';
            this.product_form.comment = '';
            this.product_form.image = '';
            this.product_form.product_id = '';
            this.product_form.review_id = '';
            this.product_form.reply = '';
            this.product_form.image_text = 'Choose File';

            for (var key in this.payment_form) {
                this.payment_form[key] = 0;
            }
            this.payment_form.coupon_code = '';
            this.payment_form.quantity = [];

            this.payment_form.coupon = [];
        },
        priceFormat(amount) {
            // amount = amount/this.defaultCurrency.exchange_rate;

            amount = amount * this.activeCurrency.exchange_rate;

            let no_of_decimals, decimal_separator, thousands_separator, currency_symbol_format, fixed_amount,
                formatted_amount = '';
            no_of_decimals = this.settings.no_of_decimals ? this.settings.no_of_decimals : 2;

            decimal_separator = this.settings.decimal_separator ? this.settings.decimal_separator : '.';
            thousands_separator = decimal_separator == ',' ? '.' : ',';
            currency_symbol_format = this.settings.currency_symbol_format ? this.settings.currency_symbol_format : 'amount_symbol';


            if (currency_symbol_format == 'amount_symbol')
                formatted_amount = this.$options.filters.currency(amount, this.activeCurrency.symbol, no_of_decimals, {
                    symbolOnLeft: false,
                    thousandsSeparator: thousands_separator,
                    decimalSeparator: decimal_separator
                });
            if (currency_symbol_format == 'symbol_amount')
                formatted_amount = this.$options.filters.currency(amount, this.activeCurrency.symbol, no_of_decimals, {
                    thousandsSeparator: thousands_separator,
                    decimalSeparator: decimal_separator
                });
            if (currency_symbol_format == 'amount__symbol')
                formatted_amount = this.$options.filters.currency(amount, this.activeCurrency.symbol, no_of_decimals, {
                    symbolOnLeft: false,
                    thousandsSeparator: thousands_separator,
                    decimalSeparator: decimal_separator,
                    spaceBetweenAmountAndSymbol: true
                });
            if (currency_symbol_format == 'symbol__amount')
                formatted_amount = this.$options.filters.currency(amount, this.activeCurrency.symbol, no_of_decimals, {
                    thousandsSeparator: thousands_separator,
                    decimalSeparator: decimal_separator,
                    spaceBetweenAmountAndSymbol: true
                });

            return formatted_amount;
        },
        lengthCounter(data) {
            let length = 0;
            if (data && data != 'undefined') {
                if (typeof data == 'object') {
                    length = Object.keys(data).length;
                } else if (typeof data == 'array') {
                    length = data.length;
                }
            }
            return length;
        },
        productFetch(slug) {
            if (!this.productDetails) {
                this.$store.commit('setShimmer', '1');
                this.$store.dispatch('productDetails', slug);
            }
            this.$store.commit('setActiveModal', slug);
            $("#product").modal("show");
            return this.productDetails;
        },
        cartBtn(product, index) {
            if (product.has_variant) {
                return this.productFetch(product.slug);
            } else {
                this.product_form.quantity = product.minimum_order_quantity;
                this.product_form.id = product.id;
                return this.addToCart(product.minimum_order_quantity, index);
            }
        },
        addToCart(min_qty, index) {
            let carts = this.$store.getters.getCarts;

            if (carts && carts.length > 0)
            {
                this.product_form.trx_id = carts[0].trx_id;
            }

            let url = this.getUrl('user/addToCart');
            axios.post(url, this.product_form).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    toastr.success(response.data.success, this.lang.Success + ' !!');
                    let carts = response.data.carts;
                    this.$store.dispatch('carts', carts);
                    this.resetForm();
                    this.product_form.quantity = min_qty;
                    if (index) {
                        this.products[index].current_stock -= min_qty;
                    }

                    this.added_to_cart = true;
                    setTimeout(() => {
                        this.added_to_cart = false;
                    }, 2000);

                }
            });
        },
        routerNavigator(name, params) {
            if (params) {
                this.$router.push({name: name, params: {slug: params}});
            } else {
                this.$router.push({name: name});
            }
        },
        round(num, decimalPlaces = 0) {
            var p = Math.pow(10, decimalPlaces);
            var n = (num * p) * (1 + Number.EPSILON);
            return Math.round(n) / p;
        },
        follow(id) {
            let requestData = {
                id: id,
            };
            this.btn_disabled = true;
            let url = this.getUrl('user/follow-shop');
            axios.get(url, {params: requestData}).then((response) => {
                this.btn_disabled = false;
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                }
                for (let i = 0; i < response.data.follower.length; i++) {
                    if (response.data.follower[i].seller_profile_id == id) {
                        this.$store.commit('getShopFollower', response.data.follower[i]);
                    }
                }
                this.$store.commit('setFollowedSellers', response.data.follower)

            }).catch((error) => {
                this.btn_disabled = false;
                if (error.response && error.response.status == 422) {
                    toastr.error(error.response.statusText, this.lang.Error + ' !!');
                }
            })

        },
        checkFollowed(shop) {

            let length = Object.keys(this.userShop).length;
            for (let i = 0; i < length; i++) {
                if (this.userShop[i] && shop.id == this.userShop[i].seller_id && this.userShop[i].status == 1) {
                    return true;
                }
            }
            return false;

        },
        removeFollowed(id) {

            this.checkListing = false;
            let requestData = {
                id: id,
            };
            this.btn_disabled = true;
            let url = this.getUrl('user/remove-followed');
            axios.get(url, {params: requestData}).then((response) => {
                this.btn_disabled = false;
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error + ' !!');
                } else {
                    this.checkListing = true;
                    let data = {user_id: this.authUser.id, seller_id: id, status: 0};
                    this.$store.commit('getRemoveFollower', data);
                    this.$store.dispatch('FollowedSellers');
                }
            }).catch((error) => {
                this.btn_disabled = false;
                if (error.response && error.response.status == 422) {
                    toastr.error(error.data.error, this.lang.Error + ' !!');
                }
            });

        }
    }
});
