//aboutme.js

var app=getApp()
Page({
  data: {
    img: "../../images/1.jpg",
    name:"陈泽泽",
    text:"chzeez.top",
    tel:"155-0590-3142"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
