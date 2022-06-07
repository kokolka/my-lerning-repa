import React, { useEffect } from 'react';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css';

const AppContainer = (props) => {

    return (
        <React.StrictMode>
             <HashRouter> 
            {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */} 
                <Provider store={store}>
                    <App />
                    <a className='test_container'>
                        Learn React
                    </a>
                </Provider>
            {/*  </BrowserRouter> */}
            </HashRouter>
        </React.StrictMode>
    );
}

export default AppContainer;