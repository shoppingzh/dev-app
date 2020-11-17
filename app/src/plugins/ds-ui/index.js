import Vue from 'vue'

const modules = require.context('@/components', true, /\.js$/)
modules.keys().forEach(path => {

  const Component = modules(path).default
  if (!Component || !(typeof Component === 'object' && Component.install)) return
  Vue.use(Component)
})