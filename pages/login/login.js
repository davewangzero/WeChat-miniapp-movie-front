// login.js
Page({
  data: {
    userInfo: null,
    account: '',
    password: '',
  },

  handleAccountInput(e) {
    this.setData({
      account: e.detail.value
    });
  },

  handlePasswordInput(e) {
    var md5=require("../../utils/md5")
    //console.log(md5.b64_md5(e.detail.value))
    this.setData({
      password: md5.b64_md5(e.detail.value)
    });
  },
  login() {
    var that = this
    console.log('账号:', this.data.account);
    console.log('密码:', this.data.password);
    var resdata = require("../../JSONDB/userlist");
    for (const item of resdata.postData.user) {
      console.log(item.nickName, " ", this.data.account, " ", item.password, " ", this.data.password)
      if (item.nickName == this.data.account && item.password == this.data.password) {
        this.setData({
          userInfo: item
        })
        wx.setStorageSync('userInfo', item);
        var eventChannel = this.getOpenerEventChannel();
        eventChannel.emit('loginSuccess', item);
        wx.navigateBack();
        return;
      }
    }
    wx.showModal({
      title: "登录失败",
      content: '账号或密码错误',
      showCancel: false // 不显示取消按钮
    });
    console.log('登录失败：账号或密码错误');
  },
  NewUser(){
    var that = this
    var resdata = require("../../JSONDB/userlist");
    console.log(that.data)
    if(resdata.hasUser(that.data)){
      wx.showModal({
        title: '错误',
        content: '用户名不能重复',
        showCancel: false,
        confirmColor: '#ff4d64',
        complete: (res) => {
          if (res.confirm) {
            that.onLoad()
            return
          }
        }
      })
    }
    else{
      var item = resdata.adduser(that.data)
    this.setData({
      userInfo: item
    })
    wx.setStorageSync('userInfo', item);
    var eventChannel = this.getOpenerEventChannel();
    eventChannel.emit('loginSuccess', item);
    wx.navigateBack();
    return;
    }
  }
});
