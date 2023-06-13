<template>
	<div class="sg-page-content">
		<section class="after-track-order text-center" v-if="is_shimmer">
			<div class="container" v-for="(order, index) in orders" :key="index">
				<div class="invoice_border mt-2">
					<div class="page-title">
						<h1>{{ lang.thank_you_for_purchase }}</h1>
						<p v-if="authUser"
							>{{ lang.a_copy_summary_has_been_sent_to }} <a :href="'mailto' + authUser.email">{{ authUser.email }}</a></p
						>
						<h2>{{ lang.order_id }} {{ order.code }}</h2>
					</div>
					<div class="step-content">
						<div class="table-responsive">
							<table class="table">
								<thead>
									<tr>
										<th scope="col" class="text-start">{{ lang.product_name }}</th>
                    <th scope="col" class="text-end">{{ lang.price }}</th>
                    <th scope="col" class="text-end">{{ lang.quantity }}</th>
										<th scope="col" class="text-end">{{ lang.sub_total }}</th>
										<th v-if="((order.tax_method && order.tax_method.vat_tax_type == 'product_base') || (!order.tax_method || !order.tax_method.vat_tax_type))" scope="col" class="text-end">{{ lang.tax }}</th>
                    <th v-if="order.shipping_method == 'product_base' || !order.shipping_method" scope="col" class="text-end">{{ lang.shipping_cost }}</th>
                    <th scope="col" class="text-end">{{ lang.discount }}</th>
                    <th v-if="order.is_coupon_system_active == 1 && order.coupon_discount > 0" scope="col" class="text-end">{{ lang.coupon_discount }}</th>
										<th scope="col" class="text-end">{{ lang.total_amount }}</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(order_detail, index) in order.order_details" :key="'order' + index">
										<td>
											<div class="product-name">
												<p>{{ order_detail.product_name }}</p>
												<span>{{ order_detail.variation }}</span>
											</div>
										</td>
                    <td class="text-end">{{ priceFormat(order_detail.price) }}</td>
                    <td class="text-end">{{ order_detail.quantity }}</td>
										<td class="text-end">{{ priceFormat(order_detail.price) }}
                      X {{ order_detail.quantity }}
                      = {{ priceFormat(order_detail.price * order_detail.quantity) }}</td>
										<td v-if="(order.tax_method && order.tax_method.vat_tax_type == 'product_base') || (!order.tax_method || !order.tax_method.vat_tax_type)" class="text-end">
                      <span v-if="order_detail.tax > 0">
                        {{ priceFormat(order_detail.tax) }} X {{ order_detail.quantity }}
                                                    = {{ priceFormat(order_detail.tax * order_detail.quantity) }}
                      </span>
                      <span v-else>
                        {{ priceFormat(order_detail.tax * order_detail.quantity) }}
                      </span>
                    </td>
                    <td v-if="(order.shipping_method == 'product_base' || !order.shipping_method)" class="text-end">
                      <span v-if="order_detail.shipping_cost.depend_on_quantity == 1">
                        {{ priceFormat(order_detail.shipping_cost.per_cost) }}
                      X {{ order_detail.quantity }}
                      = {{ priceFormat(order_detail.shipping_cost.total_cost) }}
                      </span>
                      <span>
                        {{ priceFormat(order_detail.shipping_cost.total_cost) }}
                      </span>
                    </td>

                    <td v-if="(order_detail.discount * order_detail.quantity) > 0" class="text-end">
                      {{ priceFormat(order_detail.discount) }}
                      X {{ order_detail.quantity }}
                      = {{ priceFormat(order_detail.discount * order_detail.quantity) }}
                    </td>
                    <td v-else class="text-end">{{ priceFormat(0) }}</td>
                    <td class="text-end" v-if="order.is_coupon_system_active == 1 && order.coupon_discount > 0">{{ priceFormat(order_detail.coupon_discount.discount) }}</td>
                    <td class="text-end">{{
											priceFormat(
												((parseFloat(order_detail.price) * order_detail.quantity) +	(parseFloat(order_detail.tax) * order_detail.quantity) +parseFloat(order_detail.shipping_cost.total_cost)) -
													((parseFloat(order_detail.discount) * order_detail.quantity) + parseFloat(order_detail.coupon_discount.discount)),
											)
										}}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="account-table">
							<div class="title">
								<h1>{{ lang.account_details }}</h1>
							</div>
							<div class="table-responsive">
								<table class="table text-start">
									<tbody>
										<tr>
											<td>
												<ul class="global-list">
													<li>{{ lang.order_code }} </li>
													<li v-if="authUser">{{ lang._name }} </li>
													<li v-if="authUser">{{ lang._email }}</li>
													<li>{{ lang.shipping_address }}</li>
													<li>{{ lang.billing_address }}</li>
												</ul>
											</td>
											<td>
												<ul class="global-list">
													<li>{{ order.code }}</li>
													<li v-if="authUser">{{ authUser.full_name }}</li>
													<li v-if="authUser">{{ authUser.email }}</li>
													<li>{{ order.shipping_address.address }}</li>
													<li>{{ order.billing_address.address }}</li>
												</ul>
											</td>
											<td>
												<ul class="global-list">
													<li>{{ lang.order_date }}</li>
													<li>{{ lang.order_status }}</li>
													<li>{{ lang.payment_status }}</li>
													<li>{{ lang.payment_type }}</li>
												</ul>
											</td>
											<td>
												<ul class="global-list">
													<li>{{ order.date }}</li>
													<li class="text-capitalize">{{ order.delivery_status }}</li>
													<li class="text-capitalize">{{ order.payment_status }}</li>
													<li class="text-capitalize">{{ order.payment_type.replaceAll("_", " ") }}</li>
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="row">
								<div class="col-md-4 offset-md-8">
									<div class="order-summary">
										<div class="sg-card">
                      <ul class="global-list">
                        <li>{{ lang.subtotal }} <span>{{ priceFormat(order.sub_total) }}</span></li>
                        <li v-if="order.tax_type == 'before_tax' || order.vat_tax_type == 'product_base'">{{ lang.tax }} <span>{{ priceFormat(order.total_tax) }}</span></li>
                        <li>{{ lang.discount }}<span>{{ priceFormat(order.discount) }}</span>
                        </li>
                        <li v-if="settings.shipping_cost != 'area_base' || $route.name != 'cart'">{{ lang.shipping_cost }}<span>{{
                            priceFormat(order.shipping_cost)
                          }}</span></li>
                        <li v-if="settings.coupon_system == 1">{{ lang.coupon_discount }}<span>{{
                            priceFormat(order.coupon_discount)
                          }}</span></li>
                      </ul>
                      <div class="order-total text-left" v-if="settings.tax_type == 'after_tax' && settings.vat_and_tax_type == 'order_base'">
                        <p class="font_weight_400">{{ lang.total }} <span>{{ priceFormat((parseFloat(order.sub_total) + parseFloat(order.shipping_cost)) - (parseFloat(order.coupon_discount) + parseFloat(order.discount))) }}</span></p>
                        <p class="font_weight_400">{{ lang.tax }} <span>{{ priceFormat(order.total_tax) }}</span></p>
                        <p class="grand_total_style">{{ lang.grand_total }} <span>{{ priceFormat(order.total_payable) }}</span></p>
                      </div>
                      <div class="order-total" v-else>
                        <p>{{ lang.total }} <span>{{ priceFormat(order.total_payable) }}</span></p>
                      </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="row justify-content-center">
					<div class="col-lg-12">
						<loading_button v-if="loading" :class_name="'btn btn-primary'"></loading_button>
						<a href="javascript:void(0)" v-else class="btn btn-primary" @click="download(order.id, order.code)">{{ lang.download }} {{ lang.invoice }}</a>
					</div>
				</div>
			</div> </section
		><!-- /.track-order -->
		<section v-else-if="shimmer">
			<div class="container">
				<div class="page-title">
					<shimmer class="mb-3" v-for="(order, index) in 3" :key="index" :height="20"></shimmer>
				</div>
				<table class="table">
					<div class="step-content">
						<div class="table-responsive">
							<shimmer :height="50"></shimmer>
						</div>
						<div class="account-table">
							<div class="table-responsive">
								<shimmer :height="155"></shimmer>
							</div>
						</div>
					</div>
				</table>
				<div class="row">
					<div class="col-md-4 offset-md-8">
						<shimmer :height="288"></shimmer>
					</div>
				</div>
			</div>
		</section> </div
	><!-- /.sg-page-content -->
