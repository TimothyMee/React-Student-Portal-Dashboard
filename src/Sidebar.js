import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const maxHeight = {
    // top: '0',
    // bottom: '0',
    height: '100%',
    minHeight: '630px',
    backgroundColor:'#222d32',
    // border:'2px solid red'
};

class Sidebar extends Component{
    render() {
        const {ChangePage} = this.props;
        return (
            <div style={maxHeight}>
                <aside className="main-sidebar">
                    {/* sidebar: style can be found in sidebar.less */}
                    <section className="sidebar">
                        {/* Sidebar user panel */}
                        <div className="user-panel">
                            <div className="pull-left image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                            </div>
                            <div className="pull-left info">
                                <p>Alexander Pierce</p>
                                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                            </div>
                        </div>
                        {/* search form */}
                        <form action="#" method="get" className="sidebar-form">
                            <div className="input-group">
                                <input type="text" name="q" className="form-control" placeholder="Search..." />
                                <span className="input-group-btn">
                                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i></button>
                                  </span>
                            </div>
                        </form>
                        {/* /.search form */}
                        {/* sidebar menu: : style can be found in sidebar.less */}
                        <ul className="sidebar-menu">
                            <li className="header">MAIN NAVIGATION</li>
                            <li className="active treeview">
                                <a href="#">
                                    <i className="fa fa-dashboard"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#" onClick={ChangePage("StudentProfileMenu")}>
                                    <i className="fa fa-files-o"></i>
                                    <span>Student Profile Menu</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-th"></i>
                                    <span>Widgets</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-laptop"></i>
                                    <span>Charts</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-edit"></i> <span>Forms</span>
                                </a>
                            </li>
                            <li className="treeview">
                                <a href="#">
                                    <i className="fa fa-table"></i> <span>Tables</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-envelope"></i> <span>Mailbox</span>
                                </a>
                            </li>
                        </ul>
                        <br/><br/><br/><br/><br/>
                    </section>
                    {/* /.sidebar */}
                </aside>
            </div>
        )
    }
}

export default Sidebar;
