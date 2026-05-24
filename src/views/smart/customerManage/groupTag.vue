<script>
import List from './tag/list'
export default {
  name: '',
  components: { List },
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<template>
  <doc-tip title="企业自定义客户群标签，通过为客户群打标签，区分客户群的功能。" />
  <div>
    <List type="2"/>
  </div>
</template>

<style lang="scss" scoped>
::v-deep.el-tabs__header {
  margin-bottom: 0;
}
</style>
