const { Telegraf, Markup, session } = require("telegraf")
const { message } = require("telegraf/filters")

const bot = new Telegraf(process.env.BOT_TOKEN)

function comandos(ctx, mensagem) { 
   ctx.reply(mensagem, Markup.inlineKeyboard([
      [Markup.button.callback('Ler um capítulo', 'lercapitulo')],
      [Markup.button.callback('Ler um verso','lrverso')],
      [Markup.button.callback('Ler um verso por referencia','irreferencia')],
      [Markup.button.callback('Ver referencias dos livros','referencias')],
      [Markup.button.callback('Pesquisar uma palavra','pesquisar')],
      [Markup.button.callback('Pesquisar no dicionário','dicionario')],
      [Markup.button.callback('Olhar o catálogo do dicionário','catalogo')],
   ]));
}

bot.start((ctx)=>comandos(ctx, 'Bem-vindo ao Bíblia Rápida!'))
bot.hears('Ajuda', (ctx)=>comandos(ctx, 'Os comandos são:'))
bot.hears('Me ajude', (ctx)=>comandos(ctx, 'Os comandos são:'))

bot.action("ler verso", (ctx)=>{
   ctx.reply("Escolha o Livro;", listarLivros(ctx))
})
