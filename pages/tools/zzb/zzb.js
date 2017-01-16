//获取应用实例
var app = getApp()

Page({
  data: {
    systemInfo: {},
    list:[
      {
        id : 1,
        title: "100%找回帐号，无需申诉",
        desc:"采用最酷炫的人证合一技术，当你忘记密码时，拍摄人脸和身份证即可100%找回，告别繁琐申诉流程。",
        iconPath:"/image/zzb_back.png",
        imagePath:"/image/zzb_func_one.png",
        open : 0
      },
      {
        id : 2,
        title: "他人无法改密，安全无忧",
        desc:"至尊保用户在经过本人刷脸授权后才能进行改密、改密保手机等敏感操作，安全由你掌控！",
        iconPath:"/image/zzb_pwd.png",
        imagePath:"/image/zzb_func_two.png",
        open : 0
      },
      {
        id : 3,
        title: "尊享实名身份，远离纠纷",
        desc:"加入至尊保后，你的QQ即可升级实名认证，让你远离帐号纠纷。",
        iconPath:"/image/zzb_unrecover.png",
        imagePath:"/image/zzb_func_three.png",
        open : 0
      },
      {
        id : 4,
        title: "至尊铭牌，为您专属定制",
        desc:"加入至尊保即可获得专属定制铭牌，酷炫至尊身份，尊贵如你，值得拥有！",
        iconPath:"/image/zzb_name.png",
        imagePath:"/image/zzb_func_four.png",
        open : 0
      },
      {
        id : 5,
        title: "改手机免审核期，快人一步",
        desc:"至尊保用户在已授权的设备中修改密保手机，可以免除几小时至数天的审核期，安全便捷，快人一步。",
        iconPath:"/image/zzb_moblie.png",
        imagePath:"/image/zzb_func_five.png",
        open : 0
      },
      {
        id : 6,
        title: "更多特权，敬请期待",
        desc:"我们会不断地为至尊保用户推出更优质、更便捷的安全服务，敬请期待。",
        iconPath:"/image/zzb_other.png",
        imagePath:"/image/zzb_func_six.png",
        open : 0
      }
    ]
  },
  onDismissBtnClick : function (e){
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = 0;
      }
    }
    this.setData({
      list: list
    });
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.getSystemInfo(function(info){
      //更新数据
      that.setData({
        systemInfo:info
      })
    })
  }
})