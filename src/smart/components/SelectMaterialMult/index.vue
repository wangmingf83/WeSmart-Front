<script>
import { getList } from '@/smart/api/customer/tag'
import list from './list'

export default {
  components: { list },
  props: {
    // 添加标签显隐
    visible: {
      type: Boolean,
      default: false,
    },
    // title: {
    //   type: String,
    //   default: '',
    // },
    // 素材类型  0:'文本', 1：'图片'
    type: {
      type: String,
      default: '0',
    },
    // 显示哪些素材类型标签
    showArr: {
      type: Array,
      default: () => [0, 1],
    },
  },
  data() {
    return {
      text: {},
      image: {},
      file: {},
    }
  },
  watch: {},
  computed: {
    Pvisible: {
      get() {
        return this.visible
      },
      set(val) {
        this.$emit('update:visible', val)
      },
    },
    Ptype: {
      get() {
        return this.type
      },
      set(val) {
        this.$emit('update:type', val)
      },
    },
  },
  created() {},
  mounted() {},
  methods: {
    submit() {
      this.Pvisible = false
      this.$emit('success', this.text, this.image, this.file)
    },
    changeText(data) {
      this.text = data
    },
    changeImage(data) {
      this.image = data
    },
  },
}
</script>

<template>
  <el-dialog title="选择素材" v-model="Pvisible" width="650px" :close-on-click-modal="false">
    <div>
      <el-tabs v-model="Ptype">
        <el-tab-pane name="0" v-if="showArr.includes(0)">
          <template #label>
            <span>
              <el-icon-date class="el-icon-date"></el-icon-date>
              文本
            </span>
          </template>
          <list type="4" @change="changeText"></list>
        </el-tab-pane>
        <el-tab-pane name="1" v-if="showArr.includes(1)">
          <template #label>
            <span>
              <el-icon-date class="el-icon-date"></el-icon-date>
              图片
            </span>
          </template>
          <list type="0" @change="changeImage"></list>
        </el-tab-pane>
        <!-- <el-tab-pane name="2">
          <template #label><span> <el-icon-date class="el-icon-date"></el-icon-date> 文件 </span></template>
          <list>
            <el-table :data="list" style="width: 100%">
              <el-table-column width="50">
                <template #default="scope">
                  <el-radio v-model="radio" :label="scope.row.id"></el-radio>
                </template>
              </el-table-column>
              <el-table-column prop="content"> </el-table-column>
            </el-table>
          </list>
        </el-tab-pane> -->
      </el-tabs>
    </div>
    <template #footer>
      <div>
        <el-button @click="Pvisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
.user-list {
  .el-row {
    line-height: 26px;
  }
}
.mr30 {
  margin-right: 30px;
}
</style>
