import React from 'react';
import axios from 'axios';
import Users from './Users';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';

class UsersComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            }
            );

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false);
            }
            );
    }

    render() {
        return (
            <>
                {/* {this.props.isFetching ?
                    <Preloader/>
                    : null} */}
                <Users
                    pageSize={this.props.pageSize}
                    pageTotalCount={this.props.pageTotalCount}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    unfollow={this.props.unfollow}
                    follow={this.props.follow}
                    users={this.props.users}
                    isFetching={this.props.isFetching}
                />
            </>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        pageTotalCount: state.usersPage.pageTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        toggleIsFetching: (fetching) => {
            dispatch(toggleIsFetchingAC(fetching))
        }
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent);

export default UsersContainer;