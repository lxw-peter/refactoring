let a = height * width

/* 重构为 */

let area = height * width


/* -----------------如果变量被广泛使用, 则使用--封装变量 */
let tbHd = 'untitled'  // 1. 定义
result += `<h1>${tHd}</h1>` // 2. 读取值
tpHd = obj['articleTitle']  // 3. 更新值

/* 重构后 */
let _title = 'untitled'
function title() {return _title}
function setTitle(arg) {_title = arg}


/* ---------------------常量改名 */
const cpyNm = 'Tom Jerry' // 老代码, 单词缩写不易识别

/* 修改为 */
const companyName = 'Tom Jerry'
const cpyNm = companyName