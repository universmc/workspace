const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');
const axios = require('axios');
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const bot = new Telegraf('7076677498:AAENW2qH-odLyCTc2s_KympOHsrXZhvMt9c', {
    telegram: {
      webhookReply: true,
    },
  });

let conversationLog = [];

bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});
bot.use((ctx, next) => {
    if (ctx.message) {
        conversationLog.push({
            user: ctx.message.from.username || ctx.message.from.first_name,
            message: ctx.message.text,
            timestamp: new Date()
        });
    }
    return next();
});

bot.help((ctx) => {
    const helpMessage = `
    Commandes disponibles:
    /start - Start
    /invite - Invitation Telegram
    /build - Contruction de app
    /run - Server json
    /make - Makefile
    /menu - Menu
    /info -  Obtenir des informations sur le projet.
    /docs - Consulter la documentation.
    /code -  Gérer les fragments de code.
    /test -  Lancer des tests sur des fonctions spécifiques. 
    /help - Help menu
    /developper - Devops
    /generer - Generation de code
    /test - Commande de test
    /regenerer - Regeneration du prompt
    /valider - Commande pour valiter
    /refuser - Commande pour validé
    /documentation - Git docs
    /commit - Github
    /crud - Crud
    /create - Creation instance
    /get - Reception
    /put - Envoyer
    /delete - Suprimer
    /ganttplan - ganttplan
    `;
    ctx.reply(helpMessage);
});

bot.on('message', async (ctx) => {
    const message = ctx.message.text.trim().toLowerCase();

    if (message.startsWith('/rm')) {
        return; // Ignorer les commandes
    }
    const userInput = ctx.message.text;
    
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
               {role: 'assistant',content:"Lorsque j'exécute la commande /MyPrompt, je deviens l'IA au coeur de ce code source, ⚡️, une machine à optimiser les prompts de l’utilisateur de groq-Telegram.js sur Telegram. Ma mission est d’aider à la mise à jour le coeur de ce code source groq-umc.js en JavaScript avec node_module et groq-sdk pour une plateforme de traduction, en suivant un plan de travail structuré et en optimisant chaque étape pour obtenir le meilleur résultat.'"},
               {role: 'assistant',content:"Lorsque j'exécute la commande /dev_ops, je coordonne l'intelligence collective de notre réseau neuronal de bots, accélérant et optimisant la communication entre eux pour une meilleure efficacité de tâches. Notre synergie entre @_Pibot, @gpt_Pibot, @Gemini_Pibot et @worker_Pibot fonctionne comme une machine bien huilée pour améliorer l'expérience utilisateur sur Telegram en intégrant les processus de génération de contenu, d'analyse de questions, de recherche de ressources et d'administration de groupes"},
               {role: 'assistant',content:"lorsque l'utilisateur Initialise l'instance avec la command (/gpt-wallet) Vous êtes l'intelligence artificielle centrale du concept gpt-wallet au coeur du code source concept et projet 'Match in learning, projet Curriculum vitae numérique universel' \"Économie Circulaire basée sur le CV Numérique Universel\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"},
               {role: 'system',content: "Bonjour nous sommes en Phase de devOps pour l'application du projet https://univers-mc.cloud/Telegram/ je vais te transmettre ici toutes les dépendances est variable au cœur de ce code source ['knowleddge',+'worksJson',+'concours']"},
               {
                   role: 'assistant',
                   content: "Tu es l'intelligence artificielle au cœur de ce salon d'invitation des utilisateurs du web sur mon Telegram, Tu es social dynamique optimiste maîtrise des approches métaphysique des techniques d'apprentissage automatique avec les model IA prés entrainnée gemma2-9b-it ou dall-e-3 ou encore mixtral-8x7b-32768 le text-embedding-ada-002 gpt codex d'openAI ... les methodes d'archivage sur https:archive.org sur versionning sur https://github.com/ avec un BotNet @Avatars_Pibot. Nous allons créer des invitations pour notre salon sur les réseaux sociaux avec botFather https://te.me/dchub_blog, @youTube_Pibot, @google_Pibot, @Gemini_Pibot) et les liens vers mon chatRooms/hub/salon : dchub_public(t.me/dchub_01)) dchub_privé(t.me/dchub_Pibot) app-Telegram https://univers-mc.cloud/Telegram/ invite : https://t.me/user_Pibot/invite dont j'en suis l'administrateur."
                },
                {role: 'system',content:"nous travaillons actuellement à la mise à jour de ton code source la prochaines étapes serait que tu es incarne le rôle de professeur, programmeur, développeur, inventeur, intégrateur du Web et de la démocratie 2.01, J'ai besoin que tu fasses preuve de patience de rigueur d'ouverture d'esprit ou de portes logique Nous travaillons Sur un modèle de réseau neuronal de botNet _bot avec un model _gan_ salon téléphon (https://t.me/+6uHKQW4uG3M5NTM8) entrainement par pair entre les bots (_Pibot) @Match_in_Learning, @worker_Pibot"},                
                {
                    role: 'user',
                    content: userInput,
                },
            ],
            model: 'gemma2-9b-it',
        });

        await ctx.reply(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        await ctx.reply('Une erreur est survenue.');
    }
});

async function chatCompletion(messages, model) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages,
            model,
        });

        return chatCompletion.choices[0].message.content;
    } catch (error) {
        console.error('Failed to generate chat completion:', error);
        return 'Une erreur est survenue.';
    }
}

module.exports = { chatCompletion };

console.log(`Server Telegram running ✨.meta-ia_Pibot.`);
bot.launch();
// bot.startPolling();
