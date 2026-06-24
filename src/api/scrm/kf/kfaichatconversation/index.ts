import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服ai通信 VO
export interface KfAiChatConversation {
  id: number // 对话编号
  userId: number // 用户编号
  roleId: number // 聊天角色
  openKfId: string // 客服id
  openKfServicer: string // 客服接待人员id
  externalUserId: string // 客户id
  title: string // 对话标题
  modelId: number // 模型编号
  model: string // 模型标识
  pinned: boolean // 是否置顶
  pinnedTime: Date // 置顶时间
  systemMessage: string // 角色设定
  temperature: number // 温度参数
  maxTokens: number // 单条回复的最大 Token 数量
  ragConversation: string // agent或dialog的对话id
  ragConvType: string // agent或dialog
  ragAgentId: string // agent或dialog的id
  maxContexts: number // 上下文的最大 Message 数量
}

// 客服ai通信 API
export const KfAiChatConversationApi = {
  // 查询客服ai通信分页
  getKfAiChatConversationPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-ai-chat-conversation/page`, params })
  },

  // 查询客服ai通信详情
  getKfAiChatConversation: async (id: number) => {
    return await request.get({ url: scrm + `/kf-ai-chat-conversation/get?id=` + id })
  },

  // 新增客服ai通信
  createKfAiChatConversation: async (data: KfAiChatConversation) => {
    return await request.post({ url: scrm + `/kf-ai-chat-conversation/create`, data })
  },

  // 修改客服ai通信
  updateKfAiChatConversation: async (data: KfAiChatConversation) => {
    return await request.put({ url: scrm + `/kf-ai-chat-conversation/update`, data })
  },

  // 删除客服ai通信
  deleteKfAiChatConversation: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-ai-chat-conversation/delete?id=` + id })
  },

  // 导出客服ai通信 Excel
  exportKfAiChatConversation: async (params) => {
    return await request.download({ url: scrm + `/kf-ai-chat-conversation/export-excel`, params })
  },
}
