<script setup lang="ts">
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
  <div class="card__header--input">
    搜索地点或地址
  </div>
</header>
</template>

<style scoped>

.card__header {
  @apply mb-[20px]
}

.card__header--input {
  @apply
  w-80 h-10
  rounded-xl
  bg-buff-tint
}

</style>