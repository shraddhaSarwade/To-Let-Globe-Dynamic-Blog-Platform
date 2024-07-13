// function Register() {
//   return <div>Register</div>;
// }

// export default Register;

import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  // ThemeProvider,
  // createTheme,
} from "@mui/material";
import { AccountCircle, Lock, Person } from "@mui/icons-material";
import Link from "@mui/material/Link"; // Ensure Link is imported correctly
import "./Register.css";

// Create a custom theme with overrides
// const theme = createTheme({
//   components: {
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           "&$focused $notchedOutline": {
//             borderColor: "#5aa79f", // Change border color when focused
//           },
//         },
//       },
//     },
//     MuiSelect: {
//       styleOverrides: {
//         icon: {
//           color: "#5aa79f", // Change select icon color
//         },
//         select: {
//           "&:focus": {
//             borderColor: "#5aa79f", // Change border color when focused
//           },
//         },
//       },
//     },
//   },
// });

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
    console.log(formData);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      
      <div className="register-form-container">
        <Container maxWidth="xs" className="register-form">
          <Typography variant="h4" className="title">
            Register
          </Typography>

          <form>
            <div className="form-group">
              <AccountCircle className="icon" />
              <TextField
                fullWidth
                placeholder="Username"
                name="username"
                value={formData.username}
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
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  disableUnderline: true,
                  className: "form-control",
                }}
              />
            </div>
            <div className="form-group">
              <Person className="icon" />
              <FormControl fullWidth className="form-control">
                <InputLabel for="role">Role</InputLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  label="Role"
                  id="role"
                  disableUnderline
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="content-creator">Content Creator</MenuItem>
                  <MenuItem value="seller">Seller</MenuItem>
                  <MenuItem value="buyer">Buyer</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Button variant="contained" className="btn-custom">
              REGISTER
            </Button>
          </form>

          <Box className="links">
            <Link href="/login" className="text-info">
              Already have an account? Login
            </Link>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default Register;
