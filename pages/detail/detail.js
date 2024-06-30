var resdata
var str 
Page({
  data: {
    movieDetail: [],
    movieComment:[],
    movieThumbs:[],
    movieDesc:'',
    loading: false,
    ticketInfo:null,
    desc: false,
    userInfo:null
  },
  // 页面初始化
  onLoad: function (options) {
    
    var that = this
    
    str = "../../JSONDB/movie"+options.id
    resdata = require("../../JSONDB/movieList")
    var moviedata = resdata.selectMovie(options.id)
    console.log(moviedata)
    //console.log(resdata)
    that.setData({
      movieDetail: moviedata.movieDetailModel,
      movieComment:moviedata.CommentResponseModel,
      movieThumbs: moviedata.movieThumbs,
      movieDesc: moviedata.movieDesc,
      ticketInfo:moviedata.ticketInfo,
      loading: true
    })
    if(wx.getStorageSync('userInfo')){
      that.setData({
        userInfo: wx.getStorageSync('userInfo')
      })
    }
    var app = getApp()
    if(app.globalData.userInfo){
      that.setData({
        userInfo: app.globalData.userInfo
      })
    }
  },
  // 页面初次渲染完成（每次打开页面都会调用一次）
  onReady: function(){
    wx.setNavigationBarTitle({
      title: this.data.movieDetail.nm
    })
  },
  // 展开介绍
  showDesc: function() {
    this.setData({
      desc: true
    })
  },
  // 关闭介绍
  hideDesc: function() {
    this.setData({
      desc: false
    })
  },
  // 打开相册
  showAlbum(e){
    wx.navigateTo({
      url: '../album/album?title=navigate&id='+this.data.movieDetail.id+'&pid='+e.target.dataset.index+''
    })
  },
  // 购票
  buyTickets: function() {
    var that=this
    if(this.data.userInfo){
      wx.showModal({
        title: '购票提示：',
        content: '购票成功',
        showCancel: false,
        confirmColor: '#ff4d64',
        success:function(res){
          if(res.confirm){
            var currentnum = that.data.ticketInfo.num-1;
            that.setData({
              ticket:{
                num:currentnum
              }
            })
            resdata.buyticket(that.data.movieDetail)
            var order = require("../../JSONDB/orderlist")
            order.buyticket(that.data, new Date())
            that.onLoad({
              "title":"navigate",
              "id":that.data.movieDetail.id
            });
          }
        }
      })
    }else{
      wx.navigateTo({
        url: '../LoginUtil/LoginUtil',
        events:{
          UserInfo:function(data){
            that.setData({
              userInfo: data
            })
            
          }
        },
        success:function(res){
          
        }
      })
    }
    
  }
})