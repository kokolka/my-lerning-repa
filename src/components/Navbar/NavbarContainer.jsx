import { connect } from 'react-redux';
import Navbar from './Navbar';

let mepStateToProps = (state)=>{
    return{
        ff: state.navlink.dialogsData
    }
}

let NavbarContainer = connect(mepStateToProps)(Navbar);

export default NavbarContainer;