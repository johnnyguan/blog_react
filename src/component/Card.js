import React,{Component} from 'react';
import './Card.css';
class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="date">{this.props.blog.date}</div>
                <div className="article-title">{this.props.blog.title}</div>
                <div className="article">{this.props.blog.content}<a href="javascript:;">Continue reading...</a>
                </div>
            </div>
        )
    }
}
export default Card;