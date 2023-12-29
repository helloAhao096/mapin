<script setup lang="ts">

</script>

<template>
  <input class="card__header--input" placeholder="搜索地点或地址">
</template>
<!-- 点击input输入关键词检索地点列表
      emit 我选中要添加的数据出去，然后加到list里
      -->
<style scoped>
.card__header--input {
  &:focus {
    @apply
    bg-white
  }
  @apply
  w-full h-10
  rounded-xl
  bg-buff-tint
  p-4
}

</style>