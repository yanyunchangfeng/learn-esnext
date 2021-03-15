module.exports = (env,config) =>{
    console.log(env)
    console.log(config)
    // console.log(process.env)
    return require(`./config/webpack.${env}`)
}