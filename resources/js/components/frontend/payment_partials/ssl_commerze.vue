<template>

</template>

<script>
export default {
    name: "ssl_commerze",
    mounted() {
        this.sslCommerze();
    },
    methods : {
        sslCommerze() {
            const script = document.createElement("script")
            if (this.settings.ssl_sandbox == 1) {
                script.src = "https://sandbox.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
            } else {
                script.src = "https://seamless-epay.sslcommerz.com/embed.min.js?" + Math.random().toString(36).substring(7);
            }
            document.body.appendChild(script);
        },
    }
}
</script>

<style scoped>

</style>
