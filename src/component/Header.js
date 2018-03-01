import React,{Component} from 'react';
import './Header.css';
import {Icon} from 'antd';
class Header extends Component{
    render(){
        return (
            <div className={this.props.className}>
                <div className="left-icon" onClick={this.props.onClick}>
                    <Icon type="bars" style={{ fontSize: 16}} />
                </div>
                <div className="header-title">JOHN'S BLOG</div>
                <div className="right-icon">
                    <input type="text" className="search-input" />
                    <Icon type="search" style={{ fontSize: 16}} />
                </div>
            </div>
        )
    }
}

export default Header;