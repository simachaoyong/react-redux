// 封装商品的函数
let defaultState={
	name:'test',
	price:1000
}
let reducer=(state=defaultState,action)=>{
	switch(action.type){
		case 'CHANG_PRICE'://改变价格的函数
			return {
				...state,
				price:action.payload.price
			}
		default:
			return state;
	}
}
export default reducer;