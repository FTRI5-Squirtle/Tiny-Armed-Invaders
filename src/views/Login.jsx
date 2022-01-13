import React, { useState } from 'react';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import regeneratorruntime from 'regenerator-runtime';
import styled from 'styled-components';

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
  font-family: 'Bangers', cursive;
`
  return (
    <div className='logIn'>
      <Container>
      <h1>Login To Face the Tiny-Armed Hoardes!</h1>
      </Container>
      <div className="centerDiv">
      <form className="loginform" onSubmit={handleSubmit}>
        <label id="labelcss">Email </label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label id="labelcss">Password </label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <Button id="loginbtn2" type="submit">
          Log in
        </Button>
      </form>
      </div>
      <Container>
      <h2 >New here? Sign Up to Answer the Call</h2>
      </Container>
      <Link to="/signup">
        <Container>
        <Button className="bouncy" id="signupbtn">Sign Up </Button>
        </Container>
      </Link>
      <div>{error}</div>
    </div>
  );
}