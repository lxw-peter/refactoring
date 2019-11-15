let defaultOwner = { firstName: 'Tom', lastName: 'Fowler' }

/* 重构后 */
let defaultOwnerData = { firstName: 'Tom', lastName: 'Fowler' }

export function getDefaultOwner() {
  // 复制副本
  return Object.assign({}, defaultOwnerData) 
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg
}


/* 如果需要阻值数据修改, 则可以通过封装记录来实现 */
class Data {
  constructor(data) {
    this.first = data.firstName
    this.last = data.lastName
  }
  get first() {return this.first}
  get last() {return this.last}
}

let defaultOwnerData = { firstName: 'Tom', lastName: 'Fowler' }
export function getDefaultOwner() {
  // 复制副本
  return new Data(defaultOwnerData) 
}

export function setDefaultOwner(arg) {
  defaultOwnerData = arg
}