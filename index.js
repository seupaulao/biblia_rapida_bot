const { message } = require("telegraf/filters");
const util = require("./util");
const { Telegraf, Markup, session } = require("telegraf")

require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(session());

function listarBotoesLivros() {
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

function zerar(ctx) {
   ctx.session = null;
   ctx.reply("Tudo zerado!!")
}

function get_texto_capitulo(indice, capitulo, ref) {
   let saida = [];
   const qtd = util.get_qtd_versos(indice, capitulo);
   for (let i = 1; i <= qtd; i++) {
      const chave = ref + "_" + capitulo + "_" + i;
      saida.push(i + ". " + util.get_texto_chave(chave));
   }
   return saida;
}

bot.start((ctx)=>comandos(ctx, 'Bem-vindo ao Bíblia Rápida!'))
bot.hears('Ajuda', (ctx)=>comandos(ctx, 'Os comandos são:'))
bot.hears('ajuda', (ctx)=>comandos(ctx, 'Os comandos são:'))
bot.hears('Me ajude', (ctx)=>comandos(ctx, 'Os comandos são:'))
bot.hears('me ajude', (ctx)=>comandos(ctx, 'Os comandos são:'))
bot.hears('zerar tudo', (ctx)=>zerar(ctx))
bot.hears('zerar', (ctx)=>zerar(ctx))

bot.command('/zerar', (ctx) => zerar(ctx));
bot.command('/ajuda', (ctx)=>comandos(ctx, 'Os comandos são:'));


bot.action("oplerverso", (ctx)=>{
   ctx.session = {step: 'selectporverso'};
   ctx.reply("Escolha o Livro:", listarBotoesLivros())
})

bot.action("oplercapitulo", (ctx)=>{
   ctx.session = {step: 'selectporcapitulo'};
   ctx.reply("Escolha o Livro:", listarBotoesLivros())
})

for (let i=0; i < util.get_livros().length; i++)
{
   bot.action(util.get_ref(i), (ctx) => {
      ctx.reply(`O livro selecionado foi ${util.get_livro(i)}`);
      ctx.session.livro=util.get_ref(i);
      ctx.session.indice=i;
      ctx.reply("Digite o capitulo que deseja ler: ");      
   })
}

bot.action("opirreferencia", (ctx)=>{
   ctx.session = {step: 'selectporreferencia'};
   ctx.reply("Digite a referência do livro, verso e capitulo no formato XXX_NN_NN:")
})


bot.on(message("text"), async (ctx)=>{
   const step = ctx.session?.step;
   if (step === 'selectporverso') {
      const livro = ctx.session.indice;

      const entrada = parseInt(ctx.message.text);
      if (entrada > util.get_capitulos(livro)) {
         ctx.session = null;
         return ctx.reply("Abortando. Você digitou um capitulo invalido.");
      }
      ctx.session.capitulo = entrada;
      ctx.session.step = 'selectversiculo';
      return ctx.reply("Digite o numero do versiculo que deseja ler: ");
   }
   if (step === 'selectversiculo') {
      const {indice , livro , capitulo} = ctx.session; 
      const versiculo = parseInt(ctx.message.text);
      if (versiculo > util.get_qtd_versos(indice, capitulo)) {
         ctx.session = null;
         return ctx.reply("Abortando. Você digitou um versiculo invalido.");
      }
      const chave = livro + "_" + capitulo + "_" + versiculo;
      const nomelivro = util.get_livro(indice);
      ctx.session.chave = chave;
      const valor = nomelivro+ " " + capitulo +":" + versiculo;

      ctx.reply(valor);
      const texto = util.get_texto_chave(chave);
      ctx.reply(`${texto}`);
      ctx.session = null;
   }
   if (step === 'selectporcapitulo') {
      const capitulo = parseInt( ctx.message.text );
      const { indice } = ctx.session;
      const ref = util.get_ref(indice);
      let saida = get_texto_capitulo(indice, capitulo, ref);
      
      for (const msg of saida) {
          await ctx.reply(`${msg}`);
      }

      ctx.session = null;
   }
   if (step === 'selectporreferencia') {
      const chave = ctx.message.text;
      const referencia_biblica = util.montar_referencia_biblia(chave);
      ctx.reply(referencia_biblica);
      const texto = util.get_texto_chave(chave);
      ctx.reply(`${texto}`);
      ctx.session = null;
   }

});

bot.launch();


