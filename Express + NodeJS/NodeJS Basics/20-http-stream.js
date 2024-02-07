var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // sends complete data once
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    //below lines send data to server in chunks not all data
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(3000)