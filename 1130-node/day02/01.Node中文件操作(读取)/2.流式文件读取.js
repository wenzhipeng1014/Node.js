/*
* 流式文件读取：
*   fs.createReadStream(path[, options])
*       --path:要读取的文件路径+文件名+文件后缀
*       --options：配置对象
*           --flag：打开文件要进行的操作，默认值：'w'
*                     'w' : 写入
*                     'r' ：读取
*                     'a' ：追加
*            --mode ：文件的权限控制，默认值是0o666
*                     0o111 : 文件可被执行的权限
*                     0o222 ：文件被写入的权限
*                     0o444 ：文件被读取的权限
*            --encoding ：编码，默认是：'utf-8'
*            --fd ：文件描述符（文件内部编码），默认值是null
*            --autoClose ：自动关闭，当数据写入完毕后，自动关闭操作完的文件，默认值true
*            --start：读取文件的起始位置，默认是0
*            --end ：读取文件结束的位置，默认是highWaterMark
*            --highWaterMark：每次读取数据的大小（水管的粗细），默认值 64（字节byte） * 1024
* */

let fs = require('fs')
//创建了一个可读流
let rs = fs.createReadStream('../music.mp3',{
  highWaterMark:64 * 1024
})
//创建一个可写流
let ws = fs.createWriteStream('./music2.mp3')

rs.on('open',()=>{
  console.log('可读流打开了')
})

rs.on('close',()=>{
  console.log('可读流关闭了')
  ws.end()
})

ws.on('open',()=>{
  console.log('可写流打开了')
})

ws.on('close',()=>{
  console.log('可写流关闭了')
})

//将一个可读流绑定了data事件，会自动触发数据进入可读流
rs.on('data',(data)=>{
    //console.log(data)
    ws.write(data)
})






