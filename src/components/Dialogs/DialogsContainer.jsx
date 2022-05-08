import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
    return{
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
        newMessage: state.dialogs.newMessage, 
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        onSendMessage:()=>{
            dispatch(addMessageActionCreator());
        },
        onChangeMessage:(text)=>{
            dispatch(updateNewMessageActionCreator(text));
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;