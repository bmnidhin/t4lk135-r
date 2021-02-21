import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import AlbumIcon from '@material-ui/icons/Album';
import { Link } from 'react-router-dom'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import { QueueMusic } from '@material-ui/icons';
import RadioIcon from '@material-ui/icons/Radio';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
const myList = [
  {
    id: '0',
    name: "Home",
    path: '/',
    icon: <HomeIcon />
  },
  {
    id: '1',
    name: "Listen",
    path: '/listen',
    icon: <AlbumIcon />
  },
  {
    id: '2',
    name: "Playlists",
    path: '/playlist',
    icon: <PlaylistPlayIcon />
  },
  {
    id: '3',
    name: "Live Radio",
    path: '/live',
    icon: <RadioIcon />
  }
]

const mySecondList = [
  {
    id: '0',
    name: "Queue",
    path: '/queue',
    icon: <QueueMusic />
  },
  {
    id: '1',
    name: "My Library",
    path: '/library',
    icon: <SubscriptionsIcon />
  },
  {
    id: '2',
    name: "Song Dedication",
    path: '/song-dedication',
    icon: <LoyaltyIcon />
  }
]
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {myList.map((text, index) => (
          <Link to={text.path}>
            <ListItem button key={text.id}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {mySecondList.map((text, index) => (
          <Link to={text.path}>
            <ListItem button key={text.id}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <span className="material-icons" onClick={toggleDrawer(anchor, true)} style={{ color: "white" }}>
            menu
            </span>
          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}