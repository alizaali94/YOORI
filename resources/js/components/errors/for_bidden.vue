<template>
    <section class="section">
        <div class="container mt-5">
            <div class="page-error">
                <div class="page-inner">
                    <h1>403</h1>
                    <div class="page-description">
                       Forbidden page
                    </div>
                    <div class="page-search">
                        <div class="mt-3">
                            <router-link :to="{ name : 'home' }" class="btn btn-primary btn-lg">{{lang.home}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="simple-footer mt-5">

            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "error_404",
    mounted() {
        // window.history.pushState({page: "another"}, "another page", "example.html");
    }
}
</script>
