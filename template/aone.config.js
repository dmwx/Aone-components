/**
 *  @file: aone.config.js is a <js> file
 *  @date: File created 2020-06-09 18:21
 *  @author:  shangwenhe
 */

'use strict'

const { name, version, optimization } = require('./package.json');

let fullPath = `${name.replace(/\@/ig, '')}/${version}`;
module.exports = {
  library: ['Aone','example'],
  fullPath: fullPath,
  optimization,
  externals: {
    vue: {
      global: 'Vue',
      assets: [
        'https://cdn.bootcss.com/vue/2.5.15/vue.min.js'
      ]
    } 
  }
}
