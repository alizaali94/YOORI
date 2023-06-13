<template>
    <section class="deal-section" v-if="settings.article_section && settings.article_section == 1">
        <div class="container">
            <div v-html="settings.article"></div>
            <div class="category-content-style-1" v-if="settings.category_Section && settings.category_Section == 1">
                <div class="title justify-content-between b-0">
                    <h1>{{ lang.categories }}</h1>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-4" v-for="(category,index) in categories" :key="index">
                        <div class="category-style-3">
                            <h6><a :href="getUrl('category/'+category.slug)" @click.prevent="routerNavigator('product.by.category', category.slug)">{{ category.title }}</a></h6>
                            <div class="category-list-1" v-if="category.child_categories.length > 0">
                                <ul class="global-list">
                                    <li v-for="(child_category,index) in category.child_categories" :key="index">
                                        <a :href="getUrl('category/'+child_category.slug)" @click.prevent="routerNavigator('product.by.category', child_category.slug)">{{child_category.title }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div><!-- /.row -->
            </div><!-- /.category-style-4 -->
        </div><!-- /.container -->
    </section><!-- /.deal-section -->
</template>

<script>
export default {
    name: "deal",
    computed : {
        categories() {
            return this.$store.getters.getCategories;
        }
    }
}
</script>
