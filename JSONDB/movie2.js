var Localdata={
	"movieDetailModel":
   {
    "id":2,
		"img": "https://p0.pipi.cn/mmdb/54ecde0211eb12d7c3ddd206492ba36fc7569.jpg?imageView2/1/w/464/h/644",
		"nm": "头脑特工队2",
		"scm": "剧情简介",
		"preSale": false,
		"sc": 9.7,
		"cat": "动画 迪士尼",
		"src": "美国",
		"dur": 97,
		"rt": "2024-06-21 09:00中国大陆上映",
		"wish": 100,
    "showInfo": "展示信息",
    "3d":true,
    "imax":true
  },
	"CommentResponseModel": {
    "hcmts":[
      {
        "userId":4,
        "avatarurl":"https://img9.doubanio.com/icon/u17622137-16.jpg"/*"头像链接"*/,
        "nickName":"鴍諌🌈",
        "time":"2024/06/14 16:44:45",
        "content":"嗯就还好，teenage white gurls的大脑 is unrelatable，反而是除去情绪外的其他设定，比如sarcasm造成的沟通沟谷，用事件堆积性格底色这些细节都很巧思\n"
      },
      {
        "userId":5,
        "avatarurl":"https://img3.doubanio.com/icon/u1247587-1573.jpg"/*"头像链接"*/,
        "nickName":"YoyoRan",
        "time":"2024/06/15 07:53:13",
        "content":"接受全部的自己。成为更好的自己。\n\n\n\n"
      }
      ]
  },
	"movieThumbs": [
    "https://p0.pipi.cn/friday/e74b2d21d084d1d5b2048bb7c9a41cce.jpg?imageView2/1/w/465/h/258","https://p0.pipi.cn/friday/b2b7c44c25c1d7c6268c7a6ad9c80286.jpg?imageMogr2/thumbnail/2500x2500%3E","https://p0.pipi.cn/mmdb/54ecde8733851becd8af339494b631e3087b8.jpg?imageMogr2/thumbnail/2500x2500%3E","https://p0.pipi.cn/mmdb/54ecde8733851becd8af33cdb836bb47010f3.jpg?imageMogr2/thumbnail/2500x2500%3E"
	//"src"
	],
	"movieDesc": "《头脑特工队2》是2024年迪士尼·皮克斯全新原创动画长片。故事讲述了刚步入青春期的小女孩莱莉脑海中的复杂情绪进行的一场奇妙冒险。在她的大脑总部，正经历着一场突如其来的大拆迁，为意想不到的新情绪腾出空间。一直以来配合默契的情绪小伙伴乐乐、忧忧、怒怒、怕怕和厌厌，在新情绪焦焦的突然到来时变得不知所措，并且她看起来不是孤身一人。",
	"loading": true,
  "desc": true,
  "ticketInfo": {
    "id": 2,
    "num": 7,
    "price": 40.0
  }
}

function buyticket(){
  Localdata.ticketInfo.num = Localdata.ticketInfo.num-1
}


module.exports = {
  postData: Localdata,
  buyticket: buyticket
}