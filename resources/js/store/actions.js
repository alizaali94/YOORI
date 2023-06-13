export default {
    blogDetails(context, slug) {
        let url = context.state.url + '/home/blog-details/' + slug;
        axios.get(url).then((response) => {
            context.commit("blogDetails", response.data.blog);
            context.commit("getBlogCategories", response.data.categories);
            context.commit("getBlogTags", response.data.tags);
            context.commit("getRecentPosts", response.data.recent_posts);
            context.commit("getBlogComments", response.data.comments);
        })
    },
    contactPage(context) {
        let url = context.state.url + '/home/contact-page';
        axios.get(url).then((response) => {
            context.commit("getContactPage", response.data.contact);
        })
    },
    othersPage(context,slug) {
        let url = context.state.url + '/home/others-page/' + slug;
        let requestData = {
            slug:slug
        }
        axios.get(url,{params: requestData}).then((response) => {
            context.commit("getPagedData", response.data.page);
        })
    },
    allCampaign(context, page) {
        let url = context.state.url + '/home/campaign-lists?page=' + page;
        axios.get(url).then((response) => {
            context.commit("getAllCampaign", response.data.campaigns);
        })
    },
    campaignProducts(context, requestData) {
        let url = context.state.url + '/home/campaign-products';
        axios.get(url, {params: requestData}).then((response) => {
            context.commit("getCampaignProducts", response.data);
        })
    },
    dailyDeals(context, form) {
        let url = context.state.url + '/home/daily-deals/?page=1';
        axios.get(url, {params: form}).then((response) => {
            context.commit("getDailyDeals", response.data.products);
        });
    },

    productDetails(context, slug) {
        let url = context.state.url + '/home/product-details/' + slug;
        axios.get(url).then((response) => {
            var index = context.state.product_details.findIndex(p =>
                p.slug == response.data.product.slug
            );
            if (index >= 0)
            {
                context.state.product_details.splice(index, 1);
            }
            context.commit('setShimmer', 0);
            context.commit("productDetails", response.data.product);
            context.commit("getProductAttributes", response.data.attributes);
        });
    },
    replyForm(context, id) {
        context.commit("getReplyForm", id);
    },
    compareList(context, data) {
        context.commit("getCompareList", data);
    },

    userOrderList(context) {

    },

    userWishlistProduct(context, product) {
        context.commit("getUserWishlist", product);
    },
    userCompareProduct(context, product) {
        context.commit("getUserCompare", product);
    },
    defaultCurrency(context, currency) {
        context.commit("getDefaultCurrency", currency);
    },
    carts(context, carts) {
        context.commit('getCarts', carts);
    },
    homeComponents(context, components) {
        context.commit('getHomeComponents', components);
    },
    productView(context,productView){
        let url = context.state.url + '/home/product-view';
        axios.post(url,productView).then((response) => {
            context.commit("getViewedProducts",response.data.viewProduct)
        }).catch((error) => {
            if (error.response.status == 401) {
            }
        });
    },
    defaultAssets(context, data) {
        context.commit('getDefaultAssets', data);
    },
    filterData(context,slug) {
        slug = slug ? slug : '';
        let url = context.state.url + '/home/filter_data?slug='+slug;
        axios.get(url).then((response) => {
            let data = '';
            context.commit("getShopCategories", response.data.categories);
            if (slug)
            {
                data = {
                    slug : slug,
                    attributes : response.data.attributes,
                }
            }
            else{
                data = {
                    slug : 'all',
                    attributes : response.data.attributes,
                }
            }
            context.commit("getShopAttributes",data);
            context.commit("getShopBrands", response.data.brands);
            context.commit("getShopColors", response.data.colors);
            context.commit("getShop", response.data.shop);
            context.commit("setPriceRange", response.data.price_range);
            context.commit('getFilterLoaded', true);
        });
    },
    countryList(context)
    {
        let url = context.state.url + '/get/country-list';
        axios.get(url).then((response) => {
            context.commit("setCountryList", response.data.countries);
        });
    },
    languageKeywords(context)
    {
        let url = context.state.url + '/language/keywords';
        axios.get(url).then((response) => {
            context.commit("setLangKeywords", response.data.lang);
        });
    },
    products(context,data){

        let url = context.state.url + '/home/filtered_products';
        axios.get(url, {params: data}).then((response) => {
            let type = response.data.type;
            if (type == 'products')
            {
                context.commit("getProducts", response.data.products);
            }
            else if (type == 'category')
            {
                let response_data = {
                    slug : response.data.slug,
                    products : response.data.products
                };
                let page_data = {
                    slug : response.data.slug,
                    page : response.data.page
                };
                context.commit("getCategoryProducts", response_data);
                context.commit("getCategoryPage", page_data);
            }
            else if (type == 'brand')
            {
                let response_data = {
                    slug : response.data.slug,
                    products : response.data.products
                };
                let page_data = {
                    slug : response.data.slug,
                    page : response.data.page
                };
                context.commit("getBrandProducts", response_data);
                context.commit("getBrandPage", page_data);
            }
            else if (type == 'offer')
            {
                context.commit("getOfferProducts", response.data.products);
            }
            else if (type == 'best_selling')
            {
                context.commit("getSellingProducts", response.data.products);
            }
            else if (type == 'shop')
            {
                let response_data = {
                    slug : response.data.slug,
                    products : response.data.products
                };
                let page_data = {
                    slug : response.data.slug,
                    page : response.data.page
                };
                context.commit("setSellerProducts", response_data);
                context.commit("getSellerPage", page_data);
            }
        });
    },
    FollowedSellers(context,page_no)
    {
        if(!page_no){
            page_no = 1;
        }
        let url = context.state.url + '/user/followed-sellers?page='+ page_no;
        axios.get(url).then((response) => {
            let length = response.data.sellers.data;
            if (length == 0)
            {
                context.commit("setFollowedSellers", [{id:0}]);
            }
            else{
                context.commit("setFollowedSellers", response.data.sellers.data);
            }
        });
    },
}
