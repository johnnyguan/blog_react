import React,{Component} from 'react';
import './MainComp.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class MainComp extends Component{
    render(){
        return (
            <div className="main-comp">
                <Header />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default MainComp;