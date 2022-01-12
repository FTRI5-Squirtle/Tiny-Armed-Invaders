import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLogin] = useState(false);
  const [user_id, setUserId] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqOptions = {
      username: username,
      email: email,
      password: password,
    };
    const response = await axios.post(
      'http://localhost:3000/users/signup',
      reqOptions
    );
    if (response.data.error) error = response.data.error;
    if (response.data.username) {
      //TBD
      setLogin(true);
      setUserId(response.data.username);
      navigate('/game', { state: { username: response.data.username } });
    }
  };
  return (
    <div className="signupform">
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label id="labelcssemail">Email</label>
        <input  placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
        <label id="labelcss">Username</label>
        <input 
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        </div>
        <div>
        <label id="labelcss">Password{   }</label>
        <input
          type="password" 
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button id="signupbtn2" type='submit'>Sign Up</button>
      </form>
      <p id="textcss"><br/>Already have an account?</p>
      <Link to='/login'>
      <button id="loginbtn">Login 
      </button>
      </Link>
      {/* <div>{error}</div> */}
    </div>
  );
}
export default Signup;