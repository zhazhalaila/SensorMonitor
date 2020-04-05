import React from 'react';

import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';

const MyAlert = (props) => {
  return (
    <Collapse in={props.alertOpen}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={props.alertDelete}
          >
          <CloseIcon fontSize="inherit" />
          </IconButton>
        }
        severity={props.alertColor}
      >
      {props.responseMessage}
      </Alert>
    </Collapse>
  );
}

export default MyAlert;