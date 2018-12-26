#!/usr/bin/env nodejs

var fs = require('fs')
var http = require('http')
const Webhook = require("webhook-discord")

// Get port of ngrok from ngrok.log
var log = fs.readFileSync('ngrok.log', {encoding: 'utf-8'})
var regex = /URL:tcp:\/\/0.tcp.ngrok.io:(\d{5})/g
var port = regex.exec(log)[1]

// Check if there is a discord webhook setup
const webhook_url = process.env.DISCORD_WEBHOOK_URL
const minectaft_version = process.env.MINECRAFT_VERSION

if (webhook_url != null){
  // Call the webhook with the server address

  const Hook = new webhook.Webhook(webhook_url)
  Hook.info('Minecraft Server','Server Address: 0.tcp.ngrok.io:' + port + "      -------  Minecraft version: " + minectaft_version + "         -----   If you can't connect, wait a few minutes")


}

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.end('Version: '+ minectaft_version +'Server Address: 0.tcp.ngrok.io:' + port)
}).listen(process.env.PORT || 8080)
