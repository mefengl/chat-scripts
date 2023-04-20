// ==UserScript==
// @name         chatgpt-infinite
// @namespace    https://github.com/mefengl
// @version      0.4.0
// @description  Infinite auto ask for chatgpt
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @author       mefengl
// @match        https://chat.openai.com/*
// @grant        none
// @license      MIT

// @name:en      ChatGPT Infinite
// @description:en Infinite auto ask for chatgpt
// @name:zh-CN   ChatGPT无限
// @description:zh-CN 无限自动询问ChatGPT
// @name:es      ChatGPT Infinito
// @description:es Preguntas automáticas infinitas para chatgpt
// @name:hi      चैटजीपीटी अनंत
// @description:hi चैटजीपीटी के लिए अनंत स्वचालित पूछताछ
// @name:ar      ChatGPT لانهائي
// @description:ar طلب تلقائي لا نهائي لـ chatgpt
// @name:pt      ChatGPT Infinito
// @description:pt Perguntas automáticas infinitas para chatgpt
// @name:ru      ChatGPT Бесконечный
// @description:ru Бесконечный автоматический запрос для chatgpt
// @name:ja      ChatGPTインフィニティ
// @description:ja ChatGPTの無限自動質問
// @name:de      ChatGPT Unendlich
// @description:de Unendliches automatisches Fragen für ChatGPT
// @name:fr      ChatGPT Infini
// @description:fr Questions automatiques infinies pour chatgpt
// ==/UserScript==
"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // ../../packages/chatkit/dist/chatgpt/index.js
  var require_chatgpt = __commonJS({
    "../../packages/chatkit/dist/chatgpt/index.js"(exports, module) {
      "use strict";
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
      var chatgpt_exports = {};
      __export(chatgpt_exports, {
        getConversation: () => getConversation,
        getLastResponse: () => getLastResponse2,
        getLastResponseElement: () => getLastResponseElement,
        getModelSelectButton: () => getModelSelectButton,
        getRegenerateButton: () => getRegenerateButton,
        getStopGeneratingButton: () => getStopGeneratingButton,
        getSubmitButton: () => getSubmitButton,
        getTextarea: () => getTextarea,
        getTextareaValue: () => getTextareaValue,
        isConversationStarted: () => isConversationStarted,
        isGenerating: () => isGenerating,
        isHorizontalConversation: () => isHorizontalConversation,
        onSend: () => onSend,
        regenerate: () => regenerate,
        send: () => send2,
        setHorizontalConversation: () => setHorizontalConversation,
        setPromptListener: () => setPromptListener,
        setPureConversation: () => setPureConversation,
        setTextarea: () => setTextarea,
        waitForIdle: () => waitForIdle2
      });
      module.exports = __toCommonJS(chatgpt_exports);
      function getTextarea() {
        const form = document.querySelector("form");
        if (!form)
          return;
        const textareas = form.querySelectorAll("textarea");
        const result = textareas[0];
        return result;
      }
      function getSubmitButton() {
        const textarea = getTextarea();
        if (!textarea)
          return;
        return textarea.nextElementSibling;
      }
      function getRegenerateButton() {
        const form = document.querySelector("form");
        if (!form)
          return;
        const buttons = form.querySelectorAll("button");
        const result = Array.from(buttons).find((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("regenerate");
        });
        return result;
      }
      function getStopGeneratingButton() {
        const form = document.querySelector("form");
        if (!form)
          return;
        const buttons = form.querySelectorAll("button");
        const result = Array.from(buttons).find((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("stop generating");
        });
        return result;
      }
      function getLastResponseElement() {
        const responseElements = document.querySelectorAll(".group.w-full");
        return responseElements[responseElements.length - 1];
      }
      function getLastResponse2() {
        const lastResponseElement = getLastResponseElement();
        if (!lastResponseElement)
          return;
        const lastResponse = lastResponseElement.textContent;
        return lastResponse;
      }
      function getTextareaValue() {
        var _a;
        return ((_a = getTextarea()) == null ? void 0 : _a.value) || "";
      }
      function setTextarea(message) {
        const textarea = getTextarea();
        if (!textarea)
          return;
        textarea.value = message;
        textarea.dispatchEvent(new Event("input"));
      }
      function send2(message) {
        setTextarea(message);
        const textarea = getTextarea();
        if (!textarea)
          return;
        textarea.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
      }
      function regenerate() {
        const regenerateButton = getRegenerateButton();
        if (!regenerateButton)
          return;
        regenerateButton.click();
      }
      function onSend(callback) {
        const textarea = getTextarea();
        if (!textarea)
          return;
        textarea.addEventListener("keydown", function(event) {
          if (event.key === "Enter" && !event.shiftKey) {
            callback();
          }
        });
        const sendButton = getSubmitButton();
        if (!sendButton)
          return;
        sendButton.addEventListener("mousedown", callback);
      }
      function isGenerating() {
        var _a, _b;
        return ((_b = (_a = getSubmitButton()) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.childElementCount) === 3;
      }
      function waitForIdle2() {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (!isGenerating()) {
              clearInterval(interval);
              resolve();
            }
          }, 1e3);
        });
      }
      function setPromptListener(key = "prompt_texts") {
        let last_trigger_time = +/* @__PURE__ */ new Date();
        if (location.href.includes("chat.openai")) {
          GM_addValueChangeListener(key, (name, old_value, new_value) => __async(this, null, function* () {
            if (+/* @__PURE__ */ new Date() - last_trigger_time < 500) {
              return;
            }
            last_trigger_time = +/* @__PURE__ */ new Date();
            setTimeout(() => __async(this, null, function* () {
              const prompt_texts = new_value;
              if (prompt_texts.length > 0) {
                let firstTime = true;
                while (prompt_texts.length > 0) {
                  if (!firstTime) {
                    yield new Promise((resolve) => setTimeout(resolve, 2e3));
                  }
                  if (!firstTime && isGenerating()) {
                    continue;
                  }
                  firstTime = false;
                  const prompt_text = prompt_texts.shift() || "";
                  send2(prompt_text);
                }
              }
            }), 0);
            GM_setValue(key, []);
          }));
        }
      }
      function getConversation() {
        var _a, _b;
        return (_b = (_a = document.querySelector('div[class^="react-scroll-to-bottom"]')) == null ? void 0 : _a.firstChild) == null ? void 0 : _b.firstChild;
      }
      function getModelSelectButton() {
        const conversation = getConversation();
        if (!conversation)
          return;
        return Array.from(conversation.querySelectorAll("button")).find((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("model");
        });
      }
      function isConversationStarted() {
        return !getModelSelectButton();
      }
      function setPureConversation() {
        const conversation = getConversation();
        if (!conversation)
          return;
        const firstChild = conversation.firstChild;
        if (!firstChild)
          return;
        const newDiv = document.createElement("div");
        conversation.insertBefore(newDiv, firstChild.nextSibling);
      }
      function isHorizontalConversation() {
        const conversation = getConversation();
        if (!conversation)
          return true;
        if (!isConversationStarted())
          return true;
        return conversation.classList.contains("grid");
      }
      function setHorizontalConversation() {
        if (isHorizontalConversation())
          return;
        setPureConversation();
        const conversation = getConversation();
        if (!conversation)
          return;
        conversation.classList.remove("flex", "flex-col", "items-center");
        conversation.classList.add("grid", "grid-cols-2", "place-items-center");
      }
    }
  });

  // ../../packages/chatkit/chatgpt.js
  var require_chatgpt2 = __commonJS({
    "../../packages/chatkit/chatgpt.js"(exports, module) {
      module.exports = require_chatgpt();
    }
  });

  // src/askForLanguage/index.ts
  function askForLanguage() {
    return __async(this, null, function* () {
      return prompt("What language do you want to use?");
    });
  }

  // src/infiniteLoop/index.ts
  var import_chatgpt = __toESM(require_chatgpt2(), 1);
  function startInfiniteLoop() {
    return __async(this, null, function* () {
      const language = yield askForLanguage();
      if (!language)
        return;
      (0, import_chatgpt.send)(`you can only answer question in ${language} language`);
      yield (0, import_chatgpt.waitForIdle)();
      while (true) {
        const lastResponse = (0, import_chatgpt.getLastResponse)();
        const question = extractQuestion(lastResponse);
        yield (0, import_chatgpt.send)(question + "\nanswer above question, and show me one more further question I can ask in the end prefixed with Q:");
        yield (0, import_chatgpt.waitForIdle)();
        yield sleep(1e4);
      }
    });
  }
  function extractQuestion(text) {
    return text.split("Q:").pop().trim();
  }
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  var infiniteLoop_default = startInfiniteLoop;

  // src/index.ts
  function initialize() {
    return __async(this, null, function* () {
      yield new Promise((resolve) => window.addEventListener("load", resolve));
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
    });
  }
  function main() {
    return __async(this, null, function* () {
      yield initialize();
      infiniteLoop_default();
    });
  }
  (function() {
    main();
  })();
})();
