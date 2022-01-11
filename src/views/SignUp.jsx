import React from 'react';
// import { Link } from 'react-router-dom';

const SignUp = () => {
    const [values, setValues] = React.useState({
        username: '',
        email: '',
        password: '',
    });

    const onFormSubmit = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: values.username,
                email: values.email,
                password: values.password
            })
        }
        fetch('SignUp', requestOptions)
          .then(res => res.json())
          .then(res => {
             
          })
    };

    // const handleInputChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value })
    // };


return (
    <div>
        <div className='signup'>
            <form>
                <div className='form-group'>
                    <label htmlFor='username'>Username:</label>
                    <input
                    type='username'
                    id='username'
                    // onChange={handleInputChange('username')}
                    value={values.username}
                    name='username'
                    className='form-conrol'
                    placeholder='Enter Email'
                    />
                </div>
                {/* <Link to="/Login"> */}
                  <button onClick={onFormSubmit} variant="outlined">
                  Sign Up
                  </button>
                {/* </Link>    */}
            </form> 
        </div>       
    </div>
)
}

export default SignUp