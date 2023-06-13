export default {
    state: {
        blogs: {},
        blogsDetails: {},
        contact_page: {},
        all_campaigns: {},
        productByCategory : {},
        shop_categories : {},
        shop_brands : {},
        shop_colors : {},
        shop_attributes : {},
        shop_products : {},
        daily_deals : {},
    },
    getters: {
        getBlogs(state) {
            return state.blogs;
        },
        getBlogDetails(state) {
            return state.blogsDetails;
        },
        getContactPage(state) {
            return state.contact_page;
        },
        getAllCampaign(state) {
            return state.all_campaigns;
        },
        getProductByCategory(state) {
            return state.productByCategory
        },
        getShopCategories(state) {
            return state.shop_categories;
        },
        getShopBrands(state) {
            return state.shop_brands;
        },
        getShopColors(state) {
            return state.shop_colors;
        },
        getShopAttributes(state) {
            return state.shop_attributes;
        },
        getShopProducts(state) {
            return state.shop_products;
        },
        getDailyDeals(state) {
            return state.daily_deals;
        },
    },
    actions: {
        blogs(context) {
            let url = this.state.url + '/home/blogs';
            axios.get(url).then((response) => {
                context.commit("getBlogs", response.data.blogs);
            })
        },
        blogDetails(context, blogId) {
            let url = this.state.url + '/home/blog-details/' + blogId;
            axios.get(url).then((response) => {
                context.commit("blogDetails", response.data);
            })
        },
        contactPage(context) {
            let url = this.state.url + '/home/contact-page';
            axios.get(url).then((response) => {
                context.commit("getContactPage", response.data.contact);
            })
        },
        allCampaign(context,page) {
            let url = this.state.url + '/home/campaign-lists?page='+page;
            axios.get(url).then((response) => {
                context.commit("getAllCampaign", response.data.campaigns);
            })
        },
        productByCategory(context,data) {
            let url = this.state.url + '/home/category-products/'+data.id+ '/?page='+data.page;
            axios.get(url).then((response) => {
                context.commit("getProductByCategory", response.data.products.data);
            })
        },
        shopPageData(context) {
            let url = this.state.url + '/home/shop-page/?page=1';
            axios.get(url).then((response) => {
                context.commit("getShopCategories", response.data.categories);
                context.commit("getShopBrands", response.data.brands);
                context.commit("getShopAttributes", response.data.attributes);
                context.commit("getShopColors", response.data.colors);
                context.commit("getShopProducts", response.data.products);
            })
        },
        dailyDeals(context,page) {
            let url = this.state.url + '/home/daily-deals/?page='+page;
            axios.get(url).then((response) => {
                context.commit("getDailyDeals", response.data.products);
            });
        },
    },
    mutations: {
        getBlogs(state, data) {
            return state.blogs = data;
        },
        blogDetails(state, data) {
            return state.blogsDetails = data;
        },
        getContactPage(state, data) {
            return state.contact_page = data;
        },
        getAllCampaign(state, data) {
            return state.all_campaigns = data;
        },
        getCampaignProducts(state, data) {
            return state.campaign_products = data;
        },
        getProductByCategory(state, data) {
            return state.productByCategory = data;
        },
        getShopCategories(state, data) {
            return state.shop_categories = data;
        },
        getShopBrands(state, data) {
            return state.shop_brands = data;
        },
        getShopColors(state, data) {
            return state.shop_colors = data;
        },
        getShopAttributes(state, data) {
            return state.shop_attributes = data;
        },
        getShopProducts(state, data) {
            return state.shop_products = data;
        },
        getDailyDeals(state, data) {
            return state.daily_deals = data;
        },
    }
}
