const loginModel = require("../models/loginModel")
const bcrypt = require("bcryptjs")
const generatePassword = require("../middleware/generatePassword")
const jwt = require("jsonwebtoken")
const login = async (req,res) => {
  const {username, password} = req.body
  try {
    //ambil data user dari db
    const userData = await loginModel.findOne({username})
    
    //jika tidak ada user di temukan
    if(userData == null){
      throw "Username tidak di temukan !"
    }
    if(userData.active == false){
      throw Error("User Masih Belum Diaktivasi oleh admin")
    }
    // apakah password benar
    const isVerify = await bcrypt.compare(password,userData.password)
    if(isVerify){
    // daya yang ada di dalam token
    const payload = {
      _id:userData._id,
      username:userData.username,
      role:userData.role,
    }
    //bikin token
    const token = await jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:"1d"})
    res.status(200).json({
      message:"Login Berhasil!",username,token
    })
    }else{
      res.status(403).json({
        message:"Unauthorized user"
      })
    }
  } catch (e) {
    //jika ada error
    if(process.env.APP_STATUS == "dev"){
      res.status(500).json({
        message:`${e}`
      })
    }else{
    res.status(503).json({
       message:"Internal Server Error"
    })
    }
  }
}

const register = async (req,res) => {
  const {username, password} = req.body
  try{
    // hash password dari middleware
    const hashed = await generatePassword(password)
    // buat user baru
    await loginModel.create({username, password: hashed})
    res.status(200).json({
      message:"Berhasil Didaftarkan! tunggu konfirmasi dari admin"
    })
  }catch(err){
    console.log(err);
    if(process.env.APP_STATUS == "dev"){
      res.status(400).json({message:err})
    }else{
      res.status(503).json({message:"Internal Server Error"})
  }
}
}
module.exports = {login,register}