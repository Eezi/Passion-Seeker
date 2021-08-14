module.exports = {
  assetsDir: 'static',
  devServer: {
   /*proxy: {
      "^/graphql": {
        target: "http://localhost:4000",
        changeOrigin: true,
      },
    },*/
  },
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
}
