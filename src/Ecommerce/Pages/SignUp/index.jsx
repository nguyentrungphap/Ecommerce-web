import React from "react";
import Style from "./style.module.scss";
function SignUp() {
  return (
    <div className={Style.SignUp}>
      <div className={Style.Container}>
        <h1>Sign Up</h1>
        <div className={Style.Fields}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className={Style.Login}>
          Already have an account? <span>Login here</span>
        </p>
        <div className={Style.Agree}>
          <input type="checkbox" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
