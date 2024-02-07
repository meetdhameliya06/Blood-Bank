const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')


//config
dotenv.config();

//MongoDB Connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json())
app.unsubscribe(cors())
app.use(morgan('dev'))


//routes 
// 1 test
app.use("/api/v1/test",require("./routes/testRoutes"));
app.use("/api/v1/auth",require("./routes/authRoutes"));
app.use("/api/v1/inventory",require("./routes/inventoryRoutes"))
//port  
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Node server Running in ${process.env.DEV_MODE} ${process.env.PORT}`
    .bgBlue .white);
})

