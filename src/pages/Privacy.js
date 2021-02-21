import React, { Component } from "react";
import LogoArea from "./base/LogoArea";
import { Media, Player, controls } from "react-media-player";

import FlotingPlayPause from "./base/FlotingPlayPause";
import { Helmet } from "react-helmet";


import * as SETTINGS from './constants/Settings';
import BottomNav from "./base/BottomNav";

// import Skeleton from '@yisheng90/react-loading';
// const settings = require("./API/settings.json");



export default class Privacy extends Component {
  constructor(props) {
    super(props);


    this.state = {
      notLoaded: true,
      url: SETTINGS.liveURL,
      cover: SETTINGS.liveCover,
      title: "Live Radios",
      pageTitle: "Loading..",
      hasBanner: false,
      bannerContent: {
        "subOne": "Read",
        "heading": "Magazine Name by Mechanical Department Published",
        "subTwo": ""
        , "link": "p/kettonam"
      },
      hasYoutube: false,
      youtubeLink: "",

    };


    this.conatiner = {
      minHeight: "100vh",
      backgroundColor: SETTINGS.COLOURS.BG_COLOR_L0,
      color: "white",
    };
    this.content = {
      marginLeft: "10%",
      marginRight: "10%",
      paddingBottom: "200px",
    };
    this.itemHeading = {
      textAlign: "left",
      fontSize: "10px",
      paddingTop: "15px",
      color: "white",
    }
  }

  componentDidMount() {

  }


  render() {

    return (
      <Media>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Listen | The TKM Show</title>
            <link rel="canonical" href="https://thetkmshow.in/listen" />
          </Helmet>
          <div style={this.conatiner}>
            <LogoArea />
            <div style={{ marginTop: "30px", paddingBottom: "30px" }}>
              <h1 style={{ textAlign: "center" }}>Privacy Policy</h1>

            </div>
            <div style={this.content}>
              <p><span >Effective date: October 1, 2020</span></p>
              <p><span >The TKM Show ("us", "we", or "our") operates the https://thetkmshow.in website and the &ldquo;The TKM Show&rsquo;&rsquo; mobile application (the "Service").</span></p>
              <p><span >This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</span></p>
              <p><span >We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</span></p>
              <h2><b>Information Collection And Use</b></h2>
              <p><span >We collect several different types of information for various purposes to provide and improve our Service to you.</span></p>
              <h3><b>Types of Data Collected</b></h3>
              <h4><b>Personal Data</b></h4>
              <p><span >While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</span></p>
              <ul>
                <li ><span >Email address</span></li>
                <li ><span >First name and last name</span></li>
                <li ><span >Phone number</span></li>
                <li ><span >Cookies and Usage Data</span></li>
              </ul>
              <h4><b>Usage Data</b></h4>
              <p><span >We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").</span></p>
              <p><span >This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</span></p>
              <p><span >When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data.</span></p>
              <h4><b>Tracking &amp; Cookies Data</b></h4>
              <p><span >We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</span></p>
              <p><span >Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.</span></p>
              <p><span >You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.</span></p>
              <p><span >Examples of Cookies we use:</span></p>
              <ul>
                <li ><b>Session Cookies.</b><span > We use Session Cookies to operate our Service.</span></li>
                <li ><b>Preference Cookies.</b><span > We use Preference Cookies to remember your preferences and various settings.</span></li>
                <li ><b>Security Cookies.</b><span > We use Security Cookies for security purposes.</span></li>
              </ul>
              <h2><b>Use of Data</b></h2>
              <p><span >The TKM Show uses the collected data for various purposes:</span></p>
              <ul>
                <li ><span >To provide and maintain the Service</span></li>
                <li ><span >To notify you about changes to our Service</span></li>
                <li ><span >To allow you to participate in interactive features of our Service when you choose to do so</span></li>
                <li ><span >To provide customer care and support</span></li>
                <li ><span >To provide analysis or valuable information so that we can improve the Service</span></li>
                <li ><span >To monitor the usage of the Service</span></li>
                <li ><span >To detect, prevent and address technical issues</span></li>
              </ul>
              <h2><b>Transfer Of Data</b></h2>
              <p><span >Your information, including Personal Data, may be transferred to and maintained on the computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.</span></p>
              <p><span >If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there.</span></p>
              <p><span >Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.</span></p>
              <p><span >The TKM Show will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</span></p>
              <h2><b>Disclosure Of Data</b></h2>
              <h3><b>Legal Requirements</b></h3>
              <p><span >Th eTKM Show may disclose your Personal Data in the good faith belief that such action is necessary to:</span></p>
              <ul>
                <li ><span >To comply with a legal obligation</span></li>
                <li ><span >To protect and defend the rights or property of The TKM Show</span></li>
                <li ><span >To prevent or investigate possible wrongdoing in connection with the Service</span></li>
                <li ><span >To protect the personal safety of users of the Service or the public</span></li>
                <li ><span >To protect against legal liability</span></li>
              </ul>
              <h2><b>Security Of Data</b></h2>
              <p><span >The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</span></p>
              <h2><b>Service Providers</b></h2>
              <p><span >We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.</span></p>
              <p><span >These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</span></p>
              <h3><b>Analytics</b></h3>
              <p><span >We may use third-party Service Providers to monitor and analyze the use of our Service.</span></p>
              <ul>
                <li ><b>Google Analytics</b><b><br /></b><b><br /></b><span > Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.</span><span ><br /></span><span ><br /></span><span > For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page:</span><a href="https://policies.google.com/privacy?hl=en"> <span >https://policies.google.com/privacy?hl=en</span><span ><br /><br /></span></a></li>
              </ul>
              <h2><b>Links To Other Sites</b></h2>
              <p><span >Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.</span></p>
              <p><span >We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</span></p>
              <h2><b>Children's Privacy</b></h2>
              <p><span >Our Service does not address anyone under the age of 18 ("Children").</span></p>
              <p><span >We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</span></p>
              <h2><b>Changes To This Privacy Policy</b></h2>
              <p><span >We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</span></p>
              <p><span >We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.</span></p>
              <p><span >You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</span></p>
              <h2><b>Contact Us</b></h2>
              <p><span >If you have any questions about this Privacy Policy, please contact us:</span></p>
              <ul>
                <li ><span >By email: thetkmshow@gmail.com</span></li>
              </ul>





            </div>
          </div>

     
          {/* <NowPlaying playing={this.state.playing}/> */}
          <div className="media">
          
            <BottomNav selected="privacy"/>
          </div>
        </div>
      </Media>
    );
  }
}