</template>

<script>
import shimmer from "../../partials/shimmer";

export default {
	name: "get-invoice.vue",
	data() {
		return {
			orders: [],
			is_shimmer: false,
			loading: false,
		};
	},
	mounted() {
		this.getInvoices();
	},
	components: {
		shimmer,
	},
	computed: {
		shimmer() {
			return this.$store.state.module.shimmer;
		},
	},
	methods: {
		getInvoices() {
			this.$Progress.start();
			let url = this.getUrl("user/get-invoices/" + this.$route.params.trx_id);
			axios
				.get(url)
				.then((response) => {
					this.is_shimmer = true;
					if (response.data.error) {
						this.$Progress.fail();
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						this.$Progress.finish();
						if (!response.data.guest) {
							this.$store.dispatch("user", response.data.user);
						}
						this.$store.dispatch("compareList", response.data.compare_list);
						this.$store.dispatch("wishlists", response.data.wishlists);
						this.$store.dispatch("carts", 0);

						let orders = response.data.orders;
						this.orders = orders;
						if (orders) {
							for (let i = 0; i < orders.length; i++) {
								this.payment_form.sub_total += orders[i].total_amount;
								this.payment_form.discount_offer += orders[i].discount;
								this.payment_form.shipping_tax += orders[i].shipping_cost;
								this.payment_form.tax += orders[i].total_tax;
								if (this.settings.coupon_system == 1) {
									this.payment_form.coupon_discount += orders[i].coupon_discount;
								}
								this.trx_id = orders[i].trx_id;
							}

							if (orders[0].is_mailed == 0) {
								this.sendMail();
							}

							this.payment_form.total =
								this.payment_form.sub_total +
								this.payment_form.tax +
								this.payment_form.shipping_tax -
								(this.payment_form.discount_offer + this.payment_form.coupon_discount);
						}
					}
				})
				.catch((error) => {
					this.$Progress.finish();
				});
		},
		sendMail() {
			let url = this.getUrl("user/mail-order/" + this.trx_id);
			axios.get(url).then((response) => {
				// this.sendMailSeller();
			});
		},
		sendMailSeller() {
			let url = this.getUrl("user/mail-order-seller/" + this.trx_id);
			axios.get(url).then((response) => {});
		},
		download(id, code) {
			this.loading = true;
			axios
				.get(this.getUrl("user/invoice/download/" + id), { responseType: "arraybuffer" })
				.then((response) => {
					this.loading = false;
					1;
					if (response.data.error) {
						toastr.error(response.data.error, this.lang.Error + " !!");
					} else {
						let blob = new Blob([response.data], { type: "application/pdf" });
						let link = document.createElement("a");
						link.href = window.URL.createObjectURL(blob);
						link.download = code + ".pdf";
						link.click();
					}
				})
				.catch((error) => {
					this.loading = false;
					toastr.error(error.response.statusText, this.lang.Error + " !!");
				});
		},
	},
};
</script>
