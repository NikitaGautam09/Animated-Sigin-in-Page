import express from "express"

import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'

import multer from "multer"
const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

dotenv.config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

mongoose.connect(process.env.Mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB', err));


app.get("/",(req,res)=>{
    res.send("Api connected")
})

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        if (password === user.password) {
          res.send({ message: "Login Successful", user: user });
        } else {
          res.send({ message: "Password didn't match" });
        }
      } else {
        res.send({ message: "User not registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });
  

// app.post("/register",  (req,res)=>{
//     const {name,email,password}=req.body
//    await User.findOne({email:email},(err,user)=>{
//         if(user){
//             res.send({message:"User already registered"})
//         }else{
//             const user = new User({
//                 name:name,
//                 email,
//                 password
//             })
//             user.save(err=>{
//                 if(err){
//                     res.send(err)
//                 }else{
//                     res.send({message:"Successfully Registered"})
//                 }
//             })
//         }

//     })
  
// })

app.post("/register", async (req, res) => {
    const { name, email, password,image } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        res.send({ message: "User already registered" });
      } else {
        const newUser = new User({
          name: name,
          email: email,
          password: password,
          image:image
        });
        await newUser.save();
        res.send({ message: "Successfully Registered" });
      }
    } catch (err) {
      res.send(err);
    }
  });
  

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    image:String
})

const User = new mongoose.model("User",userSchema)




app.listen(9002,()=>{
    console.log("Backend running")
})