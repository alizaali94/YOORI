<template>
	<header class="sg-header home-4" :class="{ 'sidebar-active': smCategory, 'mobile-menu-active': show_sm_home }">
		<div class="sg-header-top-banner alert alert-dismissible fade show" role="alert" v-if="!is_top_banner && settings.top_bar_banner">
			<img :src="settings.top_bar_banner" alt="banner Image" />
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><span class="mdi mdi-close mdi-15px" @click="topBanner"></span></button>
		</div>
		<div class="sg-topbar">
			<div class="container">
				<div class="topbar-content">
					<div class="left-content">
						<ul class="global-list d-flex align-items-center">
							<li v-if="settings.language_switcher != 0">
								<div class="dropdown">
									<button class="dropdown-toggle" type="button" @click.stop="languageDropdown" :class="{ show: language_dropdown }" data-bs-toggle="dropdown" aria-expanded="false">{{ activeLanguage.name }} </button>
									<ul @click.stop class="dropdown-menu" :class="{ show: language_dropdown }" aria-labelledby="">
										<li v-for="(language, index) in languages" :key="index">
											<a class="dropdown-item" @click="changeLanguage(language.locale)" href="javascript:void(0)"><img v-lazy="language.flag_image" alt="flag" class="img-fluid" />{{ language.name }}</a>
										</li>
									</ul>
								</div>
							</li>
							<li v-if="settings.currency_switcher != 0">
								<div class="dropdown">
									<button class="dropdown-toggle" type="button" id="" @click.stop="currencyDropdown" :class="{ show: currency_dropdown }" data-bs-toggle="dropdown" aria-expanded="false">{{ activeCurrency.name }} </button>
									<ul @click.stop class="dropdown-menu" :class="{ show: currency_dropdown }" aria-labelledby="">
										<li v-for="(currency, index) in currencies" :key="index"
											><a class="dropdown-item" @click="changeCurrency(currency)" href="javascript:void(0)">{{ currency.name }}</a></li
										>
									</ul>
								</div>
							</li>
							<li v-if="settings.topbar_play_store_link == 1">
								<a :href="settings.play_store_link" target="_blank"
									><span class="mdi mdi-name mdi-google-play"></span> <small>{{ lang.play_store }}</small></a
								>
							</li>
							<li v-if="settings.topbar_app_store_link == 1">
								<a :href="settings.apple_store_link" target="_blank"
									><span class="mdi mdi-name mdi-apple"></span> <small>{{ lang.app_store }}</small></a
								>
							</li>
							<li v-if="settings.seller_system == 1 && !authUser">
								<router-link
									:to="{
										name: 'seller-register',
										params: { type: 'seller' },
									}"
								>
									{{ lang.be_a_seller }}
								</router-link>
							</li>
						</ul>
					</div>
					<div class="right-content new-list">
						<ul class="global-list">
							<li>
								<a :href="'tel:' + settings.header_contact_phone" class="live-chat">
									<strong>{{ lang.call }}: {{ settings.header_contact_phone }}</strong>
								</a>
							</li>
							<li>
								<router-link :to="{ name: 'track.order' }"
									><span class="mdi mdi-name mdi-map-marker-outline"></span>
									{{ lang.track_order }}
								</router-link>
							</li>
							<li>
								<router-link :class="{ has_compare: compareList > 0 }" :to="{ name: 'compare.list' }"
									>{{ lang.compare }} <span v-if="compareList > 0">({{ compareList }})</span></router-link
								>
							</li>
							<li>
								<router-link :to="{ name: 'blogs' }">{{ lang.blog }}</router-link>
							</li>
						</ul>
					</div>
				</div> </div
			><!-- /.container -->
		</div>

		<div class="header-middle">
			<div class="container">
				<div class="botom-content">
					<div class="sg-logo">
						<router-link :to="{ name: 'home' }">
							<svg v-if="settings.demo_mode" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 425.95 161.53" style="enable-background: new 0 0 425.95 161.53" xml:space="preserve">
								<path
									class="st0"
									d="M103.23,45.6c-14.37,48.11-40.59,89.7-70.83,115.93H0c11.36-9.86,21.21-19.54,29.9-29.23L11.86,45.6h30.4
                                                l8.85,58.3C61.81,86.36,69.32,67.49,74.5,45.6H103.23z"
								/>
								<path
									class="st0"
									d="M104.07,95.88c-0.33-31.91,19.38-52.95,50.11-52.95c26.39,0,42.43,15.7,42.6,39.76
                                                c0.33,31.74-18.71,53.12-50.78,53.12C119.6,135.81,104.23,119.94,104.07,95.88z M168.04,84.19c0-10.52-5.68-17.21-15.54-17.21
                                                c-11.53,0-19.71,10.52-19.71,27.4c0,10.36,5.01,17.37,15.53,17.37C159.86,111.75,168.04,101.56,168.04,84.19z"
								/>
								<path
									class="st0"
									d="M205.96,95.88c-0.33-31.91,19.38-52.95,50.11-52.95c26.39,0,42.43,15.7,42.6,39.76
                                                c0.33,31.74-18.71,53.12-50.78,53.12C221.49,135.81,206.12,119.94,205.96,95.88z M269.94,84.19c0-10.52-5.68-17.21-15.54-17.21
                                                c-11.53,0-19.71,10.52-19.71,27.4c0,10.36,5.01,17.37,15.53,17.37C261.75,111.75,269.94,101.56,269.94,84.19z"
								/>
								<path
									class="st0"
									d="M376.5,43.93l-4.34,27.73c-2-0.84-5.18-1-8.02-1c-6.18,0-15.87,2.84-21.38,12.53l-7.85,50.11h-28.56l13.86-87.7
                                                h23.89l0.67,8.52c7.68-8.02,15.54-11.19,24.22-11.19C371.66,42.93,374.83,43.26,376.5,43.93z"
								/>
								<path
									class="st0"
									d="M378.67,110.58l10.36-64.98h28.56l-9.85,62.64c-0.84,3.84,0.5,5.51,3.84,5.51c1.5,0,2.84-0.17,4.01-0.67
                                                l-3.17,20.55c-5.35,1.34-9.86,2-15.03,2C380.68,135.64,376,127.79,378.67,110.58z"
								/>
								<path
									class="st1"
									d="M390.2,17.21C390.2,5.85,398.22,0,409.24,0c10.02,0,16.7,5.18,16.7,14.53c0,11.69-8.02,17.04-19.04,17.04
                                                C397.05,31.57,390.2,26.56,390.2,17.21z"
								/>
							</svg>
							<img v-else :src="settings.dark_logo" alt="Logo" class="img-fluid" />
						</router-link>
					</div>
					<div class="sg-search">
						<div class="search-form">
							<div class="btn-group w-100">
								<input v-model="searchKey" type="text" class="form-control" :placeholder="lang.looking_for" @keyup="searchProducts" @click.stop="searchDropdown" />
								<a class="search_btn cursor_pointer" @click="$router.push({ name: 'search.product', query: { q: searchKey } })">
									<img :src="getUrl('public/images/others/search.svg')" alt="Product Search" class="img-fluid" />
								</a>
								<ul @click.stop class="dropdown-menu dropdown-menu-right show w-100 search_dropdown" v-if="search_products.length > 0 && search_key_focus">
									<li v-for="(product, index) in search_products" :key="index" class="dropdown-item" @click.prevent="routerNavigator('product.details', product.slug)">
										<div class="search-show-result">
											<div class="search-suggestion">
												<img class="img-fluid" :src="product.image_40x40" :alt="product.product_name" />
											</div>
											<div class="search-title">
												<div class="product-info-ellipse">
													{{ product.product_name }}
												</div>
												<div class="overflow-hidden price">
													<h4>
														<span class="price"
															><del v-if="product.special_discount_check > 0">{{ priceFormat(product.price) }}</del>
															<span v-if="product.special_discount_check > 0">
																{{ priceFormat(product.discount_percentage) }}
															</span>
															<span v-else>{{ priceFormat(product.price) }}</span>
														</span>
													</h4>
												</div>
											</div>
										</div>
									</li>
								</ul>
								<!---->
							</div>
						</div>
					</div>
					<div class="user-option">
						<ul class="global-list user-shop-option">
							<li>
								<router-link :to="{ name: 'wishlist' }" v-if="authUser && authUser.user_type == 'customer'">
									<div class="icon"
										><img alt="Compare Icon" class="img-fluid" :src="getUrl('public/images/others/wishlist.svg')" />
										<!---->
									</div>
									<span class="badge" v-if="wishlists > 0">{{ wishlists }}</span>
								</router-link>
                <a href="javascript:void(0)" v-else>
									<div class="icon"
										><img alt="Compare Icon" class="img-fluid" :src="getUrl('public/images/others/wishlist.svg')" />
										<!---->
									</div>
									<span class="badge" v-if="wishlists > 0">{{ wishlists }}</span>
								</a>
							</li>

							<li class="sg-dropdown cart">
								<router-link :to="{ name: 'cart' }" class="">
									<div class="icon"
										><img alt="bag Icon" class="img-fluid" :src="getUrl('public/images/others/bag.svg')" />
										<span v-if="carts && carts.length > 0" class="badge">{{ carts.length }}</span>
									</div>
								</router-link>
								<div class="sg-dropdown-menu" v-if="carts && carts.length > 0">
									<span class="title">{{ lang.cart_items }}</span>
									<ul class="global-list">
										<li v-for="(cart, index) in carts" :key="index">
											<div class="sg-product">
												<span @click="deleteCart(cart.id)" class="remove-icon mdi mdi-name mdi-close"></span>
												<div class="product-thumb">
													<router-link :to="{ name: 'product.details', params: { slug: cart.product_slug } }"> <img v-lazy="cart.image_40x40" :alt="cart.product_name" class="img-fluid" /></router-link>
												</div>
												<div class="product-info text-ellipse">
													<h3 class="text-ellipse">
														<router-link :to="{ name: 'product.details', params: { slug: cart.product_slug } }">
															{{ cart.product_name }}
														</router-link>
													</h3>
													<span class="price">{{ priceFormat(cart.price - cart.discount) }} x {{ cart.quantity }}</span>
												</div>
											</div>
										</li>
										<li>
											<div class="text-center buttons">
												<router-link :to="{ name: 'cart' }" class="btn btn-primary">
													{{ lang.view_cart }}
												</router-link>
												<router-link :to="{ name: 'checkout' }" class="btn btn-primary">
													{{ lang.check_out }}
												</router-link>
											</div>
										</li>
									</ul>
								</div>
							</li>

							<li class="compare-icon">
								<router-link :to="{ name: 'compare.list' }">
									<div class="icon"><img :src="getUrl('public/images/others/compare.svg')" alt="List" /></div>
									<span v-if="compareList > 0" class="badge">{{ compareList }}</span>
								</router-link>
							</li>

							<li class="d-flex user-log-info">
								<a :href="'tel:' + settings.header_contact_phone" class="live-chat">
									<div class="icon"
										><span><img alt="Phone Icon" class="img-fluid" :src="getUrl('public/images/others/phone.svg')" /></span
									></div>
								</a>
								<div class="text-left text" v-if="authUser">
									<router-link class="d-block" :to="{ name: 'dashboard' }" v-if="authUser.user_type == 'customer'">
										{{ lang.profile }}
									</router-link>
									<a class="d-block" :href="getUrl('seller/dashboard')" v-if="authUser.user_type == 'seller'">{{ lang.dashboard }}</a>
									<a class="d-block" :href="getUrl('admin/dashboard')" v-if="authUser.user_type == 'admin' || authUser.user_type == 'staff'">{{ lang.dashboard }}</a>
									<a href="javascript:void(0)" @click="logout"> {{ lang.logout }}</a>
								</div>
								<div v-else>
									<router-link class="d-block" :to="{ name: 'login' }">{{ lang.sign_in }}</router-link>
									<router-link :to="{ name: 'register' }">{{ lang.register }}</router-link>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
    <div class="header-menu" :class="[toggleNavClass(), settings.header_theme]" id="nav">
      <div class="container">
        <div class="bottom-content">
          <div class="sg-categorie-menu categorie-lg align-self-lg-center">
            <div class="top-content">
              <button class="sg-toggle" @click="toggleCategory">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18">
                  <g id="list" transform="translate(0 -3)">
                    <path id="Path_4186" data-name="Path 4186" d="M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z" fill="#fff"/>
                    <path id="Path_4187" data-name="Path 4187" d="M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" fill="#fff"/>
                    <path id="Path_4188" data-name="Path 4188" d="M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z" fill="#fff"/>
                    <circle id="Ellipse_349" data-name="Ellipse 349" cx="2" cy="2" r="2" transform="translate(0 3)"
                            fill="#fff"/>
                    <circle id="Ellipse_350" data-name="Ellipse 350" cx="2" cy="2" r="2" transform="translate(0 10)"
                            fill="#fff"/>
                    <circle id="Ellipse_351" data-name="Ellipse 351" cx="2" cy="2" r="2" transform="translate(0 17)"
                            fill="#fff"/>
                  </g>
                </svg>
              </button>
              <span>{{ lang.all_categories }}</span>
            </div>
            <sidebar_categories></sidebar_categories>
          </div>

          <div class="right-content">
            <div class="sg-menu d-flex justify-content-between">
              <nav class="navbar navbar-expand-lg">
                <div class="sg-logo">
                  <router-link :to="{ name: 'home' }">
                    <img v-lazy="settings.light_logo" alt="Logo" class="img-fluid"/>
                  </router-link>
                </div>
                <div class="collapse navbar-collapse" id="navbarNav" :class="{ show: menu }">
                  <ul class="navbar-nav">
                    <li class="nav-item" v-for="(menu, i) in headerMenu" :key="'menu' + i"
                        :class="{ 'sg-dropdown': Object.keys(menu).length > 2 }">
                      <a v-if="urlCheck(menu.url)" :href="menu.url" @click="subMenuToggle"
                         @mouseover="subMenuToggle">{{ menu.label }}<span v-if="Object.keys(menu).length > 2"
                                                                          class="icon mdi mdi-name mdi-chevron-down"></span></a>
                      <router-link v-else :to="menu.url" :class="{ active: menu.url == $route.fullPath }"> {{
                          menu.label
                        }}<span v-if="Object.keys(menu).length > 2" class="icon mdi mdi-name mdi-chevron-down"></span>
                      </router-link>
                      <ul class="sg-dropdown-menu" :class="{ 'd-block': subMenu, 'd-none': !subMenu }"
                          v-if="Object.keys(menu).length > 2">
                        <li v-for="(sub_menu, j) in menu" :key="'sub_menu' + j" >
                          <a v-if="urlCheck(sub_menu.url)" :href="sub_menu.url">{{ sub_menu.label }}</a>
                          <router-link v-else :to="sub_menu.url">{{ sub_menu.label }}</router-link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav
              ><!-- /.navbar -->
            </div>
            <div class="offer">
              <router-link :to="{ name: 'daily.deals' }">
								<span class="daily--icon">
									<!-- <img v-lazy="defaultAssets.pencil_image" alt="Image" class="img-fluid"> -->

									<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em"
                       preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
										<path
                        d="M21.4 11.6l-9-9C12 2.2 11.5 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .5.2 1 .6 1.4l9 9c.4.4.9.6 1.4.6c.5 0 1-.2 1.4-.6l7-7c.4-.4.6-.9.6-1.4c0-.5-.2-1-.6-1.4M13 20l-9-9V4h7l9 9M6.5 5C7.3 5 8 5.7 8 6.5S7.3 8 6.5 8S5 7.3 5 6.5S5.7 5 6.5 5m3.6 3.9l1.4-1.4L17 13l-1.4 1.4l-5.5-5.5m-2.5 2.5L9 10l4 4l-1.4 1.4l-4-4z"
                        fill="#fff"
                    />
									</svg>

									{{ lang.daily_deals }}</span
                >
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
		<div class="sg-categorie-menu home-menu-sm">
			<div class="sg-toggle"><span class="mdi mdi-name mdi-close"></span></div>
			<div class="categorie-menu-content">
				<div class="sg-logo">
					<router-link :to="{ name: 'home' }">
						<svg v-if="settings.demo_mode" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 425.95 161.53" style="enable-background: new 0 0 425.95 161.53" xml:space="preserve">
							<path
								class="st0"
								d="M103.23,45.6c-14.37,48.11-40.59,89.7-70.83,115.93H0c11.36-9.86,21.21-19.54,29.9-29.23L11.86,45.6h30.4
                                                l8.85,58.3C61.81,86.36,69.32,67.49,74.5,45.6H103.23z"
							/>
							<path
								class="st0"
								d="M104.07,95.88c-0.33-31.91,19.38-52.95,50.11-52.95c26.39,0,42.43,15.7,42.6,39.76
                                                c0.33,31.74-18.71,53.12-50.78,53.12C119.6,135.81,104.23,119.94,104.07,95.88z M168.04,84.19c0-10.52-5.68-17.21-15.54-17.21
                                                c-11.53,0-19.71,10.52-19.71,27.4c0,10.36,5.01,17.37,15.53,17.37C159.86,111.75,168.04,101.56,168.04,84.19z"
							/>
							<path
								class="st0"
								d="M205.96,95.88c-0.33-31.91,19.38-52.95,50.11-52.95c26.39,0,42.43,15.7,42.6,39.76
                                                c0.33,31.74-18.71,53.12-50.78,53.12C221.49,135.81,206.12,119.94,205.96,95.88z M269.94,84.19c0-10.52-5.68-17.21-15.54-17.21
                                                c-11.53,0-19.71,10.52-19.71,27.4c0,10.36,5.01,17.37,15.53,17.37C261.75,111.75,269.94,101.56,269.94,84.19z"
							/>
							<path
								class="st0"
								d="M376.5,43.93l-4.34,27.73c-2-0.84-5.18-1-8.02-1c-6.18,0-15.87,2.84-21.38,12.53l-7.85,50.11h-28.56l13.86-87.7
                                                h23.89l0.67,8.52c7.68-8.02,15.54-11.19,24.22-11.19C371.66,42.93,374.83,43.26,376.5,43.93z"
							/>
							<path
								class="st0"
								d="M378.67,110.58l10.36-64.98h28.56l-9.85,62.64c-0.84,3.84,0.5,5.51,3.84,5.51c1.5,0,2.84-0.17,4.01-0.67
                                                l-3.17,20.55c-5.35,1.34-9.86,2-15.03,2C380.68,135.64,376,127.79,378.67,110.58z"
							/>
							<path
								class="st1"
								d="M390.2,17.21C390.2,5.85,398.22,0,409.24,0c10.02,0,16.7,5.18,16.7,14.53c0,11.69-8.02,17.04-19.04,17.04
                                                C397.05,31.57,390.2,26.56,390.2,17.21z"
							/>
						</svg>
						<img v-else :src="settings.dark_logo" alt="Logo" class="img-fluid" />
					</router-link>
				</div>

				<ul @click.stop class="global-list">
					<li class="nav-item" v-for="(menu, i) in headerMenu" :key="'menu' + i" :class="{ 'sg-dropdown': Object.keys(menu).length > 2 }">
						<a v-if="urlCheck(menu.url)" :href="menu.url">{{ menu.label }}<span v-if="Object.keys(menu).length > 2" class="icon mdi mdi-name mdi-chevron-down"></span></a>
						<router-link v-else :to="menu.url" :class="{ active: menu.url == $route.fullPath }"> {{ menu.label }}<span v-if="Object.keys(menu).length > 2" class="icon mdi mdi-name mdi-chevron-down"></span></router-link>
						<ul class="sg-dropdown-menu" :class="{ 'd-block': home_child_id == menu.id, 'd-none': home_child_id != menu.id }" v-if="Object.keys(menu).length > 2">
							<li v-for="(sub_menu, j) in menu" :key="'sub_menu' + j" >
								<a v-if="urlCheck(sub_menu.url)" :href="sub_menu.url">{{ sub_menu.label }}</a>
								<router-link v-else :to="sub_menu.url">{{ sub_menu.label }}</router-link>
							</li>
						</ul>
						<span v-if="Object.keys(menu).length > 2" @click="home_child_id == menu.id ? (home_child_id = 0) : (home_child_id = menu.id)" class="icon mdi mdi-name mdi-chevron-down"></span>
					</li>
				</ul>
			</div>
		</div>
    <div class="sg-categorie-menu categorie-sm">
      <div @click="$store.commit('setSmCategory', false)" class="sg-toggle"><span class="mdi mdi-name mdi-close"></span></div>
      <div class="categorie-menu-content">
        <div class="sg-logo">
          <router-link :to="{ name: 'home' }">
            <svg v-if="settings.demo_mode" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 425.95 161.53" style="enable-background: new 0 0 425.95 161.53" xml:space="preserve">
							<path
                  class="st0"
                  d="M103.23,45.6c-14.37,48.11-40.59,89.7-70.83,115.93H0c11.36-9.86,21.21-19.54,29.9-29.23L11.86,45.6h30.4
                                                l8.85,58.3C61.81,86.36,69.32,67.49,74.5,45.6H103.23z"
              />
              <path
                  class="st0"
                  d="M104.07,95.88c-0.33-31.91,19.38-52.95,50.11-52.95c26.39,0,42.43,15.7,42.6,39.76
                                                c0.33,31.74-18.71,53.12-50.78,53.12C119.6,135.81,104.23,119.94,104.07,95.88z M168.04,84.19c0-10.52-5.68-17.21-15.54-17.21
                                                c-11.53,0-19.71,10.52-19.71,27.4c0,10.36,5.01,17.37,15.53,17.37C159.86,111.75,168.04,101.56,168.04,84.19z"
              />
              <path
                  class="st0"
                  d="M205.96,95.88c-0.33-31.91,19.38-52.95,50.11-52.95c26.39,0,42.43,15.7,42.6,39.76
                                                c0.33,31.74-18.71,53.12-50.78,53.12C221.49,135.81,206.12,119.94,205.96,95.88z M269.94,84.19c0-10.52-5.68-17.21-15.54-17.21
                                                c-11.53,0-19.71,10.52-19.71,27.4c0,10.36,5.01,17.37,15.53,17.37C261.75,111.75,269.94,101.56,269.94,84.19z"
              />
              <path
                  class="st0"
                  d="M376.5,43.93l-4.34,27.73c-2-0.84-5.18-1-8.02-1c-6.18,0-15.87,2.84-21.38,12.53l-7.85,50.11h-28.56l13.86-87.7
                                                h23.89l0.67,8.52c7.68-8.02,15.54-11.19,24.22-11.19C371.66,42.93,374.83,43.26,376.5,43.93z"
              />
              <path
                  class="st0"
                  d="M378.67,110.58l10.36-64.98h28.56l-9.85,62.64c-0.84,3.84,0.5,5.51,3.84,5.51c1.5,0,2.84-0.17,4.01-0.67
                                                l-3.17,20.55c-5.35,1.34-9.86,2-15.03,2C380.68,135.64,376,127.79,378.67,110.58z"
              />
              <path
                  class="st1"
                  d="M390.2,17.21C390.2,5.85,398.22,0,409.24,0c10.02,0,16.7,5.18,16.7,14.53c0,11.69-8.02,17.04-19.04,17.04
                                                C397.05,31.57,390.2,26.56,390.2,17.21z"
              />
						</svg>
            <img v-else :src="settings.dark_logo" alt="Logo" class="img-fluid" />
          </router-link>
        </div>
        <ul @click.stop class="global-list">
          <li class="active" @click="$store.commit('setSmCategory', false)">
            <router-link :to="{ name: 'campaigns' }"><span class="mdi mdi-view-dashboard-outline mdi-18px"></span>{{ lang.all_offers }} </router-link>
          </li>

          <li class="active" v-for="(category, index) in visibleCategory" :key="index" :class="category.child_categories.length > 0 ? 'sg-dropdown' : ''">
            <router-link :to="{ name: 'product.by.category', params: { slug: category.slug } }">
              <p class="mb-0" @click="$store.commit('setSmCategory', false)">{{ category.title }}</p>
            </router-link>

            <ul class="sg-dropdown-menu" :class="{ 'd-block': mobile_child_id == category.id, 'd-none': mobile_child_id != category.id }" v-if="category.child_categories.length > 0">
              <li class="active" v-for="(child_category, index) in category.child_categories" :key="index" :class="child_category.categories.length > 0 ? 'sg-dropdown' : ''">
                <router-link :to="{ name: 'product.by.category', params: { slug: child_category.slug } }">
                  <p class="mb-0" @click="$store.commit('setSmCategory', false)">{{ child_category.title }}</p>
                </router-link>
                <ul class="sg-dropdown-menu" :class="{ 'd-block': mobile_children_id == child_category.id, 'd-none': mobile_children_id != child_category.id }" v-if="child_category.categories.length > 0">
                  <li v-for="(children_category, cat_index) in child_category.categories" :key="cat_index">
                    <router-link :to="{ name: 'product.by.category', params: { slug: children_category.slug } }">
                      <p class="mb-0" @click="$store.commit('setSmCategory', false)">{{ children_category.title }}</p>
                    </router-link>
                  </li>
                </ul>
                <span v-if="child_category.categories.length > 0" @click="mobile_children_id == child_category.id ? (mobile_children_id = 0) : (mobile_children_id = child_category.id)" class="icon mdi mdi-name mdi-chevron-down"></span>
              </li>
            </ul>

            <span v-if="category.child_categories.length > 0" @click="mobile_child_id == category.id ? (mobile_child_id = 0) : (mobile_child_id = category.id)" class="icon mdi mdi-name mdi-chevron-down"></span>
          </li>

          <li @click="$store.commit('setSmCategory', false)" class="sm-last-item">
            <router-link :to="{ name: 'categories' }"> {{ lang.view_all_categories }} <span class="mdi mdi-name mdi-chevron-right"></span></router-link>
          </li>
        </ul>
      </div>
    </div>

		<div id="sm_menu" class="sticky-sm-menu">
			<div class="sm-menu-content">
				<div class="container">
					<ul class="global-list">
						<li>
							<a href="javascript:void(0)" @click.stop="homeMenu" class="sg-toggle">
								<img :src="getUrl('public/images/others/list.svg')" alt="menu" />
							</a>
						</li>
						<li>
							<router-link :to="{ name: 'home' }" aria-current="page">
								<img :src="getUrl('public/images/others/home.svg')" alt="Home" />
							</router-link>
						</li>
						<li>
							<a href="javascript:void(0)" @click.stop="categoryMenu" class="sg-toggle">
								<img :src="getUrl('public/images/others/menu.svg')" alt="List" />
							</a>
						</li>
						<li>
							<router-link :to="{ name: 'cart' }" class="c-toggle">
								<img :src="getUrl('public/images/others/shopping-bag.svg')" alt="shopping-bag" />
							</router-link>
						</li>
						<li>
							<div v-if="authUser">
								<router-link v-if="authUser.user_type == 'customer'" :to="{ name: 'dashboard' }">
									<img :src="getUrl('public/images/others/user.svg')" alt="User" />
								</router-link>
								<a class="d-block" :href="getUrl('seller/dashboard')" v-else-if="authUser.user_type == 'seller'"><img :src="getUrl('public/images/others/user.svg')" alt="User" /></a>
								<a class="d-block" :href="getUrl('admin/dashboard')" v-else-if="authUser.user_type == 'admin' || authUser.user_type == 'staff'"><img :src="getUrl('public/images/others/user.svg')" alt="User" /></a>
							</div>
							<div v-else>
								<router-link :to="{ name: 'login' }">
									<img :src="getUrl('public/images/others/user.svg')" alt="User" />
								</router-link>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="modal fade" id="product" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title"></h5>
						<button type="button" class="close modal_close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body" v-if="productDetails">
						<details-view :productDetails="productDetails"></details-view>
					</div>
					<div class="modal-body" v-else-if="shimmer">
						<div class="row">
							<div class="col-lg-4">
								<shimmer :height="450"></shimmer>
								<ul class="global-list d-flex justify-content-between">
									<div class="row">
										<div class="col-lg-2" v-for="(list, i) in 6" :key="i">
											<shimmer class="al-height mt-3" :height="50"></shimmer>
										</div>
									</div>
								</ul>
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
					</div>
				</div>
			</div>
		</div>
	</header>
	<!-- /.sg-header -->
