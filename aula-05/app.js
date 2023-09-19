const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
const port = 3000

app.use(express.static('static'))
app.use(express.json())

require('dotenv').config()

const { Telegraf } = require('telegraf')
const bot = new Telegraf(process.env.BOT_TOKEN)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname__, '/index.html'))
})

bot.command('bdia', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "Opa, bão?")
})

bot.command('btc', ctx => {
    var rate
    console.log(ctx.from)
    axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl`)
    .then(response => {
        console.log(response.data)
        rate = response.data.bitcoin
        const message = `Bitcoin tá ${rate.brl} reais.`
        bot.telegram.sendMessage(ctx.chat.id, message)
    })
})

bot.command('help', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, "/bdia - Bom dia!\n/btc - Preço do Bitcoin")
})

bot.launch()