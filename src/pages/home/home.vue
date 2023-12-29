<script setup lang="ts">

import ActionCard from "@/components/actionCard/actionCard.vue";
import CardHeader from "@/components/actionCard/header/cardHeader.vue";
import CardMain from "@/components/actionCard/main/cardMain.vue";
import CardSection from "@/components/actionCard/section/cardSection.vue";
</script>

<template>
<action-card>

  <card-header ref="header"></card-header>

  <card-main ref="main">

    <card-section>

    </card-section>

  </card-main>
  <div>
    我是home
  </div>
</action-card>
</template>

<style scoped>

</style>