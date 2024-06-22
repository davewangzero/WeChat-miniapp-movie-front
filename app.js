App({
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else if(wx.getStorageSync('userInfo')){
      that.globalData.userInfo=wx.getStorageSync('userInfo')
      typeof cb == "function" && cb(that.globalData.userInfo)
    }else{
      //调用登录接口
      /*wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })*/
      wx.navigateTo({
        url: '/pages/login/login',
        success: function(res) {
          // 设置成功跳转后的逻辑
          var eventChannel = that.getOpenerEventChannel();
          eventChannel.on('loginSuccess', function(data){
            that.globalData.userInfo = data
            //that.globalData.userInfo=wx.getStorageSync('userInfo')
            //that.globalData.userInfo=res.data.userInfo
            console.log(that.globalData.userInfo)
            typeof cb == "function" && cb(that.globalData.userInfo)
            console.log('跳转成功');
          })
          
        },
        fail: function(res) {
          console.log('跳转失败', res);
        }
      });
    }
  },
  globalData:{
    userInfo:null
  }
})