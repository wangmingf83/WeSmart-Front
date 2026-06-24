import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服问答分组 VO
export interface KfAnswerGroup {
  id: number // 主键id
  groupId: string // 分组ID
  name: string // 分组名称
  isDefault: number // 是否为默认分组。0-否 1-是 默认分组为系统自动创建，不可修改/删除
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服问答分组 API
export const KfAnswerGroupApi = {
  // 查询客服问答分组分页
  getKfAnswerGroupPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-answer-group/page`, params })
  },

  // 查询客服问答分组详情
  getKfAnswerGroup: async (id: number) => {
    return await request.get({ url: scrm + `/kf-answer-group/get?id=` + id })
  },

  // 新增客服问答分组
  createKfAnswerGroup: async (data: KfAnswerGroup) => {
    return await request.post({ url: scrm + `/kf-answer-group/create`, data })
  },

  // 修改客服问答分组
  updateKfAnswerGroup: async (data: KfAnswerGroup) => {
    return await request.put({ url: scrm + `/kf-answer-group/update`, data })
  },

  // 删除客服问答分组
  deleteKfAnswerGroup: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-answer-group/delete?id=` + id })
  },

  // 导出客服问答分组 Excel
  exportKfAnswerGroup: async (params) => {
    return await request.download({ url: scrm + `/kf-answer-group/export-excel`, params })
  },
}
