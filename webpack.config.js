var webpack = require('webpack');
var webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

var config = {
  entry: [
    'webpack-hot-middleware/client?reload=true&path=http://localhost:9000/__webpack_hmr',
    './src/index.js',
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'raw', exclude: /node_modules/ },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  output: {
    path: __dirname + '/public',
    publicPath: 'http://localhost:9000/public/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};

// config.target = webpackTargetElectronRenderer(config);

module.exports = config;
