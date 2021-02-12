const path=getApp().globalData.cloudpath
Page({
  data:{
  "localimagelist":[
    {"imagepath":path+"/images/photos/1.jpeg"},
    {"imagepath":path+"/images/photos/2.jpeg"},
   {"imagepath":path+"/images/photos/3.jpeg"}
  ],
  "cloudimagepath":[
   {"imagepath":path+"/images/photos/7.jpeg"},
   {"imagepath":path+"/images/photos/8.jpeg"},
   {"imagepath":path+"/images/photos/9.jpeg"}
  ]
  },
  f6:function(){
    console.log(data.localimagelist)
  }
})