async function initialStore() {
    const message = [{role: "user", content: "Let's get started"}];
    await figma.clientStorage.setAsync("message", message);
}

export {initialStore};