import React, { useEffect, useState } from 'react';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  // use effect normally runs after the component functions //
  // have been executed. it will only run if the dependencies //
  // have changed //
  useEffect(() => {
    const storedUserLoginInInformation = localStorage.getItem("hasLoggedIn");

    if (storedUserLoginInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // we should of course check email and password //
    // but it's just a dummy/demo anyways //

    // in order not to lose session once logged in, //
    // we use local storage to store data locally //
    localStorage.setItem('hasLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    // remove item is to remove the login key //
    // in the local storage on the web//
    localStorage.removeItem('hasLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;