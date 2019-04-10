const printBill = require('./printBill')

let invoicesPath = './json/invoices.json'
let playsPath = './json/plays.json'

test('printBill:',() => {
  expect(printBill(invoicesPath, playsPath)).toBe(`
Statement for BigCo
Hamlet : $650.00 (55 seats)
As You Like It : $580.00 (35 seats)
Othello : $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits`.trim()
  )
})