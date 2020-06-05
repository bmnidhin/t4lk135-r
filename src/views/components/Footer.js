import React, { Component } from 'react'

const developer= "The TKM Show";


class Footer extends Component {

 
  render() {
    
    return (
        <footer className="footer">
            <div className="center">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-sm-12 col-xs-12">
                        <div className="main-footer justify-content-center">

                            <div className="social">
                               <br/>
                               
  



                                <a href="https://www.instagram.com/_thetkmshow_/"target="_blank"><i className="fa fa-instagram nbm-logo"></i>  Follow to Get Updates</a>&nbsp;&nbsp;&nbsp;&nbsp; 
                                <a href="https://anchor.fm/the-tkm-show"target="_blank"><i className="fa fa-podcast nbm-logo"></i>  Listen On Podcast</a>&nbsp;&nbsp;&nbsp;&nbsp;
                                <a href="https://open.spotify.com/show/7tmPClseHqoHF5bFYT0F2o"target="_blank"><i className="fa fa-spotify nbm-logo"></i>  Listen On Spotify</a>
                                
                            </div>
                            <div>
          
                            </div>

                            <p className="artribute">© {developer}.</p>

                            
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    
        
        

     
    )
  }
}
 
export default Footer;