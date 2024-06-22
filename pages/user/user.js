//获取应用实例
//var app = getApp()
Page({
  data:{
    userInfo:null,
    orders:[]
  },
  refreshData(){
    var that = this
    if(that.data.userInfo){
      //console.log(that.data.userInfo)
      var str = "../../JSONDB/order"+that.data.userInfo.id
      var resData = require(str)
      that.setData({
        orders:resData.postData.orders
      })
    }else{
      wx.navigateTo({
        url:"../LoginUtil/LoginUtil",
        events:{
          UserInfo: function(data){
            that.setData({
              userInfo: data
            })
            //console.log(that.data.userInfo)
            var str = "../../JSONDB/order"+that.data.userInfo.id
            //console.log(that.data.userInfo.id)
            var resData = require(str)
            that.setData({
              orders:resData.postData.orders
            })
          }
        },
        success:function(res){
          
        }
      })
    }
  },
  // 监听页面加载
  onLoad: function () {
    this.refreshData()
  },
  onShow: function(){
    this.refreshData()
  },
  showCheckInfo: function(event) {
    // 获取点击按钮的订单 ID
    let orderId = event.currentTarget.dataset.id;

    // 调用生成二维码的方法，假设是一个自定义的函数 generateQRCode
    // 生成二维码图片的函数，参数可以是订单 ID 或其他信息
    // 弹出模态框显示二维码
    wx.showModal({
      title: '核销码',
      content: orderId,
      showCancel: false,
      confirmText: '关闭',
      confirmColor: '#3CC51F',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定');
        }
      }
    });
  }
})