import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authAPICall } from '../../utils/authAPICall';
import { AUTH_SERVICE_TOKEN } from '../../utils/constants';
import { setCookie } from '../../utils/cookieHelper';
import { INDEX, SIGNUP } from '../../utils/routerLinks'
import './auth.css'

const Login = () => {
    const { push } = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginHandler = async (event) => {
        event.preventDefault();
        const loginData = { email, password };
        const response = await authAPICall('/signin', loginData);
        if (!response || response?.error) {
            return;
        }
        toast.success(response.message);
        setCookie(AUTH_SERVICE_TOKEN, response.token);
        push(INDEX);
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="col-sm-4 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header nbg-primary text-light">
                            <b>Login</b>
                        </div>
                        <div className="card-body">
                            <form onSubmit={loginHandler}>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn nbg-primary text-white"
                                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                                    >
                                        <span className="text-left"> Login </span>
                                        <span className="text-right"> --&gt; </span>
                                    </button>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="login-or">
                                        <hr className="hr-or" />
                                        <span className="span-or">or</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <Link to={SIGNUP} style={{ textDecoration: 'none' }}>
                                        Create New Account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;