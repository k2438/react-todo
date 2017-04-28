var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    watchOptions: {
      poll: 5000
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        host: "0.0.0.0",
        port: 1337
    },
    devtool: 'inline-source-map'
}
