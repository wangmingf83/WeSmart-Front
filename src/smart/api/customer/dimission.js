import request from '@/utils/request'
const service = window.lwConfig.services.wecom + '/leaveUser'

// 接口整合 离职员工 isAllocate 是否已分配:1:是;0:否
export function getListTable(params) {
  return request({
    url: service + '/leaveUserList',
    params,
  })
}

/**
 * 获取离职已分配员工列表
 * @param {*} params
 * {
pageNum:
pageSize:
beginTime:
endTime:
userName:
}
 */
export function getList(params) {
  return request({
    url: service + '/leaveUserAllocateList',
    params,
  })
}

/**
 * 获取离职未分配员工列表
 * @param {*} params
 * {
pageNum:
pageSize:
beginTime:
endTime:
userName:
}
 */
export function getListNo(params) {
  return request({
    url: service + '/leaveUserNoAllocateList',
    params,
  })
}

/**
 * 分配离职员工数据
 * @param {*} data
{
    "handoverUserid": "原跟进成员的userid",
    "takeoverUserid": "接替成员的userid"
}
 */
export function allocate(data) {
  return request({
    url: service + '/allocateLeaveUserAboutData',
    method: 'put',
    data,
  })
}

/**
 * 离职已分配客户
 * @param {*} params
 {
  "pageNum": 0,
  "pageSize": 0,
  "beginTime": "",
  "endTime": "",
  "handoverUserId": ""
}
 */
export function getAllocateCustomers(params) {
  return request({
    url: service + '/getAllocateCustomers',
    params,
  })
}

/**
 * 离职已分配客户群
 * @param {*} params
 {
  "pageNum": 0,
  "pageSize": 0,
  "beginTime": "",
  "endTime": "",
  "oldOwner": "" 原群主ID
}
 */
export function getAllocateGroups(params) {
  return request({
    url: service + '/getAllocateGroups',
    params,
  })
}

// 离职员工同步
export function sync() {
  return request({
    url: service + '/synchLeaveUser',
  })
}
