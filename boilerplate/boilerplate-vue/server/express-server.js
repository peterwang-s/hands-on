import Vue from 'vue'
import express from 'express'
import fs from 'fs'
import {createRenderer} from 'vue-server-renderer'

const app = express()
const renderer = createRenderer({
  template: fs.readFileSync('./index.template.html', 'utf-8')
})



app.get('*', function (req, res) {

  const web = new Vue({
    data: function () {
      return {
        url: req.url
      }
    },
    template: `<div>访问的url为{{url}}</div>`
  })

  const context = {
    title:'SSR 服务端渲染',
    meta:`<meta charset="utf-8">
    `
  }
  renderer.renderToString(web, context, (err, html) => {
    if (err) {
      res.status(500).end(`Internal Server err ${JSON.stringify(err)}`)
      return
    }
    res.end(html)
  })
})

app.listen(4001)
