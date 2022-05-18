import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import {
    setCurrentPage,
    setTotalCount,
    getUsers,
    follow,
    unfollow
} from '../../redux/users-reducer';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

class UsersComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize); //thunk
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page);

        this.props.getUsers(page, this.props.pageSize); //thunk
    }

    render() {
        return (
            <>
                {/* {this.props.isFetching ?
                    <Preloader/>
                    : null} */}
                <Users {...this.props}
                    onPageChanged={this.onPageChanged}
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
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageAC(page))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountAC(totalCount))
//         },
//         toggleIsFetching: (fetching) => {
//             dispatch(toggleIsFetchingAC(fetching))
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {
        setCurrentPage,
        setTotalCount,
        getUsers,
        follow,
        unfollow
    })
)(UsersComponent)