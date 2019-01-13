import React, { useContext } from 'react';
import { NavItem, Button } from 'reactstrap';
import * as Context from '../context';

const useLanguage = () => {
  const Auth = useContext(Context.Auth.AuthContext);
  const Language = useContext(Context.Language.LanguageContext);
  return (
    <NavItem right="true">
      {Auth.isLoggedIn ? (
        <Button onClick={() => Auth.logOut()}>
          {Language.translation.logout}
        </Button>
      ) : (
        <Button onClick={() => Auth.logIn()}>
          {Language.translation.login}
        </Button>
      )}
    </NavItem>
  );
};

export default useLanguage;
