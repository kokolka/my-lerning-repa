import { connect } from 'react-redux';
import React from 'react';
import News from './News';
import {getNewsEverything, setTheme} from '../../redux/news';
import { getDate, getNews, getTheme } from '../../redux/news-selectors';

class NewsContainer extends React.Component {

    render(){
        return(
            <News {...this.props}/>
        );
    }
}

let mstp = (state) => ({
    news: getNews(state),
    theme: getTheme(state),
    date: getDate(state)
})

export default connect(mstp, {
    getNewsEverything,
    setTheme
})(NewsContainer)