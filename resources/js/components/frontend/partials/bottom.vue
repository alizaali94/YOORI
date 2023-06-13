<template>
	<footer class="footer-section">
		<div class="footer-top">
			<div class="container">
				<div class="footer-logo">
					<router-link :to="{ name: 'home' }"><img v-lazy="settings.footer_logo" alt="preloader" class="img-fluid" /> </router-link>
				</div>
				<div class="row">
					<div class="col-sm-6 col-md-6" v-if="settings.seller_system == 1 && !authUser" :class="[classObj()]">
						<div class="footer-widget widget-border" v-if="!authUser && settings.seller_system == 1">
							<h3>{{ lang.seller_options }}</h3>
							<ul class="global-list">
								<li>
									<router-link :to="{ name: 'login' }">{{ lang.login_as_seller }}</router-link>
								</li>
								<li>
									<router-link :to="{
										name: 'seller-register',
										params: { type: 'seller' },
									}">{{ lang.signup_as_seller }}
									</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6 col-md-6" :class="[classObj()]">
						<div class="footer-widget widget-border">
							<h3>{{ lang.my_account }}</h3>
							<ul class="global-list" v-if="!authUser">
								<li>
									<router-link :to="{ name: 'login' }">{{ lang.Login }}</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'register' }">{{ lang.create_account }}</router-link>
								</li>
							</ul>
							<ul class="global-list" v-if="authUser && authUser.user_type == 'customer'">
								<li>
									<router-link :to="{ name: 'dashboard' }">{{ lang.my_profile }}</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'change.password' }">{{ lang.change_password }} </router-link>
								</li>
								<li>
									<router-link :to="{ name: 'order.history' }">{{ lang.order_history }}</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'wishlist' }">{{ lang.my_wishlist }}</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'addresses' }">{{ lang.addresses }}</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'track.order' }">{{ lang.track_order }}</router-link>
								</li>
								<li>
									<router-link :to="{ name: 'gift.voucher' }">{{ lang.gift_voucher }}</router-link>
								</li>
							</ul>
							<ul class="global-list" v-else-if="authUser && (authUser.user_type == 'admin' || authUser.user_type == 'staff')">
								<li
									><a target="_blank" :href="getUrl('admin/dashboard')">{{ lang.dashboard }}</a></li
								>
								<li
									><a target="_blank" :href="getUrl('admin/profile')">{{ lang.my_profile }}</a></li
								>
								<li
									><a target="_blank" :href="getUrl('admin/password-change')">{{ lang.change_password }}</a></li
								>
							</ul>
							<ul class="global-list" v-else-if="authUser && authUser.user_type == 'seller'">
								<li
									><a target="_blank" :href="getUrl('seller/dashboard')">{{ lang.dashboard }}</a></li
								>
								<li
									><a target="_blank" :href="getUrl('seller/profile')">{{ lang.my_profile }}</a></li
								>
								<li
									><a target="_blank" :href="getUrl('seller/password-change')">{{ lang.change_password }}</a></li
								>
							</ul>
						</div>
					</div>
					<div class="col-sm-6 col-md-6" :class="[classObj()]">
						<div class="footer-widget widget-border">
							<h3>{{ lang.useful_links }}</h3>
							<ul class="global-list" v-for="(link, i) in usefulLinks" :key="i">
								<li>
									<router-link :to="link.url">{{ link.label }}</router-link>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-3">
						<div class="footer-widget widget-border">
							<h3>{{ lang.contact_us }}</h3>
							<div class="address">
								<ul class="global-list">
									<li>
										<h4><span class="mdi mdi-home-outline"></span>{{ lang.address }}</h4>
										<p>{{ settings.footer_contact_address }}</p>
									</li>
									<li>
										<h4><span class="mdi mdi-email-outline"></span>{{ lang.email }}</h4>
										<a :href="'mailto:' + settings.footer_contact_email">{{ settings.footer_contact_email }}</a>
									</li>
									<li>
										<h4><span class="mdi mdi-phone-outline"></span>{{ lang.phone }}</h4>
										<a :href="'tel:' + settings.footer_contact_phone">{{ settings.footer_contact_phone }}</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="col-sm-6 col-md-6 col-lg-3">
						<div class="footer-widget">
							<h3>{{ lang.about }}</h3>
							<div v-html="settings.about_description"></div>
							<div class="social" v-if="settings.show_social_links && settings.show_social_links == 1">
								<ul class="global-list">
									<li v-if="settings.facebook_link">
										<a target="_blank" :href="settings.facebook_link"><span class="mdi mdi-name mdi-facebook"></span></a>
									</li>
									<li v-if="settings.twitter_link">
										<a target="_blank" :href="settings.twitter_link"><span class="mdi mdi-name mdi-twitter"></span></a>
									</li>
									<li v-if="settings.linkedin_link">
										<a target="_blank" :href="settings.linkedin_link"><span class="mdi mdi-linkedin"></span></a>
									</li>
									<li v-if="settings.instagram_link">
										<a target="_blank" :href="settings.instagram_link"><span class="mdi mdi-instagram"></span></a>
									</li>
									<li v-if="settings.youtube_link">
										<a target="_blank" :href="settings.youtube_link"><span class="mdi mdi-youtube"></span></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div><!-- /.row -->
			</div><!-- /.container -->
		</div><!-- /.footer-top -->

		<div class="footer-social">
			<div class="container">
				<ul class="global-list">
					<li v-for="(menu, i) in footerMenu" :key="i">
						<a v-if="urlCheck(menu.url)" :href="menu.url">{{ menu.label }}</a>
						<router-link :to="menu.url">{{ menu.label }}</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="container">
				<div class="footer-bottom-content">
					<div class="copyright">
						<p>{{ settings.copyright }}</p>
					</div>
					<div class="payment-card">
						<ul class="global-list">
							<li v-if="settings.visa_pay_banner"><img :src="getUrl('public/images/payment-method/visa.svg')" alt="visa_pay_banner" class="img-fluid footer-payment-icon" /></li>
							<li v-if="settings.master_card_pay_banner"><img :src="getUrl('public/images/payment-method/master-card.svg')" alt="master_card_pay_banner" class="img-fluid footer-payment-icon" /></li>
							<li v-if="settings.american_express_pay_banner"><img :src="getUrl('public/images/payment-method/american-express.svg')" alt="american_express_pay_banner" class="img-fluid footer-payment-icon" /> </li>
							<li v-if="settings.paypal_payment_banner"><img :src="getUrl('public/images/payment-method/paypal.svg')" alt="paypal_payment_banner" class="img-fluid footer-payment-icon" /></li>
							<li v-if="settings.apple_pay_banner"><img :src="getUrl('public/images/payment-method/apple-pay.svg')" alt="apple_pay_banner" class="img-fluid footer-payment-icon" /></li>
							<li v-if="settings.amazon_pay_banner"><img :src="getUrl('public/images/payment-method/amazon-pay.svg')" alt="amazon_pay_banner" class="img-fluid footer-payment-icon" /></li>
							<li v-if="settings.after_pay_banner"><img :src="getUrl('public/images/payment-method/after-pay.svg')" alt="after_pay_banner" class="img-fluid footer-payment-icon" /></li>
							<li v-if="settings.payment_method_banner"><img :src="settings.payment_method_banner" alt="payment_method_banner" class="img-fluid footer-payment-icon" /></li>
						</ul>
					</div>
				</div> </div
			><!-- /.container --> </div
		><!-- /.footer-bottom -->

		<div class="mb-bottom"></div>

		<div class="yoori--cookies" v-if="checkGDPR() && gdpr">
			<div class="cookie-content" v-html="settings.gdpr"> </div>
			<div class="cookie-btn">
				<button type="button" @click="setGDPR">Accept All</button>
			</div>
		</div>
		<div class="btnTOP"><span class="icon mdi mdi-name mdi-chevron-up"></span></div>
	</footer><!-- /.footer-section -->
</template>

<script>
export default {
	name: "bottom",
	data() {
		return {
			gdpr: true,
		};
	},
	computed: {
		usefulLinks() {
			return this.settings.useful_links;
		},
		footerMenu() {
			return this.settings.footer_menu;
		},
	},
	methods: {
		checkGDPR() {
			return !localStorage.getItem("gdpr") && this.settings.gdpr_enable == 1;
		},
		setGDPR() {
			this.gdpr = false;
			return localStorage.setItem("gdpr", "1");
		},
		classObj() {
			return [this.settings.seller_system == 1 && !this.authUser ? "col-lg-2" : "col-lg-3"];
		},
	},
};
</script>
