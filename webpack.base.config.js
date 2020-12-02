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
