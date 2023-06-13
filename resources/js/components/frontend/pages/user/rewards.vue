<template>
    <div class="sg-page-content">
        <section class="edit-profile">
            <div class="container">
                <div class="row">
                    <user_sidebar :current="current"></user_sidebar>
                    <div class="col-lg-9 pl-lg-5">
                        <div class="sg-shipping">
                            <div class="title">
                                <h1 v-if="lengthCounter(totalReward != null && totalReward.rewards)>0">{{lang.my_rewards}}</h1>
                                <h1 v-else-if="is_shimmer">{{lang.no_my_rewards}}</h1>
                                <h1 v-else >{{lang.loading}}</h1>
                            </div>
                        </div>
                        <div class="row" v-if="is_shimmer">
                            <div class="col-md-6" v-if="totalReward != null && totalReward.rewards > 0">
                                <a href="#" data-bs-target="#convert_reward" data-bs-toggle="modal">
                                    <div class="card text-center profile-card d-flex justify-center profile-card-green">
                                        <div class="profile-card-title mb-3">{{lang.convert_reward_to_wallet}}</div>
                                        <h3><i class="mdi mdi-transfer"></i></h3>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <div class="card text-center profile-card d-flex justify-center profile-card-black">
                                    <div class="profile-card-title mb-3">{{lang.total_rewards}}</div>
                                    <h3 class="text-white">{{totalReward != null ? totalReward.rewards : 0}}</h3>
                                </div>
                            </div>
                            <div class="col-md-4" v-if="totalReward && totalReward.last_conversion">
                                <div class="card text-center profile-card d-flex justify-center profile-card-black">
                                    <div class="profile-card-title mb-3">{{lang.last_converted_to_wallet}}</div>
                                    <h3 class="text-white">{{ totalReward.last_conversion }}</h3>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-else-if="shimmer">
                            <div class="col-md-6 mb-3" v-for="(num,i) in 2">
                                <shimmer :height="100"></shimmer>
                            </div>
                        </div>
                        <div class="row" v-if="is_shimmer">
                            <div class="col-md-12 overflow-y-auto">
                                <div class="sg-table">
                                    <div class="justify-content-between title b-0 mb-2 mt-3">
                                        <h1>{{lang.reward_history}}</h1>
                                    </div>
                                    <table class="table dashboard-table">
                                        <thead>
                                        <tr>
                                            <th class="text-end" scope="col">#</th>
                                            <th scope="col">{{lang.product}}</th>
                                            <th scope="col">{{lang.quantity}}</th>
                                            <th class="text-end" scope="col">{{lang.total_reward}}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr v-for="(reward,index) in rewards" :key="index">
                                            <td class="text-end">{{ ++index }}</td>
                                            <td class="text-capitalize">{{ reward.product.product_name }}</td>
                                            <td >{{ reward.product_qty }}</td>
                                            <td class="text-capitalize text-end pt-3 pb-3">{{ reward.reward }}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="col-md-12 text-center show-more mt-3" v-if="next_page_url && !loading">
                                    <a href="javascript:void(0)" @click="loadRewards()" class="btn btn-primary">{{lang.show_more}}</a>
                                </div>
                                <div class="col-md-12 text-center show-more mt-3" v-show="loading">
                                    <a href="javascript:void(0)" class="btn btn-primary"><img width="20" :src="getUrl('public/images/default/preloader.gif')" alt="preloader">Loading........</a>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-else-if="shimmer">
                            <div class="col-md-12 mb-3" v-for="(num,i) in 4">
                                <shimmer :height="50"></shimmer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import user_sidebar from "../../partials/user_sidebar";
import shimmer from "../../partials/shimmer";


export default {
    name: "wallet",
    components: {
        user_sidebar,shimmer
    },
    data() {
        return {
            current: 'reward_history',
            page: 1,
            loading: false,
            next_page_url : false,
            is_shimmer:false,

        }
    },
    created() {
        if (!this.addons.includes('reward'))
        {
            this.$router.push({ name : 'home' });
        }
    },
    mounted() {
        if (this.lengthCounter(this.rewards) == 0) {
            this.loadRewards();
        }
        if (this.lengthCounter(this.rewards) > 0) {
            this.is_shimmer = true
        }
    },
    computed: {
        rewards() {
            return this.$store.getters.getRewards;
        },
        totalReward() {
            return this.$store.getters.getTotalReward;
        },
        shLength(){
            return this.$store.getters.getCommonData
        },
        shimmer(){
            return this.$store.state.module.shimmer
        },
    },
    methods: {
        loadRewards() {
            let url = this.getUrl('user/reward-history?page=' + this.page);

            if (this.page > 1) {
                this.loading = true;
            }
            this.$Progress.start();

            axios.get(url).then((response) => {
                this.loading = false;
                this.is_shimmer = true
                if (response.data.error) {
                    this.$Progress.fail();
                    toastr.error(response.data.error, this.lang.Error +' !!' );;
                } else {
                    if(response.data.reward_details)
                    {
                        this.$store.commit("getRewards", response.data.reward_details.data);
                        this.next_page_url = response.data.reward_details.next_page_url;
                    }
                    this.$store.commit("setTotalReward", response.data.reward);
                    this.$store.commit("commonData", response.data.reward);


                    this.page++;
                    this.$Progress.finish();
                }
            }).catch((error)=>{
                this.$Progress.fail();
            });
        }
    }
}
</script>
