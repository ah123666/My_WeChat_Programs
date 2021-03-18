// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    title:"微信",
    content:"小程序",
    width:"200",
    height:"150",
    backGroundColor:"green",
    isChange: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log("监听页面加载")
    // wx.showLoading({
    //   title: '数据加载中',
    // })
    // setTimeout(res=>{
    //   wx.hideLoading()
    // }, 1500)
    // console.log(wx.getSystemInfoSync().model)
    // wx.showToast({
    //   title: '提交成功',
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // console.log("监听页面初次渲染完成")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // console.log("监听页面显示")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    // console.log("监听页面隐藏")
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
    // console.log(123)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // console.log("触底了！")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  btnTap: function(){
    if(this.isChange == false){
      this.setData(
        {
          width:"400",
          height:"200",
          backGroundColor:"red"
        }
      )
      this.isChange = true
    }
    else{
      this.setData(
        {
          width:"200",
          height:"150",
          backGroundColor:"green",
        }
      )
      this.isChange = false
    }

    wx.showToast({
      title: '改变成功！',
      duration: 500
    })
  },

  myTap: function (res) {
    console.log("我被点击了")
    var newName = res.currentTarget.dataset.name
    if (this.data.name == ""){ 
      this.setData(
        {
          name:newName
        })
    }
    else{
      this.setData(
        {
          name:""
        })
    }
  }
})