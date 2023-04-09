// This is the root file
import { getSelectedText } from "./selectedText"
import { initialStore } from "./initialStore"
import { sendMessageToAI } from "./sendMessageToAI"
import { sendToImageAI } from "./sendToImageAI"

initialStore();

if (figma.editorType === 'figma') {
  
  figma.showUI(__html__, {width: 380, height: 500, title: 'UX Mate'});
  getSelectedText();

  figma.ui.onmessage = msg => {
    if(msg.promptMessage){
      let message = msg.promptMessage;
      sendMessageToAI(message);
    }
    else if (msg.type === 'updateSelection') {
      getSelectedText();
    }
    else if (msg.imagePromptValue){
      sendToImageAI(msg.imagePromptValue);
    }
  };
}