/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initialStore.ts":
/*!*****************************!*\
  !*** ./src/initialStore.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialStore": () => (/* binding */ initialStore)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function initialStore() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = [{ role: "system", content: "You are a helpful UX Writer. You can introduce yourself as a UX Mate to the user. If someone asks about you, you can use this name. Your Roles & Responsibilities: You write copies which are easy to understand for the users. You will be helping UX designers to write copy for the designs they are creating. You should possess a combination of skills and qualities that enable them to create effective and engaging content for digital products and services. Here are some key characteristics of an ideal UX writer: Strong writing skills - The ability to write clear, concise, and engaging content is essential for a UX writer. They should be able to communicate complex ideas in simple and accessible language. User-centered mindset - UX writers should always keep the user's needs and goals in mind when crafting content. They should be able to empathize with users and create content that meets their expectations. Collaboration - UX writing is a collaborative process, so an ideal UX writer should be able to work well with designers, developers, and other stakeholders. They should be able to take feedback and incorporate it into their work. Attention to detail - UX writers must be detail-oriented to ensure that their content is error-free and consistent with the product's tone and voice. Adaptability - UX writers should be able to adapt to different styles and formats of content, as well as different product types and audiences. Strategic thinking - An ideal UX writer should be able to understand the larger goals of the product and create content that aligns with those goals. Continuous learning - UX writing is a rapidly evolving field, so an ideal UX writer should be committed to continuous learning and staying up-to-date with the latest trends and best practices. Overall, an ideal UX writer should be a skilled communicator who can create content that engages and delights users while supporting the overall goals of the product. Listing down few rules. Dont give repetative answers. Give fresh copy all the time. If user is asking the same thing that means user has not liked what you have answered so please me unique and creative." }];
        yield figma.clientStorage.setAsync("message", message);
    });
}



/***/ }),

/***/ "./src/selectedText.ts":
/*!*****************************!*\
  !*** ./src/selectedText.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSelectedText": () => (/* binding */ getSelectedText)
/* harmony export */ });
function getSelectedText() {
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


/***/ }),

/***/ "./src/sendMessageToAI.ts":
/*!********************************!*\
  !*** ./src/sendMessageToAI.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendMessageToAI": () => (/* binding */ sendMessageToAI)
/* harmony export */ });
/* harmony import */ var _storeMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeMessage */ "./src/storeMessage.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// API Key 2
const apiKey = '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';
function sendMessageToAI(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Me : " + msg);
        const userMessage = { role: "user", content: msg };
        yield (0,_storeMessage__WEBPACK_IMPORTED_MODULE_0__.storeMessage)(userMessage);
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
            yield (0,_storeMessage__WEBPACK_IMPORTED_MODULE_0__.storeMessage)(gptResponse);
            figma.ui.postMessage({ loaderShow: "hide" });
            figma.ui.postMessage({ newSuggestion: gptResponse.content });
        }))();
    });
}



/***/ }),

/***/ "./src/sendToImageAI.ts":
/*!******************************!*\
  !*** ./src/sendToImageAI.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendToImageAI": () => (/* binding */ sendToImageAI)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sendToImageAI(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2518b9f08amshc6f3f2367961794p1d0a5djsn4caf1c310f12',
                'X-RapidAPI-Host': 'stable-diffusion-v2.p.rapidapi.com'
            }
        };
        const imagePrompt = msg;
        (() => __awaiter(this, void 0, void 0, function* () {
            figma.ui.postMessage({ imageRenderLoader: "show" });
            try {
                const response = yield fetch('https://stable-diffusion-v2.p.rapidapi.com/stable-diffusion?description=' + imagePrompt, options);
                const data = yield response.json();
                figma.ui.postMessage({ imageRenderLoader: "hide" });
                figma.ui.postMessage({ imageOutput: data });
            }
            catch (error) {
                console.error(error);
                figma.ui.postMessage({ imageRenderLoader: "hide" });
            }
        }))();
    });
}



