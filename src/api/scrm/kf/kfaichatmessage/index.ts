import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服ai聊天记录 VO
export interface KfAiChatMessage {
  id: number // 消息编号
  conversationId: number // 对话编号
  replyId: number // 回复编号
  userId: number // 用户编号
  roleId: number // 角色编号
  type: string // 消息类型
  model: string // 模型标识
  modelId: number // 模型编号
  content: string // 消息内容
  useContext: boolean // 是否携带上下文
  segmentIds: string // 段落编号数组
}

// 客服ai聊天记录 API
export const KfAiChatMessageApi = {
  // 查询客服ai聊天记录分页
  getKfAiChatMessagePage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-ai-chat-message/page`, params })
  },

  // 查询客服ai聊天记录详情
  getKfAiChatMessage: async (id: number) => {
    return await request.get({ url: scrm + `/kf-ai-chat-message/get?id=` + id })
  },

  // 新增客服ai聊天记录
  createKfAiChatMessage: async (data: KfAiChatMessage) => {
    return await request.post({ url: scrm + `/kf-ai-chat-message/create`, data })
  },

  // 修改客服ai聊天记录
  updateKfAiChatMessage: async (data: KfAiChatMessage) => {
    return await request.put({ url: scrm + `/kf-ai-chat-message/update`, data })
  },

  // 删除客服ai聊天记录
  deleteKfAiChatMessage: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-ai-chat-message/delete?id=` + id })
  },

  // 导出客服ai聊天记录 Excel
  exportKfAiChatMessage: async (params) => {
    return await request.download({ url: scrm + `/kf-ai-chat-message/export-excel`, params })
  },
}
