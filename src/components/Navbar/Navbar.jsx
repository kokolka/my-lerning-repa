import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from './Navbar.module.css';
import storeContext from '../../StoreContext';

const Navbar = () => {
    // let friendFotoElement =
    //     props.ff.map((el) => {
    //         if (el.id <= 3) {
    //             return <Friends foto={el.foto} />;
    //         }
    //     }
    //     );
    return (
        <storeContext.Consumer>
            {store => {
                let friendFotoElement = store.getState().navlink.dialogsData.map((el) => {
                    if (el.id <= 3) {
                        return <Friends foto={el.foto} />;
                    }
                }
                );
                return (
                <nav>
                    <div className={s.item}>
                        <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/news' className={navData => navData.isActive ? s.active : s.item}>News</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/music' className={navData => navData.isActive ? s.active : s.item}>Music</NavLink>
                    </div>
                    <div className={s.item}>
                        <NavLink to='/setting' className={navData => navData.isActive ? s.active : s.item}>Setting</NavLink>
                    </div>
                    <div className={s.friends}>
                        <h3>Friends</h3>
                        <div className={s.block_foto}>
                            {friendFotoElement}
                        </div>
                    </div> 
                </nav>
                );
            }
            }
        </storeContext.Consumer>
    );
}

export default Navbar;