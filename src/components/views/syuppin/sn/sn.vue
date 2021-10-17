<template>
  <p>sn</p>
</template>

<script setup lang="ts">
</script>

<script lang="ts">
import {defineComponent} from "vue";
import {Layout} from "ant-design-vue";

export default defineComponent(
    {
      name: 'sn',
      components: {
        [Layout.name]: Layout
      },
    },
)
</script>

<style scoped>

</style>