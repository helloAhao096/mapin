<script setup lang="ts">
import CardMain from "@/components/actionCard/main/cardMain.vue";
import CardHeader from "@/components/actionCard/header/cardHeader.vue";
import {onMounted,onUpdated, ref} from "vue";

// 给props设置默认值
const props = withDefaults(defineProps<{
  zIndex?: number
}>(),{
  zIndex: 999
})

const card =  ref<null | HTMLElement>(null)

onMounted(() => {
  console.log(props.zIndex)
  card.value.style.zIndex = props.zIndex
})

</script>

<template>
  <aside ref="card" class="card">
    <slot></slot>
  </aside>
</template>
<!--添加伸缩箭头，然后整个card 往下-->
<style scoped lang="scss">
.card {
  //transition: top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  top: 25px;
  -webkit-transition: top .5s ease-in-out;
  transition: top .5s ease-in-out;
  @apply
  fixed  left-0
  rounded-t-2xl
  p-4
  h-screen w-[360px]
  bg-buff-primary
}


</style>