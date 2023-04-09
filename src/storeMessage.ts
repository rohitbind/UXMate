async function storeMessage(message: { role: string, content: string }) {

    const value = await figma.clientStorage.getAsync("message");

    if(value){
      value.push(message);
    }

    await figma.clientStorage.setAsync("message", value);

}

export {storeMessage};