/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/***/ (function() {


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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/code.ts"]();
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWE7QUFDYjtBQUNBO0FBQ0EsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUE0QztBQUN2RTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkJBQTZCLCtDQUErQztBQUM1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsd0NBQXdDO0FBQzNFO0FBQ0E7QUFDQSwwREFBMEQsZUFBZTtBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsT0FBTztBQUN0RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsb0JBQW9CO0FBQzNELHVDQUF1QyxvQ0FBb0M7QUFDM0U7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7O1VFbkZBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZXNpZ24tTWF0ZS8uL3NyYy9jb2RlLnRzIiwid2VicGFjazovL0Rlc2lnbi1NYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vRGVzaWduLU1hdGUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL0Rlc2lnbi1NYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbi8vIEFQSSBLZXkgc2stTUZiQ3Q1c0lQUHRtVWFVZnFWWGVUM0JsYmtGSlBuNnM1ZWJjSVV3SEJmR0k1YnpBXG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbi8vIFNlbmQgYSByZXF1ZXN0IHRvIHRoZSBPcGVuQUkgQVBJXG5jb25zdCBhcGlLZXkgPSAnc2stTUZiQ3Q1c0lQUHRtVWFVZnFWWGVUM0JsYmtGSlBuNnM1ZWJjSVV3SEJmR0k1YnpBJztcbmluaXRpYWxTdG9yZSgpO1xuZnVuY3Rpb24gaW5pdGlhbFN0b3JlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBbeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogXCJMZXQncyBnZXQgc3RhcnRlZFwiIH1dO1xuICAgICAgICB5aWVsZCBmaWdtYS5jbGllbnRTdG9yYWdlLnNldEFzeW5jKFwibWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICB9KTtcbn1cbmlmIChmaWdtYS5lZGl0b3JUeXBlID09PSAnZmlnbWEnKSB7XG4gICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fLCB7IHdpZHRoOiAzODAsIGhlaWdodDogNTAwLCB0aXRsZTogJ0Rlc2lnbiBNYXRlJyB9KTtcbiAgICBzZWxlY3RlZFRleHQoKTtcbiAgICBmaWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgICAgICBpZiAobXNnLnByb21wdE1lc3NhZ2UpIHtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlID0gbXNnLnByb21wdE1lc3NhZ2U7XG4gICAgICAgICAgICBpbnRyYWN0V2l0aEFJKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG1zZy50eXBlID09PSAndXBkYXRlU2VsZWN0aW9uJykge1xuICAgICAgICAgICAgc2VsZWN0ZWRUZXh0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZ1bmN0aW9uIHNlbGVjdGVkVGV4dCgpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uLmZpbHRlcihub2RlID0+IG5vZGUudHlwZSA9PT0gXCJURVhUXCIpO1xuICAgICAgICBpZiAoc2VsZWN0aW9uLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvblswXTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGV4dFZhbHVlID0gc2VsZWN0ZWRUZXh0Lm5hbWU7XG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IHNlbGVjdGVkVGV4dFZhbHVlVUk6IHNlbGVjdGVkVGV4dFZhbHVlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiUGxlYXNlIHNlbGVjdCBhIHRleHQgbGF5ZXIhXCIsIHsgdGltZW91dDogMzAwMCB9KTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc3RvcmVNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0geWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5nZXRBc3luYyhcIm1lc3NhZ2VcIik7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeWllbGQgZmlnbWEuY2xpZW50U3RvcmFnZS5zZXRBc3luYyhcIm1lc3NhZ2VcIiwgdmFsdWUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaW50cmFjdFdpdGhBSShtc2cpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiTWUgOiBcIiArIG1zZyk7XG4gICAgICAgICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IHsgcm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IG1zZyB9O1xuICAgICAgICAgICAgeWllbGQgc3RvcmVNZXNzYWdlKHVzZXJNZXNzYWdlKTtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VWYWx1ZSA9IHlpZWxkIGZpZ21hLmNsaWVudFN0b3JhZ2UuZ2V0QXN5bmMoXCJtZXNzYWdlXCIpO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHthcGlLZXl9YFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlVmFsdWVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICgoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoeyBsb2FkZXJTaG93OiBcInNob3dcIiB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IHlpZWxkIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBncHRSZXNwb25zZSA9IGpzb24uY2hvaWNlc1swXS5tZXNzYWdlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRWxpeGlyIGFzeW5jIDogXCIgKyBKU09OLnN0cmluZ2lmeShncHRSZXNwb25zZS5jb250ZW50KSk7XG4gICAgICAgICAgICAgICAgc3RvcmVNZXNzYWdlKGdwdFJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZSh7IGxvYWRlclNob3c6IFwiaGlkZVwiIH0pO1xuICAgICAgICAgICAgICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKHsgbmV3U3VnZ2VzdGlvbjogZ3B0UmVzcG9uc2UuY29udGVudCB9KTtcbiAgICAgICAgICAgICAgICAvLyBmaWdtYS5jbG9zZVBsdWdpbigpXG4gICAgICAgICAgICB9KSkoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9jb2RlLnRzXCJdKCk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=