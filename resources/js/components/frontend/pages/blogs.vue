<template>
  <section class="sg-blog-section sg-filter" :class="activeClass">
    <div class="container">
      <div class="title blog-header justify-content-between">
        <h1>Blog News</h1>
        <div class="right-content">
          <select v-model="form.sort" @change="filterBlogs" class="form-control">
            <option value="newest">{{ lang.newest }}</option>
            <option value="oldest">{{ lang.oldest }}</option>
            <option value="viewed">{{ lang.most_viewed }}</option>
          </select>
          <div class="d-flex">
            <div class="sg-search">
              <div class="search-form blog-search">
                <form @submit.prevent="filterBlogs">
                  <input type="text" class="form-control" v-model="form.title" :placeholder="lang.search_blog">
                  <loading_button v-if="loading"></loading_button>
                  <button v-else type="submit"><span class="mdi mdi-name mdi-magnify"></span></button>
                </form><!-- /form -->
              </div><!-- /form -->
            </div><!-- /.sg-search -->
            <ul class="filter-tabs global-list">
              <li class="grid-view-tab" @click="activeClass = 'grid-view-tab'"
                  :class="{'active' : activeClass == 'grid-view-tab' || activeClass == ''}">
                <span class="mdi mdi-name mdi-grid"></span></li>
              <li class="list-view-tab" @click="activeClass = 'list-view-tab'"
                  :class="{'active' : activeClass == 'list-view-tab' }">
                <span class="mdi mdi-name mdi-format-list-bulleted"></span></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row" v-if="is_shimmer">
        <div class="col-md-6 col-lg-3" v-for="(blog,i) in blogs.data" :key="i">
          <div class="post">
            <div class="entry-header">
              <div class="entry-thumbnail">
                <router-link :to="{ name: 'blog.details',params:{slug:blog.slug}}"><img
                    v-lazy="blog.thumbnail" :alt="blog.title"
                    class="img-fluid"></router-link>
              </div>
            </div>
            <div class="entry-content">
              <router-link :to="{ name: 'blog.details',params:{slug:blog.slug}}">
                <h1 class="entry-title text-ellipse">{{ blog.title }}</h1>
              </router-link>
              <p>{{ blog.short_description }}</p>
              <router-link :to="{ name: 'blog.details',params:{slug:blog.slug}}">
                {{ lang.read_more }}
              </router-link>
            </div>
          </div>
        </div>
      </div><!-- /.row -->
      <div class="row" v-else-if="shimmer">
        <div class="col-md-6 col-lg-3" v-for="(blog,i) in 12" :key="i">
          <div class="post">
            <shimmer></shimmer>
          </div>
        </div>
      </div><!-- /.row -->
      <div class="show-more mt-4" v-if="next_page_url && !loading">
        <a href="javaScript:void(0)" @click="loadMoreData()" class="btn btn-primary">{{ lang.show_more }}</a>
      </div>
      <div class="col-md-12 text-center show-more" v-show="loading">
        <loading_button :class_name="'btn btn-primary'"></loading_button>
      </div>
    </div><!-- /.container -->
  </section>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
  name: "blogs",
  data() {
    return {
      page: 1,
      activeClass: "",
      form: {
        sort: 'newest',
        slug: this.$route.params.slug,
        title: null,
      },
      loading: false,
      is_shimmer: false,
      next_page_url: false,

    }
  },
  components: {
    shimmer
  },
  mounted() {
    if (this.lengthCounter(this.blogs) == 0) {
      this.allBlogs();
    }
    if (this.lengthCounter(this.blogs) > 0) {
      this.is_shimmer = true
    }
  },
  computed: {
    blogs() {
      return this.$store.getters.getBlogs;
    },
    shimmer() {
      return this.$store.state.module.shimmer
    },
  },
  watch: {
    $route(from) {
      if (from.name == 'blogs') {
        this.form.slug = null;
      }

      this.$store.dispatch('blogs', this.form);
    }
  },
  methods: {
    loadMoreData() {
      this.loading = true
      this.$Progress.start();
      axios.get(this.next_page_url, {params: this.form}).then((response) => {
        if (response.data.error) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.loading = false
          let blogs = response.data.blogs.data;

          if (blogs.length > 0) {
            for (let i = 0; i < blogs.length; i++) {
              this.blogs.data.push(blogs[i]);
            }
          }
          this.$Progress.finish();
        }
        this.next_page_url = response.data.blogs.next_page_url;
      });
    },
    filterBlogs() {
      this.page = 1;
      this.allBlogs(this.form);
    },
    allBlogs() {
      this.loading = true;
      let url = this.getUrl('home/blogs?page=1')
      axios.get(url, {params: this.form}).then((response) => {
        this.is_shimmer = true;
        this.loading = false;
        if (response.data.error) {
          this.$Progress.fail();
          toastr.error(response.data.error, this.lang.Error + ' !!');
        } else {
          this.$store.commit("getBlogs", response.data.blogs);
          this.next_page_url = response.data.blogs.next_page_url;
          this.page++;
          this.$Progress.finish();
        }

      }).catch((error) => {
        this.loading = false;
        this.is_shimmer = true
        this.$Progress.fail();

        if (error.response && error.response.status == 422) {
          toastr.error(response.data.error, this.lang.Error + ' !!');
        }
      })
    },
  }

}
</script>
