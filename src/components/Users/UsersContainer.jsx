import { connect } from 'react-redux';
import { followAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    debugger;
    return{
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userID)=>{
            dispatch(followAC(userID))
        },
        unfollow: (userID)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers: (users)=>{
            dispatch(setUsersAC(users))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;