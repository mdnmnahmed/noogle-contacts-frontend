import React from 'react'
import { Link } from 'react-router-dom';
import { ADD_CONTACT } from '../../utils/routerLinks';

const NavBar = ({ searchContact, setSearchContact }) => {
    return (
        <div>
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark nbg-primary">
                <div className="container">
                    <Link to="/">
                        <div role="button" className="navbar-brand">
                            Noogle<i className="material-icons">account_circle</i>Contacts
                        </div>
                    </Link>
                    <div>
                        <div className="d-lg-flex d-none justify-content-center align-items-center">
                            <div className="search">
                                <input type="text" className="form-control" placeholder="Search"
                                    value={searchContact}
                                    onChange={(event) => setSearchContact(event.target.value)}
                                />
                                <button className="btn nbg-primary"><i className="fa fa-search"></i>N</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={ADD_CONTACT} className="btn btn-info btn-sm ml-auto shadow rounded-0"><i className="fa fa-user-plus shadow"></i> Add Contact</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;