import React, { useState } from "react";
import loginIcons from "../../assest/signin.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../../helpers/imageTobase64";
import SummaryApi from "../../common";
import { toast } from 'react-toastify';


export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    Confirmpassword: "",
    ProfilePic: "",
  })
  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleUploadPic = async (e) => {
    const file = e.target.files[0]
    const imagePic = await imageTobase64(file);
    setData((prev) => ({
      ...prev,
      ProfilePic: imagePic,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (data.password === data.Confirmpassword) {
    
      const dataResponse = await fetch(SummaryApi.SignUp.url,{
        method: SummaryApi.SignUp.method,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataApi = await dataResponse.json();

      if(dataApi.success) {
        toast.success(dataApi.message)
        navigate("/login")
      }

      if(dataApi.error) {
        toast.error(dataApi.message)
      }

      /*toast(dataApi.message)*/

      console.log("data", dataApi);
    } else {
      console.log("please check password and confirm password");
    }

    if (data.password !== data.Confirmpassword) {
      alert("Passwords do not match");
      return;
    }

  };

  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-5 w-full max-w-sm mx-auto">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div>
              <img src={data.ProfilePic || loginIcons} alt="login icons" />
            </div>
            <label>
              <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                Upload Photo
              </div>
              <input
                type="file"
                className="hidden"
                onChange={handleUploadPic}
              />
            </label>
          </div>

          <form className="pt-6 flex flex-col gap-0" onSubmit={handleSubmit}>
            <label> Name :</label>
            <div className="bg-stone-300 p-2">
              <input
                type="text"
                placeholder="enter your name"
                name="name"
                value={data.name}
                onChange={handleOnChange}
                required
                className="w-full h-full outline-none bg-transparent"
              />
            </div>

            <label>Email :</label>
            <div className="bg-stone-300 p-2">
              <input
                type="email"
                placeholder="enter email"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                required
                className="w-full h-full outline-none bg-transparent"
              />
            </div>

            <label>Password :</label>
            <div className="bg-stone-300 p-2 flex">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="enter password"
                value={data.password}
                name="password"
                onChange={handleOnChange}
                required
                className="w-full h-full outline-none bg-transparent"
              />
              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>

            <label>Confirm Password :</label>
            <div className="bg-stone-300 p-2 flex">
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="enter confirm password"
                value={data.Confirmpassword}
                name="Confirmpassword"
                onChange={handleOnChange}
                required
                className="w-full h-full outline-none bg-transparent"
              />
              <div
                className="cursor-pointer text-xl"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                <span>{showConfirmPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-black text-white px-6 py-1 w-full max-w-[150px] rounded-full hover:scale-110 transition-transform mx-auto block mt-6"
            >
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have an account?{" "}
            <Link
              to={"/login"}
              className="text-red-600 hover:text-red-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};