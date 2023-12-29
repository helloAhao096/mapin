<script setup lang="ts">
import CardHeader from "@/components/actionCard/header/cardHeader.vue";

const main = ref()

defineExpose({
  main
})
</script>

<template>

  <main ref="main" class="card__main">
    <card-header></card-header>

    <slot>

    </slot>
  </main>

</template>

<!--
 设置最大高度，超出的可以滚动
 判断如果卡片如果没有全部展开，元素不能滚动
 -->
<style scoped lang="postcss">
.card__main {
  overflow: hidden;
  /*如果没有展开，则不能使用滚动事件
  //overflow-auto
  //absolute
  /*top-[40%] left-0 right-0 bottom-0*/
  /*apply*/
}

</style>