"use strict";
// API Key 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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Send a request to the OpenAI API
const apiKey = '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';
initialStore();
function initialStore() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = [{ role: "user", content: "Let's get started" }];
        yield figma.clientStorage.setAsync("message", message);
    });
}
if (figma.editorType === 'figma') {
    figma.showUI(__html__, { width: 380, height: 500, title: 'Design Mate' });
    selectedText();
    figma.ui.onmessage = msg => {
        if (msg.promptMessage) {
            let message = msg.promptMessage;
            intractWithAI(message);
        }
        else if (msg.type === 'updateSelection') {
            selectedText();
        }
    };
    function selectedText() {
        const selection = figma.currentPage.selection.filter(node => node.type === "TEXT");
        if (selection.length > 0) {
            const selectedText = selection[0];
            const selectedTextValue = selectedText.name;
            figma.ui.postMessage({ selectedTextValueUI: selectedTextValue });
        }
        else {
            figma.notify("Please select a text layer!", { timeout: 3000 });
            figma.closePlugin();
        }
    }
    function storeMessage(message) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield figma.clientStorage.getAsync("message");
            if (value) {
                value.push(message);
            }
            yield figma.clientStorage.setAsync("message", value);
        });
    }
    function intractWithAI(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("Me : " + msg);
            const userMessage = { role: "user", content: msg };
            yield storeMessage(userMessage);
            const messageValue = yield figma.clientStorage.getAsync("message");
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
            (() => __awaiter(this, void 0, void 0, function* () {
                figma.ui.postMessage({ loaderShow: "show" });
                const response = yield fetch('https://api.openai.com/v1/chat/completions', requestOptions);
                const json = yield response.json();
                const gptResponse = json.choices[0].message;
                console.log("Elixir async : " + JSON.stringify(gptResponse.content));
                storeMessage(gptResponse);
                figma.ui.postMessage({ loaderShow: "hide" });
                figma.ui.postMessage({ newSuggestion: gptResponse.content });
                // figma.closePlugin()
            }))();
        });
    }
}
