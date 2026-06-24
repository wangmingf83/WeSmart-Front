import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服员工通知日志 VO
export interface KfNoticeLog {
  id: number // 主键id
  userId: string // 员工id
  externalUserId: string // 客户id
  openKfId: string // 客服id
  corpId: string // 企业id
  sendTime: Date // C端发送时间
  sendStatus: number // 发送状态 1-成功 2-失败
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服员工通知日志 API
export const KfNoticeLogApi = {
  // 查询客服员工通知日志分页
  getKfNoticeLogPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-notice-log/page`, params })
  },

  // 查询客服员工通知日志详情
  getKfNoticeLog: async (id: number) => {
    return await request.get({ url: scrm + `/kf-notice-log/get?id=` + id })
  },

  // 新增客服员工通知日志
  createKfNoticeLog: async (data: KfNoticeLog) => {
    return await request.post({ url: scrm + `/kf-notice-log/create`, data })
  },

  // 修改客服员工通知日志
  updateKfNoticeLog: async (data: KfNoticeLog) => {
    return await request.put({ url: scrm + `/kf-notice-log/update`, data })
  },

  // 删除客服员工通知日志
  deleteKfNoticeLog: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-notice-log/delete?id=` + id })
  },

  // 导出客服员工通知日志 Excel
  exportKfNoticeLog: async (params) => {
    return await request.download({ url: scrm + `/kf-notice-log/export-excel`, params })
  },
}
