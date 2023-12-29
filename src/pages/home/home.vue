<script setup lang="ts">

import ActionCard from "@/components/actionCard/actionCard.vue";
import CardHeader from "@/components/actionCard/header/cardHeader.vue";
import CardMain from "@/components/actionCard/main/cardMain.vue";
import CardSection from "@/components/actionCard/section/cardSection.vue";
import Search from "@/components/search/search.vue";
import SectionItem from "@/components/actionCard/section/item/sectionItem.vue";
import Guide from "@/pages/guide/guide.vue";

onMounted(()=> {
})
</script>

<template>
<action-card>
  <card-main>

    <div>
      <div class="mb-[20px]">
        <search></search>
      </div>

      <card-section>
        <section-item></section-item>
      </card-section>
    </div>
  </card-main>

</action-card>

  <guide>

  </guide>
</template>

<style scoped>

</style>