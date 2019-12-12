import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Customers from './Customers';
import Trainings from './Trainings';

class Home extends Component{
    render(){
        return(
            <div>
                <Router>
                    <div>
                        <Link to="/customers">Customers</Link>{'  '}
                        <Link to="/trainings">Trainings</Link>{'  '}
                        
                        <Switch>
                            <Route exact path="/customers" component={Customers}/>
                            <Route exact path="/trainings" component={Trainings}/>    
                        </Switch>
                    </div>
                </Router>
            </div>

        )
    };
}

export default Home;