import React ,{Component}from 'react';
import {Link} from 'react-router-dom';
import Searchbox from './search';


const Header = () =>{
    return <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <a className="navbar-brand mr-4 text-white" href="#">Fixed navbar</a>
                <button className="navbar-toggler" type="button"  data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto ">
                    <li className="nav-item active ">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/array1">Mens Clothing</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/array1">Womens Clothing</Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link text-dark" to="/register">Register</Link>
                        </li>

                        <li className="nav-item active">
                        <Searchbox className="form-controller" placeholder="Search Our Store"/>
                        <button> Register</button>
                        </li>

                        
                        

                    </ul>
                </div>
            </nav>
}

export default Header;