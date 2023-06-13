<template>
  <img :src="getUrl('public/images/default/preview.jpg')" alt="shimmer"
       class="shimmer" v-bind:style= "[height ? style : null]">
</template>

<script>
export default {
    name: "shimmer.vue",
    props: ['height'],
    data() {
        return {
            style : {
                height : this.height+'px',
            },
        }
    },
}
</script>
