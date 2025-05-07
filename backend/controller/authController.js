import userAuth from "../models/auth.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";


export const signin = async (req,res) => {
    try {
        const { name, email, password, country } = req.body

        if (!name || !email || !password || !country) {
            return res.send({ message: "all feild are required" })
        }

        const existingUser = await userAuth.findOne({ email })

        if (existingUser) {
            return res.status(400).json({ message: "user is already exist" })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        
        const newUser = new userAuth({ name, email, password: hashedPassword, country })
        await newUser.save()  

        const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET)

        res.status(200).json({ message: "registration sucess",token })

    } catch (err) {
        return res.status(500).json({ message: "Server error during signin" })
    }
}

export const LogIn = async (req,res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "email and password are required" })
        }

        const user = await userAuth.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const isMatched = await bcrypt.compare(password, user.password)

        if (!isMatched) {
            return res.status(401).json({ message: "Invalid password"})
        }

        const token = jwt.sign({ name: user.name }, process.env.JWT_SECRET)

        res.status(200).json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                country: user.country
            }
        });
    } catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Server error during login" })
    }
}