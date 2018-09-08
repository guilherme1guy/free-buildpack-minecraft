#!/usr/bin/env nodejs

var fs = require('fs')
var http = require('http')
const Webhook = require("webhook-discord")

// Get port of ngrok from ngrok.log
var log = fs.readFileSync('ngrok.log', {encoding: 'utf-8'})
var regex = /URL:tcp:\/\/0.tcp.ngrok.io:(\d{5})/g
var port = regex.exec(log)[1]

// Check if there is a discord webhook setup
var webhook_url = process.env.DISCORD_WEBHOOK_URL

if (webhook_url != null){
  // Call the webhook with the server address

  const Hook = new Webhook(webhook_url)
  Hook.info('Minecraft Server','Server Address: 0.tcp.ngrok.io:' + port + "         -----   If you can't connect, wait a few minutes")


}

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end('Server Address: 0.tcp.ngrok.io:' + port)
}).listen(process.env.PORT || 8080)
