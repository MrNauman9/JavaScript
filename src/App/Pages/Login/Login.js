import React, { useState } from "react";
import "./Login.css";
import { useLoginMutation } from "../../redux/services/DZapi";
import { Link } from "react-router-dom";

function Login() {
  const [login] = useLoginMutation();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState(false); // Managing isError as a boolean

  const onChangeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email: user.email, password: user.password }).unwrap();
      localStorage.setItem("user", JSON.stringify(response?.data?.id));
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login error:", error);
      setIsError(true);
    }
  };
  return (
    <div className="login__body">
      <form className="form__contanier" onSubmit={onSubmitHandle}>
        <div className="form__header">
          <h3 className="form__title">Login</h3>
          <Link to="/signup" className="small__text">
            Don't have an account? <span>SignUp</span>
          </Link>
          {isError && (
          <p className="error__message">Error occurred during login</p>
        )}
        </div>
        <div className="input__field">
          <label htmlFor="email">Email</label>
          <input
            onChange={onChangeHandle}
            type="text"
            name="email"
            value={user.email}
            placeholder="Enter your email"
          />
        </div>
        <div className="input__field">
          <label htmlFor="password">Password</label>
          <input
            onChange={onChangeHandle}
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn">
          Login
        </button>
        <span className="smalltext">Forgot your password?</span>
      </form>
      <div className="login__img">
        <img src="images/login.png" alt="Login" />
      </div>
    </div>
  );
}

export default Login;
