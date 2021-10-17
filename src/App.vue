<template>
  <!--    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"/>-->

  <!--    <router-link :to=route.path v-for="(route, index) in routes" >{{ route.name }}</router-link>-->
  <!--  <a-layout style="background-color:green; height:800px">-->
  <!--  </a-layout>-->
  <div>
    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>

  </div>
</template>


<script setup lang="ts">
import {routes} from "./router";
document.title = import.meta.env.VITE_APP_TITLE
</script>

<script lang="ts">
import {defineComponent} from "vue";
import {Layout} from "ant-design-vue";

export default defineComponent(
    {
      name: 'App',
      components: {
        [Layout.name]: Layout
      },
    },
)
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

</style>
