"use strict"
import React from "react"
import Store from "../flux/stores/store.js"
import {Link} from "react-router"
class Index extends React.Component{
	constructor(props){
		super(props)
	}
	chageRoute(type){
		 this.setState({
			 type:type
		 })
	}	
	render(){
		let navState=Store.getItem()
		let navObj=[
			{
				unicode:"&#xe554;",
				activeUnicode:"&#xe602;",
				innerText:"壹点灵",
				to:"main"
			},
			{
				unicode:"&#xe655;",
				activeUnicode:"&#xe61b",
				innerText:"心事",
				to:"sort"
			},
			{
				unicode:"&#xe60b;",
				innerText:"",
				to:"find",
				fontSize:".4rem"
			},
			{
				unicode:"&#xe64f;",
				activeUnicode:"&#xe6fe;",
				innerText:"消息",
				to:"shopcart"
			},
			{
				unicode:"&#xe60a;",
				innerText:"我的",
				activeUnicode:"&#xe6b8;",
				to:"person"
			},
		]
		let link=navObj.map((cont,index)=>{
			return(
				<Link to={cont.to} className={navState==cont.to?"active":""} onClick={this.chageRoute.bind(this,cont.to)}><i className="iconfont" dangerouslySetInnerHTML={{__html:navState==cont.to?(cont.activeUnicode?cont.activeUnicode:cont.unicode):cont.unicode}} style={{fontSize:cont.fontSize?cont.fontSize:".2rem"}}></i><span>{cont.innerText}</span></Link>
			)
		})
		return(
			<div className="index">
				<section>
					{this.props.children}
				</section>
				<nav>	 
					{link}
				</nav>
			</div> 
		)
	}
}
export default Index