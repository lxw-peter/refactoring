function amountInvoiced(startData, endData) {}
function amountReceived(startData, endData) {}
function amountOverdue(startData, endData) {}

/* 重构后 */

function amountInvoiced(aDateRange) {}
function amountReceived(aDateRange) {}
function amountOverdue(aDateRange) {}


/* 示例找到超出温度范围的数据 */
const station = {
  name: 'ZB1',
  reading: [
    {temp: 24},
    {temp: 25},
    {temp: 29},
    {temp: 27},
    {temp: 34}
  ]
}

function readingsOutsideRange(station, min, max) {
  return station.reading.filter(r => r.temp < min || r.temp > max)
}

// 调用方
const operatingPlan = {
  low: '25',
  high: '30'
}
let alerts = readingsOutsideRange(station, operatingPlan.low, operatingPlan.high)

/* 重构后 */

class NumberRange {
  constructor(min, max) {
    this._data = {
      min,
      max
    }
  }
  get min() {return this._data.min}
  get max() {return this._data.max}
  contains(arg) { return arg >= this.min && arg <= this.max }
}

// 1. 修改readingsOutsideRange函数
function readingsOutsideRange(station, range) {
  return station.reading.filter(r => r.temp < range.min || r.temp > range.max)
}
let range = new NumberRange(operatingPlan.low, operatingPlan.high)

let alerts = readingsOutsideRange(station, range)

/* --------------------------------------------------- */
// 2. 再次修改修改readingsOutsideRange函数
function readingsOutsideRange(station, range) {
  return station.reading.filter(r => !range.contains(r.temp))
}
let range = new NumberRange(operatingPlan.low, operatingPlan.high)

let alerts = readingsOutsideRange(station, range)