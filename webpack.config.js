const path = require('path')

module.exports = {
    mode: 'development',        //Depois alterne para production quando encerrar o processo dev
    //entry: 'src/indes.jsx', Passagem por padrão normal do Linux, diferente no Windows
    //Por isso é melhor usar a convenção abaixo
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}