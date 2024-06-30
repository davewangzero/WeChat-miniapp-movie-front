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
      //var str = "../../JSONDB/order"+that.data.userInfo.id
      var resData = require("../../JSONDB/orderlist")
      that.setData({
        orders:resData.selectOrder(that.data.userInfo).orders
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
            var resData = require("../../JSONDB/orderlist")
            that.setData({
              orders:resData.selectOrder(that.data.userInfo).orders
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
    let orderId = event.currentTarget.dataset.id;
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