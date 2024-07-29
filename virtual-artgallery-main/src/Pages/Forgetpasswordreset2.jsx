import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Forgetpasswordreset2 = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetPassword = () => {
    handleClickOpen();
  };

  return (
    <div id='fhole'>
      <div id='fpasswordhole'>
        <center>
          <h1 id='passh'>Password Reset</h1>
          <br /><br />
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
            <TextField id="new-password" label="New Password" variant="outlined" type='password' />
          </Box>
          <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
            <TextField id="confirm-password" label="Confirm Password" variant="outlined" type='password' />
            <br /><br />
          </Box>
          <Button variant="contained" onClick={handleResetPassword} >Reset Password</Button><br></br>
          <Link to="/login"><br></br>
            <button type='button' id='forgetbutton'>⬅️Back To Login</button>
          </Link>
        </center>
      </div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Password Reset"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your password has been reset successfully.<br></br>
            Kindly go back to our login page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Forgetpasswordreset2;
