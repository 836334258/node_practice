import os from 'os'
import { config } from 'process'
import { parseConfigFileTextToJson } from 'typescript'

// window下是\r\n,linux下面是\n
console.log('1'+os.EOL+'2')

// cpu架构 x64
console.log(os.arch())

// 操作系统特定常量
console.log(os.constants)

// cpu内核信息对象数组
/**
 * [
  {
    model: 'AMD Ryzen 7 5700U with Radeon Graphics',
    speed: 1796,
    times: { user: 540, nice: 0, sys: 1060, idle: 1245100, irq: 0 }
  }
]
 */
console.log(os.cpus())

// linux是/dev/null
console.log(os.devNull)

// 返回剩余的内存(字节) 6485471232
console.log(os.freemem())

// 指定线程的优先级
console.log(os.getPriority())

// 用户的主目录 /home/king
console.log(os.homedir())

// 用户的主机名 LAPTOP-CSF8P6S1
console.log(os.hostname())

// 1,5,15分钟的平均负载 [ 0.07, 0.09, 0.02 ]
console.log(os.loadavg())

/**
 * 网络接口对象
 * 
 * eth0: [
    {
      address: '172.23.88.120',
      netmask: '255.255.240.0',
      family: 'IPv4',
      mac: '00:15:5d:6c:d2:06',
      internal: false,
      cidr: '172.23.88.120/20'
    },
 */
console.log(os.networkInterfaces())

// 操作平台的名称 linux
console.log(os.platform())

// 操作系统的名称 5.10.60.1-microsoft-standard-WSL2
console.log(os.release())

// 设定进程优先级-20 - 19 从高到低,不使用sudo会报错
try{
  os.setPriority(0,-10)
}catch(err){
  console.log('err',err)
}

// 临时文件目录 /tmp
console.log(os.tmpdir())

// 内存总量 7187771392
console.log(os.totalmem())

// 操作系统名称 Linux
console.log(os.type())

// 系统正常运行时间 2999.88
console.log(os.uptime())

/**
 * 用户信息
 * {
  uid: 1000,
  gid: 1000,
  username: 'king',
  homedir: '/home/king',
  shell: '/bin/bash'
}
 */
console.log(os.userInfo({encoding:'utf-8'}))

// 返回标识内核版本的字符串 #1 SMP Wed Aug 25 23:20:18 UTC 2021
console.log(os.version())