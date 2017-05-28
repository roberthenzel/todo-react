var path = require('path');
var webpack = require('webpack')

module.exports = function(env) {
    return {
        entry: ['webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server', './src/index.js'],
        output: {
            filename: 'bundle.js',
            path: path.resolve('./')
        },
        plugins: [
          new webpack.HotModuleReplacementPlugin()
        ],
        module: {
          rules: [
              { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
              { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }]}
          ]
        }
    }
}
