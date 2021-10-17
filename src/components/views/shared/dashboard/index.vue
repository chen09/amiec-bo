<template>
  <div>Dashboard</div>

</template>

<script setup lang="ts">
import {routes} from "@/router";
import {useRoute, useRouter} from 'vue-router'
import { watch, computed } from 'vue';


const base_url =  import.meta.env.VITE_BASE_URL
console.log(base_url)

const route = useRoute()
// console.log(route)
watch(
    () => route.params,
    async newParams => {
      console.log(route.query);
    }
)

</script>

<script lang="ts">
import {defineComponent} from "vue";
// import {Layout} from "ant-design-vue";

export default defineComponent(
    {
      name: 'Dashboard',
      components: {
        // [Layout.name]: Layout
      }
    },
)
</script>

<style scoped>

</style>