import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
  const Button = styled.button`
  font-family: 'Bangers', cursive;
  // background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
  position: relative;
`
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
        <Container>
        <Button className="bouncy" id="signupbtn2" type='submit'>Sign Up</Button>
        </Container>
      </form>
      <p id="textcss"><br/>Have you already faced the Tiny-Arms?</p>
      <Link to='/login'>
       <Container>
      <Button id="loginbtn">Login 
      </Button>
      </Container> 
      </Link>
      {/* <div>{error}</div> */}
    </div>
  );
}
export default Signup;