const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports={
    context: path.join(process.cwd(),'src'),
    entry:'./index.ts',
    output: {
        path: path.join(process.cwd(),'dist'),
        filename: '[name].bundle.js'
    },
    resolve:{
        extensions:['*','.js','.ts','.png']
    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                loader:'ts-loader'
            }, 
            { test: /\.less$/, use: ['style-loader', 'css-loader','less-loader'] }, 
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                  {
                    loader:'url-loader',
                    options:{
                      limit:10000
                    }
                  }
                ]
           }
        ]
    },
    plugins:[
       new htmlWebpackPlugin({
           template:path.join(process.cwd(),'src/index.temp.html'),
           favicon:path.join(process.cwd(),'src/assets/img/yanyunchangfeng.png'),
       })
    ] 
}