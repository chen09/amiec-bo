<template>
  <SuspenseWithError>
    <router-view v-slot="{ Component, route }">
<!--      <transition name="zoom-fade" mode="out-in" appear>-->
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
<!--      </transition>-->
    </router-view>
  </SuspenseWithError>
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {Transition} from 'ant-design-vue/lib/_util/transition'
import SuspenseWithError from '@/components/SuspenseWithError.vue'


export default defineComponent({
  name: 'RouterTransition',
  components: {
    SuspenseWithError,
    Transition
  },
  props: {
    notNeedKey: {
      type: Boolean,
      default: false
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    // const store = useStore()
    // 需要缓存的路由组件
    // const keepAliveComponents = computed(() => store.state.asyncRoute.keepAliveComponents)

    return {
      // keepAliveComponents
    }
  }
})
</script>
