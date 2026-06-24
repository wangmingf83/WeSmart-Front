import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服消息偏移量 VO
export interface KfMsgCursor {
  id: number // 主键id
  corpId: string // 企业id
  nextCursor: string // 上一次调用时返回的next_cursor
  openKfId: string // 企业微信客服的openid
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服消息偏移量 API
export const KfMsgCursorApi = {
  // 查询客服消息偏移量分页
  getKfMsgCursorPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-msg-cursor/page`, params })
  },

  // 查询客服消息偏移量详情
  getKfMsgCursor: async (id: number) => {
    return await request.get({ url: scrm + `/kf-msg-cursor/get?id=` + id })
  },

  // 新增客服消息偏移量
  createKfMsgCursor: async (data: KfMsgCursor) => {
    return await request.post({ url: scrm + `/kf-msg-cursor/create`, data })
  },

  // 修改客服消息偏移量
  updateKfMsgCursor: async (data: KfMsgCursor) => {
    return await request.put({ url: scrm + `/kf-msg-cursor/update`, data })
  },

  // 删除客服消息偏移量
  deleteKfMsgCursor: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-msg-cursor/delete?id=` + id })
  },

  // 导出客服消息偏移量 Excel
  exportKfMsgCursor: async (params) => {
    return await request.download({ url: scrm + `/kf-msg-cursor/export-excel`, params })
  },
}
