import request from '@/utils/request'
const base = window.lwConfig.services.wecom
const service = window.lwConfig.services.wecom + '/groupmsg/template'

/**
 * 新增群发
 * @param {Object} data
 */
export function add(data) {
  return request({
    url: service + '/add',
    method: 'post',
    data,
  })
}

// 根据发送条件查询客户
export function getCustomerList(params, isTrans) {
  params.isJoinBlacklist ??= 1
  return request({
    url: base + '/customer/findAllWeCustomerList',
    method: 'get',
    params,
  }).then((res) => {
    if (isTrans) {
      let map = {}
      let data = res.data
      let _data = []
      for (let i = 0; i < data.length; i++) {
        let ai = data[i]
        if (!map[ai.firstUserId]) {
          _data.push({
            userId: ai.firstUserId,
            customerList: [ai.externalUserid],
          })
          map[ai.firstUserId] = ai
        } else {
          for (let j = 0; j < _data.length; j++) {
            let dj = _data[j]
            if (dj.userId == ai.firstUserId) {
              dj.customerList.push(ai.externalUserid)
              break
            }
          }
        }
      }
      return { data: _data }
    } else {
      return res
    }
  })
}

/**
 *
 * @param {*} data
 * {
 * sender:创建人
content:内容
pushType:群发类型 0 发给客户 1 发给客户群
beginTime:开始时间
endTime:结束时间}
 */
export function getList(params) {
  return request({
    url: service + '/list',
    params,
  })
}

/**
 * 群发消息详情
 * @param {*} messageId:微信消息id
 */
export function getDetail(messageId) {
  return request({
    url: service + '/' + messageId,
  })
}

export function getDetailRaw(messageId) {
  return request({
    url: service + '/findGroupMessageDetail/' + messageId,
  })
}

export function cancelSend(ids) {
  return request({
    url: service + '/cancel/' + ids,
  })
}

/**
 *
 * @param {*}
 * messageId:微信消息id
status:发送状态 0-未发送 1-已发送 2-因客户不是好友导致发送失败 3-因客户已经收到其他群发消息导致发送失败
 */
export function getPushResult(params) {
  return request({
    url: service + '/pushResults',
    params,
  })
}

/**
 * 同步消息发送结果
 * @param {*} data
id:消息id
 */
export function syncMsg(id) {
  return request({
    url: service + '/sync/' + id,
    method: 'get',
  })
}

// 客户详情
export function resultList(data) {
  return request({
    url: service + '/send/result/list',
    params: data,
  })
}

// 员工详情
export function memberList(data) {
  return request({
    url: service + '/task/list',
    params: data,
  })
}
