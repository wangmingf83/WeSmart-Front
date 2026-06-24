import request from '@/config/axios'
import lwConfig from '@/smart/config'

const scrm = lwConfig.services.scrm

// 客服问答分组 VO
export interface KfAgentEssion {
  id: number // 主键id
  openKfId: string // 企微客服id
  agentType: string // 分组名称
  agentId: string // ai助手id
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服问答分组 API
export const KfAgentEssionApi = {
  // 查询客服问答分组分页
  getKfAgentEssionPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-agent-ession/page`, params })
  },

  // 查询客服问答分组详情
  getKfAgentEssion: async (id: number) => {
    return await request.get({ url: scrm + `/kf-agent-ession/get?id=` + id })
  },

  // 新增客服问答分组
  createKfAgentEssion: async (data: KfAgentEssion) => {
    return await request.post({ url: scrm + `/kf-agent-ession/create`, data })
  },

  // 修改客服问答分组
  updateKfAgentEssion: async (data: KfAgentEssion) => {
    return await request.put({ url: scrm + `/kf-agent-ession/update`, data })
  },

  // 删除客服问答分组
  deleteKfAgentEssion: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-agent-ession/delete?id=` + id })
  },

  // 导出客服问答分组 Excel
  exportKfAgentEssion: async (params) => {
    return await request.download({ url: scrm + `/kf-agent-ession/export-excel`, params })
  },
}
