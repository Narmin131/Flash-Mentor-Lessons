import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const user = {
    name: "Narmin",
    pass: "nermin1",
  };

  const location = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    if (
      user.name === userName.current.value &&
      user.pass === passWord.current.value
    ) {
      alert("He");
      localStorage.setItem("User", user);
      location("/admin");
      window.location.reload();
    } else {
      alert("yox");
    }
  };

  const userName = useRef();
  const passWord = useRef();

  return (
    <>
      <div className="container mt-3">
        <form onSubmit={submitForm}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" ref={userName} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" ref={passWord} />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
