import React from 'react';
import s from './News.module.css';

const News = (props) => {

    let stateChangeText = '';

    return (
        <div>
            News
            <div>
                <p>TEST</p>
                <div>
                    <input type="text" placeholder='out' value={props.text} />
                </div>
                <div>
                    <input type="text" placeholder='in' onChange={(e) => {
                        stateChangeText = e.target.value;
                    }} />
                </div>
                <div>
                    <button onClick={() => {
                        props.changeText(stateChangeText);
                    }}>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default News;