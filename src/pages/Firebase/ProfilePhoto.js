import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

export default function ProfilePhoto(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
        <Avatar 
        alt={props.alt}
        src={props.src}  
        aria-controls="fade-menu" aria-haspopup="true"
         onClick={handleClick}/>
      {/* <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        Open with fade transition
      </Button> */}
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
         
        <MenuItem onClick={handleClose}>
            <Link to="/library">
              My Library
            </Link>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>Settings</MenuItem> */}
        <MenuItem onClick={props.logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

