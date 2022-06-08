import { connect } from 'react-redux';
import { getDialogsData } from '../../redux/dialog-selectors';
import Navbar from './Navbar';

let mepStateToProps = (state)=>{
    return{
        ff: getDialogsData(state)
    }
}

let NavbarContainer = connect(mepStateToProps)(Navbar);

export default NavbarContainer;