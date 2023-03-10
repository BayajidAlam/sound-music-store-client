import React, { useContext, useState } from "react";
import "./Login.css";
import loginImg from "../../assets/loginimg.jpg";
import { TbBrandLinktree } from "react-icons/tb";
import { IoLogoGoogle } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import { toast, Toaster } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Login = () => {
  // context
  const { signIn } = useContext(AuthContext);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // const [ loginUserEmail, setLogInUserEmail ] = useState('');
  // const [token] = useToken(loginUserEmail)

  // if(token){
  //   navigate(from, { replace: true });
  // }
  // login handler
  const handleLogin = (data) => {
    // sign in a user
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        toast.success("Signed in user successfully!");
        // setLogInUserEmail(data.email);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.err(err.message);
      });
  };

  return (
    <section>
      <div
        className="flex items-center
        main-container"
      >
        <div className="w-1/2">
          <img className="h-screen w-full" src={loginImg} alt="" />
        </div>
        <div className="w-1/2">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-full">
              <div className="w-1/8 mx-auto">
                <TbBrandLinktree className="text-3xl" />
              </div>
              <h1 className="text-center text-3xl font-bold">Hello Again!</h1>

              <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
                <div className="form-control w-2/3 mx-auto">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                    })}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                  {errors.email && (
                    <p className="text-main my-1">{errors.email?.message}</p>
                  )}
                </div>
                <div className="form-control w-2/3 mx-auto">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                    })}
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <p className="text-main my-1">{errors.password?.message}</p>
                  )}
                </div>

                <div className="flex justify-between items-center w-2/3 mx-auto">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <input className="mr-2" type="checkbox" />
                      <span className="label-text">Remember me</span>
                    </label>
                  </div>
                  <button className="font-bold">Forget Password?</button>
                </div>

                <div className="w-2/3 mx-auto">
                  <button className="bg-main text-white w-full py-2 font-bold rounded-md">
                    Login
                  </button>
                </div>
              </form>

              <div className="flex w-2/3 mx-auto items-center my-4 justify-center border p-2 rounded-md">
                <IoLogoGoogle className="text-2xl mr-4" />
                <p>Sign in with Google</p>
              </div>

              <div className="text-center">
                <p className="text-xl">
                  Don't have an account?
                  <Link className="font-bold" to="/v2/signup">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </section>
  );
};

export default Login;
