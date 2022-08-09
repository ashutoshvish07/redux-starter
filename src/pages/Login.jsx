import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAPI } from "./../store/auth/auth.action";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((store) => store.auth);
  
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO
    dispatch(loginAPI(loginCreds));
    // navigate("/");
  };

  useEffect(() => {
     //console.log(location);
    // console.log(isAuth)
    if (isAuth) {
      console.log(location);
      navigate(location.pathname || "/", { replace: true });
    }
  }, [isAuth]);

  return (
    <div>
     <h1>Login page</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          data-cy="login-email"
          name="email"
          type="email"
          placeholder="lovly@gmail.com"
          value={loginCreds.email}
          onChange={hanldeChange}
        />
        <input
          data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          value={loginCreds.password}
          onChange={hanldeChange}
        />
        <button data-cy="login-submit" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
