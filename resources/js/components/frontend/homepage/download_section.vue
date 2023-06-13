<template>
    <section class="subscribe-section-2" v-if="download_section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 col-sm-12">
                    <div class="subscribe-image" v-if="download_section.banner">
                        <img :src="download_section.banner"
                            :alt="download_section.text"
                            class="img-fluid"
                        />
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="subscribe-content">
                        <div class="header-title">
                            <h3>
                                <a>{{ download_section.text }}</a>
                            </h3>
                            <p>{{ download_section.sub_text }}</p>
                        </div>
                        <ul class="global-list justify-content-lg-start">
                            <li>
                                <a :href="download_section.play_store"
                                    ><img
                                        :src="getUrl('public/images/others/play-store-logo.png')"
                                        :alt="download_section.text"
                                        class="img-fluid"
                                /></a>
                            </li>
                            <li>
                                <a :href="download_section.apple_store"
                                    ><img
                                        :src="getUrl('public/images/others/app-store-logo.png')"
                                        :alt="download_section.text"
                                        class="img-fluid"
                                /></a>
                            </li>
                        </ul>
                    </div>
                    <!-- /.subscribe-content -->
                </div>
            </div>
            <!-- /.row -->
        </div>
        <!-- /.container -->
    </section>
</template>

<script>
import shimmer from "../partials/shimmer";
export default {
    name: "download-section",
    props: ["download_section"],
    components: {
        shimmer,
    },
    data() {
        return {};
    },
    mounted() {
    },
};
</script>
