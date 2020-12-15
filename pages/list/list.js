// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 显示面板指示点
    indicatorDots: true,
    // 图片自动切换
    autoplay: true,
    // 自动切换时间间隔
    interval: 5000,
    // 滑动动画时长
    duration: 1000,
    listData:{},
    goodArray: ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","w"],
    typeArray: ["人气Top","人气必点","热鲜奶","家庭装牛奶","酸奶","现调牛奶","热饭团","宝藏面包","现烤面包","三明治简餐"],
    toView:'',
    typeIndex:'0'
},
jumpTo: function (e) {
  // 获取标签元素上自定义的 data-opt 属性的值
  let target = e.currentTarget.dataset.opt;
  let index = e.currentTarget.dataset.index;
  this.setData({
    toView: target,
    typeIndex:index
  })
  console.log(this.data.toView)
},
scroll:function(e){

},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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