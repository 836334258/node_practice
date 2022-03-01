import * as  fs from 'fs/promises'
import {constants} from 'fs'



const fileHandle=await fs.open('./test.txt','a+')

console.log((await fileHandle.readFile()).toString())

await fileHandle.appendFile('g')

console.log((await fileHandle.read({offset:0})).toString())

const stream=fileHandle.createReadStream({start:0,end:10,encoding:'utf-8'})

const writeStream=fileHandle.createWriteStream()

setInterval(() => {
    writeStream.write('ok')
}, 500);

setInterval(async () => {
  console.log(stream.read())
}, 1000);

// 截断
fileHandle.truncate(20)

fileHandle.sync()

// 指定要执行的可访问性检查
console.log(await fs.access('./test.txt'),constants.R_OK|constants.W_OK)

// 复制文件
// await fs.copyFile('./test.txt','./testCopy.txt',constants.COPYFILE_EXCL)

// 复制目录
// await fs.cp('../fs','../fsCopy/')

// link

// fs.link('./test.txt','./test.txt.link')

// 等同于fsPromises.stat()
console.log(await fs.lstat('./test.txt'))

// 创建目录
// fs.mkdir('test')


// 读取目录
const dirs=await fs.opendir('.')

for await(const dir of dirs){
  console.log(dir.name)
}

const dirs2=await fs.readdir('.')

for (const dir of dirs2){
  console.log(dir)
}







