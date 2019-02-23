// 封装购物车函数
let defaultState={
	goodlist:[],
	step:0
}
// reducer在这里定义
let reducer=(state=defaultState,action)=>{
	// 定义action的格式：这个是一个对象{type:xxxxx,payload:{商品信息}}
	switch(action.type){
		case 'REMOVE-PRODUCT':
			return {
				...state,//对象解构
				goodlist:state.goodlist.filter((item)=>{
		     			return item.id!=action.payload.id;//过滤掉不包含payload.id的商品
				})
			}
		case 'ADD-PRODUCT':
			return {
				...state,
				goodlist:[...state.goodlist,action.payload]
			}
		case '':
			return {
				goodlist:[],
				step:0
			}
		default:
			return state;
	}
}
export default reducer;