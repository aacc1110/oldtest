import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth, Ztest, User } from 'pages';
import { HeaderContainer, FooterContainer } from 'containers/Base';

import storage from 'lib/storage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from 'redux/modules/user';

class App extends Component {
  componentDidMount() {
    this.initializeUserInfo();
  }

  async initializeUserInfo() {
    const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
    if (!loggedInfo) return false; // 로그인 정보가 없다면 여기서 멈춥니다.

    const { UserActions } = this.props;
    UserActions.setLoggedInfo(loggedInfo);
    try {
      await UserActions.checkStatus();
    } catch (e) {
      storage.remove('loggedInfo');
      window.location.href = '/auth/login?expired';
    }
    return true;
  }

  render() {
    return (
      <div>
        <HeaderContainer />
        <FooterContainer />
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
        <Route path="/ztest" component={Ztest} />
        <Route path="/user" component={User} />
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(App);
