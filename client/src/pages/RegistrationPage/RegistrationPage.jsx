import React from "react";
import { TextField, Typography, Button } from "@mui/material";
import style from "./style.module.css";
import { useState } from "react";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    pwd: "",
  });

  function changeForm(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function show() {
    const response = await fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const json = await response.json();
    console.log(json);
  }

  return (
    <div className={style.wrapper}>
      <Typography variant="h4" textAlign="center">
        Registration
      </Typography>

      <div className={style.regForm}>
        <TextField
          name="name"
          label="Name"
          variant="standard"
          onChange={changeForm}
        />
        <TextField
          name="surname"
          label="Surname"
          variant="standard"
          onChange={changeForm}
        />
        <TextField
          name="email"
          label="Email"
          variant="standard"
          onChange={changeForm}
        />
        <TextField
          name="pwd"
          label="Password"
          variant="standard"
          onChange={changeForm}
        />
      </div>

      <Button variant="outlined" size="large" sx={{ mt: 3 }} onClick={show}>
        SIGN UP
      </Button>

      <div className={style.linkSignIn}>
        <p>Already have an account?</p>
        <p>SIGN IN</p>
      </div>
    </div>
  );
}

export default RegistrationPage;
