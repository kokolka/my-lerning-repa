import { connect } from 'react-redux';
import Login from './Login';
import {postLogin, getUrlCaptcha} from '../../redux/auth-reducer';

let mapStateToProps = (state) =>{
    return{
        isAuth: state.auth.isAuth, 
        numberError: state.initialize.numberError,
        messageError: state.initialize.messageError,
        urlCaptcha: state.auth.urlCaptcha
    }
}

  
let LoginContainer = connect(mapStateToProps, {
    postLogin,
    getUrlCaptcha
})(Login);

export default LoginContainer;