const http = require('http').createServer()
const io = require('socket.io')(http, {
    cors: {origin: '*'},
    cookie: true,
})

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('message', (message) => {
        io.emit('message', message)
    })

    socket.on('disconnect', (reason) => {
        socket.disconnect()
        console.log("user diconnect", reason)
    })
})


http.listen(8080, ()=> console.log('listen on port 8000'))