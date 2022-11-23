import React, { useState } from "react";
import forms from "../styles/Login.module.css";
import { useRouter } from 'next/router';

const Signup = () => {
    const router = useRouter();
  const [data, setData] = useState({
    username: "",
    mobile: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const validate = (username, mobile, email, password) => {
    const errors = {};
    if (username === "") {
        errors.username = "Username field is mandatory*";
      }
      if (mobile === "") {
        errors.mobile = "Mobile field is mandatory*";
      }
    if (email === "") {
      errors.email = "Email field is mandatory*";
    }
    if (password === "") {
      errors.password = "Password field is mandatory*";
    }
    return errors;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, mobile, email, password } = data;
    const errors = validate(username, mobile, email, password);
    if (Object.keys(errors).length !== 0) {
      setError(errors); 
      console.log("hello", { errors });
      alert("Please fill the fields");
    } else {
      router.push("/login");
      console.log("success");
    }
  };
  return (
    <div>
        <div><h1 style={{backgroundColor:"blue",width:"45px",marginLeft:"900px", borderRadius:"20px", padding:"3px", color:"white"}}>🔐</h1></div>
      <h2 style={{ textAlign: "center",marginTop:"10px" }}> Sign Up</h2>
      <div>
        <form onSubmit={submitHandler}>
        <input
            className={forms.input}
            type="text"
            name="username"
            onChange={(e) =>
              setData({
                ...data,
                username: e.target.value,
              })
            }
            placeholder="Enter Username.."
          />
          {error.username && <p className={forms.p}>{error.username}</p>}

          <input
            className={forms.input}
            type="text"
            name="mobile"
            onChange={(e) =>
              setData({
                ...data,
                mobile: e.target.value,
              })
            }
            placeholder="Enter Phone no.."
          />
          {error.mobile && <p className={forms.p}>{error.mobile}</p>}

          <input
            className={forms.input}
            type="text"
            name="email"
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            placeholder="Enter Email.."
          />
          {error.email && <p className={forms.p}>{error.email}</p>}
          <input
            className={forms.input}
            type="password"
            name="password"
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            placeholder="Enter Password.."
          />
          {error.password && <p className={forms.p}>{error.password}</p>}

          <input className={forms.button} type="submit" value="Sign Up" />
          <input className={forms.button} type="reset" value="Reset" />
          {/* <a href="#" style={{color:"blue", marginLeft:"720px"}}><u>Forgot Password?</u></a> */}
          <a href="/login" style={{color:"blue", marginLeft:"720px"}}><u>Already Have an Account?</u></a>
        </form>
      </div>
    </div>
  );
};

export default Signup;


