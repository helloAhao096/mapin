<script setup lang="ts">

import home from "@/pages/home/home.vue";
import post from "@/pages/post/post.vue";
import {type Component, onMounted} from "vue";

// const category = ref(home)

const props = defineProps<{
  categories: [{
    name: string
    category: Component
  }]
}>()
const emit  = defineEmits(["barCategory"])

onMounted(() => {

})
function barCategory(page: any) {
  // console.log(page.category)
  // console.log(typeof(page.category))
  emit("barCategory", page)
}

</script>

<template>

  <nav class="bar">

    <div class="bar__category"
         v-for="category in props.categories"
         :key="category.name"
         @click="barCategory(category.category)">
      {{category.name}}
    </div>

  </nav>

</template>

<!-- 入参 名字 页面类型 然后遍历生成 -->
<style scoped lang="scss">
.bar {
  &__category{
    @apply
    font-bold text-gray-600
    border-2 rounded-xl
    bg-orange-300
    w-20 h-10
    text-center leading-10
    cursor-pointer
  }

  @apply
    fixed
    w-[360px] h-16
    bg-white
    p-4
    left-0 bottom-0
    z-[1000]
    flex
    justify-around
}


</style>