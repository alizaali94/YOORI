export default {
    getBlogs(state, data) {
        return state.blogs = data;
    },
    blogDetails(state, data) {
        return state.blogsDetails = data;
    },
    getContactPage(state, data) {
        return state.contact_page = data;
    },
    getAllCampaign(state, data,) {
        let campaign = data.data;
        for (let i = 0; i < campaign.length; i++) {
            let found = state.all_campaigns.some(el => el.id === campaign[i].id);
            if (!found)
                state.all_campaigns.push(campaign[i])
        }
        state.campaign_paginate_url = data.next_page_url
        state.campaign_paginate_page++
        return state.all_campaigns
    },

    getCampaignProducts(state, data) {
        let campaigns = state.campaign_products;
        let products = {
            data: []
        };

        let index = campaigns.findIndex(campaign => campaign.slug == data.slug);

        if (index > -1) {
            products.data = campaigns[index].products.data;
            for (let j = 0; j < data.products.data.length; j++) {
                products.data.push(data.products.data[j]);
            }

            products.next_page_url = data.products.next_page_url;
            return state.campaign_products[index].products = products;
        }

        return state.campaign_products.push(data);
    },
    getCampaignBrands(state, data) {
        let campaigns = state.campaign_brands;
        let products = {
            data: []
        };
        let index = campaigns.findIndex(campaign => campaign.slug == data.slug);

        if (index > -1) {
            products.data = campaigns[index].brands.data;
            for (let j = 0; j < data.brands.data.length; j++) {
                products.data.push(data.brands.data[j]);
            }

            products.next_page_url = data.brands.next_page_url;
            return state.campaign_brands[index].brands = products;
        }

        return state.campaign_brands.push(data);
    },
    getCampaignShops(state, data) {
        let campaigns = state.campaign_shops;
        let products = {
            data: []
        };
        let index = campaigns.findIndex(campaign => campaign.slug == data.slug);

        if (index > -1) {
            products.data = campaigns[index].shops.data;
            for (let j = 0; j < data.shops.data.length; j++) {
                products.data.push(data.shops.data[j]);
            }

            products.next_page_url = data.shops.next_page_url;
            return state.campaign_shops[index].shops = products;
        }

        return state.campaign_shops.push(data);
    },

    getBlogCategories(state, data) {
        return state.blogCategories = data;
    },
    getBlogTags(state, data) {
        return state.blogTags = data;
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
        return state.shop_attributes.push({ slug : data.slug,attributes : data.attributes })
    },

    getDailyDeals(state, data) {
        return state.daily_deals = data;
    },
    getRecentPosts(state, data) {
        return state.recent_posts = data;
    },
    productDetails(state, data) {
        return state.product_details.push({slug: data.slug, product: data});
    },
    setShopContents(state, data) {
        return state.shop_contents.push({slug: data.slug, contents: data});
    },
    setShopComponents(state, data) {
        return state.shop_component_names.push({slug: data.slug, contents: data.component_names});
    },
    getReplyForm(state, data) {
        return state.reply_form = data;
    },
    getBlogComments(state, data) {
        return state.blog_comments = data;
    },
    getPagedData(state, data) {
        return state.get_page_data = data;
    },
    getCompareList(state, data) {
        return state.compare_list = data;
    },
    getProfileOrders(state, data) {
        return state.profile_orders = data;
    },
    getUserOrderList(state, data) {
        return state.userOrderList = data;
    },
    getProductAttributes(state, data) {
        return state.product_attributes = data;
    },
    getUserCoupons(state, data) {
        return state.userCoupons = data;
    },
    getWishlists(state, data) {
        return state.allWishlist = data;
    },
    getShop(state, data) {
        return state.get_shop = data;
    },
    getUserWishlist(state, data) {
        return state.wishlist_products.push(data);
    },
    getRemoveWishlist(state, data) {
        var index = state.wishlist_products.findIndex(c =>
            c.id == data.id
        );
        return state.wishlist_products.splice(index, 1);
    },
    getUserCompare(state, data) {
        return state.compare_products.push(data);
    },
    getRemoveCompare(state, data) {
        var index = state.compare_products.findIndex(c =>
            c.id == data.id
        );
        return state.compare_products.splice(index, 1);
    },
    getDefaultCurrency(state, data) {
        return state.default_currency = data;
    },
    getCarts(state, data) {
        return state.carts = data;
    },
    getHomeComponents(state, data) {
        return state.home_components = data;
    },
    getHomeResults(state, data) {
        return state.home_results = data;
    },
    getCountCompare(state, data) {
        return state.countCompare = data;
    },
    setShimmer(state, data) {
        return state.shimmer = data;
    },
    getAllCategories(state, data) {
        return state.allCategories = data;
    },
    getAllBrands(state, data) {
        let brands = data.data;
        for (let i = 0; i < brands.length; i++) {
            let found = state.allBrands.some(el => el.id === brands[i].id);
            if (!found)
                state.allBrands.push(brands[i])
        }
        state.brand_paginate_url = data.next_page_url
        state.brand_paginate_page++
        return state.allBrands;
    },
    getAllSellers(state, data) {
        let sellers = data.data
        for (let i = 0; i < sellers.length; i++) {
            let found = state.allSellers.some(el => el.id === sellers[i].id);
            if (!found)
                state.allSellers.push(sellers[i])
        }
        state.seller_paginate_url = data.next_page_url
        state.seller_paginate_page++
        return state.allSellers;
    },
    getDefaultAssets(state, data) {
        return state.default_assets = data;
    },
    getFilterLoaded(state, data) {
        return state.filter_loaded = data;
    },
    getProducts(state, data) {
        return state.products = data;
    },
    getCategoryProducts(state, data) {
        var index = state.category_products.findIndex(c =>
            c.slug == data.slug
        );
        if (index > -1) {
            state.category_products.splice(index, 1);
        }
        return state.category_products.push(data);
    },
    getBrandProducts(state, data) {
        var index = state.brand_products.findIndex(c =>
            c.slug == data.slug
        );
        if (index > -1) {
            state.brand_products.splice(index, 1);
        }
        return state.brand_products.push(data);
    },
    getCategoryPage(state, data) {
        return state.category_page.push(data);
    },
    getBrandPage(state, data) {
        return state.brand_page.push(data);
    },
    getSellerPage(state, data) {
        return state.seller_page.push(data);
    },
    getOfferProducts(state, data) {
        return state.offer_products = data;
    },
    getSellingProducts(state, data) {
        return state.selling_products = data;
    },
    getUserAddresses(state, data) {
        return state.userAddresses = data
    },
    getCountries(state, data) {
        return state.countries = data
    },
    getAddons(state, data) {
        return state.addons = data
    },
    getWalletRecharges(state, data) {
        for (let i = 0; i < data.data.length; i++) {
            let found = state.wallet_recharges.some(el => el.id === data.data[i].id);
            if (!found) {
                if (data.unshift == 1) {
                    state.wallet_recharges.unshift(data.data[i]);
                } else {
                    state.wallet_recharges.push(data.data[i])
                }
            }
        }
        return state.wallet_recharges;
    },
    getRewards(state, data) {
        for (let i = 0; i < data.length; i++) {
            let found = state.rewards.some(el => el.id === data[i].id);
            if (!found) {
                state.rewards.push(data[i])
            }
        }
        return state.rewards;
    },
    getOrderUrl(state, data) {
        return state.order_urls = data;
    },
    getInvoices(state, data) {
        return state.invoices = data;
    },
    getShopFollower(state, data) {
        if (data.id) {
            state.shop_follwer.push({user_id: data.user_id, seller_id: data.id, status: 1});
        }
        return state.shop_follwer;
    },
    getRemoveFollower(state, data) {
        var index = state.shop_follwer.findIndex(c =>
            c.seller_id == data.seller_id
        );
        if (index > -1) {
            state.shop_follwer.splice(index, 1);
        }

        return state.shop_follwer;
    },

    setLoginRedirection(state, data) {
        return state.login_redirect = data;
    },
    setTotalReward(state, data) {
        return state.total_reward = data;
    },
    setNotifications(state, data) {
        return state.notifications = data;
    },
    setFollowedSellers(state, data) {
        for (let i = 0; i < data.length; i++) {
            let found = state.followedSellers.some(el => el.id === data[i].id);
            if (!found) {
                state.followedSellers.push(data[i])
            }
        }
        return state.followedSellers;
    },
    setActiveModal(state, data) {
        return state.active_modal = data;
    },
    setLangKeywords(state, data) {
        return state.lang_keywords = data;
    },
    commonData(state, data) {
        return state.common_data = data;
    },
    setPaymentData(state, data) {
        return state.payment_data = data;
    },

    setSellerCoupons(state, data) {
        let seller_coupons = state.seller_coupons;
        let coupons = {
            data: []
        };

        for (let i = 0; i < seller_coupons.length; i++) {
            if (seller_coupons[i].slug == data.slug) {
                coupons.data = seller_coupons[i].coupons.data;
                for (let j = 0; j < data.coupons.data.length; j++) {
                    coupons.data.push(data.coupons.data[i]);
                }

                coupons.next_page_url = data.coupons.next_page_url;
                return state.seller_coupons[i].coupons = coupons;
            }
        }
        return state.seller_coupons.push(data);
    },
    setSellerProducts(state, data) {
        let seller_products = state.seller_products;
        let products = {
            data: []
        };

        let index = seller_products.findIndex(seller => seller.slug == data.slug)

        if (index > -1) {
            state.seller_products[index].products.data = [];
            products.data = seller_products[index].products.data;
            for (let i = 0; i < data.products.data.length; i++) {
                products.data.push(data.products.data[i]);
            }
            products.next_page_url = data.products.next_page_url;
            return state.seller_products[index].products = products;
        }

        return state.seller_products.push(data);
    },
    setActiveTab(state, data) {
        return state.active_tab = data;
    },
    setPriceRange(state, data) {
        return state.price_range = data;
    },
    setCountryList(state, data) {
        return state.countryList = data;
    },
    setResponseDone(state, data) {
        return state.response_done = data;
    },
    setVideoShops(state, data) {
        for (let i = 0; i < data.length; i++) {
            let found = state.video_shops.some(el => el.id === data[i].id);
            if (!found)
                state.video_shops.push(data[i])
        }
        return state.video_shops;
    },
    setVideoDetails(state, data) {
        let found = state.video_details.some(el => el.id === data.id);
        if (!found)
            state.video_details.push(data)

        return state.video_details;
    },
    setEmptySeller(state) {
        let arr = [];
        return state.allSellers = arr;
    },
    setSliderBanner(state, data) {
        return state.slider_banners = data;
    },
    setMobileNo(state, data) {
        return state.phone = data;
    },
    setHomeScroller(state, data) {
        return state.home_scroller = data;
    },
    setSidebar(state, data) {
        return state.sidebar_category = data;
    },
    setSmCategory(state, data) {
        return state.show_sm_category = data;
    },
}
