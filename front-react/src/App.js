import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from './views';
import HeaderContainer from './containers/HeaderContainer';
import MainContainer from './containers/MainContainer';
import FooterContainer from './containers/FooterContainer';

const App = () => (
  <div>
    <HeaderContainer />
    <MainContainer />
    <FooterContainer />
    <Route exact path="/" component={Home} />
    <Route path="/auth" component={Auth} />
  </div>
);

export default App;
