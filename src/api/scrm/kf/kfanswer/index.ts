import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服问答信息 VO
export interface KfAnswer {
  id: number // 主键id
  groupId: number // 活码分组id
  intentId: string // 企微问答ID
  qtName: string // 问题名称
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服问答信息 API
export const KfAnswerApi = {
  // 查询客服问答信息分页
  getKfAnswerPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-answer/page`, params })
  },

  // 查询客服问答信息详情
  getKfAnswer: async (id: number) => {
    return await request.get({ url: scrm + `/kf-answer/get?id=` + id })
  },

  // 新增客服问答信息
  createKfAnswer: async (data: KfAnswer) => {
    return await request.post({ url: scrm + `/kf-answer/create`, data })
  },

  // 修改客服问答信息
  updateKfAnswer: async (data: KfAnswer) => {
    return await request.put({ url: scrm + `/kf-answer/update`, data })
  },

  // 删除客服问答信息
  deleteKfAnswer: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-answer/delete?id=` + id })
  },

  // 导出客服问答信息 Excel
  exportKfAnswer: async (params) => {
    return await request.download({ url: scrm + `/kf-answer/export-excel`, params })
  },
}
