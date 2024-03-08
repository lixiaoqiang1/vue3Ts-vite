// import Cookies from 'js-cookie'
// import md5 from 'js-md5'
const TokenKey = 'mi_monitor_token'

export function getToken() {
  return localStorage.getItem(TokenKey)
}
export function getSign(str) {
  if (!str) {
    return 'need code'
  }
  return str //md5.hex(str).toUpperCase()
}

export function setToken(token, mobile) {
  const arr = token.split(' ')
  localStorage.setItem(sha1('authority_' + mobile), (arr[1]), { expires: 7 })
  return localStorage.setItem(TokenKey, token)
}

export function getHistoryToken(mobile) {
  return localStorage.getItem(sha1('authority_' + mobile))
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

// 获取导航菜单1
export function getRole() {
  let role = localStorage.getItem('role-mi')
  if (role) {
    role = JSON.parse(role)
  } else {
    role = []
  }
  return role
}
// 储存导航菜单
export function setRole(role) {
  role = JSON.stringify(role)
  return localStorage.setItem('role-mi', role)
}
// 删除导航菜单
export function removeRole() {
  return localStorage.removeItem('role-mi')
}
export function getField(data) {
  sessionStorage.getItem('allfield')
}
export function setField(data) {
  sessionStorage.setItem('allfield', JSON.stringify(data))
}
export function removeField() {
  return localStorage.removeItem('allfield')
}
// setUserinfo
// 请求所有个人信息
export function getUserinfo(data) {
  sessionStorage.getItem('userinfo')
}
// 保存所有个人信息
export function setUserinfo(data) {
  sessionStorage.setItem('userinfo', JSON.stringify(data))
}
// 删除所有个人信息
export function removeUserinfo() {
  return localStorage.removeItem('userinfo')
}

// 请求部门员工
export function getYuangong(data) {
  sessionStorage.getItem('yuangonglist')
}
// 保存部门员工
export function setYuangong(data) {
  sessionStorage.setItem('yuangonglist', JSON.stringify(data))
}
// 删除部门员工
export function removeYuangong() {
  return localStorage.removeItem('yuangonglist')
}
// 请求时间
export function getTimes(data) {
  // sessionStorage.getItem('timequan')
}
// 保存时间
export function setTimes(data) {
  // sessionStorage.setItem('timequan', JSON.stringify(data))
}
// 删除时间
export function removeTimes() {
  // return localStorage.removeItem('timequan')
}
// 请求setconfigone
export function getconfigone(data) {
  localStorage.getItem('configone')
}
// 保存setconfigone
export function setconfigone(data) {
  localStorage.setItem('configone', JSON.stringify(data))
}
// 删除setconfigone
export function removeconfigone() {
  return localStorage.removeItem('configone')
}
// 请求setconfigtwo
export function getconfigtwo(data) {
  localStorage.getItem('configtwo')
}
// 保存setconfigtwo
export function setconfigtwo(data) {
  localStorage.setItem('configtwo', JSON.stringify(data))
}
// 删除setconfigtwo
export function removeconfigtwo() {
  return localStorage.removeItem('configtwo')
}
// 请求setconfigtree
export function getconfigtree(data) {
  localStorage.getItem('configtree')
}
// 保存setconfigtree
export function setconfigtree(data) {
  localStorage.setItem('configtree', JSON.stringify(data))
}
// 删除setconfigtree
export function removeconfigtree() {
  return localStorage.removeItem('configtree')
}
// 请求setconfigfour
export function getconfigfour(data) {
  localStorage.getItem('configfour')
}
// 保存setconfigfour
export function setconfigfour(data) {
  localStorage.setItem('configfour', JSON.stringify(data))
}
// 删除setconfigfour
export function removeconfigfour() {
  return localStorage.removeItem('configfour')
}
// 百度信息流
// 请求setbaiduxinxi
export function getbaiduxinxi(data) {
  localStorage.getItem('baiduxinxi')
}
// 保存setbaiduxinxi
export function setbaiduxinxi(data) {
  localStorage.setItem('baiduxinxi', JSON.stringify(data))
}
// 删除setbaiduxinxi
export function removebaiduxinxi() {
  return localStorage.removeItem('baiduxinxi')
}
// 百度搜索
// 请求setbaidusousuo
export function getbaidusousuo(data) {
  localStorage.getItem('baidusousuo')
}
// 保存setbaidusousuo
export function setbaidusousuo(data) {
  localStorage.setItem('baidusousuo', JSON.stringify(data))
}
// 删除setbaidusousuo
export function removebaidusousuo() {
  return localStorage.removeItem('baidusousuo')
}
// 搜索360-搜索
// 请求souso360
export function getsousuo360(data) {
  localStorage.getItem('sousuo360')
}
// 保存souso360
export function setsousuo360(data) {
  localStorage.setItem('sousuo360', JSON.stringify(data))
}
// 删除souso360
export function removesousuo360() {
  return localStorage.removeItem('sousuo360')
}

// 请求setwxdtl
export function getwxdtl(data) {
  sessionStorage.getItem('wxdetails')
}
// 保存setwxdtl
export function setwxdtl(data) {
  sessionStorage.setItem('wxdetails', JSON.stringify(data))
}
// 删除setwxdtl
export function removewxdtl() {
  return localStorage.removeItem('wxdetails')
}
// 请求detailstwo
export function getdetailstwo(data) {
  sessionStorage.getItem('detailstwo')
}
// 保存detailstwo
export function setdetailstwo(data) {
  sessionStorage.setItem('detailstwo', JSON.stringify(data))
}
// 删除detailstwo
export function removedetailstwo() {
  return localStorage.removeItem('detailstwo')
}
// 请求setdetailstree
export function getdetailstree(data) {
  sessionStorage.getItem('detailstree')
}
// 保存setdetailstree
export function setdetailstree(data) {
  sessionStorage.setItem('detailstree', JSON.stringify(data))
}
// 删除setdetailstree
export function removedetailstree() {
  return localStorage.removeItem('detailstree')
}

export function setWx(data) {
  sessionStorage.setItem('wx', JSON.stringify(data))
}

export function getWx() {
  let d = sessionStorage.getItem('wx')
  d = JSON.parse(d)
  return d
}

function encodeUTF8(s) {
  var i; var r = []; var c; var x
  for (i = 0; i < s.length; i++) {
    if ((c = s.charCodeAt(i)) < 0x80) r.push(c)
    else if (c < 0x800) r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F))
    else {
      if ((x = c ^ 0xD800) >> 10 === 0) { // 对四字节UTF-16转换为Unicode
        c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000
        r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F))
      } else r.push(0xE0 + (c >> 12 & 0xF))
      r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F))
    }
  }
  return r
}

