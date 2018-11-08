const path = require('path')
const webpack = require('webpack')
const BaseConfig = require('./webpack.conf')

const DevConfig = {
  ...BaseConfig,
}

DevConfig.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"development"',
  }),
)

DevConfig.devtool = '#source-map'

DevConfig.devServer = {
  port: 3000,
  compress: true,
  historyApiFallback: true,
  contentBase: [path.join(__dirname, 'public')],
  proxy: {
    '/weapi': {
      target: 'http://music.163.com/weapi',
      changeOrigin: true,
      onProxyReq: proxyReq => {
        if (proxyReq.getHeader('origin')) {
          proxyReq.setHeader('origin', 'http://music.163.com/weapi')
        }
      },
    },
  },
}

DevConfig.mode = 'development'

module.exports = DevConfig
