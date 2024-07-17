import React, { CSSProperties } from "react";

const Login: React.FC = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Login with</h2>
      <div style={styles.socialLoginContainer}>
        <button style={styles.socialButton}>
          <img src="/github-icon.png" alt="Github" style={styles.icon} />
        </button>
        <button style={styles.socialButton}>
          <img src="/google-icon.png" alt="Google" style={styles.icon} />
        </button>
        <button style={styles.socialButton}>
          <img src="/facebook-icon.png" alt="Facebook" style={styles.icon} />
        </button>
      </div>
      <p>or</p>
      <input type="email" placeholder="Email" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />
      <button style={styles.loginButton}>LOGIN</button>
      <div style={styles.captchaContainer}>
        <input type="checkbox" id="captcha" />
        <label htmlFor="captcha">I'm not a robot.</label>
        <img src="/recaptcha.png" alt="reCAPTCHA" className="w-8 h-8" />
      </div>
      <div>
        <p>
          Looking to{" "}
          <a href="#" style={styles.link}>
            create an account
          </a>{" "}
          ?
        </p>
        <p>
          <a href="#" style={styles.link}>
            Forgot password
          </a>{" "}
          ?
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  link: {
    color: "#00bfff",
    textDecoration: "none",
  },
  container: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    margin: "10px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  title: {
    color: "black",
    margin: "0 0 20px 0",
  },
  socialLoginContainer: {
    color: "black",
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "10px",
    gap: "20px", // 追加: アイコン間の隙間を設定
  },
  socialButton: {
    border: "none",
    background: "none",
  },
  icon: {
    width: "32px",
    height: "32px",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#00bfff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  captchaContainer: {
    color: "black",
    fontSize: "6px",
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
    marginBottom: "20px",
    gap: "20px",
  },
  captchaImage: {
    marginLeft: "20px",
    paddingLeft: "10px",
  },
};

export default Login;
