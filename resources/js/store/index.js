// import pageModule from './page_data'
// import pageModule from './page_data'

export default {
    // modules: {
    //     pageData: pageModule,
    // },
    state: {
        languages: {},
        currencies: {},
        user: {},
        activeLanguage: {},
        activeCurrency: {},
        totalWishlists: {},
        categories: {},
        sliders: {},
        defaultCategoryShow: false,
        services: {},
        settings: '',
        viewedProducts: {},
        pages: {},
        navbarClass: '',
        url: document.getElementById('base_url').value,
    },
    getters: {
        getLanguages(state) {
            return state.languages
        },
        getCurrencies(state) {
            return state.currencies
        },
        getUser(state) {
            return state.user
        },
        getActiveLanguage(state) {
            return state.activeLanguage
        },
        getActiveCurrency(state) {
            return state.activeCurrency
        },
        getTotalWishlists(state) {
            return state.totalWishlists
        },
        getCategories(state) {
            return state.categories
        },
        getSliders(state) {
            return state.sliders
        },
        getDefaultCategory(state) {
            return state.defaultCategoryShow
        },
        getServices(state) {
            return state.services
        },
        getSettings(state) {
            return state.settings
        },
        getViewedProducts(state) {
            return state.viewedProducts
        },
        getNavBarClass(state) {
            return state.navbarClass;
        },
        getBaseUrl(state) {
            return state.url;
        },
        getPages(state) {
            return state.pages;
        },
    },
    actions: {
        languages(context, languages) {
            context.commit('getLanguages', languages)
        },
        currencies(context, currencies) {
            context.commit('getCurrencies', currencies);
        },
        user(context, user) {
            context.commit('getUser', user);
        },
        activeLanguage(context, language) {
            context.commit('getActiveLanguage', language);
        },
        activeCurrency(context, currency) {
            context.commit('getActiveCurrency', currency);
        },
        wishlists(context,data) {
            context.commit('getTotalWishlists', data);
        },

        categories(context, categories) {
            context.commit('getCategories', categories);
        },
        sliders(context, sliders) {
            context.commit('getSliders', sliders);
        },
        defaultCategoryShow(context, flag) {
            context.commit('getDefaultCategory', flag);
        },
        services(context, services) {
            context.commit('getServices', services);
        },
        settings(context, settings) {
            context.commit('getSettings', settings);
        },
        viewedProducts(context, products) {
            context.commit('getViewedProducts', products);
        },
        navbarClass(context, nav_class) {
            context.commit('getNavBarClass', nav_class);
        },
        pages(context, pages) {
            context.commit('getPages', pages);
        },
    },
    mutations: {
        getLanguages(state, data) {
            return state.languages = data;
        },
        getCurrencies(state, data) {
            return state.currencies = data;
        },
        getUser(state, data) {
            return state.user = data;
        },
        getActiveLanguage(state, data) {
            return state.activeLanguage = data;
        },
        getActiveCurrency(state, data) {
            return state.activeCurrency = data;
        },
        getTotalWishlists(state, data) {
            return state.totalWishlists = data;
        },

        getCategories(state, data) {
            return state.categories = data;
        },
        getSliders(state, data) {
            return state.sliders = data;
        },
        getDefaultCategory(state, data) {
            return state.defaultCategoryShow = data;
        },
        getServices(state, data) {
            return state.services = data;
        },
        getSettings(state, data) {
            return state.settings = data;
        },
        getViewedProducts(state, data) {
            return state.viewedProducts = data;
        },
        getNavBarClass(state, data) {
            return state.navbarClass = data;
        },
        getPages(state, data) {
            return state.pages = data;
        },
    }
}
