const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodn Database ${mongoose.connection.host}`);
    }
    catch(error){
        console.log(`Mongodb Database Error ${error}`.bgGreen.black);
    }

};

module.exports = connectDB;