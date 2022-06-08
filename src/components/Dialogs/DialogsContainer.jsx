import { addMessageActionCreator} from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { getDialogsData, getMessagesData, getNewMessage } from '../../redux/dialog-selectors';


let mapStateToProps = (state) =>{
    return{
        dialogsData: getDialogsData(state),
        messagesData: getMessagesData(state),
        newMessage: getNewMessage(state) 
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        onSendMessage:(text)=>{
            dispatch(addMessageActionCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);