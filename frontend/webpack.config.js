const path = require('path');

module.exports = {
    // mesma coisa que o './src/index.js', mas evitando possíveis conflitos do ambiente Windows, que tem a barra invertida \
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    }, 
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    { loader: 'file-loader' },
                ]
            }
        ]
    },
};