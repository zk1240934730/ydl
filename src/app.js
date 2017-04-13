"use strict";
import React from "react"
import ReactDOM from 'react-dom'
import Index from "./components/index.js"
import Main from "./components/main.js"
import Person from "./components/person.js"
import Find from "./components/find.js"
import ShopCart from "./components/shopcart.js"
import Srot from "./components/sort.js"
import Store from "./flux/stores/store.js"
import Action from "./flux/actions/action.js"
import {Router,Route,hashHistory,IndexRoute,Link,Redirect} from "react-router"
require("./css/app.scss")
let onChange=text=>{
	Action.setNavState(text);
}
ReactDOM.render((	
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRoute component={Main} onEnter={onChange.bind(this,"main")}></IndexRoute>
			<Route path="main" component={Main} onEnter={onChange.bind(this,"main")}></Route>
			<Route path="find" component={Find} onEnter={onChange.bind(this,"find")}></Route>
			<Route path="shopcart" component={ShopCart} onEnter={onChange.bind(this,"shopcart")}></Route>
			<Route path="sort" component={Srot} onEnter={onChange.bind(this,"sort")}></Route>
			<Route path="person" component={Person} onEnter={onChange.bind(this,"person")}></Route>
		</Route>
	</Router>
  ),document.getElementById("app")
)
     