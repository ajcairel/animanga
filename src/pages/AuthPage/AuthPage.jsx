import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Logo from '../../components/Logo/Logo';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (


  //   <main className="AuthPage">
  //   {showSignUp ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
  //   <div>
  //     <h3 onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'SIGN UP' : 'LOG IN'}</h3>
  //   </div>
  // </main>
    <main className="AuthPage">
      <div>
      <h1>{showSignUp ? 'Welcome to MyAnimanga' : 'Welcome Back! '}</h1>
      
      {/* <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User? Sign Up!'}</button> */}

      </div>
      { showSignUp ?
      <>
      <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={setShowSignUp}/>
      
      </>
          :
          <>
          
          <LoginForm setUser={setUser} />
          </>
      }
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User? Sign Up!'}</button>
      
    </main>
  );
}