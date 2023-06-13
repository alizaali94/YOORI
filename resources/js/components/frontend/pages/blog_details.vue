<template>
    <div class="sg-page-content">
        <section class="grid-view-tab">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-3" v-if="lengthCounter(blogDetails) > 0">
                        <div class="sg-sitebar new-shop-sitebar">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <div class="accordion-header" id="ac1">
                                        <button class="accordion-button" @click="category = !category"
                                                :class="{ 'collapsed' : !category }"
                                                type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapse1" aria-expanded="true"
                                                aria-controls="collapse1">{{lang.all_categories}}
                                        </button>
                                    </div>
                                    <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="ac1"
                                         :class="{ 'show' : category }"
                                         data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <ul class="global-list">
                                                <li v-for="(category,index) in categories.data" :key="index">
                                                    <router-link
                                                        :to="{ name: 'category.blogs', params : {slug : category.slug } }">
                                                        {{ category.title }}
                                                    </router-link>
                                                </li>
                                                <li v-if="categories.next_page_url"><a
                                                    @click="loadCategories" href="javascript:void(0)">{{lang.show_more}}</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <div class="accordion-header" id="ac2">
                                        <button class="accordion-button" @click="recentPost = !recentPost"
                                                :class="{ 'collapsed' : !recentPost }"
                                                type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapse2"
                                                aria-expanded="false" aria-controls="collapse2">{{lang.recent_post}}
                                        </button>
                                    </div>
                                    <div id="collapse2" class="accordion-collapse collapse "
                                         :class="{ 'show' : recentPost }"
                                         aria-labelledby="ac2" data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="widget widget_recent_entries">
                                                <ul class="global-list">
                                                    <li class="media" v-for="(blog,index) in recent_posts.data"
                                                        :key="'post'+index">
                                                        <div class="entry-thumbnail">
                                                            <router-link
                                                                :to="{ name: 'blog.details',params:{blogId:blog.id,slug:blog.slug}}">
                                                                <img v-lazy="blog.recent_post_image" :alt="blog.title"
                                                                     class="img-fluid"></router-link>
                                                        </div>
                                                        <div class="media-body">
                                                            <h5>
                                                                <router-link
                                                                    :to="{ name: 'blog.details',params:{blogId:blog.id,slug:blog.slug}}">
                                                                    {{ blog.title }}
                                                                </router-link>
                                                            </h5>
                                                            <span class="post-date">{{ blog.published_date }}</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div v-if="recent_posts.next_page_url">
                                                    <router-link :to="{ name : 'blogs' }" href="javascript:void(0)">{{lang.show_more}}
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item" v-if="tags[1] != null" >
                                    <div class="accordion-header" id="ac3">
                                        <button class="accordion-button"
                                                :class="{ 'collapsed' : collapeActive != 'tags' }"
                                                type="button"
                                                @click="collapeActiveStatus('tags')"
                                                data-bs-toggle="collapse" data-bs-target="#collapse3"
                                                aria-expanded="false" aria-controls="collapse3">{{lang.tags}}
                                        </button>
                                    </div>
                                    <div id="collapse3" class="accordion-collapse collapse"
                                         :class="{ 'show' : collapeActive == 'tags' }"
                                         aria-labelledby="ac3"
                                         data-bs-parent="#accordionExample">
                                        <div class="accordion-body">
                                            <div class="tagcloud">
                                                <a href="javascript:void(0)" v-for="(tag,i) in tags" :key="i">{{tag}}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- /.accordion -->
                        </div><!-- /.sg-sitebar -->
                    </div>
                    <div class="col-md-4 col-lg-3" v-else-if="shimmer">
                        <shimmer :height="600"></shimmer>
                    </div>
                    <div class="col-md-8 col-lg-9">
                        <div class="blog-details">
                            <div class="post">
                                <div class="entry-header">
                                    <div class="entry-thumbnail">
                                        <a>
                                            <img v-lazy="blogDetails.banner_img" v-if="blogDetails.banner_img" :alt="blogDetails.title " class="img-fluid">
                                            <shimmer v-else-if="shimmer" :height="200"></shimmer>
                                        </a>
                                    </div>
                                </div>
                                <div class="entry-content">
                                    <div class="entry-meta">
                                        <ul class="global-list" v-if="lengthCounter(blogDetails)>0">
                                            <li v-if="blogDetails.user"><a href="javascript:void(0)"><img
                                                v-if="blogDetails.user.user_profile_image"
                                               v-lazy="blogDetails.user.user_profile_image" :alt="blogDetails.user.full_name"
                                                class="img-fluid">{{ blogDetails.user.full_name }}</a>
                                            </li>
                                            <li><a href="javascript:void(0)"><span
                                                class="mdi mdi-calendar-month"></span>{{
                                                    blogDetails.published_date
                                                }}</a>
                                            </li>
                                            <li><a href="#"><span class="mdi mdi-eye-outline"></span>{{ blogDetails.blog_views_count }} {{lang.view}}</a></li>
                                            <li><a href="#"><span class="mdi mdi-message-text-outline"></span>{{comments.total}} {{lang.comment}}</a></li>
                                            <li>
                                                <div class="dropdown">
                                                    <button  @click.stop="shareDropdown"  class="btn btn-secondary share_dropdown" :class="{ show : share_dropdown}" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <span class="mdi mdi-share-variant"></span>{{lang.share}}
                                                    </button>
                                                    <div  @click="share_dropdown = false" class="dropdown-menu" :class="{ show : share_dropdown}" aria-labelledby="dropdownMenuButton">
                                                        <a target="_blank" class="dropdown-item"
                                                           :href="'https://www.facebook.com/sharer/sharer.php?u='+getUrl('blog/'+blogDetails.slug)">{{ lang.facebook }}</a>
                                                        <a target="_blank" class="dropdown-item"
                                                           :href="'https://twitter.com/intent/tweet?text='+blogDetails.title+'&url='+getUrl('blog/'+blogDetails.slug)">{{ lang.twitter }}</a>
                                                        <a target="_blank" class="dropdown-item"
                                                           :href="'https://www.linkedin.com/sharing/share-offsite?mini=true&url='+getUrl('blog/'+blogDetails.slug)+'&title='+blogDetails.title+'&summary=Extra+linkedin+summary+can+be+passed+here'">{{ lang.linkedin }}</a>
                                                        <a target="_blank" class="dropdown-item"
                                                           :href="'https://wa.me/?text='+getUrl('blog/'+blogDetails.slug)">{{ lang.whatsapp }}</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <ul class="global-list" v-else-if="shimmer">
                                            <shimmer :height="10"></shimmer>
                                        </ul>
                                    </div>
                                    <div v-if="lengthCounter(blogDetails)>0">
                                        <h1 class="entry-title"><a href="javascript:void(0)">{{ blogDetails.title }}</a>
                                        </h1>
                                        <div v-html="blogDetails.description"></div>
                                    </div>
                                    <div v-else-if="shimmer">
                                        <shimmer :height="30" ></shimmer>
                                    </div>
                                </div>
                            </div><!-- /.post -->
                            <div class="comment-area">
                                <h3 class="title-style-1 mt-5" v-if="lengthCounter(blogDetails)>0">{{ comments.total }} {{lang.comments}}</h3>
                                <h3 class="title-style-1 mt-5" v-else-if="shimmer">
                                    <shimmer :height="20" ></shimmer>
                                </h3>
                                <blog_comments :comments="comments" :blog-details="blogDetails"></blog_comments>
                            </div><!-- /.comment-area -->
                            <div v-if="lengthCounter(blogDetails)>0">
                                <div class="comment-form" v-if="authUser">

                                    <h3 class="title-style-1">{{lang.write_a_comments}}</h3>
                                    <form @submit.prevent="comment" class="tr-form">
                                        <div class="form-group">
                                            <textarea class="form-control" required="required" rows="8"
                                                      placeholder="Write Comment" v-model="commentForm.comment"></textarea>
                                        </div>
                                        <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                                        <input type="submit" v-else class="btn btn-primary" :value="lang.post">
                                    </form><!-- /.comment-form -->
                                </div>
                            </div>
                            <div class="comment-form" v-else-if="shimmer">
                                <shimmer :height="200" ></shimmer>
                            </div>
                        </div>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.container -->
        </section><!-- /.category-section -->

    </div>
