import path from 'path'
import process from 'process'

// 由于process是EventEmitter的实例，on事件相当于addListener事件

// 0 node正常结束后会调用beforeExit，如果显式调用process.exit()则不会调用
process.addListener('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code)
})

// 目前看起来只要退出就会调用
process.addListener('exit', (code) => {
  console.log(`About to exit with code: ${code}`)
})

// promise里面不止拒绝或解决过一次，就会调用 reject Promise { 'ok' } no ok
process.on('multipleResolves', (type, promise, value) => {
  console.error(type, promise, value)
})
new Promise((resolve, reject) => {
  resolve('ok')
  reject('no ok')
})
  .then(console.log)
  .catch(console.error)

// 捕获promise.reject 方法
process.addListener('unhandledRejection', (reason, promise) => {
  console.log('unhandledRejection', reason, promise)
})

Promise.reject('haha reject')

// 捕获异常，不推荐使用
process.addListener('uncaughtException', (error, origin) => {
  console.log('uncaughtException', error, origin)
})

// 好像和uncaughtException差不多
process.addListener('uncaughtExceptionMonitor', (error, origin) => {
  console.log('uncaughtExceptionMonitor', error, origin)
})

// 会触发uncaughtException事件和uncaughtExceptionMonitor事件
//  os.setPriority(0,-10)

// 每当 Node.js 触发进程警告时，则会触发 'warning' 事件
process.addListener('warning', (waring) => {
  console.log('waring', waring)
})

// 创建新的 <Worker> 线程后会触发 'worker' 事件。
process.addListener('worker', (worker) => {
  console.log('worker', worker)
})

// 一种信号，暂时没发现用处
process.addListener('SIGINT',(signal)=>{
  console.log('signal',signal)
})

// 导致node立即退出，同时addListener里面的事件也失效
// process.abort()

// cpu架构 x64
console.log(process.arch)

// 输入参数 ts-node index.ts a b
/**
 * [
  '/mnt/c/Program Files/nodejs/node_modules/ts-node/dist/bin.js',
  '/mnt/e/code/test_code/node_practice/process/index.ts',
  'a',
  'b'
]
 */
console.log(process.argv)

// node的只读副本
console.log(process.argv0)

// 改变目录
process.chdir(path.dirname(__dirname))

// 当前目录
console.log(process.cwd())

// 会触发waring事件 waring Warning: emitWaring....
process.emitWarning('emitWaring....')

// 用户环境对象
console.log(process.env)

// 返回 Node.js 进程启动时传入的一组特定于 Node.js 的命令行选项
console.log(process.execArgv)

// node可执行文件的绝对路径名
console.log(process.execPath)

// 设置终止进程code码，默认为0
process.exitCode=100
// 终止进程
// process.exit()

// console.log(process.getActiveResourcesInfo())

// 群组id
console.log(process.getgid())

// 用户id
console.log(process.getuid())

console.log(process.hrtime())

// 返回纳秒
console.log(process.hrtime.bigint())

// 将sigint发送到由pid标识的进程
process.kill(process.pid,'SIGINT')


// 内存使用量
console.log(process.memoryUsage())

// 会先执行nextTick，然后执行queueMicrotask，除非需要 process.nextTick() 的特定功能，否则请使用 queueMicrotask()。
queueMicrotask(()=>{
  console.log('queueMicrotask')
})

// 将 callback 添加到"下一个滴答队列"
process.nextTick(()=>{
  console.log('nextTick')
})

// pid 434
console.log('pid',process.pid)

// 平台 linux
console.log(process.platform)

// 父进程id
console.log(process.ppid)

// 当前版本相关的元数据
/**
 * {
  name: 'node',
  sourceUrl: 'https://nodejs.org/download/release/v17.5.0/node-v17.5.0.tar.gz',
  headersUrl: 'https://nodejs.org/download/release/v17.5.0/node-v17.5.0-headers.tar.gz'
}
 */
console.log(process.release)

/**
 * 诊断报告
 * {
  writeReport: [Function: writeReport],
  getReport: [Function: getReport],
  directory: [Getter/Setter],
  filename: [Getter/Setter],
  compact: [Getter/Setter],
  signal: [Getter/Setter],
  reportOnFatalError: [Getter/Setter],
  reportOnSignal: [Getter/Setter],
  reportOnUncaughtException: [Getter/Setter]
}
 */
console.log(process.report)

/**
 * ReadStream 
 */
console.log(process.stdin)

// 运行了几秒 3.124805684
console.log(process.uptime())

// node版本 v17.5.0
console.log(process.version)

/**
 * 列出依赖项
{
  node: '17.5.0',
  v8: '9.6.180.15-node.13',
  uv: '1.43.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.18.1',
  modules: '102',
  nghttp2: '1.45.1',
  napi: '8',
  llhttp: '6.0.4',
  openssl: '3.0.1+quic',
  cldr: '40.0',
  icu: '70.1',
  tz: '2021a3',
  unicode: '14.0',
  ngtcp2: '0.1.0-DEV',
  nghttp3: '0.1.0-DEV'
}
 */
console.log(process.versions)


