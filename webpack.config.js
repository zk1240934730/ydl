var htmlWebpackPlugin=require("html-webpack-plugin");
var extractWebpackPlugin=require("extract-text-webpack-plugin");
var webpack=require("webpack");
module.exports={
	entry:"./src/app.js",
	output:{
		path:__dirname+"/Hello H5+/",
		filename:"js/bundle.js"
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:"index.html",
			template:"index.html",
			title:"webpack"
		}),
		new extractWebpackPlugin({
			filename:"css/main.css"
		}),
		 new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")({
                            browsers: ['last 5 versions']
                        })
                    ]
                }
            }
        })
	],
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader:"babel-loader"
			},
			{
				test:/\.css$/,
				loader:extractWebpackPlugin.extract({
		          fallback:"style-loader",//用style-loader反馈
		          use:"css-loader?importLoaders=1!postcss-loader"//用sass编译
		     })   
			},
			{
				test:/\.scss$/,
				loader:extractWebpackPlugin.extract({
					fallback:"style-loader",
					use:"css-loader?importLoaders=1!postcss-loader!sass-loader"
				})
			},
			{
				test:/\.html$/,
				loader:"html-loader"
			},
			{
				test:/\.jsx$/,
				loader:"react-hot-loader!babel-loader"
			},
			{
				test:/\.json$/,
				loader:"json-loader"
			}
		]
	},
    devServer:{
	    port:9000,
	    contentBase:"./Hello H5+"
	},
	externals:{
    react:"window.React",
    "react-dom":"window.ReactDOM",
    "react-router":"window.ReactRouter"
  }
}
