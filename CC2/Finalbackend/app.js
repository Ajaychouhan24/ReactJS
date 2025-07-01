const express = require('express');
const connectMongo = require('./db/dbconfig');
const routes = require('./routes/movieroutes');
const cors = require('cors');
const app = express()
connectMongo()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/movie',routes)


app.listen(4000, () => {
    console.log('server is running....');

})