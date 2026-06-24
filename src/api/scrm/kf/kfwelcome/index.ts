import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服欢迎语 VO
export interface KfWelcome {
  id: number // 主键id
  corpId: string // 企业id
  kfId: number // 客服id
  workCycle: string // 周期时间
  beginTime: string // 开始时间
  endTime: string // 结束时间
  type: number // 欢迎语类型 1-文本 2-菜单
  content: string // 欢迎语内容
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服欢迎语 API
export const KfWelcomeApi = {
  // 查询客服欢迎语分页
  getKfWelcomePage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-welcome/page`, params })
  },

  // 查询客服欢迎语详情
  getKfWelcome: async (id: number) => {
    return await request.get({ url: scrm + `/kf-welcome/get?id=` + id })
  },

  // 新增客服欢迎语
  createKfWelcome: async (data: KfWelcome) => {
    return await request.post({ url: scrm + `/kf-welcome/create`, data })
  },

  // 修改客服欢迎语
  updateKfWelcome: async (data: KfWelcome) => {
    return await request.put({ url: scrm + `/kf-welcome/update`, data })
  },

  // 删除客服欢迎语
  deleteKfWelcome: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-welcome/delete?id=` + id })
  },

  // 导出客服欢迎语 Excel
  exportKfWelcome: async (params) => {
    return await request.download({ url: scrm + `/kf-welcome/export-excel`, params })
  },
}
