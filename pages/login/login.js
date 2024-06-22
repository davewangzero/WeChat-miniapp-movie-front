// login.js
Page({
  data: {
      userInfo:null,
  account: '',
  password: '',
  },

  handleAccountInput(e) {
      this.setData({
          account: e.detail.value
      });
  },

  handlePasswordInput(e) {
      this.setData({
          password: e.detail.value
      });
  },

  login() {
    var that=this
    // 打印输入的账号和密码
    console.log('账号:', this.data.account);
    console.log('密码:', this.data.password);

    // 引入用户列表数据
    var resdata = require("../../JSONDB/userlist");

    // 在用户列表中查找匹配的用户
    for (const item of resdata.postData.user) {
      console.log(item.nickName," ",this.data.account," ",item.password," ",this.data.password)
        if (item.nickName == this.data.account && item.password == this.data.password) {
            // 登录成功逻辑，例如设置用户信息并导航到下一页
            this.setData({
              userInfo: item
            })
            wx.setStorageSync('userInfo', item);
            var eventChannel = this.getOpenerEventChannel();
            eventChannel.emit('loginSuccess', item );
            wx.navigateBack(); // 示例中的导航返回操作，请根据实际需要调整
            return;
        }
    }

    // 如果未找到匹配的用户，可以输出错误信息或执行其他逻辑
    console.log('登录失败：账号或密码错误');
    // 可以在界面上显示登录失败的提示或执行其他操作
}

});
