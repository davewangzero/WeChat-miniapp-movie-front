var Localdata={
  "orders":[
  {
    "oid":"3141592653589793",
    "id": 1 , 
	  "img": "https://p0.pipi.cn/mmdb/54ecde7133851bd7c3cf3e5cb08d9ad46ad38.jpg?imageView2/1/w/464/h/644",
	  "nm": "排球少年!! 垃圾场决战",
	  "imax": true,
    "3d": false,
	  "sc": 9.5,
	  "preSale": false,
	  "wish": 100,
	  "showInfo": "今天一家影院放映1场",
	  "scm": "",
    "star": "",
    "price":38.5,
    "date":"2024/06/22 11:49:21",
    "userId":1
    },
    {
      "oid":"9307109259002233",
      "id": 2 , 
      "img": "https://p0.pipi.cn/mmdb/54ecde0211eb12d7c3ddd206492ba36fc7569.jpg?imageView2/1/w/464/h/644",
      "nm": "头脑特工队2",
      "imax": true,
      "3d": true,
      "sc": 9.7,
      "preSale": false,
      "wish": 100,
      "showInfo": "今天一家影院放映3场",
      "scm": "",
      "star": "",
      "price":40.0,
      "date":"2024/06/22 13:05:56",
      "userId":1
    },
    {
      "oid":"7242553190903283",
      "id": 3 , 
      "img": "https://p0.pipi.cn/mmdb/54ecde710faf2acbaec7edd54a93197aabf49.jpg?imageView2/1/w/464/h/644",
      "nm": "加菲猫家族",
      "imax": true,
      "3d": true,
      "sc": 8.8,
      "preSale": false,
      "wish": 100,
      "showInfo": "今天一家影院放映5场",
      "scm": "",
      "star": "",
      "price":35.8,
      "date":"2024/06/21 12:27:23",
      "userId":1
    }
  ],
  "loading": false,
  "limit": 1,
  "scrollTop": 100
}
function buyticket(ticketdata, date){
  console.log(ticketdata.ticketInfo.price)
  var dateToStr = require("../utils/util")
  var newOrder = {
    "oid": generateRandomString(16),
    "id": ticketdata.movieDetail.id,
    "img": ticketdata.movieDetail.img,
    "nm": ticketdata.movieDetail.nm,
    "imax": ticketdata.movieDetail.imax,
    "3d": ticketdata.movieDetail["3d"],
    "sc": ticketdata.movieDetail.sc,
    "preSale": ticketdata.movieDetail.preSale,
    "wish": ticketdata.movieDetail.wish,
    "showInfo": ticketdata.movieDetail.showInfo,
    "scm": ticketdata.movieDetail.scm,
    "price": ticketdata.ticketInfo.price,
    "date": dateToStr.formatTime(date),
    "userId":ticketdata.userInfo.id
  };
  

  // 将新订单添加到 Localdata 的 orders 数组中
  Localdata.orders.push(newOrder);
  console.log(Localdata)
}


function generateRandomString(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
function selectOrder(user){
  var ansData={
    "orders":[],
    "loading": false,
    "limit": 1,
    "scrollTop": 100
  }
  for (var item of Localdata.orders){
    if(item.userId == user.id){
      ansData.orders.push(item)
    }
  }
  return ansData
}
module.exports = {
  //postData: Localdata,
  buyticket: buyticket,
  selectOrder:selectOrder
}