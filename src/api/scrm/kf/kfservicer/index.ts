import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服接待人员 VO
export interface KfServicer {
  id: number // 主键id
  corpId: string // 企业id
  kfId: number // 客服id
  openKfId: string // 客服帐号ID
  userId: string // 接待人员userid
  userName: string // 接待人员名称
  nickName: string // 接待人员昵称
  departmentId: number // 接待人员部门的id
  status: number // 接待人员的接待状态。0:接待中,1:停止接待, 2:空闲
  receptionNum: number // 接待人数
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服接待人员 API
export const KfServicerApi = {
  // 查询客服接待人员分页
  getKfServicerPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-servicer/page`, params })
  },

  // 查询客服接待人员详情
  getKfServicer: async (id: number) => {
    return await request.get({ url: scrm + `/kf-servicer/get?id=` + id })
  },

  // 新增客服接待人员
  createKfServicer: async (data: KfServicer) => {
    return await request.post({ url: scrm + `/kf-servicer/create`, data })
  },

  // 修改客服接待人员
  updateKfServicer: async (data: KfServicer) => {
    return await request.put({ url: scrm + `/kf-servicer/update`, data })
  },

  // 删除客服接待人员
  deleteKfServicer: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-servicer/delete?id=` + id })
  },

  // 导出客服接待人员 Excel
  exportKfServicer: async (params) => {
    return await request.download({ url: scrm + `/kf-servicer/export-excel`, params })
  },
}
