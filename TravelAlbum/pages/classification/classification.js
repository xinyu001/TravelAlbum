var app = getApp()
const url=app.globalData.url
const path="cloud://test1-2g8apckr01622f46.7465-test1-2g8apckr01622f46-1304983618"
Page({
  data:{
    "peoplelist":[
      {
        "peopleid":"1",
        "peoplename":"jack",
        "firstimagesrc":path+"/images/photos/people/1.jpeg"
      },
      {
        "peopleid":"2",
        "peoplename":"samuel",
        "firstimagesrc":path+"/images/photos/people/2.jpeg"
      },
      {
        "peopleid":"3",
        "peoplename":"rose",
        "firstimagesrc":path+"/images/photos/people/3.jpeg"
      },
      {
        "peopleid":"4",
        "peoplename":"kitty",
        "firstimagesrc":path+"/images/photos/people/4.jpeg"
      },
      {
        "peopleid":"5",
        "peoplename":"joy",
        "firstimagesrc":path+"/images/photos/people/5.jpeg"
      },
    ],
    "locationlist":[
      {
        "locationid":"1",
        "locationname":"台州",
        "firstimagesrc":path+"/images/photos/location/taizhou.jpeg"
      },
      {
        "locationid":"2",
        "locationname":"南京",
        "firstimagesrc":path+"/images/photos/location/nanjing.jpeg"
      },
      {
        "locationid":"3",
        "locationname":"上海",
        "firstimagesrc":path+"/images/photos/location/shanghai.jpeg"
      },
      {
        "locationid":"4",
        "locationname":"北京",
        "firstimagesrc":path+"/images/photos/location/beijing.jpeg"
      },
    ],
    "eventlist":[
      {
        "eventid":"1",
        "eventname":"事件1",
        "firstimagesrc":path+"/images/photos/1.jpeg"
      },
      {
        "eventid":"2",
        "eventname":"事件2",
        "firstimagesrc":path+"/images/photos/2.jpeg"
      },
      {
        "eventid":"3",
        "eventname":"123",
        "firstimagesrc":path+"/images/photos/3.jpeg"
      },
      {
        "eventid":"4",
        "eventname":"事件4",
        "firstimagesrc":path+"/images/photos/4.jpeg"
      },
      {
        "eventid":"5",
        "eventname":"游玩",
        "firstimagesrc":path+"/images/photos/5.jpeg"
      },
    ]
  }
})