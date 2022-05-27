import { connect } from 'react-redux';
import React from 'react';
import Test from './Test';

class TestContainer extends React.Component {
    state = {
        text: ''
    }

    changeText = (value) => {
        this.setState({
            text: value
        })
    }

    render(){
        return(
            <Test text={this.state.text} changeText={this.changeText}/>
        );
    }
}

export default connect(null, {})(TestContainer)