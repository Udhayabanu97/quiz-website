import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const OuterBox = styled(Box)({
  maxWidth: "380px",
  width: "100%",
  padding: "20px",
  borderRadius: "8px",
  border: "1.5px solid rgba(255, 255, 255, 0.8)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  margin: "0 20px",
});

const StyledButton = styled(Button)({
  marginTop: "6px",
  marginBottom: "3px",
  padding: "3px 22px",
  borderRadius: "25px",
  fontSize: "1.2rem",
  fontWeight: "bold",
  textTransform: "uppercase",
  boxShadow: "none",
  background: "linear-gradient(to right,#03c9fa,#7803d7)",
});

const CustomTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
  },
});

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") setUsername(value);
    else if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Validate login details here
    if (!username || !email || !password) {
      e.preventDefault();
      alert("Please fill in all fields");
    }
  };

  return (
    <Container sx={{ display: { xs: "block", sm: "block" } }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        maxWidth="90%"
        width="100%"
        margin="0 auto"
      >
        <OuterBox boxShadow={2} textAlign="center">
          <Typography variant="h4" mb={2} style={{ color: "white" }}>
            Login
          </Typography>
          <CustomTextField
            label="Username"
            name="username"
            value={username}
            onChange={handleInputChange}
            fullWidth
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
          />
          <CustomTextField
            label="Email"
            name="email"
            value={email}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
          />
          <CustomTextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
            InputLabelProps={{
              style: {
                color: "white",
              },
            }}
          />
          <Link to="/quiz" style={{ textDecoration: "none" }}>
            <StyledButton variant="contained" onClick={handleLogin}>
              Login
            </StyledButton>
          </Link>
        </OuterBox>
      </Box>
    </Container>
  );
};

export default LoginPage;
