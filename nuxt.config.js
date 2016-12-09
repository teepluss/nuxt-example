module.exports = {
  css: [
    // node.js module but we specify the lang
    { src: 'bulma', lang: 'sass' },
  ],
  build: {
    vendor: [
      'axios'
    ]
  }
}
