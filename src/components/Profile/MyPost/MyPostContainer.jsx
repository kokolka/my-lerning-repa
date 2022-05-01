import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux';


let mapStateToProps = (state) =>{
    return{
        pd: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps =(dispatch)=>{
    return{
        AddPost:()=>{
            dispatch(addPostActionCreator());
        },
        AppPostNewText:(text)=>{
            dispatch(updateNewPostTextActionCreator(text));
        }
    }
}

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;