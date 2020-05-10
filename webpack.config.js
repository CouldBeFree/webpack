const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	mode: 'none'
}
