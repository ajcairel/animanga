import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as usersService from "../../utilities/users-service";
import "./LoginForm.css";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      navigate("/profile/mine");
      // navigate(`${user.name}/manga`);
    } catch (e) {
      console.log(e);
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <div>
        <div className="form-container">
          <form className="login" autoComplete="off" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
            <p>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
            <Button variant="light" type="submit" className="button">Log In</Button>

          </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </div>

      {/* <div className='auth-box'>

<div class="login-box">
        <h2>Welcome Back</h2>
  <h6>＼（＾○＾）人（＾○＾）／</h6>

     
  <form autoComplete="off" onSubmit={handleSubmit}>
    <div class="user-box">
      <input type="text" name="email"  value={credentials.email} onChange={handleChange}required />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" value={credentials.password} onChange={handleChange} required />

      <label>Password</label>
    </div>
  
   
    <button className="button" type="submit" >Log In</button>


  </form>
  <p className="error-message">&nbsp;{error}</p>
</div>

    </div> */}
    </>
  );
}
