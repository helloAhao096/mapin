<script setup lang="ts">

import home from "@/pages/home/home.vue";
import post from "@/pages/post/post.vue";

// const category = ref(home)

const emit  = defineEmits(["barCategory"])

function barCategory(seletedCategory) {
  emit("barCategory", seletedCategory)
}


</script>

<template>

  <div class="bar">
    <div class="bar_category" @click="barCategory(home)">
      首页
    </div>

    <div class="bar_category" @click="category=barCategory(post)">
      文章
    </div>
  </div>

</template>

<style scoped lang="scss">
.bar {
  @apply
    fixed
    w-[360px] h-16
    bg-white
    p-4
    left-0 bottom-0
    z-9999

}

</style>