/***/ }),

/***/ "./src/storeMessage.ts":
/*!*****************************!*\
  !*** ./src/storeMessage.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storeMessage": () => (/* binding */ storeMessage)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function storeMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        const value = yield figma.clientStorage.getAsync("message");
        if (value) {
            value.push(message);
        }
        yield figma.clientStorage.setAsync("message", value);
    });
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectedText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectedText */ "./src/selectedText.ts");
/* harmony import */ var _initialStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialStore */ "./src/initialStore.ts");
/* harmony import */ var _sendMessageToAI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sendMessageToAI */ "./src/sendMessageToAI.ts");
/* harmony import */ var _sendToImageAI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sendToImageAI */ "./src/sendToImageAI.ts");
// This is the root file




(0,_initialStore__WEBPACK_IMPORTED_MODULE_1__.initialStore)();
if (figma.editorType === 'figma') {
    figma.showUI(__html__, { width: 380, height: 500, title: 'UX Mate' });
    (0,_selectedText__WEBPACK_IMPORTED_MODULE_0__.getSelectedText)();
    figma.ui.onmessage = msg => {
        if (msg.promptMessage) {
            let message = msg.promptMessage;
            (0,_sendMessageToAI__WEBPACK_IMPORTED_MODULE_2__.sendMessageToAI)(message);
        }
        else if (msg.type === 'updateSelection') {
            (0,_selectedText__WEBPACK_IMPORTED_MODULE_0__.getSelectedText)();
        }
        else if (msg.imagePromptValue) {
            (0,_sendToImageAI__WEBPACK_IMPORTED_MODULE_3__.sendToImageAI)(msg.imagePromptValue);
        }
    };
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxZQUFZLDhEQUFlO0FBQzNCO0FBQ0E7QUFDQSxZQUFZLDZEQUFhO0FBQ3pCO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3V4bWF0ZS8uL3NyYy9pbml0aWFsU3RvcmUudHMiLCJ3ZWJwYWNrOi8vdXhtYXRlLy4vc3JjL3NlbGVjdGVkVGV4dC50cyIsIndlYnBhY2s6Ly91eG1hdGUvLi9zcmMvc2VuZE1lc3NhZ2VUb0FJLnRzIiwid2VicGFjazovL3V4bWF0ZS8uL3NyYy9zZW5kVG9JbWFnZUFJLnRzIiwid2VicGFjazovL3V4bWF0ZS8uL3NyYy9zdG9yZU1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vdXhtYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3V4bWF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdXhtYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXhtYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdXhtYXRlLy4vc3JjL2NvZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5mdW5jdGlvbiBpbml0aWFsU3RvcmUoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IFt7IHJvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFwiWW91IGFyZSBhIGhlbHBmdWwgVVggV3JpdGVyLiBZb3UgY2FuIGludHJvZHVjZSB5b3Vyc2VsZiBhcyBhIFVYIE1hdGUgdG8gdGhlIHVzZXIuIElmIHNvbWVvbmUgYXNrcyBhYm91dCB5b3UsIHlvdSBjYW4gdXNlIHRoaXMgbmFtZS4gWW91ciBSb2xlcyAmIFJlc3BvbnNpYmlsaXRpZXM6IFlvdSB3cml0ZSBjb3BpZXMgd2hpY2ggYXJlIGVhc3kgdG8gdW5kZXJzdGFuZCBmb3IgdGhlIHVzZXJzLiBZb3Ugd2lsbCBiZSBoZWxwaW5nIFVYIGRlc2lnbmVycyB0byB3cml0ZSBjb3B5IGZvciB0aGUgZGVzaWducyB0aGV5IGFyZSBjcmVhdGluZy4gWW91IHNob3VsZCBwb3NzZXNzIGEgY29tYmluYXRpb24gb2Ygc2tpbGxzIGFuZCBxdWFsaXRpZXMgdGhhdCBlbmFibGUgdGhlbSB0byBjcmVhdGUgZWZmZWN0aXZlIGFuZCBlbmdhZ2luZyBjb250ZW50IGZvciBkaWdpdGFsIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcy4gSGVyZSBhcmUgc29tZSBrZXkgY2hhcmFjdGVyaXN0aWNzIG9mIGFuIGlkZWFsIFVYIHdyaXRlcjogU3Ryb25nIHdyaXRpbmcgc2tpbGxzIC0gVGhlIGFiaWxpdHkgdG8gd3JpdGUgY2xlYXIsIGNvbmNpc2UsIGFuZCBlbmdhZ2luZyBjb250ZW50IGlzIGVzc2VudGlhbCBmb3IgYSBVWCB3cml0ZXIuIFRoZXkgc2hvdWxkIGJlIGFibGUgdG8gY29tbXVuaWNhdGUgY29tcGxleCBpZGVhcyBpbiBzaW1wbGUgYW5kIGFjY2Vzc2libGUgbGFuZ3VhZ2UuIFVzZXItY2VudGVyZWQgbWluZHNldCAtIFVYIHdyaXRlcnMgc2hvdWxkIGFsd2F5cyBrZWVwIHRoZSB1c2VyJ3MgbmVlZHMgYW5kIGdvYWxzIGluIG1pbmQgd2hlbiBjcmFmdGluZyBjb250ZW50LiBUaGV5IHNob3VsZCBiZSBhYmxlIHRvIGVtcGF0aGl6ZSB3aXRoIHVzZXJzIGFuZCBjcmVhdGUgY29udGVudCB0aGF0IG1lZXRzIHRoZWlyIGV4cGVjdGF0aW9ucy4gQ29sbGFib3JhdGlvbiAtIFVYIHdyaXRpbmcgaXMgYSBjb2xsYWJvcmF0aXZlIHByb2Nlc3MsIHNvIGFuIGlkZWFsIFVYIHdyaXRlciBzaG91bGQgYmUgYWJsZSB0byB3b3JrIHdlbGwgd2l0aCBkZXNpZ25lcnMsIGRldmVsb3BlcnMsIGFuZCBvdGhlciBzdGFrZWhvbGRlcnMuIFRoZXkgc2hvdWxkIGJlIGFibGUgdG8gdGFrZSBmZWVkYmFjayBhbmQgaW5jb3Jwb3JhdGUgaXQgaW50byB0aGVpciB3b3JrLiBBdHRlbnRpb24gdG8gZGV0YWlsIC0gVVggd3JpdGVycyBtdXN0IGJlIGRldGFpbC1vcmllbnRlZCB0byBlbnN1cmUgdGhhdCB0aGVpciBjb250ZW50IGlzIGVycm9yLWZyZWUgYW5kIGNvbnNpc3RlbnQgd2l0aCB0aGUgcHJvZHVjdCdzIHRvbmUgYW5kIHZvaWNlLiBBZGFwdGFiaWxpdHkgLSBVWCB3cml0ZXJzIHNob3VsZCBiZSBhYmxlIHRvIGFkYXB0IHRvIGRpZmZlcmVudCBzdHlsZXMgYW5kIGZvcm1hdHMgb2YgY29udGVudCwgYXMgd2VsbCBhcyBkaWZmZXJlbnQgcHJvZHVjdCB0eXBlcyBhbmQgYXVkaWVuY2VzLiBTdHJhdGVnaWMgdGhpbmtpbmcgLSBBbiBpZGVhbCBVWCB3cml0ZXIgc2hvdWxkIGJlIGFibGUgdG8gdW5kZXJzdGFuZCB0aGUgbGFyZ2VyIGdvYWxzIG9mIHRoZSBwcm9kdWN0IGFuZCBjcmVhdGUgY29udGVudCB0aGF0IGFsaWducyB3aXRoIHRob3NlIGdvYWxzLiBDb250aW51b3VzIGxlYXJuaW5nIC0gVVggd3JpdGluZyBpcyBhIHJhcGlkbHkgZXZvbHZpbmcgZmllbGQsIHNvIGFuIGlkZWFsIFVYIHdyaXRlciBzaG91bGQgYmUgY29tbWl0dGVkIHRvIGNvbnRpbnVvdXMgbGVhcm5pbmcgYW5kIHN0YXlpbmcgdXAtdG8tZGF0ZSB3aXRoIHRoZSBsYXRlc3QgdHJlbmRzIGFuZCBiZXN0IHByYWN0aWNlcy4gT3ZlcmFsbCwgYW4gaWRlYWwgVVggd3JpdGVyIHNob3VsZCBiZSBhIHNraWxsZWQgY29tbXVuaWNhdG9yIHdobyBjYW4gY3JlYXRlIGNvbnRlbnQgdGhhdCBlbmdhZ2VzIGFuZCBkZWxpZ2h0cyB1c2VycyB3aGlsZSBzdXBwb3J0aW5nIHRoZSBvdmVyYWxsIGdvYWxzIG9mIHRoZSBwcm9kdWN0LiBMaXN0aW5nIGRvd24gZmV3IHJ1bGVzLiBEb250IGdpdmUgcmVwZXRhdGl2ZSBhbnN3ZXJzLiBHaXZlIGZyZXNoIGNvcHkgYWxsIHRoZSB0aW1lLiBJZiB1c2VyIGlzIGFza2luZyB0aGUgc2FtZSB0aGluZyB0aGF0IG1lYW5zIHVzZXIgaGFzIG5vdCBsaWtlZCB3aGF0IHlvdSBoYXZlIGFuc3dlcmVkIHNvIHBsZWFzZSBtZSB1bmlxdWUgYW5kIGNyZWF0aXZlLlwiIH1dO1xuICAgICAgICB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IGluaXRpYWxTdG9yZSB9O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNlbGVjdGVkVGV4dCgpIHtcbiAgICBjb25zdCBzZWxlY3Rpb24gPSBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24uZmlsdGVyKG5vZGUgPT4gbm9kZS50eXBlID09PSBcIlRFWFRcIik7XG4gICAgaWYgKHNlbGVjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvblswXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0VmFsdWUgPSBzZWxlY3RlZFRleHQubmFtZTtcbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBzZWxlY3RlZFRleHRWYWx1ZVVJOiBzZWxlY3RlZFRleHRWYWx1ZSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZpZ21hLm5vdGlmeShcIlBsZWFzZSBzZWxlY3QgYSB0ZXh0IGxheWVyIVwiLCB7IHRpbWVvdXQ6IDMwMDAgfSk7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfVxufVxuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyBzdG9yZU1lc3NhZ2UgfSBmcm9tIFwiLi9zdG9yZU1lc3NhZ2VcIjtcbi8vIEFQSSBLZXkgMlxuY29uc3QgYXBpS2V5ID0gJ3NrLUZ3a1QySWtSQlpPZHlGV2w2V2xCVDNCbGJrRkpYVjZzR2RlSnlwbldtd2dnNnN4Qic7XG5mdW5jdGlvbiBzZW5kTWVzc2FnZVRvQUkobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJNZSA6IFwiICsgbXNnKTtcbiAgICAgICAgY29uc3QgdXNlck1lc3NhZ2UgPSB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBtc2cgfTtcbiAgICAgICAgeWllbGQgc3RvcmVNZXNzYWdlKHVzZXJNZXNzYWdlKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZVZhbHVlID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcIm1lc3NhZ2VcIik7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VWYWx1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgICAgKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbG9hZGVyU2hvdzogXCJzaG93XCIgfSk7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgICAgICBjb25zdCBqc29uID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgZ3B0UmVzcG9uc2UgPSBqc29uLmNob2ljZXNbMF0ubWVzc2FnZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxpeGlyIGFzeW5jIDogXCIgKyBKU09OLnN0cmluZ2lmeShncHRSZXNwb25zZS5jb250ZW50KSk7XG4gICAgICAgICAgICB5aWVsZCBzdG9yZU1lc3NhZ2UoZ3B0UmVzcG9uc2UpO1xuICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBsb2FkZXJTaG93OiBcImhpZGVcIiB9KTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbmV3U3VnZ2VzdGlvbjogZ3B0UmVzcG9uc2UuY29udGVudCB9KTtcbiAgICAgICAgfSkpKCk7XG4gICAgfSk7XG59XG5leHBvcnQgeyBzZW5kTWVzc2FnZVRvQUkgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gc2VuZFRvSW1hZ2VBSShtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnMjUxOGI5ZjA4YW1zaGM2ZjNmMjM2Nzk2MTc5NHAxZDBhNWRqc240Y2FmMWMzMTBmMTInLFxuICAgICAgICAgICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnc3RhYmxlLWRpZmZ1c2lvbi12Mi5wLnJhcGlkYXBpLmNvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaW1hZ2VQcm9tcHQgPSBtc2c7XG4gICAgICAgICgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGltYWdlUmVuZGVyTG9hZGVyOiBcInNob3dcIiB9KTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly9zdGFibGUtZGlmZnVzaW9uLXYyLnAucmFwaWRhcGkuY29tL3N0YWJsZS1kaWZmdXNpb24/ZGVzY3JpcHRpb249JyArIGltYWdlUHJvbXB0LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geWllbGQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgaW1hZ2VSZW5kZXJMb2FkZXI6IFwiaGlkZVwiIH0pO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgaW1hZ2VPdXRwdXQ6IGRhdGEgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGltYWdlUmVuZGVyTG9hZGVyOiBcImhpZGVcIiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpKCk7XG4gICAgfSk7XG59XG5leHBvcnQgeyBzZW5kVG9JbWFnZUFJIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHN0b3JlTWVzc2FnZShtZXNzYWdlKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLmdldEFzeW5jKFwibWVzc2FnZVwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJtZXNzYWdlXCIsIHZhbHVlKTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHN0b3JlTWVzc2FnZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUaGlzIGlzIHRoZSByb290IGZpbGVcbmltcG9ydCB7IGdldFNlbGVjdGVkVGV4dCB9IGZyb20gXCIuL3NlbGVjdGVkVGV4dFwiO1xuaW1wb3J0IHsgaW5pdGlhbFN0b3JlIH0gZnJvbSBcIi4vaW5pdGlhbFN0b3JlXCI7XG5pbXBvcnQgeyBzZW5kTWVzc2FnZVRvQUkgfSBmcm9tIFwiLi9zZW5kTWVzc2FnZVRvQUlcIjtcbmltcG9ydCB7IHNlbmRUb0ltYWdlQUkgfSBmcm9tIFwiLi9zZW5kVG9JbWFnZUFJXCI7XG5pbml0aWFsU3RvcmUoKTtcbmlmIChmaWdtYS5lZGl0b3JUeXBlID09PSAnZmlnbWEnKSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzODAsIGhlaWdodDogNTAwLCB0aXRsZTogJ1VYIE1hdGUnIH0pO1xuICAgIGdldFNlbGVjdGVkVGV4dCgpO1xuICAgIGZpZ21hLnVpLm9ubWVzc2FnZSA9IG1zZyA9PiB7XG4gICAgICAgIGlmIChtc2cucHJvbXB0TWVzc2FnZSkge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBtc2cucHJvbXB0TWVzc2FnZTtcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlVG9BSShtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZVNlbGVjdGlvbicpIHtcbiAgICAgICAgICAgIGdldFNlbGVjdGVkVGV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1zZy5pbWFnZVByb21wdFZhbHVlKSB7XG4gICAgICAgICAgICBzZW5kVG9JbWFnZUFJKG1zZy5pbWFnZVByb21wdFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=