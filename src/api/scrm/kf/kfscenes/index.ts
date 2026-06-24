import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服场景信息 VO
export interface KfScenes {
  id: number // 主键id
  corpId: string // 企业id
  name: string // 场景名称
  type: number // 场景类型 1-公众号 2-小程序 3-视频号 4-搜一搜 5-微信支付 6-app 7-网页场景类型 
  kfId: number // 客服id
  kfName: string // 客服名称
  openKfId: string // 客服账号ID
  scenes: string // 场景值
  url: string // 客服链接
  qrCode: string // 二维码链接
  configId: string // 新增联系方式的配置id
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服场景信息 API
export const KfScenesApi = {
  // 查询客服场景信息分页
  getKfScenesPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-scenes/page`, params })
  },

  // 查询客服场景信息详情
  getKfScenes: async (id: number) => {
    return await request.get({ url: scrm + `/kf-scenes/get?id=` + id })
  },

  // 新增客服场景信息
  createKfScenes: async (data: KfScenes) => {
    return await request.post({ url: scrm + `/kf-scenes/create`, data })
  },

  // 修改客服场景信息
  updateKfScenes: async (data: KfScenes) => {
    return await request.put({ url: scrm + `/kf-scenes/update`, data })
  },

  // 删除客服场景信息
  deleteKfScenes: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-scenes/delete?id=` + id })
  },

  // 导出客服场景信息 Excel
  exportKfScenes: async (params) => {
    return await request.download({ url: scrm + `/kf-scenes/export-excel`, params })
  },
}
