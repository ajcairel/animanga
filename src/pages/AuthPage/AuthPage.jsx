import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(true);
  return (


  //   <main className="AuthPage">
  //   {showSignUp ? <LoginForm setUser={setUser} /> : <SignUpForm setUser={setUser} />}
  //   <div>
  //     <h3 onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'SIGN UP' : 'LOG IN'}</h3>
  //   </div>
  // </main>
    <main>
      <h1>Welcome to MyAniManga List</h1>
      {/* <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User? Sign Up!'}</button> */}
      { showSignUp ?
      <>
      <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} showSignUp={setShowSignUp}/>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User? Sign Up!'}</button>
      
      </>
          :
          <>
          
          <LoginForm setUser={setUser} />
          <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'New User? Sign Up!'}</button>
          </>
      }
    </main>
  );
}