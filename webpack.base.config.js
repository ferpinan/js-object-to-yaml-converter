const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;
const webpack = require('webpack');
const version = require("./package.json").version;

module.exports = {
    mode: env || 'development',
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: [/node_modules/, /dist/, /resources/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties'
                        ]
                    }
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?|(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?)$/,
                loader: "base64-inline-loader?limit=1000&name=[name][hash].[ext]",
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.css', '.md', '.jpg', '.png', '.gif', '.svg', '.ttf', '.eot', '.woff', '.woff2']
    },
    stats: {
        colors: true,
        warnings: false
    },
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    performance: {hints: false},
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(version)
        })
    ],
    devtool: 'inline-source-map'
};
