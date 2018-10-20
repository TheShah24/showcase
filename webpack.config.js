const webpack = require('webpack');
const path = require('path');



module.exports = {
  mode: "production",
	entry: {
   App: "./app/assets/scripts/app.js",
   Vendor: "./app/assets/scripts/Vendor.js"
  },
	output: {
    filename: "[name].js",
		path: path.resolve(__dirname,"./app/temp/scripts")
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}