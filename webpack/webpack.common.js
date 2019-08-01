const path = require("path")

const webpackConfiguration = {
    entry: path.resolve(__dirname, "../app/Index.jsx"),
    output: {
        path: path.resolve(__dirname, "../public", "dist"),
        filename: "bundle.js",
        publicPath: "/dist/"
    },
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                exclude: /node_modules/,
                use: [ "awesome-typescript-loader" ]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: [ "source-map-loader" ]
            },
            {
                test: /\.(scss|css)$/,
                loaders: [ "style-loader", "css-loader", "sass-loader" ]
            },
            {
                test: /\.(png)$/,
                loader: [ "file-loader?name=assets/[name].[ext]" ]
            }
        ]
    },
    resolve: {
        extensions: [ "*", ".js", ".jsx", ".ts", ".tsx" ],
        alias: {}
    }
}

module.exports = webpackConfiguration
