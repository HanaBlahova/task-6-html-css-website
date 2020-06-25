const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: [ './src/index.js', './src/scss/style.scss' ],
	output: {
		filename: 'main-configured.js'
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [ 'file-loader' ]
			}
		]
	}
};
