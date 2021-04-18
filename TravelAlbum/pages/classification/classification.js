var app = getApp()
const url=app.globalData.url
const path="cloud://test1-2g8apckr01622f46.7465-test1-2g8apckr01622f46-1304983618"
Page({
  data:{
    "peoplelist":[
      {
        "peopleid":"1",
        "peoplename":"jack",
        "path":path+"/images/photos/people/1.jpeg"
      },
      {
        "peopleid":"2",
        "peoplename":"samuel",
        "path":path+"/images/photos/people/2.jpeg"
      },
      {
        "peopleid":"3",
        "peoplename":"rose",
        "path":path+"/images/photos/people/3.jpeg"
      },
      {
        "peopleid":"4",
        "peoplename":"kitty",
        "path":path+"/images/photos/people/4.jpeg"
      },
      {
        "peopleid":"5",
        "peoplename":"joy",
        "path":path+"/images/photos/people/5.jpeg"
      },
    ],
    // "ailist":[
    //   {
    //     "ai":"天空",
    //     "path":path+"/images/photos/ai/天空.jpeg",
    //   },
    //   {
    //     "ai":"风景",
    //     "path":path+"/images/photos/ai/风景.jpeg",
    //   },
    //   {
    //     "ai":"合照",
    //     "path":path+"/images/photos/ai/合照.jpeg",
    //   },
    //   {
    //     "ai":"建筑",
    //     "path":path+"/images/photos/ai/建筑.jpeg",
    //   },
    // ],
    "locationlist":[],
  },
  onLoad(){
    this.getlocations()
    this.getais()
    this.getlabels()
  },
  onShow(){
    this.getlocations()
    this.getais()
    this.getlabels()
  },
  getlocations:function () {
    var that=this
    wx.request({
      url: url+'Get/Locations',
      method:'GET',
      data: {
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          locationlist:res.data
        })
        console.log(res.data)
      }
    }) 
  },
  getais:function () {
    var that=this
    wx.request({
      url: url+'Get/AIs',
      method:'GET',
      data: {
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          ailist:res.data
        })
        console.log(res.data)
      }
    }) 
  },
  getlabels:function () {
    var that=this
    wx.request({
      url: url+'Get/Labels',
      method:'GET',
      data: {
        userid:app.globalData.user.userid
      },
      success(res){
        that.setData({
          labellist:res.data
        })
        console.log(res.data)
      }
    }) 
  },
  openlocation:function(item){
    console.log(item.target.id)
    wx.navigateTo({
      url: '/pages/function/openlocation/openlocation?location='+item.target.id
    })
  },
  openai:function(item){
    console.log(item.target.id)
    wx.navigateTo({
      url: '/pages/function/openai/openai?ai='+item.target.id
    })
  },
  openlabel:function(item){
    console.log(item.target.id)
    wx.navigateTo({
      url: '/pages/function/openlabel/openlabel?label='+item.target.id
    })
  }

})