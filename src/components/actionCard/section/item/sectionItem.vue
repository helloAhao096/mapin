<script setup lang="ts">
function addGuide() {

}


</script>

<template>

  <div class="item item__default" @click="add_guide">
    <div class="item__icon item__icon-default">+</div>
    <div class="item__text item__text-default">新指南</div>
  </div>

</template>
<!--border-b-gray-400-->
<!--border-b-2-->
<style scoped lang="scss">

.item {
  border: 1px solid black;

  &__icon {
    border: 1px solid black;
    @apply
    w-16 h-16
  }

  &__text {
    border: 1px solid black;
    @apply
    w-3/4 h-16
  }

  @apply
  h-[5rem] w-full
  flex justify-between items-center
  p-3
}
.item:first-child {

}
.item:first-child {

}

</style>