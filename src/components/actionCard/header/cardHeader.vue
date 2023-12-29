<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
import {onMounted} from "vue";

const header = ref()
defineExpose({
  header
})
onMounted(() => {
})

</script>

<template>
<header ref="header" class="card__header">
  <input class="card__header--input" placeholder="搜索地点或地址">
<!--    -->
</header>
</template>

<style scoped>
.card__header {
  @apply mb-[20px]
}

</style>