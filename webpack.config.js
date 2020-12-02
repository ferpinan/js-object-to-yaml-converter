const config = require('./webpack.base.config.js');
const path = require('path');

config.mode= 'production';
config.entry = {
	JsObjectToYaml: './src/index.js'
};
config.devtool = 'sourcemaps';
config.output = {
	path: path.resolve(__dirname, './dist'),
	filename: '[name].js',
    library: "JsObjectToYaml",
    libraryTarget: 'umd',
};

module.exports = config;
