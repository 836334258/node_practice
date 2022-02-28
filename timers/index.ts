// 在本轮 Node.js 事件循环结束时调用的函数
const timer1=setImmediate(()=>{
  console.log('1')
})


// 当定时器结束时调用的函数，最后调用
const handler=setInterval(()=>{
  console.log('2')
},1000)

// 当定时器结束时调用的函数 最先调用
setTimeout(()=>{
  console.log('3')
})

console.log(timer1)
// 如果为 true，则 Immediate 对象将使 Node.js 事件循环保持活动状态。
console.log(timer1.hasRef())

// 返回: <Immediate> immediate 的引用,和直接调用console.log(timer1)一样
/**
 * Immediate {
  _idleNext: null,
  _idlePrev: null,
  _onImmediate: [Function (anonymous)],
  _argv: undefined,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 4,
  [Symbol(triggerId)]: 1
}
 */
console.log(timer1.ref())

clearInterval(handler)