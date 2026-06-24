import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服客户统计 VO
export interface KfCustomerStat {
  id: number // 主键id
  dateTime: string // 日期
  sessionCnt: number // 会话总数
  evaluateCnt: number // 参评总数
  goodCnt: number // 好评数
  commonCnt: number // 一般数
  badCnt: number // 差评数
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服客户统计 API
export const KfCustomerStatApi = {
  // 查询客服客户统计分页
  getKfCustomerStatPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-customer-stat/page`, params })
  },

  // 查询客服客户统计详情
  getKfCustomerStat: async (id: number) => {
    return await request.get({ url: scrm + `/kf-customer-stat/get?id=` + id })
  },

  // 新增客服客户统计
  createKfCustomerStat: async (data: KfCustomerStat) => {
    return await request.post({ url: scrm + `/kf-customer-stat/create`, data })
  },

  // 修改客服客户统计
  updateKfCustomerStat: async (data: KfCustomerStat) => {
    return await request.put({ url: scrm + `/kf-customer-stat/update`, data })
  },

  // 删除客服客户统计
  deleteKfCustomerStat: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-customer-stat/delete?id=` + id })
  },

  // 导出客服客户统计 Excel
  exportKfCustomerStat: async (params) => {
    return await request.download({ url: scrm + `/kf-customer-stat/export-excel`, params })
  },
}
