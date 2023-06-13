<template>
    <div class="col-lg-3" v-if="authUser">
        <div class="profile-details position-relative">
            <div class="profile-thumb">
                <img :src="authUser.profile_image" :alt="authUser.full_name" class="img-fluid">
            </div>
            <h2>{{ authUser.full_name }} <router-link class="d-inline" :to="{ name : 'edit.profile' }"><span class="mdi mdi-name mdi-pencil"></span></router-link></h2>
            <a href="javascript:void(0)">{{ authUser.email }}</a>
            <router-link class="be_seller base" :to="{ name : 'migrate.seller' }"  v-if="settings.seller_system == 1">
                {{ lang.be_a_seller }} <span class="mdi mdi-name mdi-store-outline"></span>
            </router-link>
        </div>
        <div class="sidebar-menu">
            <ul class="global-list">
                <li :class="{active: current === 'dashboard'}">
                    <router-link :to="{ name : 'dashboard' }"><span
                        class="mdi mdi-name mdi-view-dashboard-outline"></span> {{ lang.dashboard }}
                    </router-link>
                </li>
                <li :class="{active: current === 'addresses'}">
                    <router-link :to="{ name : 'addresses' }"><span class="mdi mdi-name mdi-map-marker-outline"></span>
                        {{ lang.addresses }}
                    </router-link>
                </li>
                <li :class="{active: current === 'notification'}">
                    <router-link :to="{ name : 'notification' }"><span class="mdi mdi-name mdi-bell-outline"></span>
                        {{ lang.notification }}
                    </router-link>
                </li>
                <li :class="{active: current === 'order_history'}">
                    <router-link :to="{ name : 'order.history' }"><span class="mdi mdi-name mdi-cart-outline"></span>
                        {{ lang.order_history }}
                    </router-link>
                </li>
                <li v-if="download_url" :class="{active: current === 'digital_product_order_history'}">
                    <router-link :to="{ name : 'orders.digital.product' }"><span
                        class="mdi mdi-name mdi-cart-arrow-down"></span> {{ lang.digital_product_order }}
                    </router-link>
                </li>
                <li v-if="settings.coupon_system == 1" :class="{active: current === 'gift_voucher'}">
                    <router-link :to="{ name : 'gift.voucher' }"><span class="mdi mdi-name mdi-wallet-giftcard"></span>
                        {{ lang.gift_voucher }}
                    </router-link>
                </li>
                <li :class="{active: current === 'change_password'}">
                    <router-link :to="{ name : 'change.password' }"><span class="mdi mdi-name mdi-lock-outline"></span>
                        {{ lang.change_password }}
                    </router-link>
                </li>
                <li v-if="settings.wallet_system == 1" :class="{active: current === 'wallet_history'}">
                    <router-link :to="{ name : 'wallet.history' }"><span class="mdi mdi-wallet-outline"></span>
                        {{ lang.my_wallet }}
                    </router-link>
                </li>
                <li v-if="addons.includes('reward')" :class="{active: current === 'reward_history'}">
                    <router-link :to="{ name : 'reward.history' }"><span
                        class="mdi mdi-vector-point"></span>{{ lang.my_rewards }}
                    </router-link>
                </li>
                <li v-if="settings.seller_system == 1" :class="{active: current === 'followed_shop'}">
                    <router-link :to="{ name : 'shop.followed' }"><span
                        class="mdi mdi-home-heart"></span>{{ lang.shop }}
                    </router-link>
                </li>
            </ul>
        </div>


        <div class="modal fade reward" id="convert_reward" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ lang.reward_point }}</h5>
                        <button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body reward_modal">
                        <form @submit.prevent="convertReward">
                            <div class="row">
                                <div class="col-lg-12 text-center">
                                    <div class="form-group">
                                        <label for="reward">{{ lang.reward_point }} </label>
                                        <input type="text" id="reward" v-model="converted_reward" class="form-control"
                                               :placeholder="lang.enter_point_you_want_convert">
                                    </div>
                                    <div class="text-start" v-if="totalReward != null">
                                        <p>Available Points to Convert : {{ totalReward.rewards }}</p>
                                        <p>{{ settings.reward_convert_rate }}{{ lang.reward_points }}{{
                                                priceFormat(1)
                                            }}</p>

                                        <p v-if="totalReward.rewards > 0">{{ lang.total_amount_you_will_get }}
                                            {{ priceFormat(converted_reward / settings.reward_convert_rate) }}</p>
                                    </div>
                                    <loading_button v-if="loading" :class_name="'btn btn-primary mt-3'"></loading_button>
                                    <button type="submit" v-else class="btn btn-primary mt-3"
                                            :class="{ 'disable_btn' : converted_reward < settings.reward_convert_rate || totalReward.rewards < converted_reward }">
                                        {{ lang.covert_rewards }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div><!-- /.modal-body -->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import shimmer from "./shimmer";

export default {
    name: "user_sidebar",
    props: [
        'current',
        'addresses'
    ],
    data() {
        return {
            loading : false,
            download_url : false
        }
    },
    mounted() {
        this.checkAuth();
    },
    computed: {
        totalReward() {
            return this.$store.getters.getTotalReward;
        },
        modalType() {
            return this.$store.getters.getModalType;
        }
    },
    components: {
        shimmer,
    },
    methods: {
        checkAuth() {
            let url = this.getUrl('home/check-auth')
            axios.get(url).then((response) => {
                this.$store.dispatch('user', response.data.user);
                this.$store.commit('getOrderUrl', response.data.order_urls);
                if (!this.authUser) {
                    this.$router.push({name: 'login'});
                } else if (this.authUser.user_type == 'admin') {
                    this.$router.push({name: 'home'});
                }
                if (response.data.reward) {
                    this.$store.commit('setTotalReward', response.data.reward);
                }
                if (response.data.download_urls)
                {
                    this.download_url = true;
                }

            });
        },
        convertReward() {
            let url = this.getUrl('user/convert-reward');

            let form = {
                amount: this.converted_reward / this.settings.reward_convert_rate,
                reward: this.converted_reward,
            };

            if (form.amount > 0 && this.totalReward.rewards >= this.converted_reward && confirm('Are You Sure! You want to Convert ?')) {
                this.loading = true;
                axios.post(url, form).then((response) => {
                    this.loading = false;
                    if (response.data.error) {
                        toastr.error(response.data.error, this.lang.Error +' !!' );
                    } else {
                        toastr.success(response.data.success, this.lang.Success + '!!');
                        $('#convert_reward').modal('hide');
                        this.converted_reward = '';
                        this.$store.dispatch('user', response.data.user);
                        this.$store.commit('setTotalReward', response.data.reward);
                    }
                }).catch((error) => {
                    this.loading = false;
                });
            }
        }
    }

}
</script>
