const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: './script.js',
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve(__dirname, "public"),
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
            title: 'Task_Manager'
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.html$/,
                use: [
                    {
                    loader: "html-loader",
                    options: {
                        minimize: true,
                    },
                    },
                ],
            },
        ]
    }
};