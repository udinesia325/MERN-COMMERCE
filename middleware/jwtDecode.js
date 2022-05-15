const jwt = require("jsonwebtoken")
module.exports = async (req,res,next) => {
  
  const token = req.headers.authorization
   try{
  if(!token){
    throw Error("Token Harus diisi")
  }
     const bearer = token.split(" ")[1]
     const userData = await jwt.verify(bearer,process.env.SECRET_KEY)
     req.userData = userData
    next()
  } catch (e) {
    return res.status(400).json({
      message:"unauthorized user"
    })
  }
}