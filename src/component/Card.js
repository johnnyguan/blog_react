import React,{Component} from 'react';
import './Card.css';
class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="date">2018-02-07</div>
                <div className="article-title">addEventListener</div>
                <div className="article">
                参考 https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener addEventListener是W3C DOM规范中提供的注册事件监听器的方法。 使用方法12345target.addEventListener(type, listener, options);target.addEventL... 
                    <a href="javascript:;">Continue reading...</a>
                </div>
            </div>
        )
    }
}
export default Card;