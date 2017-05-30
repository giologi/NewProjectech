let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(8181, 'juicydeli.com', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:8181');
});