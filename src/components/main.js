"use strict"
import React from "react"
class Main extends React.Component{	
	render(){
		let navList=[
			{
				unicode:"&#xe636;",
				text:"情感咨询",
				color:"red"
			},
			{
				unicode:"&#xe610;",
				text:"情绪疏导",
				color:"#0080FF"
			},
			{
				unicode:"&#xe603;",
				text:"成长咨询",
				color:"#EAC100"
			},
			{
				unicode:"&#xe66a;",
				text:"性心理",
				color:"#BE77FF"
			},
			{
				unicode:"&#xe62c;",
				text:"人际关系",
				color:"#004B97"
			},
			{
				unicode:"&#xe63d;",
				text:"解梦咨询",
				color:"#BE77FF"
			},
			{
				unicode:"&#xe63d;",
				text:"职场资讯",
				color:"#004B97"
			},
			{
				unicode:"&#xe640;",
				text:"全部分类",
				color:"#FF8040"
			}
		]
		let navComp=navList.map((cont,index)=>{
			return (
				<div>
					<i dangerouslySetInnerHTML={{__html:cont.unicode}} className="iconfont" style={{color:cont.color,fontSize:".22rem"}}></i>
					<p>{cont.text}</p>
				</div>
			)
		})
		return(
			<div className="main">
				<header>
					<input type="text" placeholder="搜索话题 专家姓名"/>
					<span>客服</span>
				</header>						
				<section>
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide">slider1</div>
							<div className="swiper-slide">slider2</div>
							<div className="swiper-slide">slider3</div>
						</div>
						<div className="swiper-pagination"></div>
					</div>
					<nav className="nav_category">
						{navComp}
					</nav>	
					<article>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</article>
					<nav className="nav_list">
						<div>
							<div className="left">
								<p>想要成功？先学会接纳sssss</p>
								<dl>
									<dt></dt>
									<dd>
										<span className="author">李红艳</span>
										<span className="say_time">2017-04-11</span>
									</dd>
								</dl>
							</div>
							<div className="right"></div>
						</div>
						<div>
							<div className="left">
								<p>想要成功？先学会接纳超出显示省略号</p>
								<dl>
									<dt></dt>
									<dd>
										<span className="author">李红艳</span>
										<span className="say_time">2017-04-11</span>
									</dd>
								</dl>
							</div>
							<div className="right"></div>
						</div>
						<div>
							<div className="left">
								<p>想要成功？先学会接纳超出显示省略号</p>
								<dl>
									<dt></dt>
									<dd>
										<span className="author">李红艳</span>
										<span className="say_time">2017-04-11</span>
									</dd>
								</dl>
							</div>
							<div className="right"></div>
						</div>
						<div>
							<div className="left">
								<p>想要成功？先学会接纳超出显示省略号</p>
								<dl>
									<dt></dt>
									<dd>
										<span className="author">李红艳</span>
										<span className="say_time">2017-04-11</span>
									</dd>
								</dl>
							</div>
							<div className="right"></div>
						</div>
					</nav>			
				</section>
			</div>
		)
	}
}
export default Main