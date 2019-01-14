import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Divider, Form, Label } from 'semantic-ui-react';
import { AuthContent } from '../../components/Auth';

export const RegisterAdd = React.createContext();

const Register = () => (
  <AuthContent title="회원가입">
    <Form>
      <Form.Field>
        <input type="text" placeholder="Email" />
        <Label pointing>Please enter a value</Label>
      </Form.Field>
      <Divider />
      <Form.Field>
        <input type="text" placeholder="Nick Name" />
        <Label pointing>Please enter a value</Label>
      </Form.Field>
      <Divider />
      <Form.Field inline>
        <input type="text" placeholder="Password" />
        <Label pointing="left">password must be 6 characters</Label>
      </Form.Field>
      <Divider />
      <Form.Field inline>
        <Label pointing="right">check</Label>
        <input type="password" placeholder="Password" />
      </Form.Field>
      <Button size="big" color="green">
        회 원 가 입
      </Button>
      <Button size="big" color="green">
        취 소
      </Button>      
      회원이시면 :<Link to="/auth/login"> 로그인</Link>
    </Form>
  </AuthContent>
);
export default Register;
