<template>
	<div class="sg-page-content">
		<section class="grid-view-tab">
			<div class="container">
				<div class="row sg-category-content sg-filter grid-view-tab" :class="activeClass">
					<div class="col-md-4 col-lg-3 filter_area" v-if="lengthCounter(productList) > 0">
						<div class="sg-sitebar new-shop-sitebar">
							<div class="accordion" id="accordionExample">
								<div class="accordion-item" v-if="!category_routes.includes(form.route)">
									<div class="accordion-header" id="ac1">
										<button class="accordion-button" @click="category = !category" :class="{ collapsed: !category }" type="button" data-bs-toggle="collapse" data-bs-target="#category" aria-expanded="true" aria-controls="category">
											{{ lang.all_categories }}
										</button>
									</div>
									<div id="category" class="accordion-collapse collapse" :class="{ show: category }" aria-labelledby="ac1">
										<div class="accordion-body">
											<ul class="global-list">
												<li v-for="(category, index) in categories" :key="'category' + index" @click="categoryAttributes(category)">
													<router-link :to="{ name: 'product.by.category', params: { slug: category.slug } }">
														{{ category.title }}
														<span class="cat-items">{{ category.total_products }}</span>
													</router-link>
												</li>
											</ul>
											<div v-if="category_load_more || categories.next_page_url"
												><a @click="loadCategories" href="javaScript:void(0)">{{ lang.show_more }}</a></div
											>
										</div>
									</div>
								</div>
								<div class="accordion-item" v-if="page && page.child_categories && page.child_categories.length > 0">
									<div class="accordion-header" id="ac2">
										<button class="accordion-button" @click="child_category = !child_category" :class="{ collapsed: !child_category }" type="button" data-bs-toggle="collapse" data-bs-target="#child_category" aria-expanded="true" aria-controls="collapse1">
											{{ lang.child_categories }}
										</button>
									</div>
									<div id="child_category" class="accordion-collapse collapse" :class="{ show: child_category }" aria-labelledby="ac2">
										<div class="accordion-body">
											<form action="#" class="form-checkbox">
												<ul class="global-list">
													<li>
														<a href="javascript:void(0)" @click="$router.go(-1)"><i class="mdi mdi-arrow-left"></i> {{ lang.all_categories }}</a>
													</li>
												</ul>

												<div class="form-group" v-for="(child_category, index) in page.child_categories" :key="'child_category' + index">
													<input type="checkbox" @change="filterProducts" :id="'child_category' + child_category.id" :value="child_category.id" v-model="form.child_category" />
													<label :for="'child_category' + child_category.id">{{ child_category.title }}</label>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="accordion-item" v-if="form.route != 'product.by.brand'">
									<div class="accordion-header" id="ac4">
										<button class="accordion-button" @click="brand = !brand" :class="{ collapsed: !brand }" type="button" data-bs-toggle="collapse" data-bs-target="#brand_collapse" aria-expanded="false" aria-controls="brand_collapse">{{ lang.brand }} </button>
									</div>
									<div id="brand_collapse" :class="{ show: brand }" class="accordion-collapse collapse" aria-labelledby="ac4">
										<div class="accordion-body">
											<form action="#" class="form-checkbox">
												<div class="form-group" v-for="(brand, i) in brands.data" :key="i">
													<input type="checkbox" :id="'brand' + brand.id" @change="filterProducts" :value="brand.id" v-model="form.brand" />
													<label :for="'brand' + brand.id">{{ brand.title }}</label>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<div class="accordion-header" id="ac3">
										<button class="accordion-button" @click="price = !price" :class="{ collapsed: !price }" type="button" data-bs-toggle="collapse" data-bs-target="#price_collapse" aria-expanded="false" aria-controls="collapse2">{{ lang.price }} </button>
									</div>
									<div id="price_collapse" class="accordion-collapse collapse" :class="{ show: price }" aria-labelledby="ac3">
										<div class="accordion-body">
											<div class="price-top">
												<div class="form-group">
													<input type="text" min="0" :max="min_amount" @focusout="filterProducts" v-model="form.price.min" class="form-control" :placeholder="lang.min" />
												</div>
												<div class="form-group">
													<input type="text" :min="min_amount" @focusout="filterProducts" :max="max_amount" v-model="form.price.max" class="form-control" :placeholder="lang.max" />
												</div>
											</div>
											<div class="range-slider">
												<input type="range" min="0" :max="max_amount" step="1" @change="filterProducts" v-model="form.price.min" id="min_range" />
												<input type="range" :min="min_amount" :max="max_amount" step="1" @change="filterProducts" v-model="form.price.max" id="max_range" />
											</div>
										</div>
									</div>
								</div>
								<div class="accordion-item" v-for="(attribute, index) in attributes" :key="'attribute' + index">
									<div class="accordion-header" :id="'attribute_' + attribute.id">
										<button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse_attribute_' + attribute.id" aria-expanded="true" :aria-controls="'attribute_' + attribute.id">{{ attribute.title }} </button>
									</div>
									<div :id="'collapse_attribute_' + attribute.id" class="accordion-collapse collapse" :aria-labelledby="'attribute_' + attribute.id">
										<div class="accordion-body">
											<form action="#" class="form-checkbox">
												<div class="form-group" v-for="(value, index) in attribute.attribute_value" :key="'value' + index">
													<input type="checkbox" :id="attribute.id + 'attribute' + value.id" @change="filterProducts(attribute.id, value.id)" :value="value.id" v-model="form.attribute_value_id" />
													<label :for="attribute.id + 'attribute' + value.id">{{ value.value }}</label>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="accordion-item" v-if="settings.color == 1">
									<div class="accordion-header" id="ac5">
										<button class="accordion-button" @click="color = !color" :class="{ collapsed: !color }" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">{{ lang.color }} </button>
									</div>
									<div id="collapse5" class="accordion-collapse collapse" :class="{ show: color }" aria-labelledby="ac5">
										<div class="accordion-body">
											<form action="#" class="form-checkbox">
												<div class="form-group" v-for="(color, index) in colors.data" :key="'color' + index">
													<input type="checkbox" :id="'filter_color' + color.id" @change="filterProducts" :value="color.id" v-model="form.color" />
													<label :for="'filter_color' + color.id">{{ color.name }}</label>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="accordion-item">
									<div class="accordion-header" id="ac6">
										<button class="accordion-button" @click="ratting = !ratting" :class="{ collapsed: !ratting }" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">{{ lang.ratting }} </button>
									</div>
									<div id="collapse6" class="accordion-collapse collapse" :class="{ show: ratting }" aria-labelledby="ac6">
										<div class="accordion-body">
											<form action="#" class="form-checkbox">
												<div class="form-group">
													<input type="checkbox" id="rating5" @change="filterProducts" value="5" v-model="form.rating" />
													<label for="rating5">
														<ul class="global-list">
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
														</ul>
													</label>
												</div>
												<div class="form-group">
													<input type="checkbox" id="rating4" @change="filterProducts" value="4" v-model="form.rating" />
													<label for="rating4">
														<ul class="global-list">
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
														</ul>
													</label>
												</div>
												<div class="form-group">
													<input type="checkbox" id="rating3" @change="filterProducts" value="3" v-model="form.rating" />
													<label for="rating3">
														<ul class="global-list">
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
														</ul>
													</label>
												</div>
												<div class="form-group">
													<input type="checkbox" id="rating2" @change="filterProducts" value="2" v-model="form.rating" />
													<label for="rating2">
														<ul class="global-list">
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
														</ul>
													</label>
												</div>
												<div class="form-group">
													<input type="checkbox" id="rating1" @change="filterProducts" value="1" v-model="form.rating" />
													<label for="rating1">
														<ul class="global-list">
															<li><span class="mdi mdi-name mdi-star"></span></li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
															<li><span class="mdi mdi-name mdi-star-outline"></span> </li>
														</ul>
													</label>
												</div>
											</form>
										</div>
									</div>
								</div> </div
							><!-- /.accordion -->
						</div>
					</div>
					<div class="col-md-4 col-lg-3 filter_area" v-else-if="shimmer">
						<div class="sg-sitebar">
							<shimmer class="mb-3" v-for="(list, i) in 2" :key="i" :height="list == 1 ? 355 : 290"></shimmer>
						</div>
					</div>
					<div class="col-md-8 col-lg-9">
						<div class="sg-category-content sg-filter" :class="activeClass">
							<div class="cta mb-4" v-if="page && page.image_835x200">
								<div v-if="page.image_835x200 == getUrl('images/default/default-image-835x200.png')">
									<a v-if="settings.category_default_banner != null"><img v-lazy="settings.category_default_banner" :alt="form.slug" class="img-fluid" /></a>
									<a v-else><img v-lazy="page.image_835x200" :alt="form.slug" class="img-fluid" /></a>
								</div>
								<div v-else>
									<a v-if="page.image_835x200"><img v-lazy="page.image_835x200" :alt="form.slug" class="img-fluid" /></a>
								</div>
							</div>
							<div class="d-flex justify-content-between mb-4">
								<div class="left-content">
									<div class="title">
										<h1>{{ lang.sort_by }}</h1>
										<select v-model="form.sort" @change="sortProducts" class="form-control">
											<option value="newest">{{ lang.newest }}</option>
											<option value="oldest">{{ lang.oldest }}</option>
											<option value="top_rated">{{ lang.top_rated }}</option>
											<option value="top_selling">{{ lang.top_selling }}</option>
										</select>
									</div>
								</div>
								<div class="right-content">
									<div class="d-flex">
										<form>
											<div class="form-group">
												<select v-model="form.paginate" @change="sortProducts" class="form-control">
													<option value="12">{{ lang.show_12 }}</option>
													<option value="16">{{ lang.show_16 }}</option>
													<option value="20">{{ lang.show_20 }}</option>
													<option value="24">{{ lang.show_24 }}</option>
												</select>
											</div>
										</form>
										<ul class="filter-tabs global-list">
											<li class="grid-view-tab" @click="activeClass = 'grid-view-tab'" :class="{ active: activeClass == 'grid-view-tab' || activeClass == '' }"><span class="mdi mdi-name mdi-grid"></span> </li>
											<li class="list-view-tab" @click="activeClass = 'list-view-tab'" :class="{ active: activeClass == 'list-view-tab' }"><span class="mdi mdi-name mdi-format-list-bulleted"></span></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="mt-2" v-if="products && products.total == 0"></div>
							<product :products="productList" :number="8" :grid_class="'grid-4'"></product>
							<div class="show-more" v-if="products && products.next_page_url && !loading">
								<a href="javaScript:void(0)" @click="loadProduct" class="btn btn-primary">{{ lang.show_more }}</a>
							</div>
							<div class="col-md-12 text-center show-more" v-show="loading">
								<loading_button :class_name="'btn btn-primary'"></loading_button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import product from "./product";
