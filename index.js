const util = require("./util");
const { Telegraf, Markup, session } = require("telegraf")
//const { message } = require("telegraf/filters")

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(session());

function listarLivros() {
   let vetor = [];
   const c = util.get_livros();
   for (let i = 0; i < c.length; i++) {
       let v = [];
       v.push(Markup.button.callback(util.get_livro(i), util.get_ref(i))); 
       vetor.push(v);
   }
   return Markup.inlineKeyboard(vetor);
}

function comandos(ctx, mensagem) { 
   ctx.session = null;
   ctx.reply(mensagem, Markup.inlineKeyboard([
      [Markup.button.callback('Ler um capítulo', 'oplercapitulo')],
      [Markup.button.callback('Ler um verso','oplerverso')],
      [Markup.button.callback('Ler um verso por referencia','opirreferencia')],
      [Markup.button.callback('Ver referencias dos livros','opreferencias')],
      [Markup.button.callback('Pesquisar uma palavra','oppesquisar')],
      [Markup.button.callback('Pesquisar no dicionário','opdicionario')],
      [Markup.button.callback('Olhar o catálogo do dicionário','opcatalogo')],
   ]));
}

bot.start((ctx)=>comandos(ctx, 'Bem-vindo ao Bíblia Rápida!'))
bot.hears('Ajuda', (ctx)=>comandos(ctx, 'Os comandos são:'))
bot.hears('Me ajude', (ctx)=>comandos(ctx, 'Os comandos são:'))

bot.action("oplerverso", (ctx)=>{
   ctx.reply("Escolha o Livro:", listarLivros())
})

for (let i=0; i < util.get_livros().length; i++)
{
   bot.action(util.get_ref(i), (ctx) => {
      ctx.reply(`O livro selecionado foi ${util.get_livro(i)}`);
      ctx.session.livro=util.get_ref(i);
      
   })
}
bot.launch();
