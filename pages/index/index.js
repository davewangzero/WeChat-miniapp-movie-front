Page({
  //数据源
  data: {
    movies: [],
    loading: false,
    limit: 6,
    windowHeight: 0,
    scrollTop: 100
  },
  requestData: function (a) {
    var that = this
    var resdata = require("../../JSONDB/movieList")
    //console.log(resdata)
    that.setData({
      movies: resdata.showMovieList().movies,
      loading:true
    })

    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
  onLoad: function () {
    this.requestData();
  },  
  onShow:function(){
    
  },
  onReady:function(){
    
  },
  onHide:function(){
    
  },
  onUnload:function(){
    
  },
  onPullDownRefresh: function(e) {
    var limit = this.data.limit + 6
    this.setData({
      limit: limit
    })
    this.requestData();
  },
  buyTickets: function(e) {
    wx.navigateTo({
      url: '../detail/detail?title=navigate&id='+e.currentTarget.dataset.id
    })
  }
})