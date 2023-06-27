<script setup lang="ts">
const main = ref()

defineExpose({
  main
})
</script>

<template>

  <main ref="main" class="card__main">
    <section class="card__section">

    </section>
    <section class="card__section">

    </section>

    <section class="card__section">

    </section>

    <section class="card__section">

    </section>
  </main>

</template>

<style scoped lang="postcss">
.card__main {
}
.card__section {
  @apply
  rounded-xl
  w-full min-h-[150px]
  bg-buff-second
}

.card__section:not(:last-child) {
  @apply mb-[20px]
}
</style>