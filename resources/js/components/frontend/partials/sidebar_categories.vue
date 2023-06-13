<template>
	<div :class="{ 'sidebar-active': smCategory }">
		<div class="categorie-menu">
			<div class="categorie-menu-content">
				<ul class="global-list" v-if="lengthCounter(visibleCategory) > 0">
					<li>
						<router-link :to="{ name: 'campaigns' }">
							<span class="mdi mdi-view-dashboard-outline mdi-18px"></span>
							{{ lang.all_offers }}
						</router-link>
					</li>
					<li class="active" v-for="(category, index) in visibleCategory" :key="index" :class="{ 'sg-dropdown': category.child_categories.length > 0 }">
						<router-link :to="{ name: 'product.by.category', params: { slug: category.slug } }">
							<span :class="[category.icon]" class="mdi-18px" v-if="category.icon"></span>
							<span v-else class="mdi mdi-view-dashboard-outline mdi-18px"></span>
							{{ category.title }}
						</router-link>
						<span class="icon mdi mdi-name mdi-chevron-down"></span>
						<div v-if="category.child_categories.length > 0" class="sg-dropdown-menu">
							<div class="row">
								<div :class="[category.latest_product ? 'col-lg-9' : 'col-lg-12']">
									<div class="row">
										<div class="col-lg-4" v-for="(child_category, child_index) in category.child_categories" :key="child_index">
											<h3>
												<router-link :to="{ name: 'product.by.category', params: { slug: child_category.slug } }">
													{{ child_category.title }}
												</router-link>
											</h3>
											<ul class="global-list" v-if="child_category.categories.length > 0">
												<li v-for="(children_category, cat_index) in child_category.categories" :key="cat_index">
													<router-link :to="{ name: 'product.by.category', params: { slug: children_category.slug } }">
														{{ children_category.title }}
													</router-link>
												</li>
											</ul>
										</div>
									</div>
								</div> </div
							><!-- /.row -->
						</div>
					</li>
					<li class="last-menu-item">
						<router-link :to="{ name: 'categories' }">
							{{ lang.view_all_categories }}
							<span class="mdi mdi-name mdi-chevron-right"></span
						></router-link>
					</li>
				</ul>
				<ul class="global-list" v-else-if="sidebarCategory">
					<li v-for="(seller, index) in 10" :key="index">
						<a href="javascript:void(0)" class="shimmer">
							<span><shimmer :height="26.5"></shimmer></span>
							<shimmer :height="26.5"></shimmer>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import shimmer from "../partials/shimmer";

export default {
	name: "sidebar_categories",
	props: ["slider"],
	components: { shimmer },
	data() {
		return {
			mobile_child_id: 0,
			mobile_children_id: 0,
		};
	},
	mounted() {
		window.onscroll = () => {
			let navBar = document.getElementById("nav");
			this.active = window.scrollY > navBar.offsetTop;
			this.$store.dispatch("navbarClass", this.active);
		};
		if (this.visibleCategory.length == 0) {
			this.loadCategory();
		}
	},
	computed: {
		visibleCategory() {
			let categories = this.$store.getters.getCategories;
			return categories.length > 0 ? categories : [];
		},
		defaultCategoryShow() {
			return this.$store.getters.getDefaultCategory;
		},
		sidebarCategory() {
			return this.$store.getters.getSidebarCategory;
		},
		smCategory() {
			return this.$store.getters.getSmCategory;
		},
	},
	methods: {
		loadCategory() {
			let url = this.getUrl("sidebar/categories");
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.commit("setSidebar", false);
					this.$store.dispatch("categories", response.data.categories);
				}
			});
		},
	},
};
</script>

<style scoped></style>
