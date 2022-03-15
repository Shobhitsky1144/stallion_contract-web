import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "../../../stylesheets/user-profile/ContactInfoDialog.css";
import emailIcon from "../../../assets/WebIcons/email 1x.png";
import phoneIcon from "../../../assets/WebIcons/phone 1x.png";
import editIcon from "../../../assets/WebIcons/edit 1x.png";

export default function ContactInfoDialog({ contactModal }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (contactModal) {
      handleClickOpen();
    }
  }, [contactModal]);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    "& .MuiDialogContent-root": {
      padding: theme.spacing(2),
    },
    "& .MuiDialogActions-root": {
      padding: theme.spacing(1),
    },
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };

  BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
  };

  return (
    <div>
      <span
        onClick={handleClickOpen}
        className="contact-info pl-2 cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        Contact Info
      </span>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <div className="text-white modal-title pl-4 pt-1 pb-1">
            Shobhit Yadav
          </div>
        </BootstrapDialogTitle>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-white contact pl-4">Contact Info</span>
          <span>
            {" "}
            <div className="pr-3" style={{ cursor: "pointer" }}>
              <img src={editIcon} height={18} alt="" />
            </div>
          </span>
        </div>
        <DialogContent dividers>
          <Typography gutterBottom>
            <div className="d-flex justify-content-between ">
              <div className="d-flex align-items-center text-white pl-3">
                <div className="pr-2">
                  <img src={phoneIcon} height={20} alt="" />
                </div>
                <div className="">
                  <span>Phone</span>
                  <br />
                  <span>9989898999</span>
                </div>
              </div>
              {/* <div className="pr-3">
                <img src={editIcon} height={20} alt="" />
              </div> */}
            </div>
          </Typography>
          <Typography gutterBottom>
            <div className="d-flex justify-content-between contact-email pt-2">
              <div className="d-flex align-items-center text-white pl-3">
                <div className="pr-2">
                  <img src={emailIcon} height={20} alt="" />
                </div>
                <div className="">
                  <span>Email</span>
                  <br />
                  <span>shobhit@nssplindia.com</span>
                </div>
              </div>
              {/* <div className="pr-3">
                <img src={editIcon} height={20} alt="" />
              </div> */}
            </div>
          </Typography>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>
    </div>
  );
}
