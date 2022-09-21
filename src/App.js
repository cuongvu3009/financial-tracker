import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import { useAuthContext } from './hooks/useAuthContext';
import { Navigate } from 'react-router-dom';

function App() {
  const { isAuthReady, user } = useAuthContext();

  return (
    <>
      {isAuthReady && (
        <Router>
          <Navbar />
          <Routes>
            {user && <Route path='/' element={<Home />} />}
            {!user && <Route path='/' element={<SignIn />} />}
            {user && (
              <Route path='/signin' element={<Navigate replace to='/' />} />
            )}
            {user && (
              <Route path='/signup' element={<Navigate replace to='/' />} />
            )}
            {!user && <Route path='/signin' element={<SignIn />} />}
            {!user && <Route path='/signup' element={<SignUp />} />}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
