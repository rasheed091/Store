import React, { useState } from "react";
import { TbShoppingCartDollar } from "react-icons/tb";
import { AiOutlineMail } from "react-icons/ai";
import { FaAt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { TbBrandGoogle } from 'react-icons/tb';
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../pProject/Project";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function () {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPass, setConPass] = useState("");
  const provider = new GoogleAuthProvider();

  const nav = useNavigate();

  function confirmReg(e) {
    if (!email || !password || !userName || !conPass ) {
      console.log('all feild are required');
      toast.error('all field are required');
      return; 
    }
    if (!emailCheck(email)) {
      console.log('Email is incorrect');
      toast.error('Incorrect Email');
      return;
    }
    if (!passwordCheck(password)) {
      console.log('Incorrect Password');
      toast.error('Password is Weak');
      return; 
    }

    if (password !== conPass) {
      console.log('Password does not match');
      toast.error('Password does not match');
      return;
    }

    if (password.includes(123)) {
      toast.error('password is too weak');
      return;
    }
    if (password.length < 6) {
      toast.error('password is too short');
      return;
    }


    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        toast.success('Sign Up Successfully')
        nav('/login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error('Register not Successfully')
      });
    
  }

  function googleCon() {

    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success('Google Signin Successfully')
        nav('/proo')
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  const emailCheck = (email)=>{
    let emailVery =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return emailVery.test(email)

  }
  const passwordCheck = (password)=>{
    let passwordVery =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    return passwordVery.test(password)

  }

  return (
    <>
      <div className="text-[white]  px-4 bg-[#241a14] ">
        <div
          className=" justify-center flex "
          style={{ fontFamily: "Ubuntu", color: "white" }}
        >
          <div className="shadow w-[50%]  bg-[brown]/10 backdrop-blur-lg font-bold rounded-2xl p-7 mt-[10%]">
            <h1
              className="text-center mb-17 animate-pulse tracking-[15px] text-white"
              style={{ fontFamily: "Berkshire Swash", fontSize: 60 }}
            >
              Register Now
            </h1>
            <div className="flex justify-center items-center mt-[40px] flex-col gap-7">
              <div className="border rounded-[38px] w-[60%] h-[7vh] flex  place-content-between">
                <button className=" px-9 py-3 rounded-3xl  text-black hover:bg-white hover:text-[#241a14] transition duration-300">
                  Register
                </button>
                <Link to="/login">
                  <button className="px-9 py-2.5 rounded-3xl text-black hover:bg-white hover:text-[#241a14] transition duration-300">
                    Login
                  </button>
                </Link>
              </div>
              <div className="border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3">
                <input
                  className="w-[80%]"
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <AiOutlineMail color="orangered" size={20} />
              </div>
              <div className="border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3">
                <input
                  className="w-[80%]"
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) =>setUserName(e.target.value)}
                  value={userName}
                />
                <FaAt color="orangered" size={20} />
              </div>
              <div className="border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3">
                <input
                  className="w-[100%]"
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
              </div>
              <div className="border rounded-[38px] w-[60%] h-[7vh] flex items-center p-2 gap-7 place-content-between px-3 ">
                <input
                  className="w-[100%] border-none"
                  type="password"
                  placeholder="Confirm password"
                  onChange={(e) => setConPass(e.target.value)}
                  value={conPass}
                />
              </div>
              <button className="py-[10px] px-[40px] w-[50%] text-black hover:bg-white hover:text-[#241a14] transition duration-300 rounded-2xl" onClick={confirmReg}>Submit</button>
              <div 
                onClick={googleCon} 
                className=" bg-[red] rounded-2xl flex px-16 py-2 gap-6">
                <TbBrandGoogle size={30}/>
                <button> Sign in with Google</button>
              </div>
            </div>
          </div>
          <img
            className="w-[50%] h-[120vh] mt-[10%] rounded-2xl "
            src="src/assets/sir-simo-crUoLUUD0Ew-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
