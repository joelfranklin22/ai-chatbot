import styles from "../styles/Auth.module.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          <h2>Welcome Back!</h2>
          <form action="">
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" name="" id="" />
              <div>invalid email</div>
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" name="" id="" />
              <div>invalid password</div>
            </div>
            <button className={styles.loginBtn}>Sign in</button>
          </form>
          <div className={styles.divider}>
            <span>or</span>
          </div>
          <div className="googleAuth">
            <button className={styles.googleLogin}>Continue with Google</button>
          </div>
          <div className={styles.register}>
            <span>No account?</span>
            <Link to="/">Register</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
