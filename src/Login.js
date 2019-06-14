import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const maxHeight = {
    // top: '0',
    // bottom: '0',
    height: '100%',
    minHeight: '630px',
    // backgroundColor:'#222d32',
    // border:'2px solid red'
};

const backgroundColourBlack = {
    backgroundColor: '#222d32',
    boxShadow: '2px 3px 4px grey'
};

const fontSize ={
    fontSize:'15px',
    fontWeight:'normal'
};

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {username: '', password: '', hidden: false, redirect: false};

        this.handleChange = this.handleChange.bind(this);
        this.buttonSubmit = this.buttonSubmit.bind(this);
    }

    handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({[name]: value, });
    }

    buttonSubmit(event)
    {
        event.preventDefault();
        let data = {
            MatricNo : this.state.username,
            Password : this.state.password
        };
        console.log(data);
        var self = this;
        axios.post('http://localhost:53136/api/login', data)
            .then(res =>{
                console.log("res", res);
                if(res.data.status == "Invalid"){
                    this.setState({
                        hidden : true
                    });
                }else if(res.data.status == "Success"){
                    // debugger;
                    this.setState({redirect: true});
                    // self.history.push('/main');
                    // return <Redirect to='/main' />
                }

            })
            .catch(err => {
                console.log(err);
            });
        // console.log(event);
    }

    render() {
        const {redirect} = this.state;
        if(redirect){
            return <Redirect to={{
                pathname: '/main',
                state: { matricNo: this.state.username}
                }}/>;
        }
        return (
            <div style={maxHeight}>
                <div className={"container col-md-12"}>&nbsp;</div>
                <div className={"container col-md-12"}>&nbsp;</div>
                <div className={"container col-md-12"}>&nbsp;</div>
                <div className={"container col-md-12"}>&nbsp;</div>
                <div className={"container col-md-12"}>&nbsp;</div>
                <div className={"container col-md-6 col-md-offset-3"} style={backgroundColourBlack}>
                    <div className={"col-md-10 col-md-offset-1"}>
                        <div className={"col-md-12"}>
                            {
                                (this.state.hidden) ?
                                    <div className={"alert alert-error"}>
                                        Matric No. and Password combination Incorrect
                                    </div> :
                                    null
                            }
                        </div>
                        <form action="">
                            <div className={"container col-md-12"}>&nbsp;</div>
                            <div className={"container col-md-12"}>&nbsp;</div>
                            <div className={"row col-md-12"}>
                                <div className={"col-md-4"}><label htmlFor="Username" className={"label"} style={fontSize}>Username:</label></div>
                                <div className={"col-md-8"}><input type="text" className={"form-control"} placeholder={"Enter Username"}
                                                                   name="username"
                                                                    value={this.state.username}
                                                                    onChange={this.handleChange}/></div>
                            </div>
                            <div className={"container col-md-12"}>&nbsp;</div>
                            <div className={"row col-md-12"}>
                                <div className={"col-md-4"}><label htmlFor="Username" className={"label"} style={fontSize}>Password:</label></div>
                                <div className={"col-md-8"}><input type="password" className={"form-control"} placeholder={"Enter Password"}
                                                                   name="password"
                                                                    value={this.state.password}
                                                                    onChange={this.handleChange}/></div>
                            </div>

                            <div className={"container col-md-12"}>&nbsp;</div>
                            <div className={"container col-md-12"}>&nbsp;</div>

                            <div className={"col-md-12"}>
                                <div className={"col-md-6 col-md-offset-4"}>
                                    <input type="submit" value={"Login"} className={"col-md-12 btn btn-primary"} onClick={this.buttonSubmit}/>
                                </div>
                            </div>

                            <div className={"container col-md-12"}>&nbsp;</div>
                            <div className={"container col-md-12"}>&nbsp;</div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
