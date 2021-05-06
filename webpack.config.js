module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src') + "/app",

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
  };

var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var webpackConfig = {
    plugins: [
        new CaseSensitivePathsPlugin()
        // other plugins ...
    ]
    // other webpack config ...
}