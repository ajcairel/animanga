import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();
  return (
    <main className="AuthPage">
      <div>
        <h1>{showSignUp ? "Welcome to MyAniManga" : "Welcome Back! "}</h1>
      </div>
      {showSignUp ? (
        <>
          <SignUpForm
            setUser={setUser}
            setShowSignUp={setShowSignUp}
            showSignUp={setShowSignUp}
            navigate={navigate}
          />
        </>
      ) : (
        <>
          <LoginForm setUser={setUser} />
        </>
      )}
      <Button variant="light" className="button" onClick={() => setShowSignUp(!showSignUp)}> {showSignUp ? "Returning User? Log In!" : "New User? Sign Up!"}</Button>
     
    </main>
  );
}
