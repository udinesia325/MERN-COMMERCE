function Login() {
  return (
    // <div className="container w-full bg-center m-auto h-[700px] bg-bgLogin relative">
    // <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-bold absolute top-80 left-72">
    // 	TOKOPAKEDI login
    // </span>
    // 	<div className="boxLogin w-96 h-96 bg-white shadow-md absolute top-36 right-0 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
    // 		<h1 className="font-bold text-cyan-200 text-center text-xl">Log in</h1>
    // 		<div className="username flex flex-col mt-8">
    // 			<label htmlFor="username" className="text-white font-semibold">Username</label>
    // 			<input type="text" id="username" className="rounded-md px-2 py-1" />
    // 		</div>
    // 		<div className="password flex flex-col my-8">
    // 			<label htmlFor="password" className="text-white font-semibold">Password</label>
    // 			<input type="passowrd" id="password" className="rounded-md px-2 py-1" />
    // 		</div>
    // 		<button className="bg-blue-400 rounded-lg text-white font-semibold block w-full px-2 py-1">LOG IN</button>
    // 	</div>
    // </div>n

    // Cobain tampilan ane bang :v

    <div className="w-screen h-screen flex bg-sky-300 items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="bg-sky-100 p-9 h-screen w-screen md:w-[50vw] flex items-center justify-center rounded-r-3xl">
          <div className="">
            <h1 className="text-center mb-11 font-bold text-2xl text-gray-800">
              TOKOKPAKEDI
            </h1>
            <p className="font-semibold">LOG IN</p>
            <form className="flex flex-col mt-10">
              <label htmlFor="username">MASUKAN USERNAME</label>
              <input
                className="border w-72 h-10 rounded-sm hover:rounded-xl active:border-0 pl-5"
                id="username"
                type="text"
                placeholder="Username"
              />
              <br />
              <label htmlFor="username">MASUKAN PASSWORD</label>
              <input
                className="border w-72 h-10 rounded-sm hover:rounded-xl active:border-0 pl-5"
                id="username"
                type="password"
                placeholder="Password"
              />

              <button className="bg-blue-400 rounded-lg text-white font-semibold block w-full px-2 py-1 mt-6 hover:rounded-2xl transition-all">
                LOG IN
              </button>
              <button
                type="submit"
                className="bg-blue-400 rounded-lg text-white font-semibold block w-full px-2 py-1"
              >
                LOG IN
              </button>
              <p>
                Belum memiliki akun ? <Link to="/signup">Daftar</Link>
              </p>
            </form>
          </div>
        </div>
        <div className="h-screen w-[50vw] hidden md:flex"></div>
      </div>
    </div>
  );

  // import {useState,useEffect} from "react"
  // import {useDispatch,useSelector} from "react-redux"
  // import {loginProcess} from "../../redux/actions/loginActions"
  // import {useNavigate,Link} from "react-router-dom"
  // function Login() {
  //   const [user,setUser] = useState("")
  //   const [pass,setPass] = useState("")
  //   const loginState = useSelector(state => state.login)
  //   const dispatch = useDispatch()
  //   const navigate = useNavigate()
  //   const handleSubmit = (e) => {
  //     e.preventDefault()
  //     dispatch(loginProcess(user,pass))
  //   }
  //   const handleUsername = (e) => {
  //     setUser(e.target.value)
  //   }
  //   const handlePassword = (e) => {
  //     setPass(e.target.value)
  //   }
  //   useEffect(()=>{
  //     if(loginState.isLogin){
  //       navigate("/")
  //     }
  //   },[loginState])
  // 	return (
  // 	  <form onSubmit={handleSubmit} autoComplete="off">
  // 		<div className="container w-full bg-center m-auto h-[700px] bg-bgLogin relative">
  // 		<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-bold absolute top-80 left-72">
  // 			TOKOPAKEDI login
  // 		</span>

  // 			<div className="boxLogin w-96 h-96 bg-white shadow-md absolute top-36 right-0 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
  // 				<h1 className="font-bold text-cyan-200 text-center text-xl">Log in</h1>
  // 						{loginState.error &&<span>{loginState.error}</span>}
  // 				<div className="username flex flex-col mt-8">
  // 					<label htmlFor="username" className="text-white font-semibold">Username</label>
  // 					<input type="text" id="username" className="rounded-md px-2 py-1" onChange={handleUsername} />
  // 				</div>
  // 				<div className="password flex flex-col my-8">
  // 					<label htmlFor="password" className="text-white font-semibold">Password</label>
  // 					<input type="password" id="password" className="rounded-md px-2 py-1" onChange={handlePassword} />
  // 				</div>

  // 			</div>
  // 		</div>
  // 		</form>
  // 	)

  // }
}

export default Login;
