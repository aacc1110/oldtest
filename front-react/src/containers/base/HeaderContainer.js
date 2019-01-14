/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header, { LoginButton, MenuButton } from '../../components/base/Header';
import * as userActions from '../../contexts/modules/user';
import storage from '../../lib/storage';

class HeaderContainer extends Component {
  handleLogout = async () => {
    const { UserActions } = this.props;
    try {
      await UserActions.logout();
    } catch (e) {
      console.log(e);
    }

    storage.remove('loggedInfo');
    window.location.href = '/'; // 홈페이지로 새로고침
  };

  render() {
    const { visible, user } = this.props;
    if (!visible) return null;

    return (
      <Header>
        <MenuButton />
        {user.get('logged') ? (
          <div>
            {user.getIn(['loggedInfo', 'username'])}{' '}
            <div onClick={this.handleLogout}>(로그아웃)</div>
          </div>
        ) : (
          <LoginButton />
        )}
      </Header>
    );
  }
}

export default connect(
  state => ({
    visible: state.base.getIn(['header', 'visible']),
    user: state.user,
  }),
  dispatch => ({
    UserActions: bindActionCreators(userActions, dispatch),
  }),
)(HeaderContainer);
