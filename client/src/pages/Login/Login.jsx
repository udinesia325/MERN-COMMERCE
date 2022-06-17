import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginProcess } from "../../redux/actions/loginActions";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const loginState = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginProcess(user, pass));
  };
  const handleUsername = (e) => {
    setUser(e.target.value.trim());
  };
  const handlePassword = (e) => {
    setPass(e.target.value.trim());
  };
  useEffect(() => {
    if (loginState.isLogin) {
      dispatch({type:"CLEAR"})
      navigate(-1);
    }
  }, [loginState]);
  return (
    <div className="w-screen h-screen flex bg-sky-300 items-center justify-center">
      <div className="flex justify-center items-center">
        <div className="bg-sky-100 p-9 h-screen w-screen md:w-[50vw] flex items-center justify-center">
          <div className="">
            <h1 className="text-center mb-11 font-bold text-2xl text-gray-800">
              TOKOKPAKEDI
            </h1>
            <p className="font-semibold">LOG IN</p>
            <form autoComplete="off" className="flex flex-col mt-10" onSubmit={handleSubmit}>
            <p className="text-red-400">{loginState.error || ""}</p>
              <label htmlFor="username">MASUKAN USERNAME</label>
              <input
                className="border w-72 h-10 rounded-sm hover:rounded-xl active:border-0 pl-5"
                id="username"
                type="text"
                placeholder="Username"
                onChange={handleUsername}
              />
              <br />
              <label htmlFor="username">MASUKAN PASSWORD</label>
              <input
                className="border w-72 h-10 rounded-sm hover:rounded-xl active:border-0 pl-5"
                id="username"
                type="password"
                placeholder="Password"
                onChange={handlePassword}
              />

              
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-blue-400 rounded-lg text-white font-semibold block w-full px-2 py-1 mt-6"
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
}

export default Login;
