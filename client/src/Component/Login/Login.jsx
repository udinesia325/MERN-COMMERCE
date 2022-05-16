import { Link } from "react-router-dom";

function Login() {
	return (
		<div class="flex justify-center items-center h-screen bg-bgSignUp bg-no-repeat bg-cover">
      <div class="p-6 rounded-md shadow-lg bg-white w-96">
        <h1 class="text-3xl font-bold mb-5 text-blue-600 text-center align-middle">Log In</h1>
        <form>
          <div class="flex flex-col gap-2">
            <div class="form-group mb-6">
              <input type="text" class="form-control block w-full px-3 py-2.5
                  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Username" required />
            </div>
            <div class="form-group mb-6">
              <input type="password" class="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                  rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                  required:border-red-600"
                placeholder="Password" />
            </div>
            <button type="submit" class="
            w-full px-6 py-4 bg-blue-600 text-white  font-medium text-xs leading-tight uppercaserounded shadow-md
            hover:bg-blue-700 hover:shadow-lgfocus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
            	Log In
            </button>
          </div>
        </form>
        <p className="text-center text-sm mt-5 text-gray-600">Belum punya akun? <Link to="/signup" className="underline-offset-1 underline decoration-solid text-blue-600">Sign Up</Link></p>
      </div>    
    </div>
	)
}


export default Login;