import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from "./routes/productRoutes.js"
import cookieParser from 'cookie-parser'
import cors from "cors"
import dns from "dns"

const app = express();

dns.setServers(["8.8.8.8"])

// to convert json data to original form
app.use(express.json())

//connect server to frontend

app.use(cors({ origin: "https://e-commerce-sigma-seven-55.vercel.app", credentials:true }))

// to access cookies
app.use(cookieParser())

// to access .env variables
dotenv.config()

// Establishing mongodb connection
connectDB()




// register routes
app.use(authRoutes);
app.use(productRoutes)



app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})

