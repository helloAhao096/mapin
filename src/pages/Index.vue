<script setup lang="ts">
import {useHead} from '@vueuse/head'
import Map from "@/components/map/mapinMap.vue";
import MapinMap from "@/components/map/mapinMap.vue";
import ActionCard from "@/components/actionCard/actionCard.vue";
import NavigationBar from "@/components/navigationBar/navigationBar.vue";
import Home from "@/pages/home/home.vue";
import type {Component} from "vue";
import Post from "@/pages/post/post.vue";
import { ref } from 'vue'

// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute()

useHead({
  title: route.meta.title,
  meta: [
    {
      property: 'og:title',
      content: route.meta.title,
    },
    {
      name: 'twitter:title',
      content: route.meta.title,
    },
  ],
})

// const VERSION = import.meta.env.VITE_APP_VERSION
// const BUILD_DATE = import.meta.env.VITE_APP_BUILD_EPOCH
//   ? new Date(Number(import.meta.env.VITE_APP_BUILD_EPOCH))
//   : undefined
// const thisYear = new Date().getFullYear()

// 页面当前组件
let currentPage: Component = ref(Home)

function selectedCategory(page: any) {
  currentPage.value = page

}

const categories: any = [{
  name: "主页",
  category: Home
},
  {
    name: "发现",
    category: Post
  }]

// 选项卡bar切换
// 主要卡片中的section封装
const value = "home"

</script>

<template>

  <!--  <component :is="currentCompont"></component>-->
  <!--  <navigation-bar @bar-category="selectedCategory">-->
  <!--  </navigation-bar>-->
  <!--  <action-card></action-card>-->

  <!--  <home></home>-->


  <component :is="currentPage"></component>
  <navigation-bar
      :categories="categories"
      @bar-category="selectedCategory">

  </navigation-bar>

  <mapin-map></mapin-map>
</template>
