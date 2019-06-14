import React, {Component} from 'react';
import App from './App'
import Login from './Login'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

let submenu = [{icon: "fa ion-home", Link: "", title: "Dashboard"}];
class Routes extends Component{
  constructor(props){
    super(props);

    this.state = {
      pageName: 'dashboard',
      submenu: submenu
    };

    // this.fetchData = this.fetchData.bind(this);
  }
  render() {
    return (
    <div>
        <Router>
            <div>
                    <Route exact path="/main" component={App} />
                    <Route path="/login" component={Login} />
            </div>

            <Login/>
        </Router>
    </div>
    )
  }
}

export default Routes;
