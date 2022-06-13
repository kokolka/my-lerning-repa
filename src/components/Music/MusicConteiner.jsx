import React from 'react';
import { connect } from 'react-redux';
import { getSongsList } from '../../redux/music-selector';
import Music from './Music';

const MusicContainer = (props) => {

    return (
        <Music {...props}/>
    );
}

const mstp = (state) => ({
    songs: getSongsList(state)
})


export default connect(mstp, {})(MusicContainer);