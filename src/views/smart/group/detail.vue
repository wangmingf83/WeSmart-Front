<script>
import BaseInfo from './baseInfo'

export default {
  components: {
    BaseInfo,
    analyse: defineAsyncComponent(() => import('./analyse')),
    statistics: defineAsyncComponent(() => import('./statistics')),
    // CodeLink: defineAsyncComponent(() => import('../components/CodeLink')),
  },
  data() {
    return {
      activeTab: '0'
    }
  },
  created() {},
  methods: {},
}
</script>

<template>
  <CacheElTabs v-model="activeTab" #="{ opened }">
    <el-tab-pane label="活码信息" name="0">
      <BaseInfo />
    </el-tab-pane>
    <el-tab-pane label="客群统计" name="1">
      <analyse v-if="opened.includes('1')" />
    </el-tab-pane>
    <el-tab-pane label="活码统计" name="2">
      <statistics v-if="opened.includes('2')" />
    </el-tab-pane>
  </CacheElTabs>
</template>
