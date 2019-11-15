// 判断价格是否大于1000 
function isDiscount(aOrder) {
  let basePrice = aOrder.basePrice
  return basePrice > 1000
}

/* 重构后 */

function isDiscount(aOrder) {
  return aOrder.basePrice > 1000
}