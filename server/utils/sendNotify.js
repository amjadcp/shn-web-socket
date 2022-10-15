const axios = require('axios')
module.exports.sendNotify=async(userId, grp, message, userType)=>{
    if(typeof(userId)==='string') userId = [userId]
    if(typeof(grp)==='string') grp = [grp]
    if(typeof(userType)==='string') userType = [userType]
    await axios.post('http://127.0.0.1:5001/notify', { userId, grp, message, userType })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}