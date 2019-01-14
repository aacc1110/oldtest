import React, { Component } from 'react';
import { Button, Divider, Form, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../../contexts/modules/auth';
import { AuthContent } from '../../components/Auth';

class Login extends Component {
  handleChange = e => {
    const { AuthActions } = this.props;
    const { name, value } = e.target;

    AuthActions.changeInput({
      name,
      value,
      form: 'login',
    });
  };

  render() {
    const { email, password } = this.props.form.toJS(); // form 에서 email 과 password 값을 읽어옴
    const { handleChange } = this;
    return (
      <AuthContent title="로그인">
        <Form>
          <Form.Field>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="email"
              onChange={handleChange}
            />
          </Form.Field>
          <Divider />
          <Form.Field>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit" size="big" color="green">
            로 그 인
          </Button>
          <Button type="cancel" size="big" color="green">
            취 소
          </Button>
          아직 회원이 아니시면 :<Link to="/auth/register"> 회원가입</Link>
        </Form>
      </AuthContent>
    );
  }
}
export default connect(
  state => ({
    form: state.auth.getIn(['login', 'form']),
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
  }),
)(Login);
