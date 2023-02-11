 
const express = require('express');

const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

const users  = []
const port = 3001

app.get("/", (req, res) => {
    res.send("Hello Universe ")
})

const addUser = (userName, roomId) => {
    users.push({
        userName : userName,
        roomId: roomId
    })
}

const userLeave = (userName) => {
   return users.filter(user => user.userName != userName)
}

const getRoomUsers = (roomId) => {
    return users.filter(user => user.roomId == roomId)
}

io.on('connection', socket => {
    console.log("Someone Connected")
    socket.on("join-room", ({roomId, userName})=>{
        console.log("User Joined Room")
        console.log(roomId)
        console.log(userName)
        socket.join(roomId)
        addUser(userName, roomId)
        socket.to(roomId).emit('user-connected', userName)

  

        io.to(roomId).emit('all-users', {'users': getRoomUsers(roomId), 'log_user': userName})

        socket.on('disconnect', ()=>{
            console.log('disconnected');
            socket.leave(roomId)
            userLeave(userName)
            io.to(roomId).emit('all-users', getRoomUsers(roomId)) 
        })
    })
})

server.listen(port, () =>{
    console.log(`Zoom Clone API listening on 192.168.1.65:3001`)
})