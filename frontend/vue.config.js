const path = require('path');

module.exports = {
    outputDir: path.resolve(__dirname, '../backend/public'),
    chainWebpack: config => {
      config.module
        .rule('graphql')
        .test(/\.(graphql|gql)$/)
        .use('graphql-tag/loader')
        .loader('graphql-tag/loader')
        .end();
    },
    pluginOptions: {
      apollo: {
          lintGQL: true
    },
  },
  devServer: {
    proxy: 'http://localhost:4000'
  }
}
