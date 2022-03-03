import buffer from 'buffer'
import { MessageChannel } from 'worker_threads'

const {Buffer,Blob,constants}=buffer

const buf1=Buffer.alloc(10)
const buf2=Buffer.alloc(10,'A','utf-8')
const buf3=Buffer.from([1,2,3])
const buf4=Buffer.from('test')
const buf5=Buffer.from([ 74 ,65 ,73 ,74])
// 此时buf里面的内容是不确定的，需要用fill初始化
const buf6=Buffer.allocUnsafe(10)

console.log(buf1)
console.log(buf2)
console.log(buf3)
console.log(buf5.toString())
console.log(buf6)

const bufTotal=Buffer.concat([buf1,buf2,buf3,buf4,buf5,buf6])

for(const i of buf4){
  console.log('i=',i)
}

const blob=new Blob(['hello'])
const m1=new MessageChannel()

m1.port1.onmessage=async ({data})=>{
  console.log(await data.arrayBuffer())
  m1.port1.close()
}

m1.port2.postMessage(blob)
blob.text().then(console.log)
console.log(constants.MAX_LENGTH)
console.log('bufTotal',bufTotal)


const bf1=Buffer.from([1,2,3])
const bf2=Buffer.from(bf1)
bf1[0]=11
console.log('bf1',bf1)
console.log('bf2',bf2)

console.log(Buffer.isBuffer(bufTotal))

console.log(buf2.includes('A'))
console.log(buf2.indexOf('A'))

const bbf=Buffer.from('a')
const sbff=bbf.slice()
sbff[0]++
console.log(sbff.toString())