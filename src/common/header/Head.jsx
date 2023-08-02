import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton, Tooltip } from "@mui/material";

const Head = () => {
  return (
    <>
      <div className="top-head">
        <div className="container">
          <div className="row">
            <div className="head-content">
              <div className="box">
                <Tooltip title="Phone">
                  <IconButton
                    aria-label="phone"
                    size="small"
                    sx={{ color: "var(--white-text)" }}
                  >
                    <LocalPhoneIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <p>+880123457894</p>
              </div>
              <div className="box">
                <Tooltip title="Mail">
                  <IconButton
                    aria-label="mail"
                    size="small"
                    sx={{ color: "var(--white-text)" }}
                  >
                    <MailIcon fontSize="inherit" />
                  </IconButton>
                </Tooltip>
                <p>example@gmail.com</p>
              </div>
            </div>
            <div className="head-content">
              <ul>
                <li>Theme FAQ's</li>
                <li>Need Helps</li>
                <li>EN</li>
                <li>USD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
