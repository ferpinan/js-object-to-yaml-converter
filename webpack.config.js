const config = require('./webpack.base.config.js');
const path = require('path');

config.mode= 'production';
config.entry = {
	ReactWidget: './src/index.js'
};
config.devtool = 'sourcemaps';
config.output = {
	path: path.resolve(__dirname, './dist'),
	// filename: '[name].' + version + '.js',
	filename: '[name].js',
    library: "ReactWidget",
    libraryTarget: 'umd',
};

module.exports = config;
