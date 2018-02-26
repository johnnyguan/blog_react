import './Menu.css';
import React, { Component } from 'react';
import avatar from './avatar.jpg';
import {Menu, Icon} from 'antd';


class BlogMenu extends Component {
    render() {
        return (
            <aside className="menu-wrap">
                <div className="avatar-wrap">
                    <div className="avatar-inner-wrap">
                        <div className="avatar">
                            <img src={avatar} alt="avatar"></img>
                        </div>
                        <hgroup>
                            <h5>Johnny Guan</h5>
                            <a href="mailto:820268662@qq.com" title="820268662@qq.com">820268662@qq.com</a>
                        </hgroup>
                    </div>
                </div>
                <Menu>
                    <Menu.Item><span><Icon type="home" /></span>主页</Menu.Item>
                    <Menu.Item><span><Icon type="profile" /></span>Archives</Menu.Item>
                    <Menu.Item><span><Icon type="tags" /></span>Tags</Menu.Item>
                    <Menu.Item><span><Icon type="bars" /></span>Categories</Menu.Item>
                    <Menu.Item><span><Icon type="github" /></span>Github</Menu.Item>
                </Menu>


            </aside>
        )
    }
}

export default BlogMenu;