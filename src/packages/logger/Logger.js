
module.exports = {
    myLog
}
 
function myLog(name,userId, event,type, progress) {
   
    const data = {
     name : name,
     userId : userId,
     event : event,
     type:type,
     progress:progress
     
    }
   
    return data;
}
 