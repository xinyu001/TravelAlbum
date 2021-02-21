Page({
  f1:function(event){
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {//这里是点击了确定以后
          console.log('用户点击确定')
        } else {//这里是点击了取消以后
          console.log('用户点击取消')
        }}
    })
  }
  
})