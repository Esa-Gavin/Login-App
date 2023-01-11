import React, { useState } from 'react';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // we should of course check email and password //
    // but it's just a dummy/demo anyways //
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn}
      </main>
    </React.Fragment>
  )
}