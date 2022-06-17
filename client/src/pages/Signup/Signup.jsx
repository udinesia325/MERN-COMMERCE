import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {baseUrl} from "../../config"
function Signup() {
  const [user,setUser] = useState("")
  const [pass, setPass] = useState("")
  const [message,setMessage] = useState("")
  const navigate = useNavigate()
  const handleUser = (e) => {
    setUser(e.target.value)
  }
  const handlePass = (e) => {
    setPass(e.target.value)
  }
  const handleSubmit = async  (e) => {
    e.preventDefault()
    if(user.length != 0 && pass.length != 0){
     try{
      await axios.post(baseUrl+"auth/register",{username:user, password:pass})
      setMessage("Register Berhasil ! Silahkan Login!")
      setTimeout(()=> {
        navigate("/login")
      }, 3000);
     }catch(e){
       console.log(e);
    //   setMessage(e.response.data.message)
     }
    }else{
      setMessage("Username dan Password Wajib Diisi !")
    }
  }
  
  
  return (
        <div className="flex justify-center items-center 
                    h-screen 
                    bg-bgSignUp bg-no-repeat bg-cover">
            <div className="p-6 rounded-md shadow-lg bg-white w-96">
            <h1 className="text-3xl font-bold mb-5 text-black-600 text-center align-middle">Sign Up</h1>
            <p>{message}</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-3">
                       
                        
                    </div>
                    <div className="form-group mb-6">
                        <input type="username" className="form-control block
                            w-full
                            px-3
                            py-2.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Username" onChange={handleUser} required />
                    </div>
                    <div className="form-group mb-6">
                        <input type="password" className="form-control block
                            w-full
                            px-3
                            py-2.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Password" onChange={handlePass} required />
                    </div>
                    <button type="submit" className="
                    w-full
                    px-6
                    py-4
                    bg-red-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-red-700 hover:shadow-lg
                    focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-red-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out">Sign up</button>
                </form>
                <p className="text-center text-sm mt-5 text-gray-600">Already have an account?&nbsp;
                  <Link to="/login" className="underline-offset-1 hover:underline decoration-solid text-black-600">Sign In</Link>
                </p>
            </div>    
        </div>
  )
}

export default Signup