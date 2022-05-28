import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import './App.css';

const AppContainer = (props) => {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                    <a className='test_container'>
                        Learn React
                    </a>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default AppContainer;