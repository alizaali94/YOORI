<template>
	<div v-if="productDetails.id">
		<div class="row">
			<div :class="{ 'col-lg-4 col-md-12': $route.name == 'product.details', 'col-lg-5': $route.name != 'product.details' }" v-if="lengthCounter(productDetails.gallery) > 0">
				<div class="product-slider-section">
					<div>
            <CoolLightBox style="direction: ltr;"
                :items="productDetails.gallery.large"
                :index="index"
                :useZoomBar="true"
                @close="index = null">
            </CoolLightBox>

            <div class="images-wrapper">
              <div class="image" v-for="(image, imageIndex) in productDetails.gallery.large" :key="imageIndex"
                   :style="{ backgroundImage: 'url(' + image + ')' }">
              </div>
            </div>
          </div>

          <div class="product-image">
            <img @click="index = current_index" :src="large_image" :alt="productDetails.product_name">
          </div>

				<VueSlickCarousel v-bind="slick_settings" :rtl="settings.text_direction == 'rtl'">
					<div v-for="(image, small_image_index) in productDetails.gallery.small" :key="small_image_index"
							:class="{ 'active' : small_image_index == current_index }" @click="activeImage(small_image_index)" class="thumb-item">
						<div class="thumbnail-img">
							<img :src="image" :alt="productDetails.product_name">
						</div>
					</div>
				</VueSlickCarousel>

          <span class="base" v-if="productDetails.special_discount_check > 0">
						{{
              productDetails.special_discount_type == "flat" ? priceFormat(productDetails.special_discount_check) + " " + lang.off : productDetails.special_discount_check + "% " + lang.off
            }}
					</span>
					<productVideo v-if="productDetails.video_link" :productDetails="productDetails"></productVideo>
				</div>
			</div>
			<div :class="{ 'col-lg-8 col-md-12': $route.name == 'product.details', 'col-lg-7': $route.name != 'product.details' }">
				<div class="row justify-content-md-center">
					<div :class="{ 'col-lg-8 col-md-8': $route.name == 'product.details', 'col-lg-12': $route.name != 'product.details' }">
						<div class="product-details-2">
							<div class="product-details-header">
								<h2>{{ productDetails.product_name }}</h2>
								<div class="product-code" v-if="stockFind().sku">
									<ul class="global-list d-flex">
										<li>{{ lang.SKU }}: {{ stockFind().sku }}</li>
									</ul>
								</div>
								<div class="sg-rating">
									<h3>{{ productDetails.rating > 0 ? productDetails.rating.toFixed(2) : 0 }} </h3>
									<star-rating v-model="productDetails.rating" :read-only="true" :star-size="12" :round-start-rating="false" class="rating-position"></star-rating>
									<span class="rating"> ({{ productDetails.reviews_count }} {{ lang.reviews }})</span>
								</div>
							</div>
							<!-- /.product-details-header -->

							<div class="product-stock-delivery">
								<div v-if="productType() && productDetails.is_digital != 1 && productDetails.stock_visibility != 'hide_stock'">
									<div class="stock-in" v-if="stockFind().stock > 0">
										<span class="mdi mdi-check-circle-outline"></span>
										<div class="text-left">
											<h5 class="days">{{ lang.in_stock }}</h5>
											<h5 v-if="productDetails.stock_visibility == 'visible_with_quantity'">{{ stockFind().stock }}</h5>
										</div>
									</div>
									<div v-else class="stock-out">
										<span class="mdi mdi-close-circle-outline"></span>
										<h5>{{ lang.stock_out }}</h5>
									</div>
								</div>
								<div v-if="productDetails.special_discount_check > 0" class="sg-countdown">
									<ul class="countdown">
										<li>
											<span class="days">{{ days }}</span>
											<p>{{ lang.days }}</p>
										</li>
										<li>
											<span class="hours">{{ hours }}</span>
											<p>{{ lang.hrs }}</p>
										</li>
										<li>
											<span class="minutes">{{ minutes }}</span>
											<p>{{ lang.mins }}</p>
										</li>
										<li>
											<span class="seconds">{{ seconds }}</span>
											<p>{{ lang.secs }}</p>
										</li> </ul
									><!-- countdown -->
								</div>
							</div>
							<!-- /.product-stock-delivery -->
							<p class="text-start" v-if="productDetails.has_variant">{{ productDetails.variation_price }}</p>
							<div class="sg-product-price" v-if="!productDetails.is_wholesale && productDetails.price !== 0">
								<span v-if="productDetails.special_discount_check > 0">{{ priceFormat(productDetails.product_stock.discount_percentage) }}</span>
								<span v-else>{{ priceFormat(productDetails.product_stock.price) }}</span>
								<del v-if="productDetails.special_discount_check > 0">
									{{ priceFormat(productDetails.product_stock.price) }}
								</del>
								<p class="text-start" v-if="productDetails.special_discount_check > 0"
									>{{ lang.you_save }}
									<span>{{ productDetails.special_discount_type == "flat" ? priceFormat(productDetails.special_discount_check) : productDetails.special_discount_check + "%" }}</span>
								</p>
							</div>
							<div class="sg-product-price" v-else-if="productDetails.is_wholesale && productDetails.price !== 0">
								<span>{{ priceFormat(productDetails.price) }} </span>
							</div>	
							<div class="sg-product-price" v-else>
								<div class="buttons d-flex align-items-center">
									<a @click="getContactPageUrl()" class="btn btn-warning" target="_blank">Request For Price</a>
								</div>
							</div>	
							<div class="sg-product-color" v-if="productDetails.product_colors && productDetails.colors.length > 0">
								<div class="sg-color">
									<h5>{{ lang.color }}:</h5>
									<div v-for="(color, index) in productDetails.product_colors" :key="'color' + index">
										<input type="radio" :value="'color' + color.id"  :id="'color' + color.id" v-model="product_form.color_id"  @change="attributeSelect()" name= 'color' />
										<label :for="'color' + color.id">
											<span :style="'background:' + color.code"></span>
										</label>
									</div>
								</div>
							</div>
							<!-- sg-product-color -->
							<div class="sg-product-size" v-for="(attribute, attribute_index) in attributes" :key="'attribute' + attribute_index">
								<div class="sg-size">
									<h5>{{ attribute.title }}:</h5>
									<form action="#">
										<div v-for="(value, value_index) in valuesByAttribute(attribute.id)" :key="'value' + value_index" >
											<input type="radio" :id="attribute.id + '_attribute_' + value.id" :value="value.id" v-model="product_form.attribute_values[attribute_index]" @change="attributeSelect()" />
											<label :for="attribute.id + '_attribute_' + value.id">{{ value.value }}</label>
										</div>
									</form>
								</div>
							</div>
							<div class="product-quantity product-border" v-if="settings.wholesale_price_variations_show == 1 && productDetails.is_wholesale && productDetails.wholesale_prices.length > 0">
								<table>
									<tr>
										<th>{{ lang.min_qty }}</th>
										<th>{{ lang.max_qty }}</th>
										<th>{{ lang.price }}</th>
									</tr>
									<tr v-for="(wholesale, index) in productDetails.wholesale_prices" :key="'wholesale' + index">
										<td>{{ wholesale.min_qty }}</td>
										<td>{{ wholesale.max_qty }}</td>
										<td>{{ priceFormat(wholesale.price) }}</td>
									</tr>
								</table>
							</div>
							<!-- product-quantity -->

							<div class="product-offer product-border" v-if="productDetails.short_description && productDetails.price !== 0" v-html="productDetails.short_description"> </div>
							<!-- product-offer -->

							<div class="product-details-totalPrice product-border" v-if="productDetails.is_digital != 1 && productDetails.is_catalog != 1 && productDetails.is_classified != 1 && productDetails.price !== 0">
								<div class="count-quantity" data-trigger="spinner">
									<a class="btn pull-left" href="javascript:;" data-spin="down" @click="cartMinus">
										<span class="mdi mdi-name mdi-minus"></span>
									</a>
									<input type="text" name="quantity" @focusout="quantityCheck" v-model="product_form.quantity" title="quantity" class="input-text" />
									<a class="btn pull-right" href="javascript:;" data-spin="up" @click="cartPlus">
										<span class="mdi mdi-name mdi-plus"></span>
									</a>
								</div>
								<h3
									>{{ lang.total_price }}:
									<span v-if="productDetails.special_discount_check > 0 && productDetails.is_wholesale != 1">{{ priceFormat(productDetails.product_stock.discount_percentage * product_form.quantity) }} </span>
									<span v-else-if="productDetails.is_wholesale != 1">{{ priceFormat(productDetails.product_stock.price * product_form.quantity) }}</span>
									<span v-if="productDetails.is_wholesale == 1">{{ priceFind() }}</span>
								</h3>
							</div>

							<div v-if="productDetails.is_catalog != 1" class="product-details-query mt-3 product-border">
								<h3 v-if="productDetails.is_digital == 0 && productDetails.estimated_shipping_days">
									{{ productDetails.estimated_shipping_days }}
									{{ lang.days }} <span>{{ lang.estimated_delivery_time }}</span></h3
								>

								<div class="product-cart sg-quantity" v-if="productType()">
									<div class="buttons d-flex align-items-center">
										<a href="javascript:void(0);" class="btn btn-primary" @click="addToCart(productDetails.minimum_order_quantity)">
											<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="42" height="42"><path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"/></svg>
											{{ lang.add_to_cart }}
										</a>
									</div>
									<div class="buyNowBTN d-flex align-items-center">
										<a href="javascript:void(0)" @click="addToCart(productDetails.minimum_order_quantity, 1)">
											<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="42" height="42"><path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A3,3,0,0,0,21,6ZM12,2a4,4,0,0,1,4,4H8A4,4,0,0,1,12,2ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A1,1,0,0,1,3,8H6v2a1,1,0,0,0,2,0V8h8v2a1,1,0,0,0,2,0V8h3a1,1,0,0,1,1,1Z"/></svg> {{ lang.buy_now }}
										</a>
									</div>
									<ul class="global-list d-flex">
										<li v-if="checkCompare()">
											<a href="javascript:void(0)" @click="removeCompare">
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40.095 37.193">
													<path id="iconmonstr-random-thin" d="M34.328,5.7,29.853,2.2,30.906,1,38,6.563l-7.087,5.573-1.053-1.2,4.66-3.646H27.927c-5.619.068-8.241,5.417-10.951,11.173,2.71,5.754,5.332,11.1,10.951,11.171H34.42l-4.567-3.575,1.053-1.2L38,30.427,30.913,36l-1.053-1.2,4.569-3.575H27.917c-6.172-.076-9.163-5.36-11.819-10.91C13.425,25.9,10.408,31.2,4.155,31.227H0V29.636H4.152c5.7-.022,8.345-5.388,11.07-11.171C12.5,12.68,9.855,7.314,4.152,7.292H0V5.7H4.155c6.253.025,9.27,5.326,11.943,10.91C18.754,11.061,21.745,5.778,27.917,5.7h6.411Z" transform="translate(0.8 0.096)"/>
												</svg>
												{{ lang.remove }}
											</a>
										</li>
										<li v-else>
											<a href="javascript:void(0)" @click="compare()">
												<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 40.095 37.193">
													<path id="iconmonstr-random-thin" d="M34.328,5.7,29.853,2.2,30.906,1,38,6.563l-7.087,5.573-1.053-1.2,4.66-3.646H27.927c-5.619.068-8.241,5.417-10.951,11.173,2.71,5.754,5.332,11.1,10.951,11.171H34.42l-4.567-3.575,1.053-1.2L38,30.427,30.913,36l-1.053-1.2,4.569-3.575H27.917c-6.172-.076-9.163-5.36-11.819-10.91C13.425,25.9,10.408,31.2,4.155,31.227H0V29.636H4.152c5.7-.022,8.345-5.388,11.07-11.171C12.5,12.68,9.855,7.314,4.152,7.292H0V5.7H4.155c6.253.025,9.27,5.326,11.943,10.91C18.754,11.061,21.745,5.778,27.917,5.7h6.411Z" transform="translate(0.8 0.096)"/>
												</svg>
												{{ lang.compare }}
											</a>
										</li>
										<li v-if="authUser && productDetails.user_wishlist">
											<a @click="removeWishlist" href="javascript:void(0)">
												<svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"/></svg>
												{{ lang.wishlist }}
											</a>
										</li>
										<li v-else-if="authUser && !productDetails.user_wishlist">
											<a href="javascript:void(0)" @click="addToWishlist">
												<svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
												{{ lang.wishlist }}
											</a>
										</li>
									</ul>
								</div>

								<div v-if="productDetails.is_classified == 1 && productDetails.contact_info">
									<p>{{ lang.contact_to_more_info }}</p>
									<table class="table table-bordered">
										<tbody>
											<tr v-if="productDetails.contact_info.contact_name">
												<td>{{ lang.name }}</td>
												<td>{{ productDetails.contact_info.contact_name }}</td>
											</tr>
											<tr v-if="productDetails.contact_info.phone_no">
												<td>{{ lang.phone }}</td>
												<td
													><a :href="'tel' + productDetails.contact_info.phone_no">{{ productDetails.contact_info.phone_no }}</a></td
												>
											</tr>
											<tr v-if="productDetails.contact_info.email">
												<td>{{ lang.email }}</td>
												<td
													><a :href="'mailto' + productDetails.contact_info.email">{{ productDetails.contact_info.email }}</a></td
												>
											</tr>
											<tr v-if="productDetails.contact_info.address">
												<td>{{ lang.address }}</td>
												<td>{{ productDetails.contact_info.address }}</td>
											</tr>
											<tr v-if="productDetails.contact_info.others">
												<td>{{ lang.others_info }}</td>
												<td v-html="productDetails.contact_info.others"></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<!-- product-details -->

							<div class="buttons" v-else-if="productDetails.is_catalog == 1 && productDetails.external_link">
								<a target="_blank" :href="productDetails.external_link" class="btn btn-primary btn-block">{{ lang.see_details }}</a>
							</div>

							<div class="product-details-policy product-border mt-4" v-if="addons.includes('refund')">
								<div class="related-product-shop">
									<div class="related-product-thumb text-center">
										<img :src="settings.refund_sticker" alt="Product" class="img-fluid" />
									</div>
									<div class="related-product-content">
										<h3 v-if="settings.refund_protection_sub_title">{{ settings.refund_protection_sub_title }}</h3>
										<h4 v-if="settings.refund_protection_title">{{ settings.refund_protection_title }}</h4>
									</div>
									<div class="policy" v-if="settings.refund_policy_agreement">
										<a v-if="urlCheck(settings.refund_policy_agreement)" :href="settings.refund_policy_agreement">{{ lang.view_policy }}</a>
										<router-link v-else :to="'/page/' + settings.refund_policy_agreement">{{ lang.view_policy }} </router-link>
									</div>
								</div>
							</div>

							<div class="social-media-icon">
								<ul class="global-list d-flex">
									<li class="fb-icon"
										><a target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=' + getUrl('product/' + productDetails.slug)"><span class="mdi mdi-name mdi-facebook"></span></a
									></li>
									<li class="tw-icon"
										><a target="_blank" :href="'https://twitter.com/intent/tweet?text=' + productDetails.product_name + '&url=' + getUrl('product/' + productDetails.slug)"><span class="mdi mdi-name mdi-twitter"></span></a
									></li>
									<li class="ld-icon"
										><a target="_blank" :href="'https://www.linkedin.com/sharing/share-offsite?mini=true&url=' + getUrl('product/' + productDetails.slug) + '&title=' + productDetails.product_name + '&summary=Extra+linkedin+summary+can+be+passed+here'"
											><span class="mdi mdi-linkedin"></span></a
									></li>
									<li class="wh-icon"
										><a target="_blank" :href="'https://wa.me/?text=' + getUrl('product/' + productDetails.slug)"><span class="mdi mdi-name mdi-whatsapp"></span></a
									></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /.col-lg-8 -->
					<div v-if="$route.name == 'product.details'" class="col-lg-4 col-md-4">
						<div class="product-widget-sidebar pb-sm-3">
							<div class="product-store mb-4" v-if="settings.seller_system == 1 && productDetails.seller && $route.name == 'product.details'">
								<div class="product-store-thumb">
									<div class="addTocat" v-if="authUser">
										<a href="javascript:void(0)" :class="{ disable_btn: btn_disabled }" @click="removeFollowed(productDetails.seller.id)" v-if="checkFollowed(productDetails.seller)"><span class="mdi mdi-name mdi-heart"></span></a>
										<a href="javascript:void(0)" :class="{ disable_btn: btn_disabled }" @click="follow(productDetails.seller.id)" v-else><span class="mdi mdi-name mdi-heart-outline"></span></a>
									</div>

									<router-link :to="{ name: 'shop', params: { slug: productDetails.seller.slug } }">
										<img v-lazy="productDetails.seller.image_297x203" :alt="productDetails.seller.shop_name" class="img-fluid" />
									</router-link>

									<div class="product-store-content text-center">
										<div class="sg-store-logo">
											<img v-lazy="productDetails.seller.image_82x82" :alt="productDetails.seller.shop_name" class="img-fluid" />
										</div>
										<h4>{{ productDetails.seller.shop_name }}</h4>
										<div class="sg-rating">
											<star-rating v-model="productDetails.seller.rating_count" :read-only="true" :star-size="12" :round-start-rating="false"></star-rating>
											<span>({{ productDetails.seller.reviews_count }} {{ lang.reviews }})</span>
										</div>
									</div>
								</div>
								<div class="product-store-info">
									<div class="store-ino">
										<p
											>{{ lang.products }}: <span>{{ productDetails.seller.total_products }}</span></p
										>
										<p class="store-date">{{ lang.joined }}: {{ productDetails.seller.join_date }}</p>
									</div>
									<router-link :to="{ name: 'shop', params: { slug: productDetails.seller.slug } }" class="visit-store"> {{ lang.visit_store }} <span class="icon mdi mdi-name mdi-arrow-right"></span></router-link>
								</div>
							</div>
							<div class="product-offer" v-if="settings.product_details_site_banner">
								<img v-lazy="settings.product_details_site_banner" alt="banner-image" class="img-fluid" />
							</div>
							<div class="product-widget-recent-entries" v-if="productDetails.sidebar_products.length > 0">
								<h4>{{ lang.recent_products }}</h4>
								<ul class="global-list">
									<li v-for="(product, index) in productDetails.sidebar_products" :key="index">
										<div class="shop">
											<div class="thumb">
												<router-link :to="{ name: 'product.details', params: { slug: product.slug } }">
													<img v-lazy="product.image_40x40" :alt="product.slug" class="img-fluid" />
												</router-link>
											</div>
											<div class="info">
												<h3 class="text-ellipse-one">
													<router-link :to="{ name: 'product.details', params: { slug: product.slug } }">
														{{ product.product_name }}
													</router-link>
												</h3>
												<span class="price">
													<span v-if="product.special_discount_check > 0">
														{{ priceFormat(product.discount_percentage) }}
													</span>
													<span v-else>{{ priceFormat(product.price) }}</span>
												</span>
											</div>
										</div>
									</li>
								</ul>
							</div> </div
						><!-- /.product-widget-sidebar -->
					</div>
					<!-- /.col-lg-8 -->
				</div>
			</div>
		</div>
		<div class="row" v-if="$route.name == 'product.details'">
			<div class="col-lg-9">
				<div class="products-description product-details-description">
					<ul class="nav nav-tabs description-tabs" role="tablist">
						<li role="presentation" class="nav-item">
							<a class="nav-link" :class="{ active: activeNav == 'details' }" href="javascript:void(0)" @click="activeNav = 'details'" aria-controls="details" role="tab" data-bs-toggle="tab">
								{{ lang.details }}
							</a>
						</li>
						<li class="nav-item" role="presentation" v-if="productDetails.language_product && productDetails.language_product.specification">
							<a class="nav-link" :class="{ active: activeNav == 'specifications' }" href="javascript:void(0)" @click="activeNav = 'specifications'" aria-controls="specifications" role="tab" data-bs-toggle="tab" aria-expanded="true">{{
								lang.specifications
							}}</a>
						</li>
						<li class="nav-item" role="presentation">
							<a class="nav-link" :class="{ active: activeNav == 'delivery' }" href="javascript:void(0)" aria-controls="delivery" @click="fetchReviews" role="tab" data-bs-toggle="tab" aria-expanded="true">{{ lang.reviews }}</a>
						</li>
					</ul>
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane fade" :class="{ 'show active': activeNav == 'details' }" id="details">
							<div v-if="productDetails.language_product" v-html="productDetails.language_product.description"></div>
							<div class="text-center" v-if="productDetails.description_image.length > 0">
								<div class="mt-3" v-for="(image, index) in productDetails.description_image" :key="index">
									<img v-lazy="image" :alt="productDetails.product_name" />
								</div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" v-if="productDetails.language_product && productDetails.language_product.specification" :class="{ 'show active': activeNav == 'specifications' }" id="specifications">
							<div class="specifications"> <iframe :src="productDetails.language_product.specification" height="842px"></iframe> </div
							><!-- /.specifications -->
						</div>
						<div role="tabpanel" class="tab-pane fade" :class="{ 'show active': activeNav == 'delivery' }" id="delivery">
							<div class="customer-reviews">
								<div class="d-flex">
									<div class="left-content">
										<h2
											>{{ productDetails.rating > 0 ? productDetails.rating.toFixed(2) : 0 }}
											<small>{{ lang.out_of }} {{ reviews.total }}</small>
										</h2>
										<div class="sg-rating">
											<star-rating v-model="productDetails.rating" :read-only="true" :star-size="12" :round-start-rating="false" class="rating-position"></star-rating>
										</div>
										<h3>({{ productDetails.reviews_count }} {{ lang.reviews }})</h3>
									</div>
									<div class="right-content">
										<div class="sg-progress" v-for="(percentage, index) in percentages" :key="'percentage' + index">
											<span>{{ index }} star</span>
											<div class="progress">
												<div class="progress-bar" role="progressbar" :style="'width: ' + percentage + '%'" :aria-valuenow="percentage" aria-valuemin="0" :aria-valuemax="percentage"></div>
											</div>
											<strong>{{ percentage }}%</strong>
										</div>
									</div>
								</div>
							</div>
							<div class="sg-reviews">
								<h2>{{ lang.customer_reviews }}</h2>
								<h2>{{ reviews.total }} {{ lang.comments }}</h2>
								<ul class="comment-list global-list">
									<li v-for="(review, index) in reviews.data" :key="'review' + index">
										<div class="comment_info">
											<div class="commenter-avatar" v-if="review.user">
												<router-link :to="{ name: 'dashboard' }"><img class="img-fluid" v-if="review.user.profile_image" v-lazy="review.user.profile_image" :alt="review.user.full_name" /> </router-link>
											</div>
											<div class="comment-box">
												<div class="comment-title" v-if="review.user">
													<span class="title-1">
														<router-link :to="{ name: 'dashboard' }" class="url">{{ review.user.full_name }} </router-link>
													</span>
													<div class="sg-rating">
														<star-rating :rating="review.rating" :read-only="true" :star-size="10" active-color="#C9151B"></star-rating>
													</div>
													<div class="comment-meta">
														<ul class="global-list">
															<li
																><a href="javascript:void(0)">{{ review.review_date }}</a></li
															>
														</ul>
													</div>
													<a class="float-end" v-if="review.user_id == authUser.id" @click="editReview(review)" href="javascript:void(0)">{{ lang.edit }}</a>
												</div> </div
											><!-- /.comment-box -->
											<p>{{ review.comment }}</p>
											<div class="selected-media mt-0 m-2" v-if="review.images">
												<img v-lazy="review.image_link" :alt="productDetails.product_name" class="img-thumbnail" width="100" />
											</div>
											<div class="comment-icon">
												<ul class="global-list">
													<li v-if="alreadyLiked(review.review_likes)"
														><a href="javascript:void(0)" @click="unLike(review.id)" :class="{ disable_btn: like_loading }">
															<span class="mdi mdi-thumb-up"></span>
															<span class="replies_text">({{ review.review_likes ? review.review_likes.length : 0 }})</span></a
														></li
													>

													<li v-else
														><a href="javascript:void(0)" @click="reviewLike(review.id)" :class="{ disable_btn: like_loading }">
															<span class="mdi mdi-thumb-up-outline"></span>
															<span class="replies_text">({{ review.review_likes ? review.review_likes.length : 0 }})</span></a
														></li
													>

													<li
														><a href="javascript:void(0)" @click="toggleReplyForm(review.id)"><span class="mdi mdi-share"></span></a>
													</li>
													<li v-if="review.replies.length > 0"
														><a href="javascript:void(0)" @click="showReplies(review.id)" class="font_18">{{ review.replies.length }} {{ lang.replies }}</a>
													</li>
												</ul>
											</div>
											<form @submit.prevent="reviewReply(review.id)" v-if="reply_form == review.id">
												<div class="row">
													<div class="col-lg-1 pr-0"></div>
													<div class="col-lg-9 pl-0">
														<textarea v-model="product_form.reply" class="form-control reply_box" required="required" rows="2"></textarea>
													</div>
													<div class="col-lg-2">
														<input v-if="!reply_loading" type="submit" class="btn btn-primary" value="Send" />
														<loading_button v-else :class_name="'btn btn-primary'"></loading_button>
													</div>
												</div>
											</form>
											<ul class="children global-list" v-if="review.replies && replies == review.id">
												<li v-for="(reply, index) in review.replies" :key="'reply' + index">
													<div class="comment_info">
														<div class="commenter-avatar" v-if="reply.user">
															<router-link :to="{ name: 'dashboard' }"><img class="img-fluid" v-lazy="reply.user.profile_image" :alt="reply.user.full_name" /></router-link>
														</div>
														<div class="comment-box">
															<div class="comment-title">
																<span class="title-1" v-if="reply.user"
																	><router-link :to="{ name: 'dashboard' }" class="url">{{ reply.user.full_name }}</router-link></span
																>
																<div class="comment-meta">
																	<ul class="global-list">
																		<li
																			><a href="javascript:void(0)">{{ reply.reply_date }}</a></li
																		>
																	</ul>
																</div>
															</div> </div
														><!-- /.comment-box -->
														<p>{{ reply.reply }}</p>
													</div>
												</li>
											</ul>
										</div>
									</li>
								</ul>
								<div class="text-center show-more" v-if="reviews.next_page_url">
									<a href="javascript:void(0)" @click="loadReviews()" class="btn btn-primary">{{ lang.show_more }}</a>
								</div>
							</div>

							<div v-if="(authUser && !productDetails.user_review) || edit" class="review-form">
								<h2>{{ lang.write_your_own_review }}</h2>
								<div class="sg-rating">
									<div class="rating">
										<star-rating v-model="product_form.rating" :star-size="20" active-color="#C9151B"></star-rating>
									</div>
								</div>
								<form @submit.prevent="submitReview">
									<div class="form-group">
										<label>{{ lang.review_title }}</label>
										<input class="form-control" v-model="product_form.title" name="name" type="text" value="" size="30" aria-required="true" required="required" />
									</div>
									<div class="form-group">
										<label>{{ lang.comment }}</label>
										<textarea name="message" v-model="product_form.comment" class="form-control" required="required" rows="7"></textarea>
									</div>
									<div class="form-group">
										<label>{{ lang.upload_image }}</label>
										<div class="input-group">
											<div class="custom-file d-flex">
												<label class="upload-image form-control" for="upload-1">
													<input type="file" id="upload-1" @change="imageUp($event)" />
													<i ref="imageUpload" id="upload-image">{{ product_form.image_text }}</i>
												</label>
												<label class="upload-image upload-text d-flex loader-bdr" for="upload-2">
													<input type="file" id="upload-2" @change="imageUp($event)" />
													<img v-lazy="getUrl('public/images/others/env.svg')" :alt="productDetails.product_name" class="img-fluid" />
													{{ lang.upload }}
												</label>
											</div>
										</div>
									</div>
									<input v-if="!review_loading" type="submit" class="btn btn-primary" :value="lang.send" />
									<loading_button v-else :class_name="'btn btn-primary'"></loading_button>
								</form>
							</div> </div
						><!-- /.tab-pane -->
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row" v-else-if="shimmer">
		<div class="col-lg-4">
			<VueSlickCarousel>
				<div v-for="(image, index) in 1" :key="index">
					<shimmer :height="450"></shimmer>
				</div>
			</VueSlickCarousel>
		</div>
		<div class="col-lg-8">
			<div class="row">
				<div class="col-md-8">
					<div class="products-details-info">
						<ul class="global-list d-flex justify-content-between">
							<div class="row">
								<div class="col-lg-4" v-for="(list, i) in 21" :key="i">
									<shimmer class="al-height mb-3" :height="20"></shimmer>
								</div>
							</div>
						</ul>
						<div class="stock-delivery">
							<shimmer class="de-margin" v-for="(list, i) in 2" :key="i" :height="100"></shimmer>
						</div>
						<div class="row">
							<div class="col-lg-4" v-for="(list, i) in 15" :key="i">
								<shimmer class="al-height mb-3" :height="20"></shimmer>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-4">
					<shimmer class="mb-3" v-for="(list, i) in 2" :key="i" :height="list == 1 ? 200 : 300"></shimmer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import shimmer from "../partials/shimmer";
