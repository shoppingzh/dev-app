const themes = {
  light: {
    '@black': '#000',
    '@white': '#fff',
    '@component-background': '#fff',
    '@border-color-base': '#eee',
    '@heading-color': '#000',
    '@border-color-split': '#ddd'
  },
  dark: {
    '@black': '#fff',
    '@white': '#000',
    '@component-background': '#181818',
    '@border-color-base': '#333',
    '@heading-color': '#fff',
    '@border-color-split': '#333'
  }
}

export function toggle(theme) {
  document.body.setAttribute('data-theme', theme)
  window.less.modifyVars(themes[theme] || {})
}