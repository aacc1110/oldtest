/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router-dom';
import * as baseActions from '../contexts/modules/base';
import { Login, Register } from '../containers/Auth';
import { AuthWrapper } from '../components/Auth';

class Auth extends Component {
  // 페이지에 진입 할 때 헤러를 비활성화
  componentWillMount() {
    this.props.BaseActions.setHeaderVisibility(false);
  }

  // 페이지에서 벗어 날 때 다시 활성화
  componentWillUnmount() {
    this.props.BaseActions.setHeaderVisibility(true);
  }

  render() {
    return (
      <AuthWrapper>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
      </AuthWrapper>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    BaseActions: bindActionCreators(baseActions, dispatch),
  }),
)(Auth);
