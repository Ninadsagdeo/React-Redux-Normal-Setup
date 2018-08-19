import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import App from './Containers/Main/App';
import Login from './Containers/Home/Login';




const Routes = () =>{      

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={App}/>
                <Route path='/Login' render={Login}/>
            </Switch>
        </Router>
    )

}

    
export default connect(null,null)(Routes);