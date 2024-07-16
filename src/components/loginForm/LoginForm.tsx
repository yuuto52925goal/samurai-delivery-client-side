"use client";
import { useState } from "react";
import "./LoginForm.css";
import loadingImage from "../../images/loading.png"; // 画像へのパスを適切に指定してください

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: データベース接続ロジックは後で追加
    alert("Form submitted");
  };

  return (
    <div className="hero-product">
      <div className="product-info">
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="formGroup">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="product-picture">
        {/* Add an image or any rotating element here */}
        <img
          src="../../images/loading.png"
          alt="Product"
          className="beautiful-landscape"
        />{" "}
      </div>
    </div>
  );
};

export default LoginForm;
