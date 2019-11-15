let order = {
  quantity: 1000, // 数量
  itemPrice: 10 // 单价
}

// price = base_price - quantity_discount + shipping (基本价格 - 折扣价 + 运输费用)
// 数量超过 500个 的部分 95折
// 运费为商品底价的十分之一, 100封顶

function price(order) {
  return order.quantity * order.itemPrice -
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05 +
    Math.min(order.quantity * order.itemPrice * 0.1, 100)
}

/* 重构后 */

function price(order) {
  let basePrice = order.quantity * order.itemPrice;
  let quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  let shipping = Math.min(basePrice * 0.1, 100);
  return basePrice - quantityDiscount - shipping;
}