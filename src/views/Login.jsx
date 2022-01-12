import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import regeneratorruntime from 'regenerator-runtime';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLogin] = useState(false);
  const [username, setUsername] = useState('');
  let error;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqOptions = { email, password };
    const response = await axios.post('/users/login', reqOptions);
    if (response.data.error) error = response.data.error;
    if (response.data.username) {
      //TBD
      //console.log(response.data.user_id);
      console.log(username);
      setUsername(response.data.username);
      setLogin(true);
      navigate('/game', { state: { username: response.data.username } });
    }
  };

  return (
    <div className='logIn'>
      <h1>Login</h1>
      <form className="loginform" onSubmit={handleSubmit}>
        <label id="labelcss">Email </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label id="labelcss">Password </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button id="loginbtn2" type="submit">
          Log in
        </button>
      </form>
      <p id="textcss">Don't have an account yet?</p>
      <Link to="/signup">
        <button id="signupbtn">Sign Up </button>
      </Link>
      <div>{error}</div>
    </div>
  );
}