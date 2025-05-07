import mongoose from "mongoose";
import dotenv from "dotenv"

app.use(cors({
    origin: "https://task-tracker-app-theta.vercel.app", // ✅ No trailing slash
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database connected")
    }
    catch (err) {
        console.log("mongodb connection error", err)
        process.exit(1);
    }
}


export default connectDB