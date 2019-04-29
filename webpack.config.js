const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry: path.join(__dirname,'app/js/index.js'),
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    resolve:{
        extensions:['*','.js']
    },
    module:{
        rules:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:['babel-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "app/index.temp.html"),
            filename: "index.html",
            favicon:path.join(__dirname,'app/img/yanyunchangfeng.png')
          }),
      new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        open:true,
        contentBase:'./dist'
    }
}
