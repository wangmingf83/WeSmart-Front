import request from '@/config/axios'

// 员工离职 VO
export interface LeaveUserVO {
  id: number // 主键
  userName: string // 离职员工名称
  deptNames: string // 离职员工所在部门名称
  weUserId: string // 员工id
  allocateCustomerNum: number // 分配客户数
  allocateGroupNum: number // 分配群数
  dimissionTime: Date // 离职时间
  isAllocate: number // 是否已分配:1:是;0:否
  createBy: string // 创建人
  createById: number // 创建人id
  updateBy: string // 更新人
  updateById: number // 更新人id
  delFlag: boolean // 0:正常;1:删除;
}

// 员工离职 API
export const LeaveUserApi = {
  // 查询员工离职分页
  getLeaveUserPage: async (params: any) => {
    return await request.get({ url: `/sys/leave-user/page`, params })
  },

  // 查询员工离职详情
  getLeaveUser: async (id: number) => {
    return await request.get({ url: `/sys/leave-user/get?id=` + id })
  },

  // 新增员工离职
  createLeaveUser: async (data: LeaveUserVO) => {
    return await request.post({ url: `/sys/leave-user/create`, data })
  },

  // 修改员工离职
  updateLeaveUser: async (data: LeaveUserVO) => {
    return await request.put({ url: `/sys/leave-user/update`, data })
  },

  // 删除员工离职
  deleteLeaveUser: async (id: number) => {
    return await request.delete({ url: `/sys/leave-user/delete?id=` + id })
  },

  // 导出员工离职 Excel
  exportLeaveUser: async (params) => {
    return await request.download({ url: `/sys/leave-user/export-excel`, params })
  },
}
