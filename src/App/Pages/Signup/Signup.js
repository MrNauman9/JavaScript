import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignupMutation } from '../../redux/services/DZapi';

function Signup() {
  const [signup, { isError }] = useSignupMutation();
  const [user, setUser] = useState({
    email: '',
    password: '',
    userName: '',
  });

  const onChangeHandle = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(user).unwrap();
      localStorage.setItem('user', JSON.stringify(response?.data?.id));
      console.log('Signup successful', response.data);
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="login__body">
      <form className="form__contanier" onSubmit={onSubmitHandle}>
        <div className="form__header">
          <h3 className="form__title">SignUp</h3>
          <Link to="/login" className="small__text">
            Have an account? <span>Login</span>
          </Link>
          {isError && <p className="error__message">Error occurred during signup</p>}
        </div>
        <div className="input__field">
          <label htmlFor="userName">UserName</label>
          <input
            onChange={onChangeHandle}
            type="text"
            name="userName"
            value={user.userName}
            placeholder="Enter your UserName"
          />
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
          SignUp
        </button>
      </form>
      <div className="login__img">
        <img src="images/signup.png" alt="Signup" />
      </div>
    </div>
  );
}

export default Signup;
