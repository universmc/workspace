const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //
  let promptmodel = "systemContent";
  let roleSystem = "gen -DevOps";
  let roleAssistant = "Professor";
  let roleUser = "Generator";

  const chatCompletion = await openai.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:"clean /mode"},
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[brainstorming[.Generator.]]"},
      {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
      {role: "user",name:"[🌴_Groq]", content: "[Ta réponse devrait être rédigé au format !HTML:5 développé en respectant les les normes du Web sémantique" },
    ],
    model: "gpt-4o",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "html_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();