import url from 'url'

const {URL}=url

const myUrl=new URL('/api/url.html?name=king#bar','http://nodejs.cn:89')

console.log(myUrl.hash)

/**
 * host包含端口 nodejs.cn:89
 */
console.log(myUrl.host)

// nodejs.cn
console.log(myUrl.hostname)

// http://nodejs.cn:89/api/url.html#bar
console.log(myUrl.href)

// http://nodejs.cn:89
console.log(myUrl.origin)

// /api/url.html
console.log(myUrl.pathname)

// 89
console.log(myUrl.port)

// http:
console.log(myUrl.protocol)

// ?name=king
console.log(myUrl.search)

// URLSearchParams { 'name' => 'king' }
console.log(myUrl.searchParams)

// http://nodejs.cn:89/api/url.html?name=king#bar
console.log(myUrl.toString())

// http://nodejs.cn:89/api/url.html?name=king#bar
console.log(myUrl.toJSON())


myUrl.searchParams.append('age','12')

// name=king&age=12
console.log(myUrl.searchParams.toString())

// URLSearchParams Iterator { 'name', 'age' }
console.log(myUrl.searchParams.keys())

// [ 'king', '12' ]
console.log(Array.from(myUrl.searchParams.values()))







