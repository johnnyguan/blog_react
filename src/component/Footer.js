import React, {Component} from 'react';
import './Footer.css';
class Footer extends Component{
    render(){
        return (
            <div className="footer">
                <div className="statics">
                    <div className="upper">站点总访客数：9  站点总访问量：126</div>
                    <div className="lower"><i className="rss"></i> This blog is licensed under a Creative Commons Attribution 4.0 International License.</div>
                </div>
                <div className="copyright">
                Johnny Guan © 2015 - 2018  Power by Hexo Theme indigo
                </div>
            </div>
        )
    }
}
export default Footer;