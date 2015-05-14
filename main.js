'use strict'

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow;

app.on('ready', function() {
  var atomScreen = require('screen');
  var size = atomScreen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: size.width,
    height: size.height,
    frame: false,
    fullscreen: false,
    'auto-hide-menu-bar': false,
    transparent: true
  });
  mainWindow.setFullScreen(true);
  mainWindow.loadUrl(`file://${__dirname}/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
});
