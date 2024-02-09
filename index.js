const server = require('./api/server')

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`All the magic's happening on port ${PORT}!!`)
})
