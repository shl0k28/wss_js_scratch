const { createServer } = require('http')
const PORT = process.env.PORT || 8080 

const errors = ["uncaughtException","unhandledRejection"]
errors.forEach(event => {
    process.on(event, (err) => {
        console.error(`Event: ${event}, msg: ${err.stack || err}`)
    })
})
createServer((req, res) => {
    res.writeHead(200)
    res.end()
}).listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