</template>

<script>
import blog_comments from "./blog_partials/blog_comments";
import shimmer from "../partials/shimmer";

export default {
    name: "blog_details",
    components :{
      blog_comments,
        shimmer
    },
    data() {
        return {
            collapeActive: 'categories',
            commentForm: {
                comment: '',
                blog_id: '',
                slug: this.$route.params.slug,
            },
            page : 1,
            category:true,
            recentPost:true,
            loading:false,
            share_dropdown:false,
        }
    },
    mounted() {
        this.$store.dispatch('blogDetails', this.$route.params.slug);
    },
    computed: {
        blogDetails() {
            return this.$store.getters.getBlogDetails;
        },
        categories() {
            return this.$store.getters.getBlogCategories;
        },
        tags() {
           return this.$store.getters.getBlogTags;
        },
        recent_posts() {
            return this.$store.getters.getRecentPosts;
        },
        comments() {
            return this.$store.getters.getBlogComments;
        },
        shimmer(){
            return this.$store.state.module.shimmer
        },
    },
    watch: {
        $route(to,from) {
            this.$store.dispatch('blogDetails', this.$route.params.slug);
        }
    },
    methods: {
        collapeActiveStatus(data) {
            if (this.collapeActive == data) {
                this.collapeActive = '';
            } else {
                this.collapeActive = data;
            }
        },
        comment() {
            this.loading = true;
            this.commentForm.blog_id = this.blogDetails.id;
            let url = this.getUrl('store/blog-comment');
            this.$Progress.start();
            axios.post(url, this.commentForm).then((response) => {
                this.loading = false;

                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    this.commentForm.comment = '';

                    this.$store.dispatch('blogDetails', this.$route.params.slug);

                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success +' !!');
                    }
                    this.$Progress.finish();
                }
            }).catch((error) => {
                this.loading = false;
            });
        },
        loadCategories()
        {
            this.page++;
            let url = this.url + '/load/blog-categories?page=' + this.page;
            this.$Progress.start();
            axios.get(url).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {

                    let categories = response.data.categories.data;

                    if (categories.length > 0) {
                        for (var i in categories) {
                            this.categories.data.push(categories[i]);
                        }
                    }
                    this.$Progress.finish();
                    this.categories.next_page_url = response.data.categories.next_page_url;
                }
            });
        },
        shareDropdown() {
            this.share_dropdown = !this.share_dropdown;
            this.share_dropdown && this.$nextTick(() => {
                document.addEventListener('click', this.hideLanguageDropdown)
            })
        },
    }
}
</script>
