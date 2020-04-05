import React from 'react';

import TextField from '@material-ui/core/TextField';

const Input = (props) => {
  
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name={props.name}
      label={props.label}
      type={props.type}
      id={props.id}
      error={props.error}
      helperText={props.text}
      onChange={props.handleChange}
    />
  );
}
export default Input;