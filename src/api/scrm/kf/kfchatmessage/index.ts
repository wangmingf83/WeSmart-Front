import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服与客户的聊天记录，含ai VO
export interface KfChatMessage {
  id: number // 消息编号
  conversationId: number // 对话编号
  replyId: number // 回复编号
  userId: number // 用户编号
  openKfId: string // 客服id
  openKfServicer: string // 客服接待人员id
  externalUserId: string // 客户id
  roleId: number // 角色编号
  type: string // 消息类型
  model: string // 模型标识
  modelId: number // 模型编号
  content: string // 消息内容
  useContext: boolean // 是否携带上下文
  segmentIds: string // 段落编号数组
}

// 客服与客户的聊天记录，含ai API
export const KfChatMessageApi = {
  // 查询客服与客户的聊天记录，含ai分页
  getKfChatMessagePage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-chat-message/page`, params })
  },

  // 查询客服与客户的聊天记录，含ai详情
  getKfChatMessage: async (id: number) => {
    return await request.get({ url: scrm + `/kf-chat-message/get?id=` + id })
  },

  // 新增客服与客户的聊天记录，含ai
  createKfChatMessage: async (data: KfChatMessage) => {
    return await request.post({ url: scrm + `/kf-chat-message/create`, data })
  },

  // 修改客服与客户的聊天记录，含ai
  updateKfChatMessage: async (data: KfChatMessage) => {
    return await request.put({ url: scrm + `/kf-chat-message/update`, data })
  },

  // 删除客服与客户的聊天记录，含ai
  deleteKfChatMessage: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-chat-message/delete?id=` + id })
  },

  // 导出客服与客户的聊天记录，含ai Excel
  exportKfChatMessage: async (params) => {
    return await request.download({ url: scrm + `/kf-chat-message/export-excel`, params })
  },
}
