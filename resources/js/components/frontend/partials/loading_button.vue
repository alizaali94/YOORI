<template>
    <button :class="class_name" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="sr-only"></span>
    </button>
</template>

<script>
export default {
    name: "loading_button",
    props : ['class_name']
}
</script>
