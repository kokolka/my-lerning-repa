import { connect } from 'react-redux';
import React from 'react';
import News from './News';

class NewsContainer extends React.Component {

    render(){
        return(
            <News />
        );
    }
}

export default connect(null, {})(NewsContainer)