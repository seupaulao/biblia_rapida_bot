const { message } = require("telegraf/filters");
const util = require("./util");
const { Telegraf, Markup, session } = require("telegraf")


//@biblia_simples_rapida_bot
//biblia pesquisa

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

/*
 * Funcoes
   1. ler capitulo   OK  
   2. ler verso      OK
   3. ler referencia OK
   4. mostrar refs   OK
   5. pesquisar palavra - usar blvetor
        - varrer vetor buscando se o texto bate
          1 - anotar a referencia no vetor
          2 - fazer contagem do total de ocorrencias, total de ocorrencias por testamento
          3 - apresentar o resultado por livro, mostrando o total de ocorrencias por livro [botao]
          4 - ao clicar no livro apresentar todas as ocorrencias apenas daquele livro, colocar o step no passo 3
          5 - ao fim do passo 6 deve ter um botão de sair 
              - chama o menu de comandos no fim : "O que vc gostaria de fazer"
          
   6. pesquisar dicionario - usar base 1 a 5
        - exibir o resultado da palavra de todas as bases
        - chama o menu de comandos no fim : "O que vc gostaria de fazer"
   7. catalogo 
        - fazer botoes de A a Z
        - abrir botoes com o nome da palavra na letra clicanda no passo anterior
        - buscar a palavra clicada nas bases        
        - chama o menu de comandos no fim : "O que vc gostaria de fazer"    
 */

async function comandos(ctx, mensagem) { 
   ctx.session = null;
   await ctx.reply(mensagem, Markup.inlineKeyboard([
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

async function apresentar_texto_ref_parcial(ctx, chave) {
   const v = chave.split('_');
   const ref = v[0];
   const capitulo = parseInt( v[1] );
   const vv = v[2].split('-');
   const parte_i = parseInt( vv[0] );
   const parte_f = parseInt( vv[1] );
   const referencia_biblica = util.montar_referencia_biblia(chave);
   await ctx.reply(referencia_biblica);
   let saida = [];
   for (let i = parte_i; i <= parte_f; i++) {
      const chave = ref + "_" + capitulo + "_" + i;
      saida.push(i + ". " + util.get_texto_chave(chave));
   }
   for (const msg of saida) {
      await ctx.reply(`${msg}`);
   }

  await comandos(ctx, "O que vc gostaria de fazer?");

}

async function apresentar_texto_ref_cap_verso(ctx, chave) {
   const referencia_biblica = util.montar_referencia_biblia(chave);
   await ctx.reply(referencia_biblica);
   const texto = util.get_texto_chave(chave);
   await ctx.reply(`${texto}`);
   await comandos(ctx, "O que vc gostaria de fazer?");
}

async function apresentar_texto_ref_cap(ctx, chave) {
   const v = chave.split('_');
   const ref = v[0];
   const indice = util.get_refs().indexOf(ref);
   const capitulo = parseInt(v[1]);
   let saida = get_texto_capitulo(indice, capitulo, ref);

   const referencia_biblica = util.montar_referencia_biblia(chave);
   await ctx.reply(referencia_biblica);
      
   for (const msg of saida) {
       await ctx.reply(`${msg}`);
   }

   await comandos(ctx, "O que vc gostaria de fazer?");
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

bot.action("oppesquisar", (ctx) => ctx.reply("EM DESENVOLVIMENTO"));
bot.action("opdicionario", (ctx) => ctx.reply("EM DESENVOLVIMENTO"));
bot.action("opcatalogo", (ctx) => ctx.reply("EM DESENVOLVIMENTO"));

bot.action("opreferencias", async (ctx)=>{

   for (let i = 0; i < util.get_livros().length; i++) {
      const nome = util.get_livro(i);
      const sigla = util.get_ref(i);
      await ctx.reply(sigla + " - " + nome);
   }
})

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
   bot.action(util.get_ref(i), async (ctx) => {
      await ctx.reply(`O livro selecionado foi ${util.get_livro(i)}`);
      ctx.session.livro=util.get_ref(i);
      ctx.session.indice=i;
      await ctx.reply("Digite o capitulo que deseja ler: ");      
   })
}

bot.action("opirreferencia", (ctx)=>{
   ctx.session = {step: 'selectporreferencia'};
   ctx.reply("Digite a referência do livro, verso e capitulo no formato XXX_NN_NN:")
})


bot.on(message("text"), async (ctx) => {
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

      await ctx.reply(valor);
      const texto = util.get_texto_chave(chave);
      await ctx.reply(`${texto}`);

      await comandos(ctx, "O que vc gostaria de fazer?");
      
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

      await comandos(ctx, "O que vc gostaria de fazer?");

      ctx.session = null;
   }
   if (step === 'selectporreferencia') {
      const chave = ctx.message.text;

      if (chave.indexOf('-') >= 0) {
         apresentar_texto_ref_parcial(ctx, chave);
      } else {
         if (chave.split('_').length > 2) {
            apresentar_texto_ref_cap_verso(ctx, chave);
         } else {
            apresentar_texto_ref_cap(ctx, chave);
         } 
      }

      ctx.session = null;
      
   }

});

bot.launch();




