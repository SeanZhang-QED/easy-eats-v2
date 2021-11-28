import React, {useState} from 'react';
import {Alert, IconButton, Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function Message(props) {
    const [open, setOpen] = useState(props.open);
    const {alertType, alertMessage}  = props;
    const {handleClose} = props;
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={()=>{setOpen(false); handleClose();}}>
            <Alert
                severity={alertType}
                action={
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ mb: 2 }}
            >
                {alertMessage}
            </Alert>
        </Snackbar>
    )
}

export default Message;