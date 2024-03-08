import request from '@/utils/request'

// 用户获取验证码
export function need_code(data) {
  return request({
    url: '/need_code',
    method: 'post',
    data
  })
}
// 验证码
export function sendCode(data) {
  return request({
    url: '/send_code',
    method: 'post',
    data
  })
}
// 登录
export function login(data) {
  return request({
    url: '/auth',
    method: 'post',
    data
  })
}
export function getInfo() {
  return request({
    url: '/ads/userInfo',
    method: 'get'
  })
}

// 退出
export function logout() {
  return request({
    url: '/logout',
    method: 'GET'
  })
}

// 新账号接入
export function oauth(data) {
  return request({
    url: '/ads/oauth',
    method: 'POST',
    data
  })
}
// 新账号接入第四步
export function bindsource(data) {
  return request({
    url: '/wechat/bindsource',
    method: 'POST',
    data
  })
}

// 广点通-账号数据列表
export function account(query) {
  return request({
    url: '/ads/data/account',
    method: 'GET',
    params: query
  })
}
// 广点通-推广计划列表获取
export function campaigns(query) {
  return request({
    url: '/ads/data/campaigns',
    method: 'GET',
    params: query
  })
}
// 广点通-推广计划-详情       //外层账户管理进入
export function campaignsdetl(query, info1) {
  let _url
  if (info1.num === 1) { // 账户管理进来
    _url = '/ads/data/campaigns?account_id=' + info1.account + '&origin_id=' + info1.origin_id + ''
  } else if (info1.num === 2) { // 投放计划进来
    _url = '/ads/data/campaigns?campaign_id=' + info1.campaign_id + ''
  } else if (info1.num === 3) { // 广告组进来
    _url = '/ads/data/campaigns?adgroup_id=' + info1.adgroup_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 广点通-推广计划-详情       //外层账户管理进入
// export function campaignsinner(query, info1, info2) {
//   let _url
//   if (info1.num === 1) { // 账户管理进来
//     _url = '/ads/data/campaigns?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&campaign_id=' + info2.campaign_id + ''
//   } else if (info1.num === 2) { // 投放计划进来
//     _url = '/ads/data/campaigns?campaign_id=' + info2.campaign_id + ''
//   } else if (info1.num === 3) { // 广告组进来
//     _url = '/ads/data/campaigns?adgroup_id=' + info1.adgroup_id + ''
//   }
//   return request({
//     url: _url,
//     method: 'GET',
//     params: query
//   })
// }
// 广点通-广告组列表获取
export function datagroups(query) {
  return request({
    url: '/ads/data/groups',
    method: 'GET',
    params: query
  })
}
// 广点通-广告组列表     //外层投放计划进入
export function datagroupsdet(query, info1, info2) {
  let _url
  if (info1.num === 1) { // 账户管理进来
    _url = '/ads/data/groups?account_id=' + info1.account + '&origin_id=' + info1.origin_id + ''
  } else if (info1.num === 2) { // 投放计划进来
    _url = '/ads/data/groups?campaign_id=' + info1.campaign_id + ''
  } else if (info1.num === 3) { // 广告组进来
    _url = '/ads/data/groups?adgroup_id=' + info1.adgroup_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 广点通-广告组列表
export function datagroupin(query, info1, info2) {
  let _url
  if (info1.num === 1 && info2.num2 === 2) { // 账户管理进来-投放计划进来
    _url = '/ads/data/groups?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 1 && info2.num2 === 3) { // 账户管理进来-广告组进来
    _url = '/ads/data/groups?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&adgroup_id=' + info2.adgroup_id + ''
  }
  if (info1.num === 2 && info2.num2 === 2) { // 投放计划进来-投放计划进来
    _url = '/ads/data/groups?campaign_id=' + info1.campaign_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 2 && info2.num2 === 3) { // 投放计划进来-广告组进来
    _url = '/ads/data/groups?campaign_id=' + info1.campaign_id + '&adgroup_id=' + info2.adgroup_id + ''
  }
  if (info1.num === 3 && info2.num2 === 2) { // 广告组进来-投放计划进来
    _url = '/ads/data/groups?adgroup_id=' + info1.adgroup_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 3 && info2.num2 === 3) { // 广告组进来-广告组进来
    _url = '/ads/data/groups?adgroup_id=' + info1.adgroup_id + '&adgroup_id=' + info2.adgroup_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 广点通-广告创意列表获取
export function creatives(query) {
  return request({
    url: '/ads/data/creatives',
    method: 'GET',
    params: query
  })
}
// 广点通-广告创意详情     //外层投放计划进入
export function creativesdet(query, info1) {
  let _url
  if (info1.num === 1) { // 账户管理进来
    _url = '/ads/data/creatives?account_id=' + info1.account + '&origin_id=' + info1.origin_id + ''
  } else if (info1.num === 2) { // 投放计划进来
    _url = '/ads/data/creatives?campaign_id=' + info1.campaign_id + ''
  } else if (info1.num === 3) { // 广告组进来
    _url = '/ads/data/creatives?adgroup_id=' + info1.adgroup_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 广点通-广告创意详情
export function creativeinner(query, info1, info2) {
  let _url
  if (info1.num === 1 && info2.num2 === 2) { // 账户管理进来-投放计划进来
    _url = '/ads/data/creatives?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 1 && info2.num2 === 3) { // 账户管理进来-广告组进来
    _url = '/ads/data/creatives?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&adgroup_id=' + info2.adgroup_id + ''
  }
  if (info1.num === 2 && info2.num2 === 2) { // 投放计划进来-投放计划进来
    _url = '/ads/data/creatives?campaign_id=' + info1.campaign_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 2 && info2.num2 === 3) { // 投放计划进来-广告组进来
    _url = '/ads/data/creatives?campaign_id=' + info1.campaign_id + '&adgroup_id=' + info2.adgroup_id + ''
  }
  if (info1.num === 3 && info2.num2 === 2) { // 广告组进来-投放计划进来
    _url = '/ads/data/creatives?adgroup_id=' + info1.adgroup_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 3 && info2.num2 === 3) { // 广告组进来-广告组进来
    _url = '/ads/data/creatives?adgroup_id=' + info1.adgroup_id + '&adgroup_id=' + info2.adgroup_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 广点通-广告创意详情
export function creative3(query, info1, info2, info3) {
  let _url
  if (info1.num === 1 && info2.num2 === 2 && info3.num3 === 3) { // 账户管理进来-投放计划进来-广告组进来
    _url = '/ads/data/creatives?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&campaign_id=' + info2.campaign_id + '&adgroup_id=' + info3.adgroup_id + ''
  } else if (info1.num === 1 && info2.num2 === 3 && info3.num3 === 3) { // 账户管理进来-广告组进来-广告组进来
    _url = '/ads/data/creatives?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&adgroup_id=' + info2.adgroup_id + '&adgroup_id=' + info3.adgroup_id + ''
  }
  if (info1.num === 2 && info2.num2 === 2 && info3.num3 === 3) { // 投放计划进来-投放计划进来-广告组进来
    _url = '/ads/data/creatives?campaign_id=' + info1.campaign_id + '&campaign_id=' + info2.campaign_id + '&adgroup_id=' + info3.adgroup_id + ''
  } else if (info1.num === 2 && info2.num2 === 3 && info3.num3 === 3) { // 投放计划进来-广告组进来-广告组进来
    _url = '/ads/data/creatives?campaign_id=' + info1.campaign_id + '&adgroup_id=' + info2.adgroup_id + '&adgroup_id=' + info3.adgroup_id + ''
  }
  if (info1.num === 3 && info2.num2 === 2 && info3.num3 === 3) { // 广告组进来-投放计划进来-广告组进来
    _url = '/ads/data/creatives?adgroup_id=' + info1.adgroup_id + '&campaign_id=' + info2.campaign_id + '&adgroup_id=' + info3.adgroup_id + ''
  } else if (info1.num === 3 && info2.num2 === 3 && info3.num3 === 3) { // 广告组进来-广告组进来-广告组进来
    _url = '/ads/data/creatives?adgroup_id=' + info1.adgroup_id + '&adgroup_id=' + info2.adgroup_id + '&adgroup_id=' + info3.adgroup_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 广点通-推广计划开启关闭
export function putcampaign(data, id) {
  return request({
    url: '/ads/data/campaigns/' + id,
    method: 'PUT',
    data
  })
}
// 广点通- 广告组开启关闭
export function putadgroup(data, id) {
  return request({
    url: '/ads/data/groups/' + id,
    method: 'PUT',
    data
  })
}
// 广点通- 广告创意开启关闭
export function putadcreative(data, id) {
  return request({
    url: '/ads/data/creatives/' + id,
    method: 'PUT',
    data
  })
}
// 获取广告账户列表
export function formacount(query) {
  return request({
    url: '/ads/platform/account',
    method: 'GET',
    params: query
  })
}
// 微信-广告账户
export function wechataccount(query) {
  return request({
    url: '/ads/data/wechat/account',
    method: 'GET',
    params: query
  })
}
// 微信-广告列表
export function wechatcampaigns(query, ids) {
  return request({
    url: '/ads/data/wechat/campaigns',
    method: 'GET',
    params: query
  })
}
// 微信-广告列表-详情       //外层账户管理进入
export function wechatdetl(query, info1) {
  let _url
  if (info1.num === 1) { // 账户管理进来
    _url = '/ads/data/wechat/campaigns?account_id=' + info1.account + '&origin_id=' + info1.origin_id + ''
  } else if (info1.num === 2) { // 投放计划进来
    _url = '/ads/data/wechat/campaigns?campaign_id=' + info1.campaign_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}

// 微信-广告列表
export function wechatgroups(query) {
  return request({
    url: '/ads/data/wechat/groups',
    method: 'GET',
    params: query
  })
}
// 微信-广告列表详情     //外层投放计划进入
export function wechatgroupsdet(query, info1) {
  let _url
  if (info1.num === 1) { // 账户管理进来
    _url = '/ads/data/wechat/groups?account_id=' + info1.account + '&origin_id=' + info1.origin_id + ''
  } else if (info1.num === 2) { // 投放计划进来
    _url = '/ads/data/wechat/groups?campaign_id=' + info1.campaign_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 微信-广告列表详情-广告详情---最内层
export function wechatgroupinner(query, info1, info2) {
  let _url
  if (info1.num === 1) { // 账户管理进来
    _url = '/ads/data/wechat/groups?account_id=' + info1.account + '&origin_id=' + info1.origin_id + '&campaign_id=' + info2.campaign_id + ''
  } else if (info1.num === 2) { // 投放计划进来
    _url = '/ads/data/wechat/groups?campaign_id=' + info2.campaign_id + '&campaign_id=' + info2.campaign_id + ''
  }
  return request({
    url: _url,
    method: 'GET',
    params: query
  })
}
// 微信- 广告开启关闭
export function putwxgg(data, id) {
  return request({
    url: '/ads/data/wechat/groups/' + id,
    method: 'PUT',
    data
  })
}

// 巨量引擎-账号数据列表
export function byteaccount(query) {
  return request({
    url: '/ads/data/byte/account',
    method: 'GET',
    params: query
  })
}

// 巨量-广告计划列表获取接口
export function bytecampaigns(query) {
  return request({
    url: '/ads/data/byte/campaigns',
    method: 'GET',
    params: query
  })
}

// 巨量引擎-广告组列表获取
export function bytegroups(query) {
  return request({
    url: '/ads/data/byte/groups',
    method: 'GET',
    params: query
  })
}
// 巨量引擎-广告创意列表获取
export function bytecreatives(query) {
  return request({
    url: '/ads/data/byte/creatives',
    method: 'GET',
    params: query
  })
}
// 巨量引擎-推广计划开启关闭
export function bytcampaigns(data, id) {
  return request({
    url: '/ads/data/byte/campaigns/' + id,
    method: 'PUT',
    data
  })
}
// 巨量引擎-广告组开启关闭
export function bytgroups(data, id) {
  return request({
    url: '/ads/data/byte/groups/' + id,
    method: 'PUT',
    data
  })
}
// 巨量引擎-广告创意开启关闭
export function bytcreatives(data, id) {
  return request({
    url: '/ads/data/byte/creatives/' + id,
    method: 'PUT',
    data
  })
}
// 搜狗-账号数据列表
export function sgaccount(query) {
  return request({
    url: '/ads/data/sougou/account',
    method: 'GET',
    params: query
  })
}
// 搜狗-推广计划列表获取
export function sougouplan(query) {
  return request({
    url: '/ads/data/sougou/plan',
    method: 'GET',
    params: query
  })
}
// 搜狗-推广计划开启关闭
export function sougoupput(data, id) {
  return request({
    url: '/ads/data/sougou/plan/' + id,
    method: 'PUT',
    data
  })
}
// 搜狗-推广组列表
export function sougougroup(query) {
  return request({
    url: '/ads/data/sougou/group',
    method: 'GET',
    params: query
  })
}
// 搜狗-推广组开启关闭
export function groupput(data, id) {
  return request({
    url: '/ads/data/sougou/group/' + id,
    method: 'PUT',
    data
  })
}
// 搜狗-创意列表获取
export function sougouidea(query) {
  return request({
    url: '/ads/data/sougou/idea',
    method: 'GET',
    params: query
  })
}
// 搜狗-推广创意开启关闭
export function pausecreat(data, id) {
  return request({
    url: '/ads/data/sougou/idea/' + id,
    method: 'PUT',
    data
  })
}
// 搜狗-关键字列表获取
export function sougoucpc(query) {
  return request({
    url: '/ads/data/sougou/cpc',
    method: 'GET',
    params: query
  })
}
// 搜狗-关键字开启关闭
export function pausecpct(data, id) {
  return request({
    url: '/ads/data/sougou/cpc/' + id,
    method: 'PUT',
    data
  })
}

// 批量设置账户余额过低预警
export function batchalert(data) {
  return request({
    url: '/ads/platform/batch_alert',
    method: 'POST',
    data
  })
}

// 编辑-流量平台广告表格配置
export function configedit(data) {
  return request({
    url: '/ads/data/config',
    method: 'POST',
    data
  })
}
// 流量平台广告表格配置
export function getconfig(id) {
  return request({
    url: '/ads/data/config/' + id,
    method: 'get'
  })
}
// 编辑广告账户
export function platformaccount(data) {
  return request({
    url: '/ads/platform/account',
    method: 'POST',
    data
  })
}
// 广告交接
export function change_operator(data) {
  return request({
    url: '/ads/platform/change_operator',
    method: 'POST',
    data
  })
}
// 删除广告账户
export function acdelete(id) {
  return request({
    url: '/ads/platform/account/' + id,
    method: 'DELETE'
  })
}

// 获取全部部门列表
export function company(type) {
  return request({
    url: '/ads/company',
    method: 'GET',
    params: { flag: type }
  })
}
// POST 为新增部门
export function addcompany(data) {
  return request({
    url: '/ads/company',
    method: 'POST',
    data
  })
}
// PUT 为编辑部门
export function bjcompany(data, id) {
  return request({
    url: '/ads/company/' + id,
    method: 'put',
    data
  })
}

// DELETE 为删除部门
export function delcompany(data) {
  return request({
    url: '/ads/company/' + data.type,
    method: 'DELETE',
    data
  })
}

// 获取所有角色
export function roles() {
  return request({
    url: '/ads/roles',
    method: 'GET'
  })
}

// 新增角色
export function addroles(data) {
  return request({
    url: '/ads/roles',
    method: 'POST',
    data
  })
}
// 编辑角色
export function rolesput(data) {
  return request({
    url: '/ads/roles/' + data.id,
    method: 'put',
    data
  })
}
// 删除角色
export function rolesdelete(data) {
  return request({
    url: '/ads/roles/' + data.id,
    method: 'delete',
    data
  })
}
// 获取绑定日志接口
export function bindLogs(query) {
  return request({
    url: '/ads/bindLogs',
    method: 'GET',
    params: query
  })
}
// 获取绑定日志接口
export function devicesbind(data) {
  return request({
    url: '/ads/devices/bind/' + data.id,
    method: 'PUT',
    data
  })
}
// 获取全部员工列表
export function usersname(query) {
  if (!query) {
    query = { page_size: 1000 }
  }
  return request({
    url: '/ads/users',
    method: 'get',
    params: query
  })
}
// 添加员工接口
export function adduser(data) {
  return request({
    url: '/ads/users',
    method: 'POST',
    data
  })
}
// 编辑员工接口
export function editusers(wid, data) {
  return request({
    url: '/ads/users/' + wid,
    method: 'PUT',
    data
  })
}
// 删除员工接口
export function deleteusers(wid) {
  return request({
    url: '/ads/users/' + wid,
    method: 'DELETE'
  })
}
// 编辑密码
export function editPwd(data) {
  return request({
    url: '/ads/editPwd',
    method: 'put',
    data
  })
}
// 重置密码
export function resetUserPwd(data) {
  return request({
    url: '/ads/resetUserPwd',
    method: 'put',
    data
  })
}

// 获取统计数据
export function getUserStat(query) {
  return request({
    url: '/ads/stat',
    method: 'Get',
    params: query
  })
}

// 敏感内容
export function getsensitive(query, id) {
  return request({
    url: '/ads/monitor/sensitive/' + id,
    method: 'Get',
    params: query
  })
}

// 广告批量关闭
export function batchclose(data) {
  return request({
    url: '/ads/monitor/ad/batch_close',
    method: 'post',
    data
  })
}

// 敏感设置 更新
export function monitor() {
  return request({
    url: '/ads/monitor',
    method: 'Get'
  })
}
// 敏感设置 更新
export function monitorpost(data) {
  return request({
    url: '/ads/monitor',
    method: 'POST',
    data
  })
}
// 敏感词汇列表
export function sensitive() {
  return request({
    url: '/ads/monitor/sensitive',
    method: 'Get'
  })
}
// 敏感词汇编辑
export function addsensitive(data) {
  return request({
    url: '/ads/monitor/sensitive',
    method: 'POST',
    data
  })
}
// 敏感词汇删除
export function delsensitive(data, id) {
  return request({
    url: '/ads/monitor/sensitive/' + id,
    method: 'DELETE',
    data
  })
}
// 广告账户投放效果
export function getaccount(query) {
  return request({
    url: '/ads/data/stat/account',
    method: 'get',
    params: query
  })
}
// 获取统计数据
// export function getWxConf(user_id) {
//   return request({
//     url: '/ads/wechat/conf/' + user_id,
//     method: 'Get'
//   })
// }
// 审批类型获取
export function getsettings(query) {
  return request({
    url: '/ads/audit/settings',
    method: 'get',
    params: query
  })
}
// 审批类型编辑
export function postsettings(data) {
  return request({
    url: '/ads/audit/settings',
    method: 'post',
    data
  })
}
// 推广费对账表
export function promotion(query) {
  return request({
    url: '/ads/audit/promotion',
    method: 'get',
    params: query
  })
}

// 推广费对账表
export function promotionUpdate(query) {
  return request({
    url: '/ads/audit/promotion/mission',
    method: 'get',
    params: query
  })
}

// 支出详情
export function prodetail(query) {
  return request({
    url: '/ads/audit/promotion/detail',
    method: 'get',
    params: query
  })
}
// 未接入账户获取
export function unacknowledged(query) {
  return request({
    url: '/ads/audit/account/unacknowledged',
    method: 'get',
    params: query
  })
}
// 财务审批单
export function getapproval(query) {
  return request({
    url: '/ads/audit/approval',
    method: 'get',
    params: query
  })
}
// 账户对账录入
export function addpromotion(data) {
  return request({
    url: '/ads/audit/promotion',
    method: 'post',
    data
  })
}
// 账户对账录入 批量
export function batchpromotion(data) {
  return request({
    url: '/ads/audit/batch_promotion',
    method: 'post',
    data
  })
}
// 新增未接入账户
export function addaccount(data) {
  return request({
    url: '/ads/audit/account',
    method: 'post',
    data
  })
}
// 编辑账户
export function putaccount(data, id) {
  return request({
    url: '/ads/audit/account/' + id,
    method: 'put',
    data
  })
}
// 未接入账户删除
export function delaccount(id) {
  return request({
    url: '/ads/audit/account/' + id,
    method: 'DELETE'
  })
}
// 百度信息流-广告账户信息流
export function baidufaccount(query) {
  return request({
    url: '/ads/data/baidufeed/account',
    method: 'get',
    params: query
  })
}
// 百度信息流-推广计划列表获取
export function baidufcampaign(query) {
  return request({
    url: '/ads/data/baidufeed/campaign',
    method: 'get',
    params: query
  })
}
// 百度信息流-推广计划开启关闭
export function feedcampaign(data, id) {
  return request({
    url: '/ads/data/baidufeed/campaign/' + id,
    method: 'PUT',
    data
  })
}
// 百度信息流-推广组列表
export function baidufgroup(query) {
  return request({
    url: '/ads/data/baidufeed/group',
    method: 'get',
    params: query
  })
}
// 百度信息流-创意列表获取
export function baidufcreatives(query) {
  return request({
    url: '/ads/data/baidufeed/creatives',
    method: 'get',
    params: query
  })
}
// 百度信息流-推广计划开启关闭
export function feedgroup(data, id) {
  return request({
    url: '/ads/data/baidufeed/group/' + id,
    method: 'PUT',
    data
  })
}
// 百度信息流-推广组开启关闭
export function feedadgroup(data, id) {
  return request({
    url: '/ads/data/baidufeed/group/' + id,
    method: 'PUT',
    data
  })
}
// 百度信息流-推广创意开启关闭
export function feedcreative(data, id) {
  return request({
    url: '/ads/data/baidufeed/creatives/' + id,
    method: 'PUT',
    data
  })
}

// 百度广告-账户搜索系
export function baiduaccount(query) {
  return request({
    url: '/ads/data/baidu/account',
    method: 'get',
    params: query
  })
}
// 百度广告-推广计划列表获取
export function baidcampaign(query) {
  return request({
    url: '/ads/data/baidu/campaign',
    method: 'get',
    params: query
  })
}
// 百度广告-推广组列表
export function baidgroup(query) {
  return request({
    url: '/ads/data/baidu/group',
    method: 'get',
    params: query
  })
}
// 百度广告-创意列表获取
export function baidcreatives(query) {
  return request({
    url: '/ads/data/baidu/creatives',
    method: 'get',
    params: query
  })
}
// 百度广告-关键字列表获取
export function baidkeyword(query) {
  return request({
    url: '/ads/data/baidu/keyword',
    method: 'get',
    params: query
  })
}
// 百度搜索系-推广计划开启关闭
export function baoducampaign(data, id) {
  return request({
    url: '/ads/data/baidu/campaign/' + id,
    method: 'PUT',
    data
  })
}
// 百度搜索系-推广计划开启关闭
export function baodugroup(data, id) {
  return request({
    url: '/ads/data/baidu/group/' + id,
    method: 'PUT',
    data
  })
}
// 百度搜索系-推广计划开启关闭
export function baoducreatives(data, id) {
  return request({
    url: '/ads/data/baidu/creatives/' + id,
    method: 'PUT',
    data
  })
}
// 百度搜索系-推广关键字开启关闭
export function baodukeyword(data, id) {
  return request({
    url: '/ads/data/baidu/keyword/' + id,
    method: 'PUT',
    data
  })
}

// 360搜索-账号数据列表
export function e360account(query) {
  return request({
    url: '/ads/data/e360/account',
    method: 'get',
    params: query
  })
}
// 360搜索-推广计划列表获取
export function e360campaign(query) {
  return request({
    url: '/ads/data/e360/campaign',
    method: 'get',
    params: query
  })
}
// 360搜索-推广组列表接口
export function e360group(query) {
  return request({
    url: '/ads/data/e360/group',
    method: 'get',
    params: query
  })
}
// 360搜索-广告关键字列表接口
export function e360keyword(query) {
  return request({
    url: '/ads/data/e360/keyword',
    method: 'get',
    params: query
  })
}
// 360搜索-广告创意列表接口
export function e360creative(query) {
  return request({
    url: '/ads/data/e360/creative',
    method: 'get',
    params: query
  })
}
// 360搜索-推广计划开启关闭
export function e360campa(data, id) {
  return request({
    url: '/ads/data/e360/campaign/' + id,
    method: 'PUT',
    data
  })
}
// 360搜索-推广组开启关闭
export function e360groupid(data, id) {
  return request({
    url: '/ads/data/e360/group/' + id,
    method: 'PUT',
    data
  })
}
// 360搜索-推广创意开启关闭
export function e360creatives(data, id) {
  return request({
    url: '/ads/data/e360/creatives/' + id,
    method: 'PUT',
    data
  })
}
// 360搜索-推广关键字开启关闭
export function e360keyput(data, id) {
  return request({
    url: '/ads/data/e360/keyword/' + id,
    method: 'PUT',
    data
  })
}

// 菜单接口
export function getmenus(query) {
  return request({
    url: '/ads/menus?is_all=1',
    method: 'get',
    params: query
  })
}

// 菜单接口添加
export function addmenus(data) {
  return request({
    url: '/ads/menus',
    method: 'post',
    data
  })
}

// 菜单接口修改
export function putmenus(data, id) {
  return request({
    url: '/ads/menus/' + id,
    method: 'PUT',
    data
  })
}

// 菜单接口删除
export function deletemenus(id) {
  return request({
    url: '/ads/menus/' + id,
    method: 'DELETE'
  })
}

