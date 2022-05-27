import React from 'react';

const Test = (props) => {

    let stateChangeText = '';

    return (
        <div>
            <div>
                <p>TEST</p>
                <div>
                    <input type="text" placeholder='out' value={props.text} disabled='disabled'/>
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
            <div>
                <button onClick={() => {
                    new Promise(function(resolve, reject){
                        setTimeout(() => resolve('result'), 2000)
                    })
                        .finally(() => alert('Promise is out'))
                        .then(result => alert(result));
                }}>
                    Test setTimeout and promise
                </button>
            </div>
        </div>
    );
}

export default Test;