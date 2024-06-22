var Localdata={
	"movieDetailModel":
   {
    "id":3,
		"img": "https://p0.pipi.cn/mmdb/54ecde710faf2acbaec7edd54a93197aabf49.jpg?imageView2/1/w/464/h/644",
		"nm": "加菲猫家族",
		"scm": "剧情简介",
		"preSale": false,
		"sc": 8.8,
		"cat": "动画 合家欢",
		"src": "美国",
		"dur": 101,
		"rt": "2024-06-01 09:00中国大陆上映",
		"wish": 100,
    "showInfo": "展示信息",
    "3d":true,
    "imax":true
  },
	"CommentResponseModel": {
    "hcmts":[
      {
        "userId":6,
        "avatarurl":"https://img9.doubanio.com/icon/u174652302-24.jpg"/*"头像链接"*/,
        "nickName":"我好苏啊",
        "time":"2024/05/21 20:59:34",
        "content":"很多电影总想告诉你点什么，但是这部电影不会，一百多分钟里，能够感受毫无负担的纯粹的快乐。加菲猫和欧迪的友情与熟稔，和亲生父亲从不解到和解，以及主人乔恩对加菲猫始终不变的爱，都能够轻轻柔柔的飘进你心里，感动与欢笑并存。\n"
      },
      {
        "userId":7,
        "avatarurl":"https://img1.doubanio.com/icon/u163153701-18.jpg"/*"头像链接"*/,
        "nickName":"tangerine",
        "time":"2024/06/01 15:50:58",
        "content":"打发时间的水平，平庸的故事水准无论如何达不到重塑经典的效果，基本上处处Q碟中谍，出来发现居然还请了碟中谍的主演文瑞姆斯。更多是把加菲猫IP拉出来维持一下新观众的热度，延一段时间主题还能勉强蹭上后面的父亲节。克里斯帕拉特你究竟还要用你那糟糕的嗓音继续荼毒多少经典动画形象啊。\n\n\n\n"
      }
      ]
  },
	"movieThumbs": [
    "https://p0.pipi.cn/friday/a6076da3a4291f124f619a0926bb61d8.jpg?imageView2/1/w/465/h/258","https://p0.pipi.cn/friday/af611628cd43c56e4e7417aee4cfb550.jpg?imageMogr2/thumbnail/2500x2500%3E","https://p0.pipi.cn/friday/d6635150c101653f05e308e8b7d66f04.jpg?imageMogr2/thumbnail/2500x2500%3E","https://p0.pipi.cn/friday/eabf2ca771135f87a99d5d93a6b91b9a.jpg?imageMogr2/thumbnail/2500x2500%3E"
	//"src"
	],
	"movieDesc": "暌违18年，加菲猫全新动画大电影重返内地大银幕!加菲猫(由克里斯·帕拉特配音)，这只全球闻名、厌恶星期一、对千层面情有独 钟的宅猫，正准备开启一段疯狂的户外奇遇!在与他失散多年的亲生猫爸——不羁的流浪猫维克(由塞缪尔·L·杰克逊配音)意外重聚后，加菲猫和他的狗狗伙伴欧迪被迫告别了安逸舒适的生活，卷入了一场搞笑又充满刺激的大冒险，而一直娇生惯养的加菲猫，将在这次冒险之旅中蜕变成为上天入地的“猫猫特工”，带着家族直面挑战、化解危机!",
	"loading": true,
  "desc": true,
  "ticketInfo": {
    "id": 3,
    "num": 5,
    "price": 35.8
  }
}

function buyticket(){
  Localdata.ticketInfo.num = Localdata.ticketInfo.num-1
}


module.exports = {
  postData: Localdata,
  buyticket: buyticket
}