// pages/demo6/demo6.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList: [
      {
        title:"这是标题1",
        time:"2021-03-08",
        url:"/images/img1.jpg"
      },
      {
        title:"这是标题2",
        time:"2021-03-02",
        url:"/images/img2.png"
      },
      {
        title:"这是标题3",
        time:"2021-02-28",
        url:"/images/img3.png"
      },  
    ],
    resData:[],
    page: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
  },

  getList:function(){
    wx.request({
      url: 'https://edu.newsight.cn/wxList.php',
      data: {
        num: 5,
        page: this.data.page
      },
      success:res=>{
        // console.log(res.data)
        this.setData({
            resData: res.data
          })
      }
    })
  },

  nextPage: function(){
    this.setData({
      page: this.data.page + 1
    })
    this.getList()
  },
  lastPage: function(){
    var temp = this.data.page - 1
    if(temp < 1){
      temp = 1
    }
    this.setData({
      page: temp,
    })
    this.getList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})