import shimmer from "../partials/shimmer";

export default {
	name: "filter_sidebar",
	components: {
		product,
		shimmer,
	},
	watch: {
		$route(to, from) {
			this.form.route = to.name;
			this.form.slug = to.params.slug;
			this.form.key = to.query.q;
			this.$store.dispatch("products", this.form);
			if (this.attributes.length == 0) {
				if (this.$route.name == "product.by.category") {
					this.$store.dispatch("filterData", this.$route.params.slug);
				} else {
					this.$store.dispatch("filterData");
				}
			}
		},
		priceRange(newValue, oldValue) {
			this.min_amount = newValue.min;
			this.max_amount = newValue.max;
			this.form.price.min = newValue.min;
			this.form.price.max = newValue.max;
		},
	},
	created() {
		let tag = document.querySelector('meta[name="author"]');
		if (tag) {
			tag.setAttribute("content", this.form.route);
		}
	},
	data() {
		return {
			activeClass: "",
			category_load_more: false,
			form: {
				category: [],
				child_category: [],
				price: {
					min: 0,
					max: 0,
				},
				brand: [],
				color: [],
				rating: [],
				attribute_value_id: [],
				paginate: 24,
				sort: "newest",
				slug: this.$route.params.slug,
				page: 1,
				route: this.$route.name,
				key: this.$route.query.q,
			},
			category_routes: ["product.by.gadget", "product.by.category"],
			total_product: 0,

			loading: false,
			category: true,
			child_category: true,
			price: false,
			brand: true,
			size: false,
			color: false,
			ratting: false,
			min_amount: 0,
			max_amount: 0,

			collapseAttribute: [],
			category_page: 1,
			brand_page: 1,
			color_page: 1,
			attribute_value_page: 1,
		};
	},

	mounted() {
		if (this.attributes.length == 0) {
			if (this.$route.name == "product.by.category") {
				this.$store.dispatch("filterData", this.$route.params.slug);
			} else {
				this.$store.dispatch("filterData");
			}
		}
		this.$store.dispatch("products", this.form);

		if (this.priceRange) {
			this.min_amount = this.priceRange.min;
			this.max_amount = this.priceRange.max;
			this.form.price.min = this.priceRange.min;
			this.form.price.max = this.priceRange.max;
		}
	},
	computed: {
		productList() {
			if (this.products && this.products.data && this.products.data.length == 0) {
				return ["id"];
			} else if (this.products && this.products.data && this.products.data.length > 0) {
				return this.products.data;
			} else {
				return [];
			}
		},
		/*filterLoaded() {
      return this.$store.getters.getFilterLoaded;
    },*/
		categories() {
			return this.$store.getters.getShopCategories;
		},
		brands() {
			return this.$store.getters.getShopBrands;
		},
		colors() {
			return this.$store.getters.getShopColors;
		},
		priceRange() {
			return this.$store.getters.getPriceRange;
		},
		shimmer() {
			return this.$store.state.module.shimmer;
		},
		attributes() {
			let attributes = this.$store.getters.getShopAttributes;

			if (this.$route.name == "product.by.category") {
				let slug = this.$route.params.slug;

				let attribute_index = attributes.findIndex((attribute) => attribute.slug == slug);

				if (attribute_index > -1) {
					return attributes[attribute_index].attributes;
				} else {
					return [];
				}
			}
			if (this.$route.name == "all.products") {
				let attribute_index = attributes.findIndex((attribute) => attribute.slug == "all");
				if (attribute_index > -1) {
					return attributes[attribute_index].attributes;
				} else {
					return [];
				}
			}

			return [];
		},
		products() {
			let products = [];

			if (this.form.route == "product.by.category" || this.form.route == "product.by.gadget") {
				let data = this.$store.getters.getCategoryProducts;
				if (data) {
					products = this.dataAssign(data);
				}
			} else if (this.form.route == "product.by.brand") {
				let data = this.$store.getters.getBrandProducts;
				if (data) {
					products = this.dataAssign(data);
				}
			} else if (this.form.route == "product.by.offer") {
				products = this.$store.getters.getOfferProducts;
			} else if (this.form.route == "product.by.selling") {
				products = this.$store.getters.getSellingProducts;
			} else {
				products = this.$store.getters.getProducts;
			}
			return products;
		},
		page() {
			let page = "";

			if (this.form.route == "product.by.category" || this.form.route == "product.by.gadget") {
				let data = this.$store.getters.getCategoryPage;
				if (data) {
					page = this.pageAssign(data);
				}
			} else if (this.form.route == "product.by.brand") {
				let data = this.$store.getters.getBrandPage;
				if (data) {
					page = this.pageAssign(data);
				}
			} else if (this.form.route == "shop") {
				let data = this.$store.getters.getSellerPage;
				if (data) {
					page = this.pageAssign(data);
				}
			}

			return page;
		},
	},
	methods: {
		loadCategories() {
			this.category_page++;
			let url = this.url + "/home/load-categories?page=" + this.category_page;
			this.loading = true;
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.loading = false;
					let length = response.data.categories.total;
					let products = response.data.categories.data;

					if (length > 0) {
						for (var i in products) {
							this.categories.data.push(products[i]);
						}
					}
					this.category_load_more = !!response.data.categories.next_page_url;
					this.categories.next_page_url = response.data.categories.next_page_url;
				}
			});
		},
		loadBrands() {
			this.brand_page++;
			let url = this.url + "/home/load-brands?page=" + this.brand_page;
			this.loading = true;
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.loading = false;
					let length = response.data.brands.total;
					let products = response.data.brands.data;

					if (length > 0) {
						for (var i in products) {
							this.brands.data.push(products[i]);
						}
					}
					this.brand_load_more = !!response.data.brands.next_page_url;
					this.brands.next_page_url = response.data.brands.next_page_url;
				}
			});
		},
		categoryAttributes(category) {},
		loadColors() {
			this.color_page++;
			let url = this.url + "/home/load-colors?page=" + this.color_page;
			this.loading = true;
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.loading = false;
					let length = response.data.colors.total;
					let colors = response.data.colors.data;

					if (length > 0) {
						for (var i in colors) {
							this.colors.data.push(colors[i]);
						}
					}
					this.color_load_more = !!response.data.colors.next_page_url;
					this.colors.next_page_url = response.data.colors.next_page_url;
				}
			});
		},
		filterProducts(attribute = null, value = null) {
			if (attribute) {
				this.form.attribute_value_id.push(value);
			}
			if (attribute && this.form.attribute_value_id.includes(value)) {
				var index = this.form.attribute_value_id.indexOf(value);
				if (index > -1) {
					this.form.attribute_value_id.splice(index, 1);
				}
			}

			let url = this.getUrl("home/filtered_products");
			this.form.page = 1;
			this.loading = true;
			axios.get(url, { params: this.form }).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.loading = false;
					this.products.data = response.data.products.data;
					this.products.next_page_url = response.data.products.next_page_url;
				}
			});
		},
		loadProduct() {
			this.form.page++;
			let url = this.getUrl("home/filtered_products");
			this.loading = true;
			axios.get(url, { params: this.form }).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.loading = false;
					let products = response.data.products.data;

					if (products.length > 0) {
						for (var i in products) {
							this.products.data.push(products[i]);
						}
					}
					this.products.next_page_url = response.data.products.next_page_url;
				}
			});
		},
		dataAssign(data) {
			for (let i = 0; i < Object.keys(data).length; i++) {
				if (data[i].slug == this.form.slug) {
					return data[i].products;
				}
			}
		},
		pageAssign(data) {
			for (let i = 0; i < Object.keys(data).length; i++) {
				if (data[i].slug == this.form.slug) {
					return data[i].page;
				}
			}
		},
		sortProducts() {
			this.form.page = 1;
			this.$store.dispatch("products", this.form);
		},
	},
};
</script>
