import axios from 'axios'
// 创建两个axios实例
// 基本数据
export function request(config){
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	return instance(config)
}
// 商品数据
export function goods(config){
	const instance = axios.create({
		baseURL: 'http://152.136.185.210:7878/api/m5',
		timeout: 5000
	})
	return instance(config)
}