import path from 'path'

const PWD='/mnt/e/code/test_code/node_practice'

// 返回path的最后一部分
console.log(path.basename(PWD))

// 定界符 linux下: win ;
console.log(path.delimiter)

// 目录名 /mnt/e/code/test_code
console.log(path.dirname(PWD))

// 扩展名 .html
console.log(path.extname('index.html'))

// path对象
/**
 * {
  root: '/',
  dir: '/mnt/e/code/test_code',
  base: 'node_practice',
  ext: '',
  name: 'node_practice'
}
 */
console.log(path.parse(PWD))

// 路径字符串
console.log(path.format({
  root: '/',
  dir: '/mnt/e/code/test_code',
  base: 'node_practice',
  ext: '',
  name: 'node_practice'
}))

// 是否是绝对路径
console.log(path.isAbsolute(PWD))

// 规范生成路径 a/b/c
console.log(path.join('a','b','c'))

// 解析. ..的path片段 /foo/bar/baz/asdf
console.log(path.normalize('/foo/bar//baz/asdf/quux/..'))

// from到to的相对路径 ../..
console.log(path.relative('/a/b/c','/a'))

// 将路径或者路径片段解析为绝对路径，顺序从右往左，直到构建绝对路径后马上停止 /b/c/d
console.log(path.resolve('/a','/b','c','./d'))

// 分隔符 /
console.log(path.sep)