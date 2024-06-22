Page({
  onLoad:function(){
  var that = this
  var app=getApp()
  const eventChannel = this.getOpenerEventChannel()
  if(this.data.userInfo){
    console.log(this.data.userInfo)
    eventChannel.emit("UserInfo", that.data.userInfo)
    app.globalData.userInfo = that.data.userInfo
    wx.navigateBack()
  }else if(wx.getStorageSync('userInfo')){
    that.setData({
      userInfo: wx.getStorageSync('userInfo')
    })
    app.globalData.userInfo = that.data.userInfo
    eventChannel.emit("UserInfo", that.data.userInfo)
    wx.navigateBack()
  }else if(app.globalData.userInfo){
    that.setData({
      userInfo: app.globalData.userInfo
    })
    eventChannel.emit("UserInfo", that.data.userInfo)
    wx.navigateBack()
  }else{
    wx.navigateTo({
      url: '../login/login',
      events:{
        loginSuccess:function(data){
          that.setData({
            userInfo: data
          })
          //that.globalData.userInfo=wx.getStorageSync('userInfo')
          //that.globalData.userInfo=res.data.userInfo
          console.log(that.data.userInfo)
          app.globalData.userInfo = that.data.userInfo
          eventChannel.emit("UserInfo", that.data.userInfo)
          wx.navigateBack()
        }
      },
      success: function(res) {
        // 设置成功跳转后的逻辑
        console.log("跳转成功")
      },
      fail: function(res) {
        console.log('跳转失败', res);
        //wx.navigateBack()
      }
    });
  }
},
data:{
  userInfo:null
}
})