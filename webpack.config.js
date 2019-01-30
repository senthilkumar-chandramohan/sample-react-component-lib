const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const HTMLTemplate = require('html-webpack-template');

const htmlPlugin = new HtmlWebPackPlugin({
    title: 'React Components',
    template: HTMLTemplate,
    appMountId: 'app',
    meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
});

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'index.jsx'),
    },
    output: {
        path: path.resolve("dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.less$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'less-loader'
            }]
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [ htmlPlugin ]
}
