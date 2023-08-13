import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import { Typography, TextField, Button } from "@mui/material";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", pwd: "" });

  function changeForm(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  }

  function show() {
    console.log(formData);
  }

  return (
    <div className={style.wrapper}>
      <Typography variant="h4" textAlign="center">
        Login
      </Typography>

      <div className={style.loginForm}>
        <TextField
          name="email"
          label="Standard"
          variant="standard"
          onChange={changeForm}
        />
        <TextField
          name="pwd"
          label="Standard"
          variant="standard"
          onChange={changeForm}
        />
      </div>

      <Button variant="outlined" size="large" sx={{ mt: 3 }} onClick={show}>
        Sign In
      </Button>
    </div>
  );
}

export default LoginPage;
