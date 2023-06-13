<template>
  <a href="#" class="btn disabled btn-progress" :class="[class_name]" style="background-color: black;">Progress</a>
</template>

<script>
export default {
    name: "loading_button",
    props : ['loading_image','class_name','img'],

}
</script>
