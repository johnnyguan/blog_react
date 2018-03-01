import React, { Component } from 'react';
import './MainComp.css';

import HeaderWrap from '../container/HeaderWrap';
import MainWrap from '../container/MainWrap';
import Footer from './Footer';

class MainComp extends Component {
    render() {
        return (
            <div className={this.props.className} >
                <HeaderWrap />
                <MainWrap/>
                <Footer />
            </div>
        )
    }
}

export default MainComp;