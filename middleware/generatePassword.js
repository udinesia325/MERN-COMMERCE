const bcrypt = require("bcryptjs")

module.exports = async function(password){
  try{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    return hash
  }catch(err){
    console.log(err)
  }
}