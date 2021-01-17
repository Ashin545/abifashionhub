import React , {Component} from 'react';
import './App.css';




class Home extends Component{
    constructor(props){
        super();

       
    }

    render()
        {
            return <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        
                        <img src="1.jpg" alt="" /> 
                    </div>
                   
                    </div> {/*row 1 end */}

                   
                   
                   
                    <div className="row form-group">
                        <div className="col-md-12">
                         <button className="col-md-3 btn-outline-warning btn-lg pt-5 pb-5" > <i className="fa fa-home fa-4x"></i> <div></div> </button>
                         <button className="btn-outline-danger col-md-3 btn-lg pt-5 pb-5">  <i className="fa fa-gift fa-4x"></i> </button> 
                         <button className="btn-outline-warning col-md-3 btn-lg pt-5 pb-5"> <i className="fa fa-lock fa-4x"></i> </button> 
                         <button className="btn-outline-danger col-md-3 btn-lg pt-5 pb-5"> <i className="fa fa-truck fa-4x"></i> </button>
                        </div>
                    </div> {/*row 2 end */}

                <div className="row">
                    <div className="col-md-4">
                    <img src="2.jpg" height="400px" /> 
                </div>

                <div className="col-md-4">
                    <img src="3.jpg" height="400px" /> 
                </div>

                <div className="col-md-4">
                    <img src="4.jpg" height="400px" /> 
                </div>

                 </div> {/*row 3 end */}

                 

            </div>
        }
    
}

export default Home;

