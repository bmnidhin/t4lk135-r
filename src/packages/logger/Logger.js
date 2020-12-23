'use strict';

const { default: Axios } = require("axios");

 
module.exports = {
    myLog
}
 
function myLog(isLoggedIn, name,userId, event,type, progress) {
   
    const data = {
     name : name,
     userId : userId,
     event : event,
     type:type,
     progress:progress
     
    }
   
    return console.log(data);
}
 