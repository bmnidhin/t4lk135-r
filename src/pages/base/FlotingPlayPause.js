import React, { Component } from "react";

const image =
  "https://a10.gaanacdn.com/images/albums/51/1596151/crop_175x175_1596151.jpg";
export default class FlotingPlayPause extends Component {
  state = {
    imageURL: image,
  };

  style = {
    position: "fixed",
    bottom: "0px",
    right: "0px",
    left: "0px",
    zIndex: "999",
    cursor: "pointer",
    backgroundColor: "white",
    height: "70px",
    width: "100%",
  };

  render() {
    return (
      <div style={this.style}>
        <table class="table"style={{marginBottom:0,}}>
          <tbody>
            <tr>
              <td width="50px"><img src={this.state.imageURL} width="50px"></img></td>
              <td className="align-middle">
                  <div className="text-truncate" style={{width: '130px',fontSize:'18px',}}>Kodikayaran Pooramayi podiparathiyoru</div>
                  
                  <span style={{fontSize:'8px'}}> 12:00 / 03:00 </span>
                
                  </td>
             
              <td>@mdo</td>
            </tr>
          </tbody>
        </table>
        {/* <div class="row">
          <div class="col-1 roundedImage flotingImage">
            {" "}
            <img src={this.state.imageURL} width="50px"></img>
          </div>
          <div class="col-6 flotingTitle text-truncate">col-sm-4</div>
          <div class="col-5 flotingTitle">col-sm-4</div>
        </div> */}
      </div>
    );
  }
}
