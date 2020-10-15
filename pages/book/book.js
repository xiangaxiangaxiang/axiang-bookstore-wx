import { BookModel } from '../../models/book.js'
import { random } from '../../util/common.js'

const bookModel = new BookModel()
// pages/book/book.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching: false,
    more: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(optins) {
    const books = await bookModel.getHotList()
    this.setData({
      books
    })
  },

  onSearching(event) {
    this.setData({
      searching: true
    })
  },

  onCancel(event) {
    this.setData({
      searching: false
    })
  },

  onReachBottom() {
    this.setData({
      more: random(16)
    })
  }

})