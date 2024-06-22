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
    // options为页面跳转所带来的参数
    var that = this
    /*wx.request({
      url: 'http://m.maoyan.com/movie/' + options.id + '.json',
      success: function(res) {
        that.setData({
          movieDetail: res.data.data.MovieDetailModel,
          movieComment:res.data.data.CommentResponseModel,
          loading: true
        })
        var photos = that.data.movieDetail.photos;
        for(var i=0; i<that.data.movieDetail.photos.length; i++){
          photos[i] = photos[i].replace('/w.h/movie/','/movie/').replace('/w.h/mmdb/','/mmdb/').replace(/.jpg(.*)/,'.jpg@1sc%7C180w_140h_1e_1c.webp')
        }
        that.setData({
          movieDesc: that.data.movieDetail.dra.replace(/<[^>]+>/g,''),
          movieThumbs: photos
        })
      }
    })*/
    str = "../../JSONDB/movie"+options.id
    resdata = require(str)
    console.log(resdata)
    that.setData({
      movieDetail: resdata.postData.movieDetailModel,
      movieComment:resdata.postData.CommentResponseModel,
      movieThumbs: resdata.postData.movieThumbs,
      movieDesc: resdata.postData.movieDesc,
      ticketInfo:resdata.postData.ticketInfo,
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
            resdata.buyticket()
            var order = require("../../JSONDB/order"+that.data.userInfo.id)
            order.buyticket(that.data, new Date())
            that.onLoad({
              "title":"navigate",
              "id":resdata.postData.movieDetailModel.id
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
    /*var app = getApp()
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      success:{
        wx.showModal({
          title: '购票提示：',
          content: '购票成功',
          showCancel: false,
          confirmColor: '#ff4d64'
        })
        var currentnum = that.data.ticket.num-1;
        that.setData({
          ticket:{
            num:currentnum
          }
        })
        resdata.buyticket()
        var order = require("../../JSONDB/order"+that.data.userInfo.id)
        order.buyticket(that.data)
        that.onLoad({
          "title":"navigate",
          "id":resdata.postData.movieDetailModel.id
        });
      }
    })*/
    
  }
})