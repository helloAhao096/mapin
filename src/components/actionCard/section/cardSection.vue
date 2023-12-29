<script setup lang="ts">

</script>

<template>
  <section class="card__section">
    <slot></slot>
  </section>
</template>

<style scoped lang="scss">
.card__section {
  @apply
  rounded-xl
  w-full min-h-[6rem]
  bg-buff-second
  flex justify-center items-center
}

//.card__section:not(:last-child) {
//  @apply mb-[20px]
//}
</style>