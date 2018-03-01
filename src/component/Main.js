import React, {Component} from 'react';
import './Main.css';
import { Pagination } from 'antd';
import Card from './Card';

class Main extends Component{
    render(){
        return (
            <div>
                <div className="main">
                    <div className="main-title">JOHN'S BLOG</div>
                </div>
                <div className="content-area">
                    {this.props.blogs.map((v,i)=>{
                        return <Card blog={v} key={i}/>
                    })}
                    <div className="pagin">
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
            
        )
    }
}
export default Main;