const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    mode:'development',
    // entry:'./src/index.js',
    entry:{
        app: './src/index.js',
    },
    output:{
        // filename:'bundle.js',
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path:path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module:{
        rules:[
            {
                'test': /\.js$/,
                'use': {
                    loader:'babel-loader', 
                    'options': {
                        'plugins': ['lodash'],
                        'presets': [['env', { 'modules': false, 'targets': { 'node': 4 } }]]
                      }  
                },
                'exclude': /node_modules/,
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:{
                    loader: 'url-loader',
                    options:{
                        limit:'1024'
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new LodashModuleReplacementPlugin()
    ],
    //new webpack.optimize.UglifyJsPlugin() //webpack.optimize.UglifyJsPlugin has been removed, please use config.optimization.minimize instead
    optimization: {
        minimize:true,
        // splitChunks: {
        //     cacheGroups: {
        //         commons: {
        //             name: "vendor",
        //             chunks: "initial",
        //             minChunks: 2
        //         }
        //     }
        // }
    },
}