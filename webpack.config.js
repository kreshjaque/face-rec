const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new DashboardPlugin(),
        new HtmlWebPackPlugin({
            template: './index.html',
            filename: './index.html',
        }),
    ],
};
