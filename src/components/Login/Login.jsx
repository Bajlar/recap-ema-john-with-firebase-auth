import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {
    const [show, setShow] = useState(false);
    const {logIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    let from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type={show ? 'text' : 'password'} name="password" id="" required />
                    <p onClick={() => setShow(!show)}>
                        <small className='pointer'>
                            {
                                show ? <span>Hide Password</span> : <span>Show Password</span>
                            }
                        </small>
                    </p>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p className='text-center'><small>New to Ema-john? <Link to='/signup' className='text-orange'>Create New Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;