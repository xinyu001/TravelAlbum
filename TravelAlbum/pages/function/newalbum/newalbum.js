var app=getApp()
Page({
  data:{
    value1:''
  },
  getvalue(e){
    console.log(e.detail.value)
    this.setData({
      value1: e.detail.value
    })
  },
  newalbum:function(event){
    var that=this
    wx.showModal({
      title: '提示',
      content: '确定新建相册？',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
          wx.request({
            url: 'http://localhost:8080/Upload/Album',
            data:{
              userid:app.globalData.user.userid,
              albumname:that.data.value1
            },
            success(){
              console.log("新建成功")
            }
          })


        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }}
    })
  }
  
})