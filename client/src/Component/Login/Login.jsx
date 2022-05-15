

function Login() {
	return (
		<div className="container w-full bg-center m-auto h-[700px] bg-bgLogin relative">
		<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-bold absolute top-80 left-72">
			TOKOPAKEDI login
		</span>
			<div className="boxLogin w-96 h-96 bg-white shadow-md absolute top-36 right-0 p-4 bg-gradient-to-r from-cyan-500 to-blue-500">
				<h1 className="font-bold text-cyan-200 text-center text-xl">Log in</h1>
				<div className="username flex flex-col mt-8">
					<label htmlFor="username" className="text-white font-semibold">Username</label>
					<input type="text" id="username" className="rounded-md px-2 py-1" />
				</div>
				<div className="password flex flex-col my-8">
					<label htmlFor="password" className="text-white font-semibold">Password</label>
					<input type="passowrd" id="password" className="rounded-md px-2 py-1" />
				</div>
				<button className="bg-blue-400 rounded-lg text-white font-semibold block w-full px-2 py-1">LOG IN</button>
			</div>
		</div>
	)
}


export default Login;