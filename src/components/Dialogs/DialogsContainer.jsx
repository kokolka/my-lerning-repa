import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';


let mapStateToProps = (state) =>{
    return{
        dialogsData: state.dialogs.dialogsData,
        messagesData: state.dialogs.messagesData,
        newMessage: state.dialogs.newMessage
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

let AuthRedirectContainer = withAuthRedirect(Dialogs);

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;