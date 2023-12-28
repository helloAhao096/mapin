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
  overflow: hidden;
  /*如果没有展开，则不能使用滚动事件
  //overflow-auto
  //absolute
  /*top-[40%] left-0 right-0 bottom-0*/
  /*apply*/
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