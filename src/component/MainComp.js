import React, { Component } from 'react';
import './MainComp.css';

import HeaderWrap from '../container/HeaderWrap';
import Main from './Main';
import Footer from './Footer';

class MainComp extends Component {
    render() {
        return (
            <div className={this.props.className} >
                <HeaderWrap />
                <Main/>
                <Footer />
            </div>
        )
    }
}

export default MainComp;