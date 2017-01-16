//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'QQ安全中心',
    userInfo: {},
    list:[
      {
        id:'my-record',
        title : '我的足迹',
        subTitle:'当前1处登录 上次登录广东深圳',
        iconPath:'/image/list_0.png',
        status:0
      },
      {
        id:'my-mb',
        title : '我的密保',
        subTitle:'建议设置人脸，升级至第三代密保',
        iconPath:'/image/list_1.png',
        status:1
      },
      {
        id:'my-pwd',
        title : "我的密码",
        subTitle:'密码安全系数较高，请继续保持',
        iconPath:'/image/list_2.png',
        status:0
      },
      {
        id:'my-protect',
        title : '我的保护',
        subTitle:'已开启2类保护',
        iconPath:'/image/list_3.png',
        status:0
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../login/login'
    })
    //网络请求
  //   wx.request({
  //     url: 'https://aq.qq.com',
  //     data: {
  //       x: '' ,
  //       y: ''
  //     },
  //     header: {
  //         'Content-Type': 'application/json'
  //     },
  //     success: function(res) {
  //       console.log(res.data)
  //     }
  // })
  },
  // onLoginBtnClick:function (){
  //   wx.navigateTo({
  //     // url: '../login/login'
  //     url:'../queryqq/queryqq'
  //   })
  // },

  // onZZBBtnClick:function(){
  //   wx.navigateTo({
  //     url: '../zzb/zzb'
  //   })
  // },
  // didSelectRowAtIndexPath : function (e){
    
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
