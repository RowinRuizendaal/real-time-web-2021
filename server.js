const express = require('express')
const app = express()
const http = require('http').createServer(app)
const router = require('./routes/router')
const io = require('socket.io')(http)



const port = process.env.PORT || 3000;



app.use(router);
app.use(express.static(`${__dirname}/public`));

app.set('view engine', 'ejs');
app.set('views', 'view');


http.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});