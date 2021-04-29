import React, { Component } from 'react'
import {List, Typography} from '@material-ui/core/';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Moment from "moment";

export default class GameOneLeaderboard extends Component {
    render() {
        return (
            <div style={{ width: '100%' }}>
          
            <List dense>
      
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt={this.props.board.userName}
                src={this.props.board.avathar}
              />
            </ListItemAvatar>
            <ListItemText id={this.props.number} primary={this.props.board.userName}  secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
               🕒 
              </Typography>
              {''}{this.props.board.score + " points - "+ Moment(this.props.board.time).fromNow()}
            </React.Fragment>
          }/>

            <ListItemSecondaryAction>
            <ListItemText id={this.props.number} primary={"🏆 "+ this.props.number} /> 
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
   
    </List>
          </div>
        )
    }
}
