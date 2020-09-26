import { Http } from '../util/http.js'

export class LikeModel extends Http {
  like(behavior, artId, category) {
    const url = behavior === 'like' ? '/like' : '/like/cancel'
    this.request({
      url: url,
      method: 'POST',
      data: {
        art_id: artId,
        type: category
      }
    })
  }

  getClassicLikeStatus(artID, category, sCallback) {
    this.request({
      url: '/classic/' + category + '/' + artID + '/favor',
      success: sCallback
    })
  }
}