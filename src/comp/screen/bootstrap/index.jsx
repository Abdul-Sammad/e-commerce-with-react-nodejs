import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FOO() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>type somethig</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
     

           <TextField
          id="outlined-textarea"
          label="Name"
          placeholder="Enter Name"
          multiline
        />
     <br/>
     <br/>
           <TextField
          id="outlined-textarea"
          label="DEScription"
          placeholder="Enter Description"
          multiline
        />
        <br/>
        <br/>
           <TextField
          id="outlined-textarea"
          label="Price"
          placeholder="Enter Price"
          multiline
        />
        <br/>
        <br/>
           <TextField
          id="outlined-textarea"
          label="Quantity"
          placeholder="Enter Quantity"
          multiline
        />
        <Button variant="contained">Add</Button>
        </Box>
    
      </Modal>
    </div>
  );
}
