<template>
    <ul class="comment-list global-list" v-if="comments.data">
        <li v-for="(comment,index) in comments.data" :key="index">
            <div class="comment_info">
                <div class="commenter-avatar" v-if="comment.user">
                    <router-link :to="{ name : 'profile' }"><img class="img-fluid"
                                                                 :src="comment.user.profile_image"
                                                                 :alt="comment.user.full_name"></router-link>
                </div>
                <div class="comment-box" v-if="comment.user">
                    <div class="comment-title">
                                                    <span class="title-1"><router-link :to="{ name : 'profile' }"
                                                                                       class="url">{{
                                                            comment.user.full_name
                                                        }}</router-link></span>
                        <div class="comment-meta">
                            <ul class="global-list">
                                <li>
                                    <router-link :to="{ name : 'dashboard' }">
                                        {{ comment.comment_date }}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div><!-- /.comment-box -->
                <p>{{ comment.comment }}</p>
                <form @submit.prevent="commentReply(comment.id)" class="tr-form mb-4"
                      v-if="comment_reply == comment.id">
                    <div class="row">
                        <div class="col-10">
                            <div class="form-group">
                                                    <textarea class="form-control reply_box" required="required"
                                                              rows="2"
                                                              :placeholder="lang.write_reply"
                                                              v-model="replyForm.comment"></textarea>
                            </div>
                        </div>
                        <div class="col-2">
                            <loading_button v-if="loading" :class_name="'btn btn-sm btn-primary'"></loading_button>
                            <input type="submit" v-else class="btn btn-primary" :value="lang.post">
                        </div>
                    </div>

                </form>
                <div class="comment-icon">
                    <ul class="global-list">
                        <li v-if="alreadyLiked(comment.comment_likes)"><a href="javascript:void(0)"
                                                                          @click="unLike(comment.id)" :class="{ 'disable_btn' : blog_like_loading }"> <span
                            class="mdi mdi-thumb-up"></span> <span class="replies_text">({{
                                comment.comment_likes.length
                            }})</span></a></li>
                        <li v-else><a href="javascript:void(0)" @click="commentLike(comment.id)" :class="{ 'disable_btn' : blog_like_loading }"> <span
                            class="mdi mdi-thumb-up-outline"></span> <span
                            class="replies_text">({{ comment.comment_likes.length }})</span></a></li>
                        <li><a href="javascript:void(0)"
                               @click="comment_reply = comment.id"><span
                            class="mdi mdi-share"></span></a></li>
                        <li v-if="comment.comment_replies.length > 0"><a href="javascript:void(0)"
                                                                         @click="showReplyArea(comment.id)">
                            <span class="replies_text">{{ comment.comment_replies.length }} {{ lang.replies }}</span></a></li>
                    </ul>
                </div>
                <blog_reply :comment="comment" v-show="show_replies == comment.id" :blog-details="blogDetails" :page="page"></blog_reply>
            </div>
        </li>
        <li v-if="comments.next_page_url">
            <div class="text-center show-more">
                <loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
                <a href="javascript:void(0)" v-else @click="loadMoreComments()" class="btn btn-primary">{{ lang.show_more }}</a>
            </div>
        </li>
    </ul>
</template>

<script>
import blog_reply from "./blog_reply";

export default {
    name: "blog_comments",
    components: {
        blog_reply
    },
    props: ['comments', 'blogDetails'],
    data() {
        return {
            comment_reply: '',
            page: 1,
            show_replies: '',
            loading : false,
            replyForm: {
                comment: '',
                blog_comment_id: '',
                parent_id: '',
                level: 0,
                slug: this.$route.params.slug,
            }
        }
    },

    methods: {
        commentReply(id, parent_id, level) {
            this.loading = true;
            this.replyForm.blog_comment_id = id;
            if (parent_id) {
                this.replyForm.parent_id = parent_id;
            }
            if (level || level == 0) {
                this.replyForm.level = level + 1;
            }
            let url = this.getUrl('store/blog-comment-reply');
            axios.post(url, this.replyForm).then((response) => {
                this.loading = false;

                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    this.replyForm.comment = '';
                    this.$store.dispatch('blogDetails', this.$route.params.slug);
                    this.comment_reply = '';
                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success +' !!');
                    }
                }
            }).catch((error) => {
                this.loading = false;
            });
        },
        loadMoreComments() {
            this.page++;
            let url = this.getUrl('load/blog-comments/' + this.blogDetails.id + '?page=' + this.page);

            axios.get(url).then((response) => {
                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {

                    let comments = response.data.comments.data;

                    if (comments.length > 0) {
                        for (let i = 0; i < comments.length; i++) {
                            this.comments.data.push(comments[i]);
                        }
                    }

                }
                this.comments.next_page_url = response.data.comments.next_page_url;
            });
        },
        showReplyArea(id) {
            if (this.show_replies == id) {
                this.show_replies = '';
            } else {
                this.show_replies = id;
            }
        },
        commentLike(id) {
            let data = {
                paginate: this.page,
                id: id,
                blog_id: this.blogDetails.id,
            };
            this.blog_like_loading = true;

            let url = this.getUrl('blog/like-comments');
            axios.post(url, data).then((response) => {
                this.blog_like_loading = false;

                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    this.comments.data = response.data.comments.data;
                    this.comments.next_page_url = response.data.comments.next_page_url;
                    this.comments.total = response.data.comments.total;
                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success +' !!');
                    }
                }
            }).catch((error) => {
                this.blog_like_loading = false;
            });
        },
        unLike(id) {
            let data = {
                paginate: this.page,
                id: id,
                blog_id: this.blogDetails.id,
            };
            this.blog_like_loading = true;
            let url = this.getUrl('blog/unlike-comments');
            axios.post(url, data).then((response) => {
                this.blog_like_loading = false;

                if (response.data.error) {
                    toastr.error(response.data.error, this.lang.Error +' !!' );
                } else {
                    this.comments.data = response.data.comments.data;
                    this.comments.next_page_url = response.data.comments.next_page_url;
                    this.comments.total = response.data.comments.total;
                    if (response.data.success) {
                        toastr.success(response.data.success, this.lang.Success +' !!');
                    }
                }
            }).catch((error) => {
                this.blog_like_loading = false;
            });
        },
    }
}
</script>
