<template>
  <div class="flex" v-loading="loading">
    <el-form :disabled="true" :model="form" ref="form" :rules="rules" label-width="100px" class="g-card fxauto mr20">
      <el-form-item label="客服名称" prop="name">
        <el-input
          v-model="form.name"
          placeholder="客服名称"
          style="width: 400px"
          show-word-limit
          maxlength="20" />
      </el-form-item>
      <el-form-item label="客服头像" prop="avatar">
        <upload v-model:fileUrl="form.avatar" type="0" :maxSize="10" :format="['jpg', 'png']">
          <template #tip><div class="tip">支持jpg/png格式，图片大小不超过10M</div></template>
        </upload>
      </el-form-item>
      <el-form-item label="接待方式" prop="receptionType">
        <el-radio-group v-model="form.receptionType">
          <el-radio
            v-for="dict in receptionTypeDict"
            :key="dict.key"
            :value="dict.key"
          >
            {{ dict.label }}
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="接待人员" prop="selectedUserList">
        <div>
          <el-button type="primary" plain class="ml10" icon="el-icon-plus" @click="dialogVisibleSelectUser = true">
            选择员工
          </el-button>
        </div>
        <TagEllipsis :list="form.selectedUserList" limit="10" emptyText/>
      </el-form-item>

    </el-form>
    <!-- 选择使用员工弹窗 -->
    <SelectUser
      :key="sigleSelect"
      v-model:visible="dialogVisibleSelectUser"
      title="选择使用员工"
      :isOnlyLeaf="sigleSelect !== 2"
      :isSigleSelect="sigleSelect == 1"
      :defaultValues="form.selectedUserList"
      @success="selectedUser"/>

  </div>
  <el-button style="position: fixed; right: 100px; bottom: 20px;" @click="close">关闭</el-button>

</template>

<script>
import {
  getMemeberInCustomer, getList, addService, remove,
  editService, addServiceWelcome, editServiceWelcome
} from '@/smart/api/customerService/api'
import {
  getMemeberInCustomer as kf_getMemeberInCustomer,
  getList as kf_getList,
  addService as kf_addService,
  editService as kf_editService,
  addServiceWelcome as kf_addServiceWelcome,
  editServiceWelcome as kf_editServiceWelcome,
  accountDetail
} from '@/smart/api/customerService/kfapi'

import { RagflowClientApi } from '@/smart/components/assistant/api/ragclient'

export default {
  computed: {
    showAgentSelect() {
      // 当接待方式为2或3时显示AI客服选择框
      return this.form.receptionType === 2 || this.form.receptionType === 3
    },
  },
  components: { },
  props: {
    dialogKey: {
      type: Number,
      default: 0
    },
    openKfId: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      dialogVisibleSelectUser: false,
      // 遮罩层
      loading: false,
      // 表单参数
      form: {
        id: 0,
        name: '',
        media_id: '',
        avatar: '',
        receptionType: 1,
        openKfId: '',
        selectedUserList: [],
        switchType: 1, // 接待型 1单人  2多人
        allocationType: 1, // 排班类型: 1-全天 2-自动排班
        allocationWay: 1, // 排班方式: 1-轮询 2-顺序 3-空闲
        receiveLimit: 0, // 接待人员数限制，0表示无限制
        queueNotice: 1, // 排队提醒: 1-开启 2-关闭
        queueNoticeContent: '', // 排队提醒内容
        timeOutNotice: 2, // 超时未回复提醒: 1-开启 2-关闭
        timeOut: 0, // 超时时间
        timeOutType: 1, // 超时时间类型 1-分钟 2-小时
        timeOutContent: '', // 超时未回复提醒内容
        kfTimeOutNotice: 1, // 客服超时未回复提醒: 1-开启 2-关闭
        kfTimeOutType: 1, // 客户超时时间类型 1-分钟 2-小时
        kfTimeOut: 30, // 客服超时时间
        endNotice: 1, // 自动结束提醒: 1-开启 2-关闭
        endNoticeTime: 30, // 自动结束时间
        endTimeType: 1, // 自动结束时间类型 1-分钟 2-小时
        endContentType: 2, // 自动结束提醒内容类型 1-会话质量评价 2-会话结束语
        endContent: '', // 自动结束提醒内容
        oorWelcome: '', // 非工作时间接待语
        workCycle: '', // 工作周期(1-7分别代表周一到周日，多个使用逗号隔开)
        beginTime: '', // 接待工作开始时间
        endTime: '', // 接待工作结束时间
        welcomeMsg: '', // 工作时间接待欢迎语
      },
      receptionTypeDict: [
        {
          label: "人工客服",
          key: 1,
        },
        {
          label: "智能客服",
          key: 2,
        },
        {
          label: "人工与智能客服协同",
          key: 3,
        },
      ],
      chatAgentList: [],
      chatAgentShow: false,
      rules: Object.freeze({
        name: [{ required: true, message: '必填项', trigger: 'blur' }],
        avatar: [{ required: true, message: '必填项', trigger: 'blur' }],
        selectedUserList: [{ required: true, message: '必填项', trigger: 'blur' }],
      }),
    }
  },
  created() {
    // let id = this.$route.query.id
    // id && this.getDetail(id)
    this.openKfId && this.getDetail(this.openKfId)

    RagflowClientApi.getChatAgentList().then(response => {
      this.chatAgentList = response || []
    }).catch(error => {
      console.error('获取AI客服列表失败:', error)
      this.chatAgentList = []
    })
  },
  methods: {
    /** 获取详情 */
    getDetail(id) {
      this.loading = true
      accountDetail({ openKfId: id }).then(({ data }) => {
        this.form = data
        this.loading = false
      })
    },
    // 选择人员变化事件
    selectedUser(data) {
      this.form.selectedUserList = data
    },
    close() {
      this.$emit('cancel')
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;
          if(this.openKfId) {
            this.form.openKfId = this.openKfId
            kf_editService(this.form)
              .then(({ data }) => {
                this.msgSuccess('操作成功')
                this.loading = false
                // this.$router.back()
                this.$emit('success')
              })
              .catch(() => {
                this.loading = false
              })
          } else {
            kf_addService(this.form)
              .then(({ data }) => {
                this.msgSuccess('操作成功')
                this.loading = false
                // this.$router.back()
                this.$emit('success')
              })
              .catch(() => {
                this.loading = false
              })
          }

        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.preview-wrap {
  line-height: 26px;
}
.welcome-input {
  display: table;
  width: 80%;
  margin: 0 auto 20px;
}
</style>
