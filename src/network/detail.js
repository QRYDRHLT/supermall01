import {goods} from './request'

//请求详情
export function getDetail(iid){
	return goods({
		url:'/detail',
		params: {
			iid
		}
	})
}

//请求推荐recommend
export function getRecommend(){
	return goods({
		url:'/recommend'
	})
}

//商品基本信息
export class Goods {
	constructor(itemInfo, columns, shopInfo) {
	  this.title = itemInfo.title;
		this.price = itemInfo.price;
		this.desc = itemInfo.desc;
		this.oldPrice = itemInfo.oldPrice;
		this.lowNowPrice = itemInfo.lowNowPrice;
		this.discountDesc = itemInfo.discountDesc;
		this.columns = columns;
		this.services = shopInfo.services;
	}
}

//商铺信息
export class Shop {
	constructor(shopInfo) {
	  this.shopLogo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.score = shopInfo.score;
		this.cSells = shopInfo.cSells;
		this.cGoods = shopInfo.cGoods;
	}
}

//参数信息
export class Param {
	constructor(info, rule, image) {
	  this.info = info.set;
		this.rule = rule.tables;
		this.image = image ? image:0
	}
}


