import { connect } from 'react-redux';
import React from 'react';
import News from './News';

class NewsContainer extends React.Component {
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
            <News text={this.state.text} changeText={this.changeText}/>
        );
    }
}

export default connect(null, {})(NewsContainer)