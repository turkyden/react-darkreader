
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./react-darkmode.cjs.production.min.js')
} else {
  module.exports = require('./react-darkmode.cjs.development.js')
}
