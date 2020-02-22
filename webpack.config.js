const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
 
    new HtmlWebpackPlugin({
      title: "Webpack dom-task-form-model",
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],

	module: {
	  rules: [
	      {
	        test: /\.css$/,
	        use: [
	          {
	            loader: MiniCssExtractPlugin.loader,
	            options: {
	              publicPath: '../',
	              // hmr: process.env.NODE_ENV === 'development',
	            },
	          },
	          'css-loader',
	        ],
	      },
	    ],
	  }
  // module: {
  //   loaders: [
  //     {
	 //      test: /\.scss$/,
  //       use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader']
  //     }
  //   ]
  // }
};