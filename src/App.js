import React from 'react';
import {Route , HashRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './header';
import Home from './home';
import Register from './register';








function MyApp() {
  return <HashRouter>
     <Header/>
     <Route exact path="/" component={Home}/>
     <Route path="/Register" component={Register}/>
   
     </HashRouter>
     
   
     
  
 
}

export default MyApp;
