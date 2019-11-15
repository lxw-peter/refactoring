// owing: 债务
// invoice: 发票, 单据
// Banner:旗帜
// printBanner: 打印横幅
// outstanding: 优秀的
// customer: 顾客
function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();

  // print detail
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
}

/* 重构后 */

function printOwing(invoice) {
  printBanner()
  let outstanding = calculateOutstanding()
  printDetail()

  function printDetail() {
    console.log(`name: ${invoice.customer}`)
    console.log(`amount: ${outstanding}`)
  }
}