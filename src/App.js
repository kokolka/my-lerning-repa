import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import NewsContainer from './components/News/NewsContainer';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainerHook from './components/Profile/ProfileContainerHook';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';

import { initializeApp,setSizeApp } from './redux/app-reducer';
import { meUser } from './redux/auth-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './HOC/withSuspense';
import { getInitialized, getIsButtonMenu, getSizeApp } from './redux/app-selectors';
import { getIsAuth } from './redux/auth-selectors';
import cn from 'classnames';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const OnlyCatPageContainer = React.lazy(() => import('./components/Infinity cat/OnlyCatPageContainer'));

const DialogsSuspense = withSuspense(DialogsContainer);
const OnlyCatSuspense = withSuspense(OnlyCatPageContainer);

class App extends React.Component {

  state = {
    size: document.getElementById('root').offsetWidth //так быстрее получить размер экрана при инициализации, но плохо для теста
  }

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {

    const reSize = () => { //функция для изменения размера root элемента в state
      if(this.state.size != document.getElementById('root').offsetWidth){ //проверка, изменился ли азмер экрана
        this.props.setSizeApp(document.getElementById('root').offsetWidth);
        this.setState({
          size: document.getElementById('root').offsetWidth
        })
      }
    }
    
    new ResizeObserver(reSize).observe(document.getElementById('root')); //подписывание на изменение размера экрана

    if (!this.props.initialized) { //online mode
    //if (this.props.initialized) { //offline mode
      return <Preloader />
    }
    return (
      <div className='app-wrapper'>
        <div className='app-wrapper__header'>
          <HeaderContainer />
        </div>
        <div className={cn('app-wrapper__nav', {'app-wrapper__visibility__mobile': this.props.isButtonMenu})}>
          <NavbarContainer />
        </div>
        <div className={cn('app-wrapper__content')}>
          <Routes>
            <Route path='/' element={<ProfileContainerHook />} />
            <Route path='/profile' element={<ProfileContainerHook />}>
              <Route path='/profile/:id' element={<ProfileContainerHook />} />
            </Route>
            <Route path='/dialogs/' element={<DialogsSuspense />} >
              <Route path='/dialogs/:id' element={<DialogsSuspense />} />
            </Route>
            <Route path='/news' element={<NewsContainer />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/infinityCat' element={<OnlyCatSuspense />} />
            <Route path='*' element={<div>404 not found</div>} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStareToProps = (state) => {
  return {
    initialized: getInitialized(state),
    sizeApp: getSizeApp(state),
    isAuth: getIsAuth(state),
    isButtonMenu: getIsButtonMenu(state)
  }
} 

export default connect(mapStareToProps, {
  initializeApp,
  meUser,
  setSizeApp
})(App);
