import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";

const TextFieldInput = ({ name, value, onChange, label }) => {
  return (
    <TextField
      label={label}
      id="standard-name"
      value={value}
      margin="normal"
      onChange={onChange(name)}
    />
  );
};

export default TextFieldInput;
