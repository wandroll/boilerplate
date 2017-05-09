import { readFileSync } from 'fs'
import { join } from 'path'
const { JSDOM } = require('jsdom')
const { addAlias } = require('module-alias')
const aliases = require('../webpack/base').default.resolve.alias
const indexFile = readFileSync(join(__dirname, '../../src/index.html'), 'utf8')

Object.keys(aliases).forEach(key => addAlias(key, aliases[key]))

global.document = (new JSDOM(indexFile)).window

if (document.defaultView) {
  Object.keys(document.defaultView).forEach(property => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property]
    }
  })
}

global.navigator = {
  userAgent: 'node.js'
}

if (process.env.NODE_ENV === 'test') {
  const vueNode = require('vue-node')

  vueNode(join(__dirname, 'config.js'))
} else {
  const { register } = require('vuegister')

  addAlias('vue', 'vue/dist/vue.min')
  register()
}

const { config } = require('vue')
config.productionTip = false
