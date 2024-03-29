import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../utilities/users-service";
import { Button } from "react-bootstrap";

export default class SignUpForm extends Component {

  // Unlike with a function component that can define multiple 
  // pieces of state usinf the useState hook multiple times,
  // a class component's state is always a single object
  // assigned to a state property on the instance of the 
  // component 

  // constructor method

  // constructor() {
  //   this.state = {
  //     naim: '',
  //     email: '',
  //     password: '',
  //     confirm: '',
  //     error: ''
  //   }
  // }

  // class fields approach 
  
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
      this.props.navigate("/profile/mine")

    } catch {
      // Invalid signup
      this.setState({
        error: "Sign Up Failed - Try Again",
      });
    }
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  keyDown = (e) => { 
    var e = window.event || e;
    var key = e.keyCode;
    //space pressed
     if (key == 32) { //space
      e.preventDefault();
     }
           
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <div>
          <div className="form-container">
            <form
              className="sign-up"
              autoComplete="off"
              onSubmit={this.handleSubmit}
            >
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                onKeyDown={this.keyDown}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <label>Confirm</label>
              <input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
              />
              <p>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</p>
              <Button disabled={disable} variant="light" type="submit" className="button">SIGN UP</Button>

            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>

        {/* <div className="auth-box"> 
      <div class="login-box">
        <h2>Join AniManga</h2>
  <h6>┏(＾0＾)┛┗(＾0＾) ┓</h6>

     
  <form autoComplete="off" onSubmit={this.handleSubmit}>
    <div class="user-box">
      <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
      <label>Name</label>
    </div>
    <div class="user-box">
      <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />

      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />

      <label>Password</label>
    </div>
    <div class="user-box">
      <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />

      <label>Confirm Password</label>
    </div>
   
    <button className="button" type="submit" disabled={disable}>SIGN UP</button>
    

  </form>
  <p className="error-message">&nbsp;{this.state.error}</p>
</div>
      </div> */}
      </>
    );
  }
}
