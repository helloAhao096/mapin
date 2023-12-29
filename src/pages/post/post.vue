<script setup lang="ts">

import ActionCard from "@/components/actionCard/actionCard.vue";
import CardHeader from "@/components/actionCard/header/cardHeader.vue";
import CardMain from "@/components/actionCard/main/cardMain.vue";
</script>

<template>

  <action-card>
    <card-header ref="header"></card-header>
    <card-main ref="main"></card-main>
    我是post
  </action-card>


</template>

<style scoped>

</style>