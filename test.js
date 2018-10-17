let fs = require('fs')

// fs.readFile('/Users/zhangyongwang/Desktop/1.txt', (err, data) => {
//     if (err) throw err;
//     console.log(err);
//     console.log(data);
//     console.log(data.toString())
// });

// 在 macOS、Linux 与 Windows 上：
// let data = fs.readFileSync('/Users/zhangyongwang/Desktop/1.txt');
// console.log(data)
// console.log(data.toString())
// => [Error: EISDIR: illegal operation on a directory, read <directory>]

let http = require('http')

let server = http.createServer(function (req, res) {
    console.log(req.url)
    res.statusCode = 201
    res.write('hello')
    res.end()
})

server.listen(9999);
console.log('9999')
