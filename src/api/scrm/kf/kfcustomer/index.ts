import request from '@/config/axios'

// 客服客户 VO
export interface KfCustomerVO {
  id: number // 主键id
  corpId: string // 企业id
  externalUserid: string // 微信客户的external_userid
  nickName: string // 客服昵称
  avatar: string // 微信头像
  unionId: string // unionid
  gender: number // 性别 0-未知 1-男性 2-女性
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服客户 API
export const KfCustomerApi = {
  // 查询客服客户分页
  getKfCustomerPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-customer/page`, params })
  },

  // 查询客服客户详情
  getKfCustomer: async (id: number) => {
    return await request.get({ url: scrm + `/kf-customer/get?id=` + id })
  },

  // 新增客服客户
  createKfCustomer: async (data: KfCustomerVO) => {
    return await request.post({ url: scrm + `/kf-customer/create`, data })
  },

  // 修改客服客户
  updateKfCustomer: async (data: KfCustomerVO) => {
    return await request.put({ url: scrm + `/kf-customer/update`, data })
  },

  // 删除客服客户
  deleteKfCustomer: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-customer/delete?id=` + id })
  },

  // 导出客服客户 Excel
  exportKfCustomer: async (params) => {
    return await request.download({ url: scrm + `/kf-customer/export-excel`, params })
  },
}
