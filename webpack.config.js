const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');


const rulesBabel = {
	test: /\.jsx?$/,
	loader: 'babel-loader',
	exclude: /node_modules/,
	options: {
		presets: [
			[
				'@babel/preset-react',
				{
					runtime: 'automatic'
				}
			]
		]
	}
}

const rulesCss = {
	test: /\.css$/,
	use: ['style-loader', 'css-loader']
}

const rulesUrlLoader = {
	test: /\.(png|svg|jpg|jpeg|gif)$/i,
	use: {
		loader: 'url-loader',
	},
}

const rules = [ rulesBabel, rulesCss, rulesUrlLoader ]


module.exports = {
  mode: "development",
	devtool: 'source-map',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({ template: 'src/index.html' })
	],
	devServer: {
		open: true,
		compress: true,
	},
	module: { rules },
};