import StarRating from "vue-star-rating";
import loading_button from "./loading_button";
import productVideo from "./product-video";



export default {
	name: "details-view",
	props: ["productDetails"],
	data() {
		return {
			clickedSlide: 0,
			currentCarousel: "0",
			added_to_cart: false,
			firstStock: {
				stock: 0,
				sku: "",
				price: 0,
				special_discount_check: 0,
			},

			slick_settings: {
				dots: false,
				edgeFriction: 0.35,
				infinite: true,
				arrows: true,
				autoplay: false,
				slidesToShow: 5,
				slidesToScroll: 5,
				// adaptiveHeight: true,
				centerPadding: "30px",
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						},
					},
					{
						breakpoint: 991,
						settings: {
							slidesToShow: 7,
							slidesToScroll: 7,
						},
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 3,
						},
					},
					{
						breakpoint: 480,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
						},
					},
					{
						breakpoint: 320,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3,
						},
					},
				],
			},
			activeNav: "details",
			hoveredReview: 0,
			reply_form: 0,
			replies: 0,
			paginate: 1,
			edit: false,
			review_loading: false,
			like_loading: false,
			reply_loading: false,
			percentages: [],
			reviews: {
				data: [],
				total: 0,
			},
			total_price: 0,
			productView: {
				slug: this.$route.params.slug,
			},
			disable: false,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
      index: null,
      large_image: '',
      current_index: 0
		};
	},
	components: {
		VueSlickCarousel,
		shimmer,
		StarRating,
		loading_button,
		productVideo,
	},
	mounted() {
		if (this.productDetails && this.productDetails.form) {
			document.title = this.productDetails.product_name;
			if (this.productDetails.special_discount_check > 0) {
				this.setCountDown();
			}
			this.product_form.quantity = this.productDetails.form.quantity;
			this.product_form.variants_ids = this.productDetails.form.variants_ids;
			this.product_form.variants_name = this.productDetails.form.variants_name;
			this.product_form.id = this.productDetails.form.id;
			this.product_form.color_id = this.productDetails.form.color_id;
			this.product_form.attribute_values = this.productDetails.form.attribute_values;
      this.large_image = this.productDetails.gallery.large[0];
		}
	},

	watch: {
		productDetails() {
			if (this.productDetails && this.productDetails.form) {
				if (this.productDetails.special_discount_check > 0) {
					this.setCountDown();
				}
				document.title = this.productDetails.product_name;
				this.product_form.quantity = this.productDetails.form.quantity;
				this.product_form.sku = this.productDetails.form.sku;
				this.product_form.variants_name = this.productDetails.form.variants_name;
				this.product_form.id = this.productDetails.form.id;
				this.product_form.color_id = this.productDetails.form.color_id;
        this.large_image = this.productDetails.gallery.large[0];
			}
		},
    index(){
      console.log(this.index);
    }
	},
	computed: {
		compareProducts() {
			return this.$store.getters.getUserCompare;
		},
		shimmer() {
			return this.$store.state.module.shimmer;
		},
		attributes() {
			return this.$store.getters.getProductAttributes;
		},
		carts() {
			let carts = this.$store.getters.getCarts;
			if (carts && carts[0]) {
				this.product_form.trx_id = carts[0].trx_id;
			}
			return carts;
		},
	},
	methods: {
    activeImage(imageIndex) {
      this.current_index = imageIndex;
      this.large_image = this.productDetails.gallery.large[imageIndex];
    },
		setCountDown() {
			this.days = this.productDetails.countdown.days;
			this.hours = this.productDetails.countdown.hours;
			this.minutes = this.productDetails.countdown.mins;
			this.seconds = this.productDetails.countdown.secs;
			this.countDownTimer();
		},
		countDownTimer() {
			setTimeout(() => {
				this.seconds -= 1;
				if (this.seconds <= 0) {
					this.seconds = 59;
					this.minutes -= 1;
					if (this.minutes < 0) {
						this.minutes = 59;
						this.hours -= 1;
						if (this.hours < 0) {
							this.hours = 23;
							this.days -= 1;
						}
					}
				}
				this.countDownTimer();
			}, 1000);
		},
		pageChange(curr_page) {
			this.currentCarousel = curr_page;
		},
		checkCompare() {
			let length = Object.keys(this.compareProducts).length;
			let product = this.productDetails;
			for (let i = 0; i < length; i++) {
				if (this.compareProducts[i] && product.id == this.compareProducts[i].id) {
					return true;
				}
			}
			return false;
		},
		removeCompare() {
			if (this.disable) {
				return false;
			}
			this.disable = true;
			let url = this.getUrl("home/remove-compare_product/" + this.productDetails.id);
			axios.get(url).then((response) => {
				this.disable = false;
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.commit("getRemoveCompare", response.data.product);
					this.$store.dispatch("compareList", response.data.compare_list);
				}
			});
		},
		compare() {
			if (this.disable) {
				return false;
			}
			this.disable = true;
			let url = this.getUrl("home/add-to-compare/" + this.productDetails.id);
			axios.get(url).then((response) => {
				this.disable = false;
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.commit("getUserCompare", response.data.product);
					this.$store.dispatch("compareList", response.data.compare_list);
				}
			});
		},
		removeWishlist() {
			if (this.disable) {
				return false;
			}
			this.disable = true;
			let url = this.getUrl("user/remove-wishlist-product/" + this.productDetails.id);
			axios.get(url).then((response) => {
				this.disable = false;
				if (response.data.error) {
					this.$Progress.fail();
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.productDetails.user_wishlist = null;
					this.$store.commit("getRemoveWishlist", response.data.wishlist);
					this.$store.dispatch("wishlists", response.data.totalWishlist);
				}
			});
		},
		addToWishlist() {
			if (this.disable) {
				return false;
			}
			this.disable = true;
			let url = this.getUrl("user/add-to-wishlist/" + this.productDetails.id);
			axios.get(url).then((response) => {
				this.disable = false;
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					this.$store.dispatch("wishlists", response.data.wishlists);
					this.productDetails.user_wishlist = response.data.wishlist;
				}
			});
		},
		stockFind() {
			return (this.firstStock = {
				stock: this.productDetails.product_stock.current_stock,
				sku: this.productDetails.product_stock.sku,
				price: this.productDetails.product_stock.price,
				special_discount_check: this.productDetails.product_stock.special_discount_check,
			});
		},
		priceFind() {
			let price = this.productDetails.price;

			if (this.productDetails.wholesale_prices) {
				let whole_sales = this.productDetails.wholesale_prices;

				for (let i = 0; i < whole_sales.length; i++) {
					if (whole_sales[i].min_qty <= this.product_form.quantity && whole_sales[i].max_qty >= this.product_form.quantity) {
						price = whole_sales[i].price;
						break;
					}
				}
			}
			return this.priceFormat(price * this.product_form.quantity);
		},
		attributeSelect() {
			let formData = {
				color_id: this.product_form.color_id,
				product_id: this.productDetails.id,
				attribute_ids: this.product_form.attribute_values,
			};
			/* if (!formData.color_id || this.product_form.attribute_values.filter(String).length != this.attributes.length) {
        return false;
      }*/
	  
	  console.log(this.productDetails);
	  console.log(formData);
			let url = this.getUrl("find/products-variants");
			axios.post(url, formData).then((response) => {
				console.log(response.data.product_stock);
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					if (response.data.images) {
						this.currentCarousel = response.data.images['image_72x72_0'];

						for (let i = 0; i < this.productDetails.gallery.length; i++) {
							if (this.productDetails.gallery[i] == response.data.images["image_320x320"]) {
								this.productDetails.gallery[i] = response.data.images["image_320x320"];
								this.clickedSlide = i;
							}
						}
					}
					if (response.data.product_stock) {
						this.productDetails.product_stock.current_stock = response.data.product_stock.current_stock;
						this.productDetails.product_stock.sku = response.data.product_stock.sku;
						this.productDetails.product_stock.price = response.data.product_stock.price;
						this.productDetails.product_stock.discount_percentage = response.data.product_stock.discount_percentage;
						this.product_form.variants_ids = response.data.product_stock.variant_ids;
						this.product_form.variants_name = response.data.product_stock.name;
					} else {
						toastr.error(response.data.msg, this.lang.Error + " !!");
					}
				}
			});
		},
		valuesByAttribute(id) {
			let attributes = [];

			for (let i = 0; i < this.productDetails.attribute_values.length; i++) {
				if (id == this.productDetails.attribute_values[i]["attribute_id"]) {
					attributes.push(this.productDetails.attribute_values[i]);
				}
			}

			return attributes;
		},
		cartPlus() {
			if (this.product_form.quantity != this.firstStock.stock && this.product_form.quantity < this.firstStock.stock) {
				this.product_form.quantity++;
			} else {
				toastr.warning(this.lang.Only + " " + this.firstStock.stock + " " + this.lang.items_available_at_this_time, this.lang.Error + " !!");
			}
		},
		cartMinus() {
			if (this.product_form.quantity > this.productDetails.minimum_order_quantity) {
				this.product_form.quantity--;
			} else {
				toastr.warning(this.lang.please_order_minimum_of + " " + this.productDetails.minimum_order_quantity + " " + this.lang.Quantity, this.lang.Warning + " !!");
			}
		},
		addToCart(min_qty, buy) {
			let carts = this.carts;
			let url = this.getUrl("user/addToCart");
			axios.post(url, this.product_form).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					toastr.success(response.data.success, this.lang.Success + " !!");
					let carts = response.data.carts;
					if (buy) {
						$("#product").modal("hide");
					}
					this.$store.dispatch("carts", carts);
					this.resetForm();
					this.product_form.quantity = min_qty;
					if (buy) {
						this.$router.push({ name: "checkout" });
					} else {
						this.added_to_cart = true;
						setTimeout(() => {
							this.added_to_cart = false;
						}, 2000);
					}
				}
			});
		},
		quantityCheck() {
			if (this.product_form.quantity != this.firstStock.stock && this.product_form.quantity < this.firstStock.stock) {
				this.product_form.quantity++;
			} else {
				this.product_form.quantity = this.firstStock.stock;
				toastr.warning(this, lang.only + this.stockFind().stock + " " + this.lang.items_available_at_this_time, this.lang.Warning + " !!");
			}

			if (this.product_form.quantity > this.productDetails.minimum_order_quantity) {
				this.product_form.quantity--;
			} else {
				this.product_form.quantity = this.productDetails.minimum_order_quantity;
				toastr.warning(this.lang.please_order_minimum_of + this.productDetails.minimum_order_quantity + " " + this.lang.Quantity, this.lang.Warning + " !!");
			}
		},
		productType() {
			return !(this.productDetails.is_catalog == 1 || this.productDetails.is_classified == 1);
		},
		submitReview() {
			if (this.product_form.rating == 0) {
				return toastr.error(this.lang.choose_a_rating_star_first, this.lang.Error + " !!");
			}
			this.review_loading = true;
			this.product_form.product_id = this.productDetails.id;
			this.product_form.paginate = this.paginate;
			let url = this.getUrl("user/product-review-store");
			axios
				.post(url, this.product_form, {
					transformRequest: [
						function (data, headers) {
							return objectToFormData(data);
						},
					],
				})
				.then((response) => {
					this.review_loading = false;
					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						toastr.success(response.data.success, this.lang.Success + " !!");
						this.resetForm();
						this.reviews = response.data.reviews;
						this.edit = false;
						this.percentages = response.data.percentages;
						this.$store.dispatch("productDetails", this.$route.params.slug);
					}
				})
				.catch((error) => {
					this.review_loading = false;
				});
		},
		fetchReviews() {
			this.activeNav = "delivery";
			if (this.reviews.data.length == 0) {
				let url = this.getUrl("home/product-reviews/" + this.productDetails.id);
				axios
					.get(url)
					.then((response) => {
						if (response.data.error) {
							toastr.error(response.data.error, this.lang.Error + " !!");
						} else {
							this.reviews = response.data.reviews;
							this.percentages = response.data.percentages;
						}
					})
					.catch((error) => {
						toastr.error(this.lang.Oops, this.lang.Error + " !!");
					});
			}
		},
		reviewReply(review_id) {
			this.reply_loading = true;
			this.product_form.review_id = review_id;
			this.product_form.product_id = this.productDetails.id;
			this.product_form.paginate = this.paginate;
			let url = this.getUrl("home/product-reply-store");
			axios
				.post(url, this.product_form)
				.then((response) => {
					this.reply_loading = false;
					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						toastr.success(response.data.success, this.lang.Success + " !!");
						this.resetForm();
						this.reviews.data = response.data.reviews.data;
						this.reviews.next_page_url = response.data.reviews.next_page_url;
						this.reviews.total = response.data.reviews.total;
					}
				})
				.catch((error) => {
					this.reply_loading = false;
				});
		},
		toggleReplyForm(review_id) {
			if (this.reply_form == review_id) {
				this.reply_form = 0;
			} else {
				this.reply_form = review_id;
			}
		},
		showReplies(review_id) {
			if (this.replies == review_id) {
				this.replies = 0;
			} else {
				this.replies = review_id;
			}
		},
		loadReviews() {
			this.paginate++;
			let url = this.getUrl("home/product-reviews/" + this.productDetails.id + "?page=" + this.paginate);
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.error(response.data.error, this.lang.Error + " !!");
				} else {
					let reviews = response.data.reviews.data;

					if (reviews.length > 0) {
						for (let i = 0; i < reviews.length; i++) {
							this.reviews.data.push(reviews[i]);
						}
					}
				}
				this.reviews.next_page_url = response.data.reviews.next_page_url;
			});
		},
		reviewLike(id) {
			let data = {
				paginate: this.paginate,
				id: id,
				product_id: this.productDetails.id,
			};
			this.like_loading = true;
			let url = this.getUrl("product/like-review");
			axios
				.post(url, data)
				.then((response) => {
					this.like_loading = false;

					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						if (response.data.success) {
							toastr.success(response.data.success, this.lang.Success + " !!");
						}
						this.reviews.data = response.data.reviews.data;
						this.reviews.next_page_url = response.data.reviews.next_page_url;
						this.reviews.total = response.data.reviews.total;
					}
				})
				.catch((error) => {
					this.like_loading = false;
				});
		},
		unLike(id) {
			let data = {
				paginate: this.paginate,
				id: id,
				product_id: this.productDetails.id,
			};
			this.like_loading = true;

			let url = this.getUrl("product/unlike-review");
			axios
				.post(url, data)
				.then((response) => {
					this.like_loading = false;

					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						if (response.data.success) {
							toastr.success(response.data.success, this.lang.Success + " !!");
						}
						this.reviews.data = response.data.reviews.data;
						this.reviews.next_page_url = response.data.reviews.next_page_url;
						this.reviews.total = response.data.reviews.total;
					}
				})
				.catch((error) => {
					this.like_loading = false;
				});
		},
		editReview(review) {
			this.edit = true;
			this.product_form.product_id = this.productDetails.id;
			this.product_form.rating = review.rating;
			this.product_form.title = review.title;
			this.product_form.comment = review.comment;
			let file_name = review.image_link;
			if (file_name) {
				let array = file_name.split("/");
				this.product_form.image_text = array[array.length - 1];
			}
		},
		imageUp(event) {
			this.product_form.image = event.target.files[0];
			document.getElementById("upload-image").innerHTML = this.product_form.image.name;
		},
		variantClass(code) {
			return {
				border: "1px solid " + code,
			};
		},
		getContactPageUrl() {
			const contactPageUrl = this.$router.resolve({ name: 'contact' }).href;
    		window.open(contactPageUrl, '_blank');
  		},
	},
};
</script>
