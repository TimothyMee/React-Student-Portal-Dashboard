import React, {Component} from 'react';
import logo from './logo.svg';
// import './App.css';
// import './css/Admin.css';
// import './css/bootstrap.css';
import Sidebar from './Sidebar'
import Main from './Main'
import axios from 'axios'


const maxHeight = {
  top: '0',
  bottom: '0',
  height: '100%',
  minHeight: '100%',
};

let submenu = [{icon: "fa ion-home", Link: "", title: "Dashboard"}];
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      pageName: 'dashboard',
      submenu: submenu
    };

    this.fetchData = this.fetchData.bind(this);
  }

  // changePage(pageName){
  //   this.fetchData(pageName);
  //   this.setState({
  //     pageName: pageName
  //   });
  // }

  fetchData(pageName){
      var self = this;

      if(pageName == 0){
          self.setState({
              pageName : pageName,
              submenu : submenu
          });
      }
      else{
          axios.get('http://localhost:19250/api/StudentMenu/'+pageName)
              .then(res => {
                  console.log(res);
                  self.setState({
                      pageName:pageName,
                      submenu : res.data
                  });
                  console.log(self);
              })
              .catch(err => {
                  console.log(err);
              });
      }
  }

  render() {
    return (
    <div className="App">
      <div className={"container col-md-12 row"}>
        <div className={"container col-md-2"}>
          <Sidebar
            changePage ={this.fetchData}
          />
        </div>
        <div className={"col-md-9"}>
          <Main
              pageName={this.state.pageName}
              submenu={this.state.submenu}
          />
        </div>
      </div>

    </div>
    )
  }
}

export default App;
