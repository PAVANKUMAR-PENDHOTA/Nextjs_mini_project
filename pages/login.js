import React, { useState } from "react";
import forms from "../styles/Login.module.css";
import { useRouter } from 'next/router';

const login = () => {
    const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const validate = (email, password) => {
    const errors = {};
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
    const { email, password } = data;
    const errors = validate(email, password);
    if (Object.keys(errors).length !== 0) {
      setError(errors);
      //   console.log("succuss", form);
      console.log("hello", { errors });
      alert("Please fill the fields");
      //   navigate('/outlet');
    } else {
      // setError(errors);
      router.push("/home");
      console.log("success");
    }
  };
  return (
    <div>
      <h2 style={{ textAlign: "center",marginTop:"100px" }}> Sign In</h2>
      <div>
        <form onSubmit={submitHandler}>
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

          <input className={forms.button} type="submit" value="Sign In" />
          <input className={forms.button} type="reset" value="Reset" />
          <a href="#" style={{color:"blue", marginLeft:"720px"}}><u>Forgot Password?</u></a>
          <a href="/signup" style={{color:"blue", marginLeft:"100px"}}><u>Don't Have an Account?</u></a>
        </form>
      </div>
    </div>
  );
};

export default login;


