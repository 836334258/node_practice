import events from 'events'

const {EventEmitter}=events

class MyEventEmitter extends EventEmitter{}

const myEventEmitter=new MyEventEmitter()

myEventEmitter.on('event',(...args)=>{
  console.log(args)
})

// once只会被触发一次
myEventEmitter.once('event',(...args)=>{
  console.log(args)
})

// 返回名为 eventName 的事件的监听器数组的副本
console.log(myEventEmitter.listeners('event'))

// 其注册监听器的事件的数组
console.log(myEventEmitter.eventNames())

// 回 EventEmitter 的当前最大监听器数的值 10
console.log(myEventEmitter.getMaxListeners())

// 返回监听名为 eventName 的事件的监听器数量 2
console.log(myEventEmitter.listenerCount('event'))

// 将 listener 函数添加到名为 eventName 的事件的监听器数组的开头
myEventEmitter.prependListener('event',(...args)=>{
  console.log('prependListener',args.join(','))
})

// 删除所有监听器，或指定 eventName 的监听器。
// myEventEmitter.removeAllListeners('event')

myEventEmitter.emit('event','发送','了')
myEventEmitter.emit('event','发送','了')

// 返回名为 eventName 的事件的监听器数组的副本，包括任何封装器（例如由 .once() 创建的封装器）
console.log(myEventEmitter.rawListeners('event'))

console.log(events.getEventListeners(myEventEmitter,'event'))