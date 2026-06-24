import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服问答回答 VO
export interface KfAnswerAttachments {
  id: number // 主键id
  answerId: number // 客户问答信息id
  materialId: number // 素材Id
  msgType: string // 消息类型 文本:text 图片:image 图文:link 小程序:miniprogram 视频:video 文件:file 
  content: string // 消息内容
  mediaId: string // 媒体id
  title: string // 消息标题
  description: string // 消息描述
  fileUrl: string // 文件路径
  linkUrl: string // 消息链接
  picUrl: string // 消息图片地址
  appId: string // 小程序appid
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 删除标识 0 有效 1删除
}

// 客服问答回答 API
export const KfAnswerAttachmentsApi = {
  // 查询客服问答回答分页
  getKfAnswerAttachmentsPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-answer-attachments/page`, params })
  },

  // 查询客服问答回答详情
  getKfAnswerAttachments: async (id: number) => {
    return await request.get({ url: scrm + `/kf-answer-attachments/get?id=` + id })
  },

  // 新增客服问答回答
  createKfAnswerAttachments: async (data: KfAnswerAttachments) => {
    return await request.post({ url: scrm + `/kf-answer-attachments/create`, data })
  },

  // 修改客服问答回答
  updateKfAnswerAttachments: async (data: KfAnswerAttachments) => {
    return await request.put({ url: scrm + `/kf-answer-attachments/update`, data })
  },

  // 删除客服问答回答
  deleteKfAnswerAttachments: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-answer-attachments/delete?id=` + id })
  },

  // 导出客服问答回答 Excel
  exportKfAnswerAttachments: async (params) => {
    return await request.download({ url: scrm + `/kf-answer-attachments/export-excel`, params })
  },
}
