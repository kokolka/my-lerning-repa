import React from 'react';
import { connect } from 'react-redux';
import OnlyCatPage from './OnlyCatPage';




const OnlyCatPageContainer = (props) =>{
    return(
        <OnlyCatPage {...props}/>
    )
}

const mstp = (state) =>({
    sizeApp: state.initialize.sizeApp
})

export default connect(mstp, {})(OnlyCatPageContainer)