</template>

<script>
import About from "../pages/about";
import detailsView from "./details-view";
import shimmer from "../partials/shimmer";
import sidebar_categories from "../partials/sidebar_categories";

export default {
	name: "headNav",
	components: { About, detailsView, shimmer,sidebar_categories },
	data() {
		return {
      mobile_child_id: 0,
      mobile_children_id: 0,
			language_dropdown: false,
			currency_dropdown: false,
			searchKey: this.$route.query.q,
			menu: false,
			subMenu: false,
			search_bar: false,
			show_search_icon: false,
			show_sm_home: false,
			search_key_focus: false,
			active: false,
			home_child_id: 0,
			is_top_banner: !!localStorage.getItem("top-banner"),
		};
	},
	mounted() {
		if (!this.lang) {
			this.$store.dispatch("languageKeywords");
		}
		var width = 0;
		window.onresize = () => {
			width = window.innerWidth > 0 ? window.innerWidth : screen.width;
			let selector = $(".sg-seller-product .sg-category-content.sg-filter");
			let feature_selector = $(".sg-feature-shop .sg-filter");
			if (width < 575) {
				if (selector.hasClass("list-view-tab")) {
					selector.removeClass("list-view-tab");
				}
				if (feature_selector.hasClass("list-view-tab")) {
					feature_selector.removeClass("list-view-tab");
				}
			} else {
				if (selector.hasClass("list_restore")) {
					selector.addClass("list-view-tab");
				}
				feature_selector.addClass("list-view-tab");
			}
		}		

		const scrollToTop = document.querySelector(".btnTOP");
		const showBTN = function() {
			if(window.scrollY > 300) {
				scrollToTop.style.opacity = 1;
				scrollToTop.style.transform = 'translateY(0px)';
				
			} else {
				scrollToTop.style.opacity = 0;
				scrollToTop.style.transform = 'translateY(100px)';
			}
		};
		document.addEventListener("scroll", () => {
			showBTN();
		});
		scrollToTop.addEventListener("click", function() {
			window.scroll({top: 0, behavior: 'smooth'});
		});
	},
	computed: {
		languages() {
			return this.$store.getters.getLanguages;
		},
		currencies() {
			return this.$store.getters.getCurrencies;
		},
		activeLanguage() {
			return this.$store.getters.getActiveLanguage;
		},
		activeCurrency() {
			return this.$store.getters.getActiveCurrency;
		},
		carts() {
			return this.$store.getters.getCarts;
		},
		visibleCategory() {
			let categories = this.$store.getters.getCategories;
			return categories.length > 0 ? categories : [];
		},
		headerMenu() {
			return this.settings.header_menu;
		},
		wishlists() {
			return this.$store.getters.getTotalWishlists;
		},
		active_modal() {
			return this.$store.getters.getActiveModal;
		},
		productDetails() {
			let products = this.$store.getters.getProductDetails;
			for (let i = 0; i < products.length; i++) {
				if (products[i].slug == this.active_modal) {
					return products[i].product;
				}
			}
			return false;
		},
		navbar_class() {
			return this.$store.getters.getNavBarClass;
		},
    smCategory() {
			return this.$store.getters.getSmCategory;
		},

		compareList() {
			return this.$store.getters.getCompareList;
		}
	},
	methods: {
		subMenuToggle(event) {
			if (screen.width > 991) {
				if (event.type != "click") {
					this.subMenu = true;
				}
			} else {
				if (event.type == "click") {
					this.subMenu = !this.subMenu;
				}
			}
		},
		toggleCategory() {
			if (this.defaultCategoryShow == false) {
				document.body.classList.add("sidebar-active");
				this.$store.dispatch("defaultCategoryShow", true);
			} else {
				document.body.classList.remove("sidebar-active");
				this.$store.dispatch("defaultCategoryShow", false);
			}
		},
    toggleNavClass() {
      return {
        "fixed-top": this.navbar_class,
      };
    },
		changeLanguage(locale) {
			let url = this.getUrl("change/locale/" + locale);
			this.language_dropdown = false;
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.info(response.data.error, this.lang.Info + " !!");
				} else {
					window.location.reload();
				}
			});
		},
		changeCurrency(currency) {
			let url = this.getUrl("change/currency/" + currency.code);
			this.currency_dropdown = false;
			this.$Progress.start();
			axios.get(url).then((response) => {
				if (response.data.error) {
					toastr.info(response.data.error, this.lang.Info + " !!");
				} else {
					this.$store.dispatch("activeCurrency", response.data.active_currency);
					this.$Progress.finish();
				}
			});
		},
		currencyDropdown() {
			this.currency_dropdown = !this.currency_dropdown;
			this.currency_dropdown &&
				this.$nextTick(() => {
					document.addEventListener("click", this.hideCurrencyDropdown);
				});
		},
		hideCurrencyDropdown: function () {
			this.currency_dropdown = false;
			document.removeEventListener("click", this.hideCurrencyDropdown);
		},
		languageDropdown() {
			this.language_dropdown = !this.language_dropdown;
			this.language_dropdown &&
				this.$nextTick(() => {
					document.addEventListener("click", this.hideLanguageDropdown);
				});
		},
		hideLanguageDropdown: function () {
			this.language_dropdown = false;
			document.removeEventListener("click", this.hideLanguageDropdown);
		},
		searchDropdown() {
			this.search_key_focus = true;
			this.search_key_focus &&
				this.$nextTick(() => {
					document.addEventListener("click", this.hideSearchDropdown);
				});
		},
		hideSearchDropdown: function () {
			this.search_key_focus = false;
			document.removeEventListener("click", this.hideSearchDropdown);
		},
		deleteCart(id) {
			if (confirm("Are you sure?")) {
				let url = this.getUrl("cart/delete/" + id);
				axios.get(url).then((response) => {
					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						this.$store.dispatch("carts", response.data.carts);
					}
				});
			}
		},
		searchProducts() {
			this.search_bar = true;
			let url = this.getUrl("search/product");
			let form = { key: this.searchKey };
			axios
				.post(url, form)
				.then((response) => {
					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						this.search_products = response.data.products;
					}
				})
				.catch((error) => {
					this.search_products = [];
				});
		},
		categoryMenu() {
      this.$store.commit('setSmCategory',!this.smCategory)
			this.show_sm_home = false;
			this.show_sm_category &&
				this.$nextTick(() => {
					document.addEventListener("click", this.hideCategoryMenu);
				});
		},
		homeMenu() {
			this.show_sm_home = !this.show_sm_home;
			this.show_sm_home &&
				this.$nextTick(() => {
					document.addEventListener("click", this.hideHomeMenu);
				});
		},
		hideCategoryMenu: function () {
			this.show_sm_category = false;
			document.removeEventListener("click", this.hideCategoryMenu);
		},
		hideHomeMenu: function () {
			this.show_sm_home = false;
			document.removeEventListener("click", this.hideHomeMenu);
		},
		toggleMobileMenu(id) {
			if (this.mobile_child_id == id) {
				this.mobile_child_id = 0;
			} else {
				this.mobile_child_id = id;
			}
			return this.show_mobile_child == "d-none" ? (this.show_mobile_child = "d-block") : (this.show_mobile_child = "d-none");
		},
		topBanner() {
			localStorage.setItem("top-banner", "1");
		},
	},
};
</script>
