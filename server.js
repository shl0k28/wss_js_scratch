const { createServer } = require('http')
const PORT = process.env.PORT || 8080 

createServer((req, res) => {
    res.writeHead(200)
    res.end()
}).listen(PORT, () => console.log(`Server listening on port: ${PORT}`))