// 字符串加密成 hex 字符串
function sha1(s) {
  var data = new Uint8Array(encodeUTF8(s))
  var i, j, t
  var l = ((data.length + 8) >>> 6 << 4) + 16
  s = new Uint8Array(l << 2)
  s.set(new Uint8Array(data.buffer))
  s = new Uint32Array(s.buffer)
  for (t = new DataView(s.buffer), i = 0; i < l; i++)s[i] = t.getUint32(i << 2)
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8)
  s[l - 1] = data.length << 3
  var w = []; var f = [
    function() { return m[1] & m[2] | ~m[1] & m[3] },
    function() { return m[1] ^ m[2] ^ m[3] },
    function() { return m[1] & m[2] | m[1] & m[3] | m[2] & m[3] },
    function() { return m[1] ^ m[2] ^ m[3] }
  ]; var rol = function(n, c) { return n << c | n >>> (32 - c) }
  var k = [1518500249, 1859775393, -1894007588, -899497514]
  var m = [1732584193, -271733879, null, null, -1009589776]
  m[2] = ~m[0]
  m[3] = ~m[1]
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0)
    for (j = 0; j < 80; j++) {
      w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1)
      t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0
      m[1] = rol(m[1], 30)
      m.pop()
      m.unshift(t)
    }
    for (j = 0; j < 5; j++)m[j] = m[j] + o[j] | 0
  }
  t = new DataView(new Uint32Array(m).buffer)
  for (let i = 0; i < 5; i++)m[i] = t.getUint32(i << 2)

  var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function(e) {
    return (e < 16 ? '0' : '') + e.toString(16)
  }).join('')
  return hex
}
