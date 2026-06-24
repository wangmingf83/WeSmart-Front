import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服员工统计 VO
export interface KfUserStat {
  id: number // 主键id
  dateTime: string // 日期
  openKfId: string // 客服ID
  userId: string // 员工ID
  sessionCnt: number // 会话总数
  evaluateCnt: number // 参评总数
  goodCnt: number // 好评数
  commonCnt: number // 一般数
  badCnt: number // 差评数
  talkCnt: number // 对话数
  timeOutCnt: number // 超时数
  timeOutDuration: string // 超时时长
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服员工统计 API
export const KfUserStatApi = {
  // 查询客服员工统计分页
  getKfUserStatPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-user-stat/page`, params })
  },

  // 查询客服员工统计详情
  getKfUserStat: async (id: number) => {
    return await request.get({ url: scrm + `/kf-user-stat/get?id=` + id })
  },

  // 新增客服员工统计
  createKfUserStat: async (data: KfUserStat) => {
    return await request.post({ url: scrm + `/kf-user-stat/create`, data })
  },

  // 修改客服员工统计
  updateKfUserStat: async (data: KfUserStat) => {
    return await request.put({ url: scrm + `/kf-user-stat/update`, data })
  },

  // 删除客服员工统计
  deleteKfUserStat: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-user-stat/delete?id=` + id })
  },

  // 导出客服员工统计 Excel
  exportKfUserStat: async (params) => {
    return await request.download({ url: scrm + `/kf-user-stat/export-excel`, params })
  },
}
