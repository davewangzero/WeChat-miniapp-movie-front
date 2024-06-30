var Localdata={
  "user":[
    {
      "id":'1',
      "avatarUrl":'../../images/i_contact_hl.png',
      "nickName":'test1',
      "password":'ISMvKXpXpadDiUoOSoAfww'
    }
  ],
  "userID":2
}
function hasUser(userInfo){
  for(var item of Localdata.user){
    if(item.nickName == userInfo.account){
      return true
    }
  }
  return false
}
function adduser(userInfo){
  var newuser={
      "id":Localdata.userID,
      "avatarUrl":'../../images/i_contact_hl.png',
      "nickName":userInfo.account,
      "password":userInfo.password
  }
  Localdata.user.push(newuser)
  Localdata.userID = Localdata.userID+1
  return newuser
}
module.exports = {
  postData: Localdata,
  adduser:adduser,
  hasUser:hasUser
}