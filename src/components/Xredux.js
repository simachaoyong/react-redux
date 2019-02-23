import React,{Component} from 'react';
import {Route,NavLink,Switch,Redirect,withRouter} from 'react-router-dom';
import Xmine from './Xmine.js';
import Xheader from './Xheader.js';
// 组件中需要拿到那个数据的话，需要引入connect，所有的数据都需要在connect中拿
import {connect} from 'react-redux';
class Xredux extends Component{
	// 这里传入的
	constructor(){
		super();
		this.state={
			// 这里已经能拿到了store中的数据了
			data:'你好',
		}
	}
	// componentWillMount(){
	// 	console.log(this.props.state);
	// 	this.setState({
	// 		data:this.props.state,
	// 	})
	// }
	// 函数可以直接写在这里，
	//将方法映射到下面的connect()函数中
	// addCart(){
	// 	// 封装一个添加商品,这个会有一个异步的延迟的问题，用这个定时器的话能解决这个问题
	// 	clearTimeout(timer);
	// 	this.props.dispatch(
	// 		{type:'ADD-PRODUCT',
	// 		payload:{id:1,name:'xxx',price:'1234'
	// 	}});
	// 	// 这个会有延迟的情况
	// 	var timer=setTimeout(()=>{
	// 		console.log(this.props.cart);
	// 	},30)
	// }
	addCart(goods){
		this.props.addCart(goods);
	} 
	// 生命周期，只在每个函数中执行一次，执行一次后就不再执行了
	componentDidMount(){
		console.log('生命周期',this.props.cart);
	}
	render(){
		// 会将里面的数据直接映射到props中
		// console.log('获取到数据',this.props.cart);
		// console.log(this.props);//这里面就有dispatch这个方法
		console.log(this.props);
		return (
			<div>Redux
				<ul>
					<li>
						<NavLink to="/home">首页</NavLink>
					</li>
					<li>
						<NavLink to="/mine">我的</NavLink>
					</li>
				</ul>
				{/* 第一种方式 */}
				{/* <button onClick={this.addCart.bind(this)}>添加商品到购物车</button> */}
				{/* 第二种方式 */}
				<button onClick={this.addCart.bind(this,{id:3,name:'雷军',price:'3456'})}>添加商品到购物车</button>
				<Switch>
					<Route path="/mine" component={Xmine}/>
					<Route path="/home" component={Xheader}/>
					<Redirect from="/" to="/home"/>
				</Switch>
			</div>
		)
	}
}
// connect中有两个纯函数，第一个函数是用来获取数据的，第二个函数是用来传递修改的函数的
Xredux=connect((state)=>{
	// console.log('获取到state',state);
	return {
		// 这里返回出你想要的数据，把数据映射到组件的props中，你可以直接通过props去拿到对应的数据，然后进行渲染就行了需要什么数据内容，就映射什么内容和数据就行了
		cart:state.cart.goodlist
	}
},(dispatch)=>{//或者直接将dispatch搞到这里来，这样的话，props中就没有了dispatch了
	return {//可以将所有的方法都写到这里面来
		addCart(goods){//直接将addCart这个方法映射到了this.props中，后面若是想调用这个方法，直接在this.props中调用就好了
			dispatch({
				type:'ADD-PRODUCT',
				payload:goods,
			})
		}
	}
})(Xredux);
// 组合式组件返回出去
export default withRouter(Xredux);