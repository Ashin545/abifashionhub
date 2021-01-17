import { Button } from 'bootstrap';
import React from 'react';

const Searchbox = (props) =>{
    return <div className="container-fluid">
        <div className="row form-group">
        <input type = "search" className="search "  placeholder={props.placeholder} />
           
            </div>
            </div>
 }


 export default Searchbox;
 