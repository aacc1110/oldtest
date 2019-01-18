import React from 'react';
import { Route } from 'react-router-dom';
import Hooks from 'components/Hooks';

const HooksView = () => <Route path="/hooks/default" component={Hooks} />;

export default HooksView;
