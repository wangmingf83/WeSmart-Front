import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服问答相似问题 VO
export interface KfAnswerLikeQuestion {
  id: number // 主键id
  answerId: number // 问答id
  qtName: string // 问题名称
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服问答相似问题 API
export const KfAnswerLikeQuestionApi = {
  // 查询客服问答相似问题分页
  getKfAnswerLikeQuestionPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-answer-like-question/page`, params })
  },

  // 查询客服问答相似问题详情
  getKfAnswerLikeQuestion: async (id: number) => {
    return await request.get({ url: scrm + `/kf-answer-like-question/get?id=` + id })
  },

  // 新增客服问答相似问题
  createKfAnswerLikeQuestion: async (data: KfAnswerLikeQuestion) => {
    return await request.post({ url: scrm + `/kf-answer-like-question/create`, data })
  },

  // 修改客服问答相似问题
  updateKfAnswerLikeQuestion: async (data: KfAnswerLikeQuestion) => {
    return await request.put({ url: scrm + `/kf-answer-like-question/update`, data })
  },

  // 删除客服问答相似问题
  deleteKfAnswerLikeQuestion: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-answer-like-question/delete?id=` + id })
  },

  // 导出客服问答相似问题 Excel
  exportKfAnswerLikeQuestion: async (params) => {
    return await request.download({ url: scrm + `/kf-answer-like-question/export-excel`, params })
  },
}
