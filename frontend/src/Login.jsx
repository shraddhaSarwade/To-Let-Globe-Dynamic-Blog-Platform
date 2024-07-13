import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Login.css";
import { TextField, Button, Container, Box, Typography } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import Link from "@mui/material/Link";

function Login() {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleChange = (evt) => {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
    console.log(loginData);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="login-form-container">
        <Container maxWidth="xs" className="login-form">
          <Typography variant="h4" className="title">
            Login
          </Typography>

          <form>
            <div className="form-group">
              <AccountCircle className="icon" />
              <TextField
                fullWidth
                placeholder="Username"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  className: "form-control",
                }}
              />
            </div>
            <div className="form-group">
              <Lock className="icon" />
              <TextField
                fullWidth
                placeholder="Password"
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  className: "form-control",
                }}
              />
            </div>
            <Button variant="contained" className="btn-custom">
              LOGIN
            </Button>
          </form>

          <Box className="links">
            <Link href="#" className="text-info">
              Forgot Password?
            </Link>
            <Link href="/register" className="text-info">
              Register
            </Link>
          </Box>
        </Container>
      </div>
    </>
  );
}

export default Login;
