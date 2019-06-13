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
class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      pageName: 'dashboard',
      icon:"",
      Link:"",
      title:"Dashboard"
    };
  }

  // changePage(pageName){
  //   this.fetchData(pageName);
  //   this.setState({
  //     pageName: pageName
  //   });
  // }

  fetchData(pageName){
      axios.get('http://localhost:19250/home/'+pageName)
          .then(res => {
            console.log(res);
            this.setState({
              pageName:pageName,
              icon : res.icon,
              Link : res.Line,
              title : res.title
            });
          })
          .catch(err => {
            console.log(err);
          });
  }

  render() {
    return (
    <div className="App">
      <div className={"container col-md-12 row"}>
        <div className={"container col-md-2"}>
          <Sidebar
            ChangePage ={this.fetchData}
          />
        </div>
        <div className={"col-md-9"}>
          <Main
              icon = {this.state.icon}
              Link = {this.state.Link}
              title = {this.state.title}
            pageName = {this.state.pageName}
          />
        </div>
      </div>

    </div>
    )
  }
}

export default App;
