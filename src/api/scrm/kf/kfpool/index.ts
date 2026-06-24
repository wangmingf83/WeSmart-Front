import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服接待池 VO
export interface KfPool {
  id: number // 主键id
  corpId: string // 企业id
  openKfId: string // 客服id
  externalUserid: string // 客户UserID
  status: number // 状态 0-未处理,1-机器人,2-接待池,3-人工接待,4-已结束/未开始
  userId: string // 员工id
  scene: string // 场景值
  enterTime: Date // 进入会话时间
  sessionStartTime: Date // 会话开始时间
  sessionEndTime: Date // 会话结束时间
  receptionTime: Date // 接待时间
  evaluationType: string // 评价类型 101-好评 102-一般 103-差评
  evaluation: string // 评价语
  msgCode: string // 消息code
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服接待池 API
export const KfPoolApi = {
  // 查询客服接待池分页
  getKfPoolPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-pool/page`, params })
  },

  // 查询客服接待池详情
  getKfPool: async (id: number) => {
    return await request.get({ url: scrm + `/kf-pool/get?id=` + id })
  },

  // 新增客服接待池
  createKfPool: async (data: KfPool) => {
    return await request.post({ url: scrm + `/kf-pool/create`, data })
  },

  // 修改客服接待池
  updateKfPool: async (data: KfPool) => {
    return await request.put({ url: scrm + `/kf-pool/update`, data })
  },

  // 删除客服接待池
  deleteKfPool: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-pool/delete?id=` + id })
  },

  // 导出客服接待池 Excel
  exportKfPool: async (params) => {
    return await request.download({ url: scrm + `/kf-pool/export-excel`, params })
  },
}
