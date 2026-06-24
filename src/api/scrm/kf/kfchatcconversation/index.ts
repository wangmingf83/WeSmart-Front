import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客对会话通信记录 VO
export interface KfChatCconversation {
  id: number // 对话编号
  agentType: string // 可选值chat或agent
  agentId: string // agent id
  conversationId: string // 通信id
  openKfId: string // 客服账号ID
  servicerUserid: string // 接待人员id
}

// 客对会话通信记录 API
export const KfChatCconversationApi = {
  // 查询客对会话通信记录分页
  getKfChatCconversationPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-chat-cconversation/page`, params })
  },

  // 查询客对会话通信记录详情
  getKfChatCconversation: async (id: number) => {
    return await request.get({ url: scrm + `/kf-chat-cconversation/get?id=` + id })
  },

  // 新增客对会话通信记录
  createKfChatCconversation: async (data: KfChatCconversation) => {
    return await request.post({ url: scrm + `/kf-chat-cconversation/create`, data })
  },

  // 修改客对会话通信记录
  updateKfChatCconversation: async (data: KfChatCconversation) => {
    return await request.put({ url: scrm + `/kf-chat-cconversation/update`, data })
  },

  // 删除客对会话通信记录
  deleteKfChatCconversation: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-chat-cconversation/delete?id=` + id })
  },

  // 导出客对会话通信记录 Excel
  exportKfChatCconversation: async (params) => {
    return await request.download({ url: scrm + `/kf-chat-cconversation/export-excel`, params })
  },
}
