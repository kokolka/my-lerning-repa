import React from 'react';
import axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC } from '../../redux/users-reducer';

class UsersComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            }
            );

    }

    onPageChanged = (page) =>{
        this.props.setCurrentPage(page);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                return this.props.setUsers(response.data.items);
            }
            ); 
    }

    render() {
        return ( <Users 
            pageSize={this.props.pageSize}
            pageTotalCount={this.props.pageTotalCount}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            />);
    }
}

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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;