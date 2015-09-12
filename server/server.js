var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config/webpack.dev.config')
var app = express()
var compiler = webpack(config)

// enable hotloading for dev server in development environment
if(process.env.NODE_ENV == 'development') {
  console.log('Enabling hotloading and injecting redux dev tools')
  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

// static routes
app.get('/bundle.js', function(req, res) {
  console.log('sending build/bundle.js')
  res.sendFile('bundle.js', {root: './client/build/'})
})

app.get('*', function(req, res) {
  console.log('sending build/index.html')
  res.sendFile('index.html', {root: './client/build/'})
})

// listen on port 3000
app.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
    return
  }

  console.log('Listening at http://localhost:3000')
})
