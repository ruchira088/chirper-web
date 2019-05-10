const path = require("path")

const webpackConfiguration = {
    entry: "./app/Index.jsx",
    output: {
        path: path.resolve(__dirname, "public", "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        port: 8000,
        host: "0.0.0.0",
        historyApiFallback: true
    },
    devtool: "source-maps",
    module: {
        rules: [
            {
                test: /\.(js|jsx$)/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(scss|css)$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png)$/,
                loader: ["file-loader?name=assets/[name].[ext]"]
            }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],
        alias: {

        }
    }
}

module.exports = webpackConfiguration
