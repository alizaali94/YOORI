
const home = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/home');
const about = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/about');
const allBlogs = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/blogs');
const blogDetails = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/blog_details');
const brands = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/brands');
const sellers = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/all-seller');
const campaignDetails = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/campaign_details');
const allCampaign = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/all_campaign');
const allCategory = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/category');
const contact = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/contact');
const dailyDeals = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/daily-deals');
const productDetails = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/product-details');
const trackOrder = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/track-order');
const afterTrackOrder = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/after-track-order');
const checkout = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/checkout');
const payment = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/payment');
const orderConfirmation = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/order-confirmation');
const cart = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/cart');
const login = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/login');
const register = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/register');
const seller_register = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/seller_register');
const resetPassword = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/forgot-password');
const wishlist = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/wishlist');
const filterProducts = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/filter_sidebar');
const flashSale = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/flash-sale');
const compareList = () => import(/*webpackPrefetch: true */
    '../components/frontend/pages/compare-list');
const changePassword = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/change_password');
const editProfile = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/edit-profile');
/*const migrateSeller = () => import(/!* webpackPrefetch: "product-details" *!/
    '../components/frontend/pages/user/migrate-to-seller');*/

const migrateSeller = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/migrate-to-seller');

const giftVoucher = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/gift-voucher');
const notification = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/notification');
const orderHistory = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/order-history');
const dashboard = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/dashboard');
const addresses = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/addresses');
const getInvoice = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/get-invoice');
const reward = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/rewards');
const myWallet = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/wallet');
const shop = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/shop');
const followedShop = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/followed-shop');
const digitalProductOrders = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/user/digital-product-orders');
const videoShop = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/video_shop');
const videoShopDetails = () => import(/* webpackPrefetch: true */
    '../components/frontend/pages/video_shop_details');
const error_404 = () => import(/* webpackPrefetch : true" */
    '../components/errors/not_found');


