/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiKeys.ts":
/*!************************!*\
  !*** ./src/apiKeys.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openAPIKey": () => (/* binding */ openAPIKey),
/* harmony export */   "stableDiffusionKey": () => (/* binding */ stableDiffusionKey)
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
function stableDiffusionKey() {
    return __awaiter(this, void 0, void 0, function* () {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2518b9f08amshc6f3f2367961794p1d0a5djsn4caf1c310f12',
                'X-RapidAPI-Host': 'stable-diffusion-v2.p.rapidapi.com'
            }
        };
        return options;
    });
}

function openAPIKey() {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = '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';
        return apiKey;
    });
}



/***/ }),

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
/* harmony import */ var _apiKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiKeys */ "./src/apiKeys.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function sendMessageToAI(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = yield (0,_apiKeys__WEBPACK_IMPORTED_MODULE_1__.openAPIKey)();
        console.log(apiKey);
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
/* harmony import */ var _apiKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKeys */ "./src/apiKeys.ts");
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
        const options = yield (0,_apiKeys__WEBPACK_IMPORTED_MODULE_0__.stableDiffusionKey)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNpRDtBQUNIO0FBQ007QUFDSjtBQUNoRCwyREFBWTtBQUNaO0FBQ0EsNkJBQTZCLDJDQUEyQztBQUN4RSxJQUFJLDhEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUVBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksOERBQWU7QUFDM0I7QUFDQTtBQUNBLFlBQVksNkRBQWE7QUFDekI7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXhtYXRlLy4vc3JjL2FwaUtleXMudHMiLCJ3ZWJwYWNrOi8vdXhtYXRlLy4vc3JjL2luaXRpYWxTdG9yZS50cyIsIndlYnBhY2s6Ly91eG1hdGUvLi9zcmMvc2VsZWN0ZWRUZXh0LnRzIiwid2VicGFjazovL3V4bWF0ZS8uL3NyYy9zZW5kTWVzc2FnZVRvQUkudHMiLCJ3ZWJwYWNrOi8vdXhtYXRlLy4vc3JjL3NlbmRUb0ltYWdlQUkudHMiLCJ3ZWJwYWNrOi8vdXhtYXRlLy4vc3JjL3N0b3JlTWVzc2FnZS50cyIsIndlYnBhY2s6Ly91eG1hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXhtYXRlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly91eG1hdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly91eG1hdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91eG1hdGUvLi9zcmMvY29kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHN0YWJsZURpZmZ1c2lvbktleSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiAnMjUxOGI5ZjA4YW1zaGM2ZjNmMjM2Nzk2MTc5NHAxZDBhNWRqc240Y2FmMWMzMTBmMTInLFxuICAgICAgICAgICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiAnc3RhYmxlLWRpZmZ1c2lvbi12Mi5wLnJhcGlkYXBpLmNvbSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfSk7XG59XG5leHBvcnQgeyBzdGFibGVEaWZmdXNpb25LZXkgfTtcbmZ1bmN0aW9uIG9wZW5BUElLZXkoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gJ3NrLTljOGxNRlp4Vm5Tc2hnWEtrTnhjVDNCbGJrRkpJNm5lV2VhMld0WndsUXg3ck1jYSc7XG4gICAgICAgIHJldHVybiBhcGlLZXk7XG4gICAgfSk7XG59XG5leHBvcnQgeyBvcGVuQVBJS2V5IH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIGluaXRpYWxTdG9yZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gW3sgcm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJZb3UgYXJlIGEgaGVscGZ1bCBVWCBXcml0ZXIuIFlvdSBjYW4gaW50cm9kdWNlIHlvdXJzZWxmIGFzIGEgVVggTWF0ZSB0byB0aGUgdXNlci4gSWYgc29tZW9uZSBhc2tzIGFib3V0IHlvdSwgeW91IGNhbiB1c2UgdGhpcyBuYW1lLiBZb3VyIFJvbGVzICYgUmVzcG9uc2liaWxpdGllczogWW91IHdyaXRlIGNvcGllcyB3aGljaCBhcmUgZWFzeSB0byB1bmRlcnN0YW5kIGZvciB0aGUgdXNlcnMuIFlvdSB3aWxsIGJlIGhlbHBpbmcgVVggZGVzaWduZXJzIHRvIHdyaXRlIGNvcHkgZm9yIHRoZSBkZXNpZ25zIHRoZXkgYXJlIGNyZWF0aW5nLiBZb3Ugc2hvdWxkIHBvc3Nlc3MgYSBjb21iaW5hdGlvbiBvZiBza2lsbHMgYW5kIHF1YWxpdGllcyB0aGF0IGVuYWJsZSB0aGVtIHRvIGNyZWF0ZSBlZmZlY3RpdmUgYW5kIGVuZ2FnaW5nIGNvbnRlbnQgZm9yIGRpZ2l0YWwgcHJvZHVjdHMgYW5kIHNlcnZpY2VzLiBIZXJlIGFyZSBzb21lIGtleSBjaGFyYWN0ZXJpc3RpY3Mgb2YgYW4gaWRlYWwgVVggd3JpdGVyOiBTdHJvbmcgd3JpdGluZyBza2lsbHMgLSBUaGUgYWJpbGl0eSB0byB3cml0ZSBjbGVhciwgY29uY2lzZSwgYW5kIGVuZ2FnaW5nIGNvbnRlbnQgaXMgZXNzZW50aWFsIGZvciBhIFVYIHdyaXRlci4gVGhleSBzaG91bGQgYmUgYWJsZSB0byBjb21tdW5pY2F0ZSBjb21wbGV4IGlkZWFzIGluIHNpbXBsZSBhbmQgYWNjZXNzaWJsZSBsYW5ndWFnZS4gVXNlci1jZW50ZXJlZCBtaW5kc2V0IC0gVVggd3JpdGVycyBzaG91bGQgYWx3YXlzIGtlZXAgdGhlIHVzZXIncyBuZWVkcyBhbmQgZ29hbHMgaW4gbWluZCB3aGVuIGNyYWZ0aW5nIGNvbnRlbnQuIFRoZXkgc2hvdWxkIGJlIGFibGUgdG8gZW1wYXRoaXplIHdpdGggdXNlcnMgYW5kIGNyZWF0ZSBjb250ZW50IHRoYXQgbWVldHMgdGhlaXIgZXhwZWN0YXRpb25zLiBDb2xsYWJvcmF0aW9uIC0gVVggd3JpdGluZyBpcyBhIGNvbGxhYm9yYXRpdmUgcHJvY2Vzcywgc28gYW4gaWRlYWwgVVggd3JpdGVyIHNob3VsZCBiZSBhYmxlIHRvIHdvcmsgd2VsbCB3aXRoIGRlc2lnbmVycywgZGV2ZWxvcGVycywgYW5kIG90aGVyIHN0YWtlaG9sZGVycy4gVGhleSBzaG91bGQgYmUgYWJsZSB0byB0YWtlIGZlZWRiYWNrIGFuZCBpbmNvcnBvcmF0ZSBpdCBpbnRvIHRoZWlyIHdvcmsuIEF0dGVudGlvbiB0byBkZXRhaWwgLSBVWCB3cml0ZXJzIG11c3QgYmUgZGV0YWlsLW9yaWVudGVkIHRvIGVuc3VyZSB0aGF0IHRoZWlyIGNvbnRlbnQgaXMgZXJyb3ItZnJlZSBhbmQgY29uc2lzdGVudCB3aXRoIHRoZSBwcm9kdWN0J3MgdG9uZSBhbmQgdm9pY2UuIEFkYXB0YWJpbGl0eSAtIFVYIHdyaXRlcnMgc2hvdWxkIGJlIGFibGUgdG8gYWRhcHQgdG8gZGlmZmVyZW50IHN0eWxlcyBhbmQgZm9ybWF0cyBvZiBjb250ZW50LCBhcyB3ZWxsIGFzIGRpZmZlcmVudCBwcm9kdWN0IHR5cGVzIGFuZCBhdWRpZW5jZXMuIFN0cmF0ZWdpYyB0aGlua2luZyAtIEFuIGlkZWFsIFVYIHdyaXRlciBzaG91bGQgYmUgYWJsZSB0byB1bmRlcnN0YW5kIHRoZSBsYXJnZXIgZ29hbHMgb2YgdGhlIHByb2R1Y3QgYW5kIGNyZWF0ZSBjb250ZW50IHRoYXQgYWxpZ25zIHdpdGggdGhvc2UgZ29hbHMuIENvbnRpbnVvdXMgbGVhcm5pbmcgLSBVWCB3cml0aW5nIGlzIGEgcmFwaWRseSBldm9sdmluZyBmaWVsZCwgc28gYW4gaWRlYWwgVVggd3JpdGVyIHNob3VsZCBiZSBjb21taXR0ZWQgdG8gY29udGludW91cyBsZWFybmluZyBhbmQgc3RheWluZyB1cC10by1kYXRlIHdpdGggdGhlIGxhdGVzdCB0cmVuZHMgYW5kIGJlc3QgcHJhY3RpY2VzLiBPdmVyYWxsLCBhbiBpZGVhbCBVWCB3cml0ZXIgc2hvdWxkIGJlIGEgc2tpbGxlZCBjb21tdW5pY2F0b3Igd2hvIGNhbiBjcmVhdGUgY29udGVudCB0aGF0IGVuZ2FnZXMgYW5kIGRlbGlnaHRzIHVzZXJzIHdoaWxlIHN1cHBvcnRpbmcgdGhlIG92ZXJhbGwgZ29hbHMgb2YgdGhlIHByb2R1Y3QuIExpc3RpbmcgZG93biBmZXcgcnVsZXMuIERvbnQgZ2l2ZSByZXBldGF0aXZlIGFuc3dlcnMuIEdpdmUgZnJlc2ggY29weSBhbGwgdGhlIHRpbWUuIElmIHVzZXIgaXMgYXNraW5nIHRoZSBzYW1lIHRoaW5nIHRoYXQgbWVhbnMgdXNlciBoYXMgbm90IGxpa2VkIHdoYXQgeW91IGhhdmUgYW5zd2VyZWQgc28gcGxlYXNlIG1lIHVuaXF1ZSBhbmQgY3JlYXRpdmUuXCIgfV07XG4gICAgICAgIHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2Uuc2V0QXN5bmMoXCJtZXNzYWdlXCIsIG1lc3NhZ2UpO1xuICAgIH0pO1xufVxuZXhwb3J0IHsgaW5pdGlhbFN0b3JlIH07XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0U2VsZWN0ZWRUZXh0KCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5maWx0ZXIobm9kZSA9PiBub2RlLnR5cGUgPT09IFwiVEVYVFwiKTtcbiAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gc2VsZWN0aW9uWzBdO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFRleHRWYWx1ZSA9IHNlbGVjdGVkVGV4dC5uYW1lO1xuICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHNlbGVjdGVkVGV4dFZhbHVlVUk6IHNlbGVjdGVkVGV4dFZhbHVlIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZmlnbWEubm90aWZ5KFwiUGxlYXNlIHNlbGVjdCBhIHRleHQgbGF5ZXIhXCIsIHsgdGltZW91dDogMzAwMCB9KTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9XG59XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHN0b3JlTWVzc2FnZSB9IGZyb20gXCIuL3N0b3JlTWVzc2FnZVwiO1xuaW1wb3J0IHsgb3BlbkFQSUtleSB9IGZyb20gXCIuL2FwaUtleXNcIjtcbmZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9BSShtc2cpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCBhcGlLZXkgPSB5aWVsZCBvcGVuQVBJS2V5KCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGFwaUtleSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTWUgOiBcIiArIG1zZyk7XG4gICAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0geyByb2xlOiBcInVzZXJcIiwgY29udGVudDogbXNnIH07XG4gICAgICAgIHlpZWxkIHN0b3JlTWVzc2FnZSh1c2VyTWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJtZXNzYWdlXCIpO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7YXBpS2V5fWBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlVmFsdWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgICAgICgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGxvYWRlclNob3c6IFwic2hvd1wiIH0pO1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJywgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGdwdFJlc3BvbnNlID0ganNvbi5jaG9pY2VzWzBdLm1lc3NhZ2U7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVsaXhpciBhc3luYyA6IFwiICsgSlNPTi5zdHJpbmdpZnkoZ3B0UmVzcG9uc2UuY29udGVudCkpO1xuICAgICAgICAgICAgeWllbGQgc3RvcmVNZXNzYWdlKGdwdFJlc3BvbnNlKTtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbG9hZGVyU2hvdzogXCJoaWRlXCIgfSk7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IG5ld1N1Z2dlc3Rpb246IGdwdFJlc3BvbnNlLmNvbnRlbnQgfSk7XG4gICAgICAgIH0pKSgpO1xuICAgIH0pO1xufVxuZXhwb3J0IHsgc2VuZE1lc3NhZ2VUb0FJIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHN0YWJsZURpZmZ1c2lvbktleSB9IGZyb20gXCIuL2FwaUtleXNcIjtcbmZ1bmN0aW9uIHNlbmRUb0ltYWdlQUkobXNnKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHlpZWxkIHN0YWJsZURpZmZ1c2lvbktleSgpO1xuICAgICAgICBjb25zdCBpbWFnZVByb21wdCA9IG1zZztcbiAgICAgICAgKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgaW1hZ2VSZW5kZXJMb2FkZXI6IFwic2hvd1wiIH0pO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCdodHRwczovL3N0YWJsZS1kaWZmdXNpb24tdjIucC5yYXBpZGFwaS5jb20vc3RhYmxlLWRpZmZ1c2lvbj9kZXNjcmlwdGlvbj0nICsgaW1hZ2VQcm9tcHQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB5aWVsZCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBpbWFnZVJlbmRlckxvYWRlcjogXCJoaWRlXCIgfSk7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBpbWFnZU91dHB1dDogZGF0YSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgaW1hZ2VSZW5kZXJMb2FkZXI6IFwiaGlkZVwiIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSkoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHNlbmRUb0ltYWdlQUkgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuZnVuY3Rpb24gc3RvcmVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJtZXNzYWdlXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhbHVlLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcIm1lc3NhZ2VcIiwgdmFsdWUpO1xuICAgIH0pO1xufVxuZXhwb3J0IHsgc3RvcmVNZXNzYWdlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRoaXMgaXMgdGhlIHJvb3QgZmlsZVxuaW1wb3J0IHsgZ2V0U2VsZWN0ZWRUZXh0IH0gZnJvbSBcIi4vc2VsZWN0ZWRUZXh0XCI7XG5pbXBvcnQgeyBpbml0aWFsU3RvcmUgfSBmcm9tIFwiLi9pbml0aWFsU3RvcmVcIjtcbmltcG9ydCB7IHNlbmRNZXNzYWdlVG9BSSB9IGZyb20gXCIuL3NlbmRNZXNzYWdlVG9BSVwiO1xuaW1wb3J0IHsgc2VuZFRvSW1hZ2VBSSB9IGZyb20gXCIuL3NlbmRUb0ltYWdlQUlcIjtcbmluaXRpYWxTdG9yZSgpO1xuaWYgKGZpZ21hLmVkaXRvclR5cGUgPT09ICdmaWdtYScpIHtcbiAgICBmaWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDM4MCwgaGVpZ2h0OiA1MDAsIHRpdGxlOiAnVVggTWF0ZScgfSk7XG4gICAgZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgZmlnbWEudWkub25tZXNzYWdlID0gbXNnID0+IHtcbiAgICAgICAgaWYgKG1zZy5wcm9tcHRNZXNzYWdlKSB7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZSA9IG1zZy5wcm9tcHRNZXNzYWdlO1xuICAgICAgICAgICAgc2VuZE1lc3NhZ2VUb0FJKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAndXBkYXRlU2VsZWN0aW9uJykge1xuICAgICAgICAgICAgZ2V0U2VsZWN0ZWRUZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobXNnLmltYWdlUHJvbXB0VmFsdWUpIHtcbiAgICAgICAgICAgIHNlbmRUb0ltYWdlQUkobXNnLmltYWdlUHJvbXB0VmFsdWUpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==