import request from '@/config/axios'
import lwConfig from "@/smart/config";

const scrm = lwConfig.services.scrm

// 客服信息 VO
export interface KfInfo {
  id: number // 主键id
  corpId: string // 企业id
  name: string // 客服名称
  avatar: string // 客服头像
  openAvatar: string // 微信客服头像
  mediaId: string // 微信客服头像id
  url: string // 客服在微信分配的url
  openKfId: string // 客服帐号ID,微信分配
  agentId: string // ai agent编号
  receptionType: number // 接待方式: 1-人工客服 2-智能助手  3-人工与智能助手协同
  splitTime: number // 是否分时段: 1-否 2-是
  allocationWay: number // 分配方式: 1-轮流 2-空闲
  isPriority: number // 是否有限分配: 1-否 2-是
  receiveLimit: number // 接待限制
  queueNotice: number // 排队提醒: 1-开启 2-关闭
  queueNoticeContent: string // 排队提醒内容
  timeOutNotice: number // 超时未回复提醒: 1-开启 2-关闭
  timeOut: number // 超时时间
  timeOutType: number // 超时时间类型 1-分钟 2-小时
  timeOutContent: string // 超时未回复提醒内容
  kfTimeOutNotice: number // 客服超时未回复提醒: 1-开启 2-关闭
  kfTimeOutType: number // 客户超时时间类型 1-分钟 2-小时
  kfTimeOut: number // 客服超时时间
  endNotice: number // 自动结束提醒: 1-开启 2-关闭
  endNoticeTime: number // 自动结束时间
  endTimeType: number // 自动结束时间类型 1-分钟 2-小时
  endContentType: number // 自动结束提醒内容类型 1-会话质量评价 2-会话结束语
  endContent: string // 自动结束提醒内容
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: number // 是否删除:0有效,1删除
}

// 客服信息 API
export const KfInfoApi = {
  // 查询客服信息分页
  getKfInfoPage: async (params: any) => {
    return await request.get({ url: scrm + `/kf-info/page`, params })
  },

  // 查询客服信息详情
  getKfInfo: async (id: number) => {
    return await request.get({ url: scrm + `/kf-info/get?id=` + id })
  },

  // 新增客服信息
  createKfInfo: async (data: KfInfo) => {
    return await request.post({ url: scrm + `/kf-info/create`, data })
  },

  // 修改客服信息
  updateKfInfo: async (data: KfInfo) => {
    return await request.put({ url: scrm + `/kf-info/update`, data })
  },

  // 删除客服信息
  deleteKfInfo: async (id: number) => {
    return await request.delete({ url: scrm + `/kf-info/delete?id=` + id })
  },

  // 导出客服信息 Excel
  exportKfInfo: async (params) => {
    return await request.download({ url: scrm + `/kf-info/export-excel`, params })
  },
}
