const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

module.exports =
{
	mode: "production",
	performance: {
		hints: false,
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	entry: path.join(__dirname, "webpack", "index"),
	/*devtool: 'source-map',*/
	output: {
		filename: 'index.js',
		path: path.join(__dirname, "assets/js")
	},
	optimization: {
		minimizer: [
			new TerserPlugin({ extractComments: false })
		]
	}
};