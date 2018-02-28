import React,{Component} from 'react';
import './MainComp.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class MainComp extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={'main-comp ' + (this.props.expand ==='true'?'expanded':'')}>
                <Header onclick={this.props.onclick} />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default MainComp;