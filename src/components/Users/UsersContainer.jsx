import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';
import Users from './Users';


let mapStateToProps = (state) => {
    debugger;
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageTotalCount: state.usersPage.pageTotalCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (page)=>{
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount)=>{
            dispatch(setTotalCountAC(totalCount))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;