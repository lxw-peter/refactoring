let reading = {
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2019
}
function acquireReading() { return reading}
function base(aReading) {}
function taxableCharge(aReading) {}
function calculateBaseCharge(aReading) {
  return baseRate(aReading.month, aReading.year) * aReading.quantity
}

// 场景一 -- 基础费用
const aReading = acquireReading()
const baseCharge = baseRate(aReading.month, aReading.year) * aReading.quantity

// 场二 --
const aReading = acquireReading()
const base = baseRate(aReading.month, aReading.year) * aReading.quantity
const taxableCharge = Math.max(0, base - taxThreshold(aReading.year))

// 场景三
const aReading = acquireReading()
const basicChargeAmount = calculateBaseCharge(aReading)


/* 重构后 */

class Reading {
  constructor(data) {
    this._customer = data.customer
    this._quantity = data.quantity
    this._month = data.month
    this._year = data.year
  }
  get customer() {return this._customer}
  get quantity() {return this._quantity}
  get month() {return this._month}
  get year() {return this._year}
  get baseCharge() {
    return this.baseRate(this.month, this.year) * this.quantity
  }
  get taxableCharge() {
    return  Math.max(0, this.base - this.taxThreshold(this.year))
  }
  taxThreshold(year) {}
  baseRate(month, year) {}
}
