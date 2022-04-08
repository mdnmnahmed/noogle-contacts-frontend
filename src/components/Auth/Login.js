import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { INDEX, SIGNUP } from '../../utils/routerLinks'
import './auth.css'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="col-sm-4 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header nbg-primary text-light">
                            <b>Login</b>
                        </div>
                        <div className="card-body">
                            <form>
                                <div class="form-group">
                                    <input type="email" class="form-control" placeholder="Email"
                                        value={email}
                                        onChange={(event) => setEmail(event.target.value)}
                                    />
                                </div>
                                <div class="form-group">
                                    <input type="password" class="form-control" placeholder="Password"
                                        value={password}
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                </div>

                                <div class="form-group">
                                    <button type="submit" class="btn nbg-primary text-white"
                                        style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}
                                    >
                                        <span className="text-left"> Login </span>
                                        <span className="text-right"> --&gt; </span>
                                    </button>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="login-or">
                                        <hr class="hr-or" />
                                        <span class="span-or">or</span>
                                    </div>
                                </div>
                                <div class="form-group">
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