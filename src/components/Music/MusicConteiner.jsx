import React from 'react';
import { connect } from 'react-redux';
import Music from './Music';

const MusicContainer = (props) => {

    return (
        <Music {...props}/>
    );
}

const mstp = () => ({
})


export default connect(mstp, {})(MusicContainer);