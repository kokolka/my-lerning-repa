import React from 'react';
import { connect } from 'react-redux';
import { getSizeApp } from '../../redux/app-selectors';
import OnlyCatPage from './OnlyCatPage';

const OnlyCatPageContainer = (props) =>{
    return(
        <OnlyCatPage {...props}/>
    )
}

const mstp = (state) =>({
    sizeApp: getSizeApp(state)
})

export default connect(mstp, {})(OnlyCatPageContainer)