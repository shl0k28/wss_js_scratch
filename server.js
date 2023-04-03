const { createServer, request } = require('http')
const { createHash } = require('crypto')

const PORT = process.env.PORT || 8080 
const WEBSOCKET_MAGIC_STRING = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'

const errors = [
    "uncaughtException",
    "unhandledRejection"
]
errors.forEach(event => {
    process.on(event, (err) => {
        console.error(`Event: ${event}, msg: ${err.stack || err}`)
    })
})

const server = createServer((req, res) => {
    res.writeHead(200)
    res.end()
})

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))

const getClientWebsocketKey = async () => {

}

const getClientSocketHeader = async (key) => {
    const sha1 = createHash()
    sha1.update(key + WEBSOCKET_MAGIC_STRING)
    return sha1.digest('base64')
}