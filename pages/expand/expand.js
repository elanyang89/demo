//获取应用实例
// var app = getApp()

Page({
  data:{
    // text:"这是一个页面"
    // systemInfo: {},
    list0:[
        {
            id : 1,
            title :'二维码安全检测',
            subTitle : '',
            iconPath:'/image/expand/expand_qrcode.png',
            isNew : false,
            url : '../expand/queryqq'
        },
        {   
            id : 2,
            title :'诈骗QQ查询',
            subTitle :'' ,
            iconPath:'/image/expand/expand_query.png',
            isNew : false,
            url : '../expand/queryqq'
        },
        {
            id : 3,
            title :'WiFi风险检测',
            subTitle : '',
            iconPath:'/image/expand/expand_wifi.png',
            isNew : true,
            url : '../expand/queryqq'
        }
    ],
    list1:[
        {
            id : 4,
            title :'安全头条',
            subTitle :'',
            iconPath:'/image/expand/expand_headlines.png',
            isNew : false,
            url : '../expand/queryqq'
        },
        {
            id : 5,
            title :'热门活动',
            subTitle : '分享送好礼',
            iconPath:'/image/expand/expand_activity.png',
            isNew : false,
            url : '../expand/queryqq'
        }
    ]
  },
  didSelectRowAtIndexPath :function (e){
    var id = e.currentTarget.id, list = this.data.list0;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
            wx.navigateTo({
                url: '../expand/queryqq/queryqq'
        })
      } 
    }
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getSystemInfo(function(info){
      //更新数据
      // that.setData({
      //   systemInfo:info
      // })
    })
  }
})