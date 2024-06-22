var Localdata={
	"movieDetailModel":
   {
    "id":1,
		"img": "https://p0.pipi.cn/mmdb/54ecde7133851bd7c3cf3e5cb08d9ad46ad38.jpg?imageView2/1/w/464/h/644",
		"nm": "排球少年!! 垃圾场决战",
		"scm": "剧情简介",
		"preSale": false,
		"sc": 9.5,
		"cat": "动画 运动",
		"src": "日本",
		"dur": 85,
		"rt": "2024-06-15 09:00中国大陆上映",
		"wish": 100,
    "showInfo": "展示信息",
    "3d":false,
    "imax":true
  },
	"CommentResponseModel": {
    "hcmts":[
      {
        "userId":3,
        "avatarurl":"https://img1.doubanio.com/icon/u53642273-10.jpg"/*"头像链接"*/,
        "nickName":"recallmiss",
        "time":"2024/02/20 21:00:42",
        "content":"新宿imax，记录一下。全程哭到尾，这一篇的MVP是黑，他让研磨遇见了排球，坚持到了和翔阳相遇，说出了「楽しい」。他让月找到了爱上排球的瞬间。他让不断激励大家变得更强，让比赛变得更加精彩，虽然每个人都爱排球，但是黑的爱是一种发自内心的大爱！最后研磨视角真的太震撼了，一切的等待都值得，真赞！\n"
      },
      {
        "userId":2,
        "avatarurl":"https://img3.doubanio.com/icon/u204905716-3.jpg"/*"头像链接"*/,
        "nickName":"Wilbert",
        "time":"2024/06/15 20:14:38",
        "content":"我不知道说什么好……作为一个粉丝我比任何人都更希望看到续集，但作为一个观众我真的失望透顶。我明白小排球的项目被搁置多年靠粉丝集资才有了这来之不易的剧场版，我也明白将本应做成七八集的一场比赛压缩到80分钟将不得不做许多取舍。可我看到的却是一场几乎不讲球怎么打、比赛怎么赢，只靠闪回和话语堆叠而成的走马观花式的闹剧。80分钟下来除了知道乌野赢下比赛提取不到任何的有效信息。TV版里我会由衷地感同身受他们的呐喊，但在剧场版里却只会让人觉得尴尬和不知所云。说到底，这个作品对人物的塑造从来都是用球来而不是用嘴表现出来的。离开了对打排球的塑造的少年们还能叫排球少年么？\n\n\n\n"
      }
      ]
  },
	"movieThumbs": [
    "https://p0.pipi.cn/friday/d5af0110763aaf13740cf5948c78ccc1.jpg?imageView2/1/w/465/h/258","https://p0.pipi.cn/friday/ec016a2af38aef477bce12f7bd5371cd.jpg?imageMogr2/thumbnail/2500x2500%3E","https://p0.pipi.cn/friday/56f12e398e86b66a0463308b1cb85a7c.jpg?imageMogr2/thumbnail/2500x2500%3E","https://p0.pipi.cn/friday/c19665cad57446ea789713d89b888242.jpg?imageMogr2/thumbnail/2500x2500%3E"
	//"src"
	],
	"movieDesc": "故事讲述了风靡十年的超人气热血IP《排球少年!!》中人气最高、最精彩绝伦的垃圾场决战。日向翔阳因为心怀成为“排球小巨人”的梦想加入了乌野高中排球部，逐渐成为独当一面的副攻手。春季高中排球比赛上，乌野高中排球部终于迎来了与音驹高中排球部的正式比赛。同为“没落的豪强”，两支队伍惺惺相惜，却从未站上过同一场正式较量的舞台。长久的纠葛终于迎来了结，一场“只有一次”的命运对决即将开幕！振翅一击吧，心怀梦想的少年们！",
	"loading": true,
  "desc": true,
  "ticketInfo": {
    "id": 1,
    "num": 1,
    "price": 38.5
  }
}

function buyticket(){
  Localdata.ticketInfo.num = Localdata.ticketInfo.num-1
}


module.exports = {
  postData: Localdata,
  buyticket: buyticket
}