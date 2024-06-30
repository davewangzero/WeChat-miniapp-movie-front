Page({
  data: {
    moviePhotos: [],
    loading: false,
    photoIndex: 0
  },
  // 页面初始化
  onLoad: function (options) {
    
    var that = this
    var str = "../../JSONDB/movie"+options.id
    var resdata = require("../../JSONDB/movieList")
    var moviedata = resdata.selectMovie(options.id)
    that.setData({
      movieDetail: moviedata.movieDetailModel,
      photoIndex: options.pid,
      movieComment:moviedata.CommentResponseModel,
      moviePhotos: moviedata.movieThumbs,
      movieDesc: moviedata.movieDesc,
      loading: true
    })
  }
})