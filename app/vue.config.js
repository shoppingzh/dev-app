var antThemePlugin = require('./antd-theme.config')

module.exports = {

  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            // less vars，customize ant design theme
  
            'primary-color': '#F5222D',
            // 'link-color': '#F5222D',
            'border-radius-base': '2px'
          },
          javascriptEnabled: true,
        }
      }
    }
  },

  configureWebpack: {
    plugins: [
      antThemePlugin
    ]
  },

  chainWebpack() {
  }

}