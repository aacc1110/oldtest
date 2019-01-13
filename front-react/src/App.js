import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from './views';
import HeaderContainer from './containers/HeaderContainer';

const App = () => (
  <div>
    <HeaderContainer />
    <Route exact path="/" component={Home} />
    <Route path="/auth" component={Auth} />
  </div>
);

export default App;
