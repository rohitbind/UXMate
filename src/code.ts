import { getSelectedText } from "./selectedText"
import { initialStore } from "./initialStore"
import { intractWithAI } from "./intractWithAI"

initialStore();

if (figma.editorType === 'figma') {
  
  figma.showUI(__html__, {width: 380, height: 500, title: 'Design Mate'});
  getSelectedText();

  figma.ui.onmessage = msg => {
    if(msg.promptMessage){
      let message = msg.promptMessage;
      intractWithAI(message);
    }
    else if (msg.type === 'updateSelection') {
      getSelectedText();
    }
  };
}