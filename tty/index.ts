import tty from 'tty'
import process from 'process'

// process.stdin是node进程中tty.ReadStream的唯一实例,process.stdout 和 process.stderr 将是为 Node.js 进程创建的唯一的 tty.WriteStream 实例，
const {stdin,stdout}=process

// 如果终端当前配置为作为原始设备运行，则为 true。 默认为 false。
console.log(process.stdin.isRaw)

// 对于 tty.ReadStream 实例，始终为 true
console.log(stdin.isTTY)

// 每当 writeStream.columns 或 writeStream.rows 属性发生更改时，则会触发 'resize' 事件。
stdout.on('resize',()=>{
  console.log('screen size has changed!');
  console.log(`${process.stdout.columns}x${process.stdout.rows}`);
})

console.log(stdout.clearLine(0))
console.log(stdout.clearScreenDown())

// 终端支持的颜色 8代表256色
console.log(stdout.getColorDepth())

// WriteStream 对应的终端的尺寸 [ 149, 23 ]
console.log(stdout.getWindowSize())