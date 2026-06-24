import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服消息 VO
export interface KfMsg {
  id: number // 主键id
  corpId: string // 企业id
  msgId: string // 消息id
  openKfId: string // 企微客服id
  externalUserid: string // 客户UserID
  servicerUserid: string // 接待人员userid
  sendTime: Date // 消息发送时间
  origin: number // 消息来源:3-微信客户发送的消息 4-系统推送的事件消息 5-接待人员在企业微信客户端发送的消息
  msgType: string // 消息类型 text、image、voice、video、file、location、link、business_card、miniprogram、msgmenu、event
  content: string // 消息内容
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服消息 API
export const KfMsgApi = {
  // 查询客服消息分页
  getKfMsgPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-msg/page`, params })
  },

  // 查询客服消息详情
  getKfMsg: async (id: number) => {
    return await request.get({ url: scrm + `/kf-msg/get?id=` + id })
  },

  // 新增客服消息
  createKfMsg: async (data: KfMsg) => {
    return await request.post({ url: scrm + `/kf-msg/create`, data })
  },

  // 修改客服消息
  updateKfMsg: async (data: KfMsg) => {
    return await request.put({ url: scrm + `/kf-msg/update`, data })
  },

  // 删除客服消息
  deleteKfMsg: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-msg/delete?id=` + id })
  },

  // 导出客服消息 Excel
  exportKfMsg: async (params) => {
    return await request.download({ url: scrm + `/kf-msg/export-excel`, params })
  },
}
