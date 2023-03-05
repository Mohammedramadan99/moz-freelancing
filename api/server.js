import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

// import routes 
import authRoute from './Routes/auth.route.js'
import userRoute from './Routes/user.route.js'

const app = express()

// dotenv -  to load environment variables from .env file
dotenv.config()

// connect to DB
mongoose.set('strictQuery',true)
const connect = async () => {

    try {
        await mongoose.connect(process.env.DB_URL)
        console.log('connected to mongodb')
    } catch (err) {
        console.log(err)
    }
}

// routes
app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)

const PORT = process.env.PORT ? process.env.PORT : 8800
app.listen(PORT,() => {
    // invocing connect function to connect to the db 
    connect()
    console.log(`backend server running ${PORT}`)
})