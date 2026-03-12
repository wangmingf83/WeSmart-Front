<template>
  <div class="flex" v-loading="loading">
    <el-form :model="form" ref="form" :rules="rules" label-width="150px" class="g-card fxauto mr20">
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
      <el-form-item label="客服类型" prop="switchType">
        <el-radio-group v-model="form.switchType" @change="changeSwitchType">
          <el-radio :label="1">单人</el-radio>
          <el-radio :label="2">多人</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="排班类型" prop="allocationType">
        <el-radio-group v-model="form.allocationType" >
          <el-radio :label="1">全天</el-radio>
          <el-radio :label="2" :disabled="form.switchType === 1">自动排班</el-radio>
        </el-radio-group>
        <div class="g-tip">
          <span v-if="form.allocationType == 1">全天在线时，优先选择上次接待员工，如没有则随机分配一名空闲接待员工，单人客服不支持排班</span>
          <span v-else-if="form.allocationType == 2">
              选择自动排班时，默认生成排班规则，优先选择上次接待员工，您可通过设置“接待员工排班”自定义工作时间。
            </span>
        </div>
      </el-form-item>
<!--      <el-form-item v-if="form.switchType == 2" label="排班方式" prop="allocationWay">
        <el-radio-group v-model="form.allocationWay">
          &lt;!&ndash;el-radio :label="1">轮询</el-radio&ndash;&gt;
          <el-radio :label="2">顺序</el-radio>
          <el-radio :label="3">空闲</el-radio>
        </el-radio-group>
        <div class="g-tip">
          <span v-if="form.allocationWay == 2">客服拥有多名接待员工情况下，根据顺序依次安排接待客户</span>
          <span v-else-if="form.allocationWay == 3">
              客服拥有多名接待员工情况下，优先随机安排空闲的员工接待客户
          </span>
        </div>
      </el-form-item>
      <el-form-item v-if="form.switchType == 2" label="接待人数限制" prop="receiveLimit">
        <el-input-number
          v-model="form.receiveLimit"
          placeholder="接待人数限制"
          controls-position="right"
          :min="0"
        />
        <div class="g-tip">
          <span>明确分配的接待员同时接待的最高客户数，0表示无限制</span>
        </div>
      </el-form-item>
      <el-form-item label="排队提醒" prop="queueNotice">
        <el-radio-group v-model="form.queueNotice" >
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="2">关闭</el-radio>
        </el-radio-group>
        <div class="g-tip">
          <span>开启后，当负责接待的员工接待客户数过多时，将向客户发送“排队提醒内容”</span>
        </div>
      </el-form-item>
      <el-form-item label="排队提醒内容" prop="queueNoticeContent">
        <el-input
          :disabled="form.queueNotice === 2"
          v-model="form.queueNoticeContent"
          placeholder="向客户发送的排队提醒内容"
          style="width: 400px"
          show-word-limit
          type="textarea"
          :rows="4"/>
      </el-form-item>
      <el-form-item label="超时未回复提醒" prop="timeOutNotice">
        <el-radio-group v-model="form.timeOutNotice" >
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="2">关闭</el-radio>
        </el-radio-group>
        <div class="g-tip">
          <span>开启后，当客户超过设置的“超时时间”未回复，将向负责接待的员工发送“超时未回复提醒内容”。</span>
        </div>
      </el-form-item>
      <el-form-item label="超时时间类型" prop="timeOutType">
        <el-radio-group :disabled="form.timeOutNotice === 2" v-model="form.timeOutType" >
          <el-radio :label="1">分钟</el-radio>
          <el-radio :label="2">小时</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="超时时间" prop="timeOut">
        <el-input-number
          :disabled="form.timeOutNotice === 2"
          v-model="form.timeOut"
          placeholder="超时时间"
          controls-position="right"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="超时未回复提醒内容" prop="timeOutContent">
        <el-input
          :disabled="form.timeOutNotice === 2"
          v-model="form.timeOutContent"
          placeholder="超时未回复提醒内容"
          style="width: 400px"
          show-word-limit
          type="textarea"
          :rows="4"/>
      </el-form-item>
      <el-form-item label="客服超时未回复提醒" prop="kfTimeOutNotice">
        <el-radio-group v-model="form.kfTimeOutNotice" >
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="2">关闭</el-radio>
        </el-radio-group>
        <div class="g-tip">
          <span>开启后，当客服超过设置的“客服超时时间”未回复客户，将向负责接待的员工发送“客服超时未回复提醒内容”。</span>
        </div>
      </el-form-item>
      <el-form-item label="客服超时时间类型" prop="kfTimeOutType">
        <el-radio-group :disabled="form.kfTimeOutNotice === 2" v-model="form.kfTimeOutType" >
          <el-radio :label="1">分钟</el-radio>
          <el-radio :label="2">小时</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="客服超时时间" prop="kfTimeOut">
        <el-input-number
          :disabled="form.kfTimeOutNotice === 2"
          v-model="form.timeOut"
          placeholder="客服超时时间"
          controls-position="right"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="客服超时未回复提醒内容" prop="kfTimeOutContent">
        <el-input
          :disabled="form.kfTimeOutNotice === 2"
          v-model="form.kfTimeOutContent"
          placeholder="客服超时未回复提醒内容"
          style="width: 400px"
          show-word-limit
          type="textarea"
          :rows="4"/>
      </el-form-item>
      <el-form-item label="自动结束提醒" prop="endNotice">
        <el-radio-group v-model="form.endNotice" >
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="2">关闭</el-radio>
        </el-radio-group>
        <div class="g-tip">
          <span>开启后，当客户超过“自动结束时间”未回复，则默认关闭本次接待服务，同时向客户发送“自动结束提醒内容”。</span>
        </div>
      </el-form-item>
      <el-form-item label="自动结束时间类型" prop="endTimeType">
        <el-radio-group :disabled="form.endNotice === 2" v-model="form.endTimeType" >
          <el-radio :label="1">分钟</el-radio>
          <el-radio :label="2">小时</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="自动结束时间" prop="endNoticeTime">
        <el-input-number :disabled="form.endNotice === 2"
          v-model="form.endNoticeTime"
          placeholder="自动结束时间"
          controls-position="right"
          :min="0"
        />
      </el-form-item>
      <el-form-item label="自动结束提醒内容类型" prop="endContentType">
        <el-radio-group :disabled="form.endNotice === 2" v-model="form.endContentType" >
          <el-radio :label="1">会话质量评价</el-radio>
          <el-radio :label="2">会话结束语</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="自动结束提醒内容" prop="endContent">
        <el-input :disabled="form.endNotice === 2"
          v-model="form.endContent"
          placeholder="自动结束提醒内容"
          style="width: 400px"
          show-word-limit
          type="textarea"
          :rows="4"/>
      </el-form-item>-->
      <el-form-item label="接待员工" prop="selectedUserList">
        <div>
          <el-button type="primary" plain class="ml10" icon="el-icon-plus" @click="dialogVisibleSelectUser = true">
            选择员工
          </el-button>
        </div>
        <TagEllipsis :list="form.selectedUserList" limit="10" emptyText/>
      </el-form-item>
      <el-form-item v-if="form.switchType === 2 && form.allocationType === 2" label="接待员工排班" prop="welcome">
        <template v-for="(item) in form.welcome" :key="item.id">
          <el-card class="box-card roster-card">
            <el-form-item label="工作周期">
              <el-checkbox-group v-model="item.workCycle">
                <el-checkbox :label="1" >周一</el-checkbox>
                <el-checkbox :label="2" >周二</el-checkbox>
                <el-checkbox :label="3" >周三</el-checkbox>
                <el-checkbox :label="4" >周四</el-checkbox>
                <el-checkbox :label="5" >周五</el-checkbox>
                <el-checkbox :label="6" >周六</el-checkbox>
                <el-checkbox :label="7" >周日</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="在线时间">
              <el-time-select
                style="width: 40%"
                v-model="item.beginTime"
                start="00:00"
                end="23:59"
                step="00:30"
                :max-time="item.endTime"
                placeholder="任意时间点"/>
              -
              <el-time-select
                style="width: 40%"
                start="00:00"
                end="23:59"
                step="00:30"
                :min-time="item.beginTime"
                v-model="item.endTime"
                placeholder="任意时间点"/>
            </el-form-item>
          </el-card>
        </template>
      </el-form-item>
      <el-form-item label="欢迎语" prop="welcomeMsg">
        <el-input
          v-model="form.welcomeMsg"
          placeholder="欢迎语"
          style="width: 400px"
          show-word-limit
          type="textarea"
          :rows="4"/>
      </el-form-item>
      <el-form-item label="非工作时间接待语" prop="oorWelcome">
        <el-input
          v-model="form.oorWelcome"
          placeholder="非工作时间接待语"
          style="width: 400px"
          show-word-limit
          type="textarea"
          :rows="4"/>
      </el-form-item>

      <el-form-item label=" ">
        <el-button type="primary" @click="submit">保存</el-button>
        <el-button @click="$router.back()">取消</el-button>
      </el-form-item>
    </el-form>

    <!-- 选择使用员工弹窗 -->
    <SelectUser
      :key="sigleSelect"
      v-model:visible="dialogVisibleSelectUser"
      title="选择使用员工"
      :isOnlyLeaf="true"
      :isSigleSelect="form.switchType == 1"
      :defaultValues="form.selectedUserList"
      class="select-user-dialog"
      @success="selectedUser"/>

  </div>

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
        receptionType: 1, // 人工客服
        openKfId: '',
        selectedUserList: [],
        switchType: 1, // 接待型 1单人  2多人
        allocationType: 1, // 排班类型: 1-全天 2-自动排班
        allocationWay: 2, // 排班方式: 1-轮询 2-顺序 3-空闲
        receiveLimit: 0, // 接待人员数限制，0表示无限制
        queueNotice: 1, // 排队提醒: 1-开启 2-关闭
        queueNoticeContent: '', // 排队提醒内容
        timeOutNotice: 2, // 超时未回复提醒: 1-开启 2-关闭
        timeOut: 10, // 超时时间
        timeOutType: 1, // 超时时间类型 1-分钟 2-小时
        timeOutContent: '', // 超时未回复提醒内容
        kfTimeOutNotice: 1, // 客服超时未回复提醒: 1-开启 2-关闭
        kfTimeOutType: 1, // 客户超时时间类型 1-分钟 2-小时
        kfTimeOut: 30, // 客服超时时间
        kfTimeOutContent: '', // 客服超时未回复提醒内容
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
        welcome: [
          {
            id: null,
            corpId: '',
            kfId: '',
            type: 1,
            // workCycle: [1, 2, 3, 4, 5, 6, 7], // 周期
            workCycle: [1, 2, 3, 4, 5], // 周期
            beginTime: '09:00', // 开始时间
            endTime: '21:59', // 结束时间
            content: '',
          },
        ], // 欢迎语及工作排班
      },
      chatAgentList: [],
      chatAgentShow: false,
      rules: Object.freeze({
        name: [{ required: true, message: '必填项', trigger: 'blur' }],
        avatar: [{ required: true, message: '必填项', trigger: 'blur' }],
        selectedUserList: [{ required: true, message: '必填项', trigger: 'blur' }],
        welcomeMsg: [{ required: true, message: '必填项', trigger: 'blur' }],
        oorWelcome: [{ required: true, message: '必填项', trigger: 'blur' }],
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

        if(data.welcome && data.welcome.length > 0 && data.welcome[0].workCycle) {
          // 确保 workCycle 是字符串，然后分割为数组
          const workCycleStr = String(data.welcome[0].workCycle);
          this.form.welcome[0].workCycle = workCycleStr.split(',').map(item => parseInt(item.trim())).filter(item => !isNaN(item));
        }

        this.loading = false
      })
    },
    // 选择人员变化事件
    selectedUser(data) {
      this.form.selectedUserList = data
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true;

          const submitData = { ...this.form }
          // 如果存在 welcome 数组，需要处理 workCycle
          if (submitData.welcome && submitData.welcome.length > 0) {
            submitData.welcome = submitData.welcome.map(item => ({
              ...item,
              // 将数组转换为逗号分隔的字符串
              workCycle: item.workCycle ? item.workCycle.join(',') : ''
            }))
          }

          if(this.openKfId) {
            this.form.openKfId = this.openKfId
            // kf_editService(this.form)
            kf_editService(submitData)
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
            // kf_addService(this.form)
            kf_addService(submitData)
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
    changeSwitchType(e) {
      if (e === 1) {
        this.form.allocationType = 1
      }
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

:deep(.el-form-item__label) {
  white-space: nowrap !important;
  text-align: right;
  padding-right: 20px;
}

:deep(.el-form-item) {
  margin-bottom: 20px;
}

// 确保输入框有足够宽度
.el-input,
.el-textarea {
  width: 400px !important;
}

.select-user-dialog {
  :deep(.el-dialog) {
    width: 80% !important; /* 设置弹窗宽度为50% */
    max-width: none; /* 如果需要的话，移除最大宽度限制 */
  }
}

</style>
