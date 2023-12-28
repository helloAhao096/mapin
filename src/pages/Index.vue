<script setup lang="ts">
import { useHead } from '@vueuse/head'
import Map from "@/components/map/mapinMap.vue";
import MapinMap from "@/components/map/mapinMap.vue";
import ActionCard from "@/components/actionCard/actionCard.vue";
import NavigationBar from "@/components/navigationBar/navigationBar.vue";

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
</script>

<template>
  <action-card>
  </action-card>

  <navigation-bar>
  </navigation-bar>

  <mapin-map>

  </mapin-map>
</template>
