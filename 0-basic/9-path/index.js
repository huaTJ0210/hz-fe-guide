const path = require('path');

// __filename 当前脚本的绝对路径
const fileName = path.basename(__filename); // 返回path中的最后一个部分：如果是目录返回目录名称
const dirName = path.dirname(__filename); // 目录名称
const ext = path.extname(__filename); // 文件的后缀
console.log(fileName);
console.log(dirName);
console.log(ext);

const filePath1 = path.join('/temp', '/file.js');
const filePath2 = path.resolve(__dirname, 'txt.js');
const filePath3 = path.normalize('..///test.js');
console.log(filePath1);
console.log(filePath2);
console.log(filePath3);
