import { storeMessage } from "./storeMessage"

// API Key 1
const apiKey = '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';

async function sendMessageToAI(msg : string) {

    console.log("Me : "+ msg);

    const userMessage = {role: "user", content: msg};
    await storeMessage(userMessage);

    const messageValue = await figma.clientStorage.getAsync("message");

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messageValue
      })
    };

    (async () => {
      figma.ui.postMessage({ loaderShow:  "show"});

      const response = await fetch('https://api.openai.com/v1/chat/completions', requestOptions)
      const json = await response.json()
  
      const gptResponse = json.choices[0].message;

      console.log("Elixir async : " + JSON.stringify(gptResponse.content));
      
      await storeMessage(gptResponse);

      figma.ui.postMessage({ loaderShow:  "hide"});

      figma.ui.postMessage({ newSuggestion: gptResponse.content });
    })();
  }

  export {sendMessageToAI};