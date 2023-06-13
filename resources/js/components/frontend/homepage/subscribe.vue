<template>
	<section class="subscribe-section" v-if="settings.subscription_section && settings.subscription_section == 1">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-md-6">
					<div class="subscribe-text">
						<div class="icon">
							<span class="mdi mdi-email-outline"></span>
						</div>
						<div class="text">
							<p>{{ lang.subscribe_to_our_news_letter }}</p>
							<span>{{ lang.get_info_events_sales_and_Offers }}</span>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="subscribe-form">
						<form @submit.prevent="submit">
							<input type="email" v-model="form.email" :placeholder="lang.email" />
							<button type="submit">{{ lang.subscribe }}</button>
						</form>
					</div>
				</div> </div
			><!-- /.row --> </div
		><!-- /.container --> </section
	><!-- /.subscribe-section -->
</template>

<script>
export default {
	name: "subscribe",
	computed: {
		baseUrl() {
			return this.$store.getters.getBaseUrl;
		},
	},
	data() {
		return {
			form: {
				email: "",
			},
		};
	},
	methods: {
		submit() {
			let url = this.getUrl("home/subscribers");
			axios
				.post(url, this.form)
				.then((response) => {
					if (response.data.success) {
						toastr.success(response.data.success, this.lang.Success + " !!");
						this.form.email = "";
					} else {
						if (response.data.error) {
							toastr.error(response.data.error, this.lang.Error + " !!");
						}
					}
				})
				.catch((error) => {
					if (error.response.status == 422) {
						let errors = Object.keys(error.response.data.errors);
						for (let i = 0; i <= errors.length; i++) {
							toastr.error(error.response.data.errors[errors[i]][0], this.lang.Error + " !!");
						}
					}
				});
		},
	},
};
</script>
