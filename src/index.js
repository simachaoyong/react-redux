import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Xredux from './components/Xredux.js';
import * as serviceWorker from './serviceWorker';
// 引入路由
import {HashRouter} from 'react-router-dom';
// 生成数据库，这里已经有了数据池了，将需要的数据可以存放在store中
import store from './store';
// 想要使用store中的数据的话，必须引入Provider
import {Provider} from 'react-redux';
// 测试没有问题，都能拿到数据
// console.log(store.getState());
// store.dispatch({type:'CHANG_PRICE',payload:{name:'xiaomi',price:'3000'}});
// console.log("数据修改了",store.getState());
//设置state的默认值，封装一下下面的这个函数
// let defaultState={
// 	goodlist:[],
// 	step:0
// }
// // reducer在这里定义
// let reducer=(state=defaultState,action)=>{
// 	// 定义action的格式：这个是一个对象{type:xxxxx,payload:{商品信息}}
// 	switch(action.type){
// 		case 'REMOVE-PRODUCT':
// 			return {
// 				...state,//对象解构
// 				goodlist:state.goodlist.filter((item)=>{
// 					return item.id!=action.payload.id;//过滤掉不包含payload.id的商品
// 				})
// 			}
// 		case 'ADD-PRODUCT':
// 			return {
// 				...state,
// 				goodlist:[...state.goodlist,action.payload]
// 			}
// 		case '':
// 			return {
// 				goodlist:[],
// 				step:0
// 			}
// 		default:
// 			return state;
// 	}
// }
// 建立数据池
// let store=createStore(reducer);//reducer是一个纯函数
// console.log(store);
// console.log(store.getState());
// // 更改state中的数据
// store.dispatch({type:'ADD-PRODUCT',payload:{id:1,name:'小米',price:'1453'}});
// console.log('添加数据',store.getState());
// store.dispatch({type:'REMOVE-PRODUCT',payload:{id:1}});
// console.log('删除数据',store.getState());
ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<div>
				<Xredux />
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById('root'));
serviceWorker.unregister();
