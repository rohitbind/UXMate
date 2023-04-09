import { getSelectedText } from "./selectedText"

// API Key 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

// Send a request to the OpenAI API
const apiKey = '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';

initialStore();

async function initialStore() {
  const message = [{role: "user", content: "Let's get started"}];
  await figma.clientStorage.setAsync("message", message);
}


if (figma.editorType === 'figma') {
  figma.showUI(__html__, {width: 380, height: 500, title: 'Design Mate'});
  selectedText();

  figma.ui.onmessage = msg => {
    if(msg.promptMessage){
      let message = msg.promptMessage;
      intractWithAI(message);
    }
    else if (msg.type === 'updateSelection') {
      selectedText();
    }
  };

  function selectedText(){
    getSelectedText();
  }

  async function storeMessage(message: { role: string, content: string }) {

    const value = await figma.clientStorage.getAsync("message");

    if(value){
      value.push(message);
    }

    await figma.clientStorage.setAsync("message", value);

  }

  async function intractWithAI(msg : string) {

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
      
      storeMessage(gptResponse);

      figma.ui.postMessage({ loaderShow:  "hide"});

      figma.ui.postMessage({ newSuggestion: gptResponse.content });

      // figma.closePlugin()
    })();
  }
}