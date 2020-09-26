// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'
Component({
  behaviors: [classicBeh],
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: 'images/player@pause.png',
    playSrc: 'images/player@play.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
