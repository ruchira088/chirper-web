const webpackMerge = require("webpack-merge")
const path = require("path")
const webpackCommon = require("./webpack.common")

module.exports = webpackMerge(webpackCommon, {
    mode: "development",
    devServer: {
        contentBase: path.resolve(__dirname, "../public"),
        port: 8000,
        host: "0.0.0.0",
        historyApiFallback: true
    },
    devtool: "inline-source-map"
})