export const routes = [
    {
        path: '/',
        component: () => import(/* webpackPrefetch : true" */'../components/frontend/master'),

        children: [
            {
                path: '/',
                name: 'home',
                component: home,
                meta:{
                    title: document.title,
                    transition: 'slide-left'
                }
            },
            {
                path: '/page/:slug',
                name: 'about',
                component: about
            },
            {
                path: '/track-order',
                name: 'track.order',
                component: trackOrder,
                meta: {
                    title: 'Track Order'
                }
            },
            {
                path: '/get-invoice/:orderCode',
                name: 'get.invoice',
                component: afterTrackOrder,
                props: true,
                meta: {
                    title: 'Get Invoice'
                }
            },
            {
                path: '/brands',
                name: 'brands',
                component: brands,
                meta: {
                    title: 'All Brands'
                }
            },
            {
                path: '/sellers',
                name: 'sellers',
                component: sellers,
                meta: {
                    title: 'All Sellers'
                }
            },
            {
                path: '/campaigns',
                name: 'campaigns',
                component: allCampaign,
                meta: {
                    title: 'All Campaign'
                }
            },
            {
                path: '/campaign/:slug',
                name: 'campaign.details',
                component: campaignDetails,
                meta: {
                    title: 'Campaign Details'
                }
            },
            {
                path: '/categories',
                name: 'categories',
                component: allCategory,
                meta: {
                    title: 'All Category'
                }
            },
            {
                path: '/products',
                name: 'all.products',
                component: filterProducts,
                meta: {
                    title: 'All Products',
                    transition: 'fade'
                }
            },
            {
                path: '/category/:slug',
                name: 'product.by.category',
                component: filterProducts,
                meta: {
                    title: 'Category Products'
                }
            },
            {
                path: '/brand/:slug',
                name: 'product.by.brand',
                component: filterProducts,
                meta: {
                    title: 'Brand Products'
                }
            },
            {
                path: '/offer/products',
                name: 'product.by.offer',
                component: filterProducts,
                meta: {
                    title: 'Offer Products'
                }
            },
            {
                path: '/best-selling/products',
                name: 'product.by.selling',
                component: filterProducts,
                meta: {
                    title: 'Best Selling Products'
                }
            },
            {
                path: '/gadget-products/:slug',
                name: 'product.by.gadget',
                component: filterProducts,
                meta: {
                    title: 'Gadget Products'
                }
            },

            {
                path: '/checkout',
                name: 'checkout',
                component: checkout,
                meta: {
                    title: 'Checkout'
                }
            },
            {
                path: '/order-confirmation',
                name: 'order.confirmation',
                component: orderConfirmation,
                meta: {
                    title: 'Order Confirmation'
                }
            },
            {
                path: '/contact',
                name: 'contact',
                component: contact,
                meta: {
                    title: 'Contact'
                }
            },
            {
                path: '/daily-deals',
                name: 'daily.deals',
                component: dailyDeals,
                meta: {
                    title: 'Daily Deals'
                }
            },
            {
                path: '/flash-sale',
                name: 'flash.sale',
                component: flashSale,
                meta: {
                    title: 'All Flash Sale'
                }
            },
            {
                path: '/product/:slug',
                name: 'product.details',
                component: productDetails,
                meta: {
                    title: 'Product Details'
                }
            },
            {
                path: '/payment/:code?',
                name: 'payment',
                component: payment,
                meta: {
                    title: 'Payment'
                }
            },
            {
                path: '/products',
                props(route) {
                    return route.query || {}
                },
                name: 'search.product',
                component: filterProducts
            },
            {
                path: '/blogs',
                name: 'blogs',
                component: allBlogs,
                meta: {
                    title: 'All Blogs'
                }
            },
            {
                path: '/category-blogs/:slug',
                name: 'category.blogs',
                component: allBlogs
            },
            {
                path: '/blog/:slug',
                name: 'blog.details',
                component: blogDetails,
                meta: {
                    title: 'Blog Details'
                }
            },
            {
                path: '/cart',
                name: 'cart',
                component: cart,
                meta: {
                    title: 'Cart'
                }
            },
            {
                path: '/login',
                name: 'login',
                component: login,
                meta: {
                    title: 'Login'
                }
            },
            {
                path: '/register',
                name: 'register',
                component: register,
                meta: {
                    title: 'SignUp'
                }
            },
            {
                path: '/reset-password',
                name: 'reset.password',
                component: resetPassword,
                meta: {
                    title: 'Reset Password'
                }
            },
            {
                path: '/reset/:email/:code',
                name: 'set.new.password',
                component: resetPassword
            },
            {
                path: '/register/:type',
                name: 'seller-register',
                component: seller_register,
                meta: {
                    title: 'Seller SingUp'
                }
            },

            {
                path: '/user/edit-profile',
                name: 'edit.profile',
                component: editProfile,
                meta: {
                    title: 'Edit Profile'
                }
            },
            {
                path: '/user/gift-voucher',
                name: 'gift.voucher',
                component: giftVoucher,
                meta: {
                    title: 'Gift Voucher'
                }
            },
            {
                path: '/user/followed-shop',
                name: 'shop.followed',
                component: followedShop,
                meta: {
                    title: 'Followed Shop'
                }
            },
            {
                path: '/user/digital-product-orders',
                name: 'orders.digital.product',
                component: digitalProductOrders,
                meta: {
                    title: 'Digital Product Orders'
                }
            },
            {
                path: '/user/user-to-seller',
                name: 'migrate.seller',
                component: migrateSeller
            },

            {
                path: '/user/notification',
                name: 'notification',
                component: notification,
                meta: {
                    title: 'Notification'
                }
            },
            {
                path: '/user/order-history',
                name: 'order.history',
                component: orderHistory,
                props: true,
                meta: {
                    title: 'Order History'
                }

            },
            {
                path: '/user/dashboard',
                name: 'dashboard',
                component: dashboard,
                meta: {
                    title: 'Dashboard'
                }
            },
            {
                path: '/user/wishlist',
                name: 'wishlist',
                component: wishlist,
                meta: {
                    title: 'Wishlist'
                }
            },
            {
                path: '/user/change-password',
                name: 'change.password',
                component: changePassword,
                meta: {
                    title: 'Password Change'
                }
            },
            {
                path: '/user/addresses',
                name: 'addresses',
                component: addresses,
                meta: {
                    title: 'Addresses'
                }
            },
            {
                path: '/compare-list',
                name: 'compare.list',
                component: compareList,
                meta: {
                    title: 'Compare List'
                }
            },
            {
                path: '/invoice/:trx_id',
                name: 'invoice.list',
                component: getInvoice,
                meta: {
                    title: 'Invoice'
                }
            },
            {
                path: '/my-wallet',
                name: 'wallet.history',
                component: myWallet,
                meta: {
                    title: 'Wallet'
                }
            },
            {
                path: '/my-rewards',
                name: 'reward.history',
                component: reward,
                meta: {
                    title: 'Reward'
                }
            },
            {
                path: '/video-shopping',
                name: 'video.shopping',
                component: videoShop,
                meta: {
                    title: 'Video Shopping'
                }
            },
            {
                path: '/video-shopping/:slug',
                name: 'video.shopping.details',
                component: videoShopDetails,
                meta: {
                    title: 'Video Shopping'
                }
            },
            {
                path: '/shop/:slug',
                name: 'shop',
                component: shop,
                meta: {
                    title: 'Shop'
                }
            },
            {
                path: '/:pathMatch(.*)*',
                name: '404',
                component: error_404
            },
        ]
    }
]
