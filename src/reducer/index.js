// 将相关的store数据池的内容导出来
import {combineReducers} from "redux";
// 引入函数
import cart from './cart.js';
import goodlist from './goodlist.js';

let rootReducer=combineReducers({
	cart,
	goodlist
})
export default rootReducer; 