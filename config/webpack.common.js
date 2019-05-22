const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context:path.join(process.cwd(),'src'),
    entry: './index.ts',
    output:{
        path:path.join(process.cwd(),'dist'),
        filename:'[name].bundle.js'
    },
    resolve:{
        extensions:['*','.js','.ts']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_modules/,
                use:['ts-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/,
                use:[{
                    loader:'file-loader'
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(process.cwd(), "src/index.temp.html"),
            favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png')
          })
    ]
}
