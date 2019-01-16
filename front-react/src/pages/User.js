import React from 'react';
import { Route } from 'react-router-dom';
import User from '../components/User';

const UserView = () => <Route path="/user/login" component={User} />;

export default UserView;
