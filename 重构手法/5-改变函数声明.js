// 计算圆周长

// circum: 圆
function circum(radius) {
  return 2 * Math.PI * radius
}

/* ----------简单做法------------------- */
/* 重构后 */
// circumference: 圆周长
function circumference(radius) {
  return 2 * Math.PI * radius
}

/* --------------迁移式做法---------------- */

/* 重构后 */
// 计算圆周长

function circum(radius) {
  return circumference(radius)
}

// circumference: 圆周长

function circumference(radius) {
  return 2 * Math.PI * radius
}



// 判断顾客是否来自中国地区
/* ---------------------------------------------------------- */
let someCustomer = [{
    name: 'zs',
    address: 'HK'
  },
  {
    name: 'ls',
    address: 'BJ'
  },
  {
    name: 'xh',
    address: 'SH'
  },
  {
    name: 'Tom',
    address: 'BL'
  },
]

function inChinese(aCustomer) {
  return ['HK', 'TW', "AM", 'SH', 'BJ'].includes(aCustomer.address)
}

const customer = someCustomer.filter(c => inChinese(c))

/* --------------一. 提炼变量------------------------------ */
function inChinese(aCustomer) {
  let address = aCustomer.address
  return ['HK', 'TW', "AM", 'SH', 'BJ'].includes(address)
}
const customer = someCustomer.filter(c => inChinese(c))

/* --------------二. 提炼函数------------------------------ */

function inChinese(aCustomer) {
  let address = aCustomer.address
  return xx_inChinese(address) // 临时名字
}

function xx_inChinese(address) {
  return ['HK', 'TW', "AM", 'SH', 'BJ'].includes(address)
}

const customer = someCustomer.filter(c => inChinese(c))

/* --------------三. 内联变量------------------------------ */
function inChinese(aCustomer) {
  return xx_inChinese(aCustomer.address)
}

// ... //

/* --------------四. 内联函数------------------------------ */

//...//
const customer = someCustomer.filter(c => xx_inChinese(c.address))

/* --------------五. 改变函数声明 (临时函数名还原)----------- */

const customer = someCustomer.filter(c => inChinese(c.address))

function inChinese(address) {
  return ['HK', 'TW', "AM", 'SH', 'BJ'].includes(address)
}