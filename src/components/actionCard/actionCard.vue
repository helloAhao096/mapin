<script setup lang="ts">
import CardMain from "@/components/actionCard/main/cardMain.vue";
import CardHeader from "@/components/actionCard/header/cardHeader.vue";
import {onMounted,onUpdated, ref} from "vue";

const card =  ref<null | HTMLElement>(null)
const header =  ref<null | HTMLElement>(null)
const main = ref<null | HTMLElement>(null)

// 找到父元素，然后hover的时候修改子元素样式
const arrow_box = ref<null | HTMLElement>(null)
const unfold = ref(true)

let arrow_left = 'arrow__down-left'
let arrow_right = 'arrow__down-right'

onMounted(() => {
  console.log(unfold.value)
  arrow_box.value.addEventListener("click", () => {
    unfold.value = !unfold.value
    arrow_left = unfold.value ? 'arrow__down-left': 'arrow__up-left'
    arrow_right = unfold.value ? 'arrow__down-right': 'arrow__up-right'
    if (unfold.value) {
      card.value.style.top = '25px'
    }else {
      card.value.style.top = window.innerHeight - main.value.main.offsetTop + 'px'
    }
  })

  // arrow_box.value.addEventListener('mouseover', (event) => {
  //   arrowSwitch('mouseover', event, arrow_left, arrow_right)
  // })
  arrow_box.value.addEventListener('mouseover', (event) => {
    debounce(arrowSwitch)('mouseover',event,arrow_left,arrow_right)
  },false)

  arrow_box.value.addEventListener('mouseout', (event) => {
    debounce(cleanArrow)(event)
  },false)
})

function arrowSwitch(eventName,event,arrow_left, arrow_right) {
    if (eventName == 'mouseover'){
      event.target.children[0].classList.add(arrow_left)
      event.target.children[1].classList.add(arrow_right)
    }
}

function cleanArrow(event) {
  event.target.children[0].classList = "arrow arrow__line-left"
  event.target.children[1].classList = "arrow arrow__line-right"
}

// 函数防抖
// immediate - 是否首次执行
const debounce = (func, dalay = 100, immediate = true) => {
  let timer, callNow = immediate;
  return (...args) => {
    if (timer) clearTimeout(timer);
    if (callNow) {
      func(...args);
      callNow = false;
    }
    timer = setTimeout(() => {
      func(...args);
    }, dalay)
  }
}

</script>

<template>
  <aside ref="card" class="card">
    <div ref="arrow_box" class="card__arrow-box text-center mb-1">
      <div class="arrow arrow__line-left"></div>
      <div class="arrow arrow__line-right"></div>
    </div>
    <card-header ref="header"></card-header>
    <card-main ref="main"></card-main>
  </aside>
</template>
<!--添加伸缩箭头，然后整个card 往下-->
<style scoped lang="scss">

.card__arrow-box {
  line-height: 20px;
  height: 30px;
  width: 100%;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrow {
  position: relative;
  width: 1rem;
  height: 2px;
  background-color: black;
  transition: all .1s ease-in-out;

  // 向下的箭头↓
  &__line-left {
    left: 2.5px;
  }
  &__line-right {
    left: -2.5px;
  }

  &__down-left {
    transform: rotate(45deg)
  }

  &__down-right {
    transform: rotate(-45deg)
  }

  &__up-left {
    transform: rotate(-45deg)
  }

  &__up-right {
    transform: rotate(45deg)
  }
}

.card__movement {

}

.card {
  //transition: top 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  top: 25px;
  -webkit-transition: top .5s ease-in-out;
  transition: top .5s ease-in-out;
  @apply
    fixed  left-5
    rounded-t-2xl
    p-4
    h-screen min-w-[300px]
    bg-buff-primary
    z-9999
}

/**
 * ----------------------------------------
 * animation slide-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}


</style>