<template>
  <a-layout class="layout">
    <a-layout>
      <a-layout-header style="background: #000; margin: 30px 30px 20px 30px;" >
        <a-button type="primary"> save</a-button>
      </a-layout-header>
      <a-layout-content class="layout-content">
<!--        <a-breadcrumb style="margin: 16px 0">-->
<!--          <a-breadcrumb-item>User</a-breadcrumb-item>-->
<!--          <a-breadcrumb-item>Bill</a-breadcrumb-item>-->
<!--        </a-breadcrumb>-->

        <div class="tabs-view-content">
          <a-card>
            <router-view v-slot="{ Component }">
              <keep-alive>
                <component :is="Component"/>
              </keep-alive>
            </router-view>
          </a-card>
        </div>

      </a-layout-content>
      <a-layout-footer style="text-align: center">
        EDM ©2021 Created by NetSDL
      </a-layout-footer>
    </a-layout>
  </a-layout>


</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRoute, useRouter} from 'vue-router'
import {defineProps} from '@vue/runtime-core';
import {routes} from '@/router/'

const collapsed = ref<boolean>(false)
const selectedKeys = ref<string[]>(['1'])

const onCollapse = (collapsed: boolean, type: string) => {
  // console.log(collapsed, type);
  // console.log(layoutRoutes);
};

const onBreakpoint = (broken: boolean) => {
  // console.log(broken);
};

const layoutRoutes = routes.find((item) => item.name == 'Layout')!
// const currentRoute = useRoute()
// const router = useRouter()


// const props = defineProps({
//   str: {
//     type: String as PropType<string>,
//     default: ''
//   },
// });


</script>

<script lang="ts">
import IconFont from '@/components/iconfont'

import {defineComponent} from "vue"
import {Layout, Menu, Breadcrumb, Button, Card} from "ant-design-vue"
import {PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined} from '@ant-design/icons-vue';

export default defineComponent({
  name: "layout",
  components: {
    IconFont,
    Button, Card,
    [Layout.name]: Layout,
    [Layout.Sider.name]: Layout.Sider,
    [Layout.Header.name]: Layout.Header,
    [Layout.Content.name]: Layout.Content,
    [Layout.Footer.name]: Layout.Footer,
    [Menu.name]: Menu,
    [Menu.SubMenu.name]: Menu.SubMenu,
    [Breadcrumb.name]: Breadcrumb,
    [Breadcrumb.Item.name]: Breadcrumb.Item,
    PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined

  }
})

</script>

<style scoped>
.logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.layout {
  display: flex;
  min-height: 100vh;
  overflow: hidden;
}

.layout-content {
  flex: none;
  margin: 0 16px;
}

.tabs-view-content {
  /* height: calc(100vh - #{$header-height}); */
  height: calc(100vh - 110px);
  padding: 20px 14px 0;
  overflow: auto;
}
</style>