const express = require('express'); // Rotiamento
const mongoose = require('mongoose'); // Conecxão com o DB
const cors = require('cors'); // Permite o acesso de outros aplicações
const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('nova conexão', socket.id);
});

mongoose.connect('mongodb+srv://dev:dev@cluster0-byale.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(cors());
app.use(express.json()); //Habilita o express a receber/usarjson
app.use(routes);

server.listen(3333);