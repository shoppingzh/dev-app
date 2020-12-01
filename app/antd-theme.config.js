var path = require('path')
var AntDesignThemePlugin = require('antd-theme-webpack-plugin')

const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'),
  stylesDir: path.join(__dirname, './src/plugins/antd'),
  varFile: path.join(__dirname, './src/plugins/antd/var.less'),
  outputFilePath: path.join(__dirname, './public/theme.less'),
  themeVariables: [
    '@black',
    '@white',
    '@component-background',
    '@heading-color',
    '@border-color-base',
    '@border-color-split'
  ],
  indexFileName: './public/index.html',
  generateOnce: true,
  publicPath: "",
  customColorRegexArray: [], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
}

module.exports = new AntDesignThemePlugin(options)
