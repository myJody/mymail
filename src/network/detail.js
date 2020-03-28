import{ request} from './request.js'

export function getDetailData(iid){
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export  class goodsInfo{
  constructor(itemInfo,columns,services) {
    this.title=itemInfo.title
    this.desc=itemInfo.desc
    this.newPrice=itemInfo.price
    this.oldPrice=itemInfo.oldPrice
    this.realPrice=itemInfo.lowNowPrice
    this.disCount=itemInfo.discountDesc
    this.discountBgColor=itemInfo.discountBgColor
    this.columns=columns
    this.services=services
  }
}
