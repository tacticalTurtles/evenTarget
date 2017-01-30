var path = require("path");

var DIST_DIR = path.resolve(__dirname, "client/dist");
var SRC_DIR = path.resolve(__dirname, "client/src");

var config = {
    entry: [SRC_DIR + "/app/index.js", SRC_DIR + "/components/App.jsx", SRC_DIR + "/components/EventEntry.jsx", SRC_DIR + "/components/EventList.jsx", SRC_DIR + "/components/Nav.jsx", SRC_DIR + "/components/Search.jsx", SRC_DIR + "/components/yelp.jsx"], 
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;