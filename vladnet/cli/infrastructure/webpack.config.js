const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [ ".ts", ".tsx", ".js" ],
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        globalObject: "this",
    },
    watchOptions: {
        poll: true,
        ignored: [
            /node_modules([\\]+|\/)+(?!@vladnet)/,
            /d\.ts/,
        ],
    },
};
