<template>
    <div class="sg-page-content" >
        <section class="about-section">
            <div class="container" v-if="lengthCounter(page)>0">
                <div class="page-title">
                    <h1>{{page.title}}</h1>
                </div>
              <div v-html="page.content"></div>
            </div><!-- /.container -->
            <div class="container mb-3" v-else-if="shimmer" v-for="(page,i) in 3">
                <shimmer :height="200"></shimmer>
            </div><!-- /.container -->
        </section><!-- /.about-section -->
    </div>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
    name: "about",
    components: {
        shimmer
    },
    data(){
      return {
          slug:this.$route.params.slug
      }
    },
    watch: {
        $route() {
            if(this.page.link != this.$route.params.slug){
                this.$store.dispatch('othersPage', this.$route.params.slug);
            }
        },
        page()
        {
            document.title = this.page.title;
        }
    },
    mounted(){
        if(this.page.link != this.$route.params.slug) {
            this.$store.dispatch('othersPage', this.slug);
        }

    },
   computed:{
       page() {
           return this.$store.getters.getPageData;
       },
       shimmer(){
           return this.$store.state.module.shimmer
       }
   }
}
</script>
