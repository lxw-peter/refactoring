
const fs = require('fs')
const invoicesPath = './json/invoices.json'
const playsPath = './json/plays.json'
const invoice = JSON.parse(fs.readFileSync(invoicesPath, 'utf-8'))
const plays = JSON.parse(fs.readFileSync(playsPath, 'utf-8'))
const createStatementData = require('./createStatementData')

statement(invoice, plays)
htmlStatement(invoice, plays)

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays))  
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays))  
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}<h1>\n`
  result += "<table>\n"
  result += "<tr><th>play</th><th>cost</th><th>seats</th></tr>\n"
  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>${usd(perf.amount)}</td><td>${perf.audience}</td></tr>\n`
  }
  result += '</table>\n'
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}<em></p>\n`
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`
  console.log('renderHtml:\n',result)
  return result
}

function renderPlainText (data, plays) {
  let result = `Statement for ${data.customer}\n`
  for (let perf of data.performances) {
    result += `${perf.play.name} : ${usd(perf.amount)} (${perf.audience} seats)\n`
  }
  result += `Amount owed is ${usd(data.totalAmount)}\n`
  result += `You earned ${data.totalVolumeCredits} credits\n`
  console.log('renderPlainText:\n',result)
  return result

  // 将函数返回值统一为result
  // 修改变量名 perf => aPerformance 不定冠词 a 表示数组array
}

function usd(aNumber) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(aNumber / 100)
}

module.exports = {
  invoice,
  plays,
  statement,
}