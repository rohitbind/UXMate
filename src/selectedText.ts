export function getSelectedText(){
    const selection = figma.currentPage.selection.filter(node => node.type === "TEXT");

    if (selection.length > 0) {
      const selectedText = selection[0];
      const selectedTextValue = selectedText.name;
      figma.ui.postMessage({ selectedTextValueUI: selectedTextValue });
    }
    else{
      figma.notify("Please select a text layer!", { timeout: 3000 });
      figma.closePlugin();
    }
}