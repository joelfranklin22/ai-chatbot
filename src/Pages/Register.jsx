import { useState } from "react";
import styles from "../styles/Auth.module.css";
import { Link } from "react-router-dom";
import { addUser } from "../api/authApi";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Register() {
  const [serverError, setServerError] = useState("");
  // Form Validation
  const schema = z.object({
    name: z.string().min(1, "Name is Required"),
    email: z.string().email("Invalid Email"),
    password: z.string().min(6, "Password must be 6 characters"),
    // .regex(/[a-z]/, "password must conatins one lowercase"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Sending Data to Backend
  const sendData = async (data) => {
    try {
      setServerError("");

      const res = await addUser(data.name, data.email, data.password);
      console.log(res);
      reset();
    } catch (error) {
      setServerError(error.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.loginContainer}>
          {/* Head Title */}
          <h2>Create Account</h2>
          {/* Form input */}
          <form onSubmit={handleSubmit(sendData)}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input type="text" name="" id="" {...register("name")} />
              {errors.name && (
                <div className={styles.errorMsg}>
                  <strong>{errors.name.message}</strong>
                </div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input type="email" name="" id="" {...register("email")} />
              {errors.email && (
                <div className={styles.errorMsg}>
                  <strong>{errors.email.message}</strong>
                </div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>Password</label>
              <input type="password" name="" id="" {...register("password")} />
              {errors.password && (
                <div className={styles.errorMsg}>
                  <strong>{errors.password.message}</strong>
                </div>
              )}
            </div>
            {serverError && (
              <div className={styles.errorMsg}>{serverError}</div>
            )}
            <button type="submit" className={styles.loginBtn}>
              Create account
            </button>
          </form>
          {/* divider */}
          <div className={styles.divider}>
            <span>or</span>
          </div>
          {/* Google Authentication */}
          <div className="googleAuth">
            <button className={styles.googleLogin}>Continue with Google</button>
          </div>
          {/* Sign in */}
          <div className={styles.register}>
            <span>Already have an account ?</span>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
