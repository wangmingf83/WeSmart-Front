import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服事件消息 VO
export interface KfEventMsg {
  id: number // 主键id
  corpId: string // 企业id
  msgId: string // 消息id
  openKfId: string // 客服帐号ID
  toUserName: string // 企业微信CorpID
  sendTime: Date // 消息发送时间
  origin: number // 消息来源。3-微信客户发送的消息 4-系统推送的事件消息 5-接待人员在企业微信客户端发送的消息
  eventType: string // 事件类型
  externalUserid: string // 客户UserID
  servicerUserid: string // 接待人员userid
  oldServicerUserid: string // 老的接待人员userid
  newServicerUserid: string // 新的接待人员userid
  changeType: number // 变更类型。1-从接待池接入会话 2-转接会话 3-结束会话 4-重新接入已结束/已转接会话
  status: number // 状态类型。1-接待中 2-停止接待
  scene: string // 进入会话的场景值
  sceneParam: string // 进入会话的自定义参数
  msgCode: string // 用于发送事件响应消息的code
  welcomeCode: string // 欢迎语code
  failMsgId: string // 发送失败的消息msgid
  failType: number // 失败类型:0-未知原因 1-客服账号已删除 2-应用已关闭 4-会话已过期，超过48小时 5-会话已关闭 6-超过5条限制 7-未绑定视频号 8-主体未验证 9-未绑定视频号且主体未验证 10-用户拒收
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服事件消息 API
export const KfEventMsgApi = {
  // 查询客服事件消息分页
  getKfEventMsgPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-event-msg/page`, params })
  },

  // 查询客服事件消息详情
  getKfEventMsg: async (id: number) => {
    return await request.get({ url: scrm + `/kf-event-msg/get?id=` + id })
  },

  // 新增客服事件消息
  createKfEventMsg: async (data: KfEventMsg) => {
    return await request.post({ url: scrm + `/kf-event-msg/create`, data })
  },

  // 修改客服事件消息
  updateKfEventMsg: async (data: KfEventMsg) => {
    return await request.put({ url: scrm + `/kf-event-msg/update`, data })
  },

  // 删除客服事件消息
  deleteKfEventMsg: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-event-msg/delete?id=` + id })
  },

  // 导出客服事件消息 Excel
  exportKfEventMsg: async (params) => {
    return await request.download({ url: scrm + `/kf-event-msg/export-excel`, params })
  },
}
