const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry:{
        a:'./src/a.js',
        b:'./src/b.js',
    },
    output:{
        filename:'[name].[hash].js',
        path:path.resolve(__dirname,"dist")
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'test',
            filename:'index1.html',
            hash:true,
            meta:{viewport: 'width=device-width, initial-scale=2, shrink-to-fit=no'},
            showErrors:true,
            inject:true,
            cache:true,
        }),
        new CleanWebpackPlugin(['dist'])
    ]
}
