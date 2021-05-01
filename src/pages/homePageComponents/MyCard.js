import React, { Component } from "react";
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

export default class MyCard extends Component {
  render() {
    return (
      <div >

        <Box>
         
            <img style={{ width:  "100%", height: "100%" }} alt={this.props.title} src={this.props.image} />
     

       
            <Box pr={2} className="pt-2">
              <Typography gutterBottom variant="body2">
                {this.props.title}
              </Typography>
              {/* <Typography display="block" variant="caption" color="textSecondary">
                {"The TKM Show"}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {`${"44M"} • ${"Date"}`}
              </Typography> */}
            </Box>
         
        </Box>
    
      </div>
    );
  }
}
