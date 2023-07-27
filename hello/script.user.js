// ==UserScript==
// @name chatgpt-hello
// @namespace https://github.com/mefengl
// @version 0.0.12
// @description A template for userscript use chat-kit
// @author chat-kit
// @match https://chat.openai.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant none
// @license MIT
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
      var __defProp3 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp3(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp3(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod) => __copyProps2(__defProp3({}, "__esModule", { value: true }), mod);
      var chatgpt_exports2 = {};
      __export2(chatgpt_exports2, {
        getContinueGeneratingButton: () => getContinueGeneratingButton2,
        getConversation: () => getConversation2,
        getHistoryBlockTitle: () => getHistoryBlockTitle2,
        getHistoryBlocks: () => getHistoryBlocks2,
        getHistoryBlocksWithTitle: () => getHistoryBlocksWithTitle2,
        getLastResponse: () => getLastResponse2,
        getLastResponseElement: () => getLastResponseElement2,
        getModelSelectButton: () => getModelSelectButton2,
        getNav: () => getNav2,
        getNewModelSelectButtons: () => getNewModelSelectButtons2,
        getRegenerateButton: () => getRegenerateButton2,
        getResponseElementHTMLs: () => getResponseElementHTMLs2,
        getStopGeneratingButton: () => getStopGeneratingButton2,
        getSubmitButton: () => getSubmitButton2,
        getTextarea: () => getTextarea2,
        getTextareaValue: () => getTextareaValue2,
        hasNewModelSelectButtons: () => hasNewModelSelectButtons2,
        isConversationStarted: () => isConversationStarted2,
        isGenerating: () => isGenerating2,
        isHorizontalConversation: () => isHorizontalConversation2,
        onSend: () => onSend2,
        regenerate: () => regenerate2,
        send: () => send3,
        setHorizontalConversation: () => setHorizontalConversation2,
        setPromptListener: () => setPromptListener2,
        setPureConversation: () => setPureConversation2,
        setTextarea: () => setTextarea2,
        waitForIdle: () => waitForIdle2
      });
      module.exports = __toCommonJS(chatgpt_exports2);
      function getNav2() {
        return document.querySelector("nav");
      }
      function getHistoryBlocks2() {
        const nav = getNav2();
        if (!nav)
          return [];
        const result = Array.from(nav.querySelectorAll("ol")).map((ol) => ol.parentElement);
        return result;
      }
      function getHistoryBlockTitle2(historyBlock) {
        var _a;
        return ((_a = historyBlock.querySelector("h3")) == null ? void 0 : _a.textContent) || "";
      }
      function getHistoryBlocksWithTitle2() {
        const historyBlocks = getHistoryBlocks2();
        const result = historyBlocks.map((historyBlock) => ({
          block: historyBlock,
          title: getHistoryBlockTitle2(historyBlock)
        }));
        return result;
      }
      function getTextarea2() {
        const form = document.querySelector("form");
        if (!form)
          return;
        const textareas = form.querySelectorAll("textarea");
        const result = textareas[0];
        return result;
      }
      function getSubmitButton2() {
        const textarea = getTextarea2();
        if (!textarea)
          return;
        return textarea.nextElementSibling;
      }
      function getRegenerateButton2() {
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
      function getContinueGeneratingButton2() {
        const form = document.querySelector("form");
        if (!form)
          return;
        const buttons = form.querySelectorAll("button");
        const result = Array.from(buttons).find((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("continue generating");
        });
        return result;
      }
      function getStopGeneratingButton2() {
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
      function getResponseElementHTMLs2() {
        return Array.from(document.querySelectorAll(".markdown")).map((m) => m.innerHTML);
      }
      function getLastResponseElement2() {
        const responseElements = document.querySelectorAll(".group.w-full");
        return responseElements[responseElements.length - 1];
      }
      function getLastResponse2() {
        const lastResponseElement = getLastResponseElement2();
        if (!lastResponseElement)
          return;
        const lastResponse = lastResponseElement.textContent;
        return lastResponse;
      }
      function getTextareaValue2() {
        var _a;
        return ((_a = getTextarea2()) == null ? void 0 : _a.value) || "";
      }
      function setTextarea2(message) {
        const textarea = getTextarea2();
        if (!textarea)
          return;
        textarea.value = message;
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
      }
      function send3(message) {
        return __async(this, null, function* () {
          setTextarea2(message);
          const textarea = getTextarea2();
          if (!textarea)
            return;
          while (textarea.value === message) {
            textarea.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
            yield new Promise((resolve) => setTimeout(resolve, 100));
          }
        });
      }
      function regenerate2() {
        const regenerateButton = getRegenerateButton2();
        if (!regenerateButton)
          return;
        regenerateButton.click();
      }
      function onSend2(callback) {
        const textarea = getTextarea2();
        if (!textarea)
          return;
        textarea.addEventListener("keydown", function(event) {
          if (event.key === "Enter" && !event.shiftKey) {
            callback();
          }
        });
        const sendButton = getSubmitButton2();
        if (!sendButton)
          return;
        sendButton.addEventListener("mousedown", callback);
      }
      function isGenerating2() {
        var _a, _b;
        return ((_b = (_a = getSubmitButton2()) == null ? void 0 : _a.firstElementChild) == null ? void 0 : _b.childElementCount) === 3;
      }
      function waitForIdle2() {
        return new Promise((resolve) => {
          const interval = setInterval(() => {
            if (!isGenerating2()) {
              clearInterval(interval);
              resolve();
            }
          }, 1e3);
        });
      }
      function setPromptListener2(key = "prompt_texts") {
        let last_trigger_time = +/* @__PURE__ */ new Date();
        if (location.href.includes("chat.openai")) {
          GM_addValueChangeListener(key, (name, old_value, new_value) => __async(this, null, function* () {
            if (+/* @__PURE__ */ new Date() - last_trigger_time < 500) {
              return;
            }
            last_trigger_time = +/* @__PURE__ */ new Date();
            setTimeout(() => __async(this, null, function* () {
              var _a, _b;
              const prompt_texts = new_value;
              const isLong = prompt_texts.length > 60;
              if (prompt_texts.length > 0) {
                let firstTime = true;
                while (prompt_texts.length > 0) {
                  const waitTime = isLong && !document.hasFocus() ? 30 * 1e3 : 2e3;
                  if (!firstTime) {
                    yield new Promise((resolve) => setTimeout(resolve, waitTime));
                  }
                  if (!firstTime && isGenerating2()) {
                    continue;
                  } else if (getContinueGeneratingButton2()) {
                    (_a = getContinueGeneratingButton2()) == null ? void 0 : _a.click();
                    continue;
                  } else if (getRegenerateButton2() && !getTextarea2()) {
                    yield new Promise((resolve) => setTimeout(resolve, 10 * 1e3));
                    (_b = getRegenerateButton2()) == null ? void 0 : _b.click();
                    continue;
                  }
                  firstTime = false;
                  yield send3(prompt_texts.shift() || "");
                }
              }
            }), 0);
            GM_setValue(key, []);
          }));
        }
      }
      function getConversation2() {
        var _a, _b;
        return (_b = (_a = document.querySelector('div[class^="react-scroll-to-bottom"]')) == null ? void 0 : _a.firstChild) == null ? void 0 : _b.firstChild;
      }
      function getModelSelectButton2() {
        const conversation = getConversation2();
        if (!conversation)
          return;
        return Array.from(conversation.querySelectorAll("button")).find((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("model");
        });
      }
      function getNewModelSelectButtons2() {
        return Array.from(document.querySelectorAll("[class^='group/button']"));
      }
      function hasNewModelSelectButtons2() {
        return getNewModelSelectButtons2().length > 0;
      }
      function isConversationStarted2() {
        return !getModelSelectButton2();
      }
      function setPureConversation2() {
        const conversation = getConversation2();
        if (!conversation)
          return;
        const firstChild = conversation.firstChild;
        if (!firstChild)
          return;
        const newDiv = document.createElement("div");
        conversation.insertBefore(newDiv, firstChild.nextSibling);
      }
      function isHorizontalConversation2() {
        const conversation = getConversation2();
        if (!conversation)
          return true;
        if (!isConversationStarted2())
          return true;
        return conversation.classList.contains("grid");
      }
      function setHorizontalConversation2() {
        if (isHorizontalConversation2())
          return;
        setPureConversation2();
        const conversation = getConversation2();
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

  // ../../packages/chatkit/dist/chunk-XT4TKGC2.mjs
  var __defProp2 = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp2(target, name, { get: all[name], enumerable: true });
  };

  // ../../packages/chatkit/dist/chunk-APRDSJFS.mjs
  var chatgpt_exports = {};
  __export(chatgpt_exports, {
    getContinueGeneratingButton: () => getContinueGeneratingButton,
    getConversation: () => getConversation,
    getHistoryBlockTitle: () => getHistoryBlockTitle,
    getHistoryBlocks: () => getHistoryBlocks,
    getHistoryBlocksWithTitle: () => getHistoryBlocksWithTitle,
    getLastResponse: () => getLastResponse,
    getLastResponseElement: () => getLastResponseElement,
    getModelSelectButton: () => getModelSelectButton,
    getNav: () => getNav,
    getNewModelSelectButtons: () => getNewModelSelectButtons,
    getRegenerateButton: () => getRegenerateButton,
    getResponseElementHTMLs: () => getResponseElementHTMLs,
    getStopGeneratingButton: () => getStopGeneratingButton,
    getSubmitButton: () => getSubmitButton,
    getTextarea: () => getTextarea,
    getTextareaValue: () => getTextareaValue,
    hasNewModelSelectButtons: () => hasNewModelSelectButtons,
    isConversationStarted: () => isConversationStarted,
    isGenerating: () => isGenerating,
    isHorizontalConversation: () => isHorizontalConversation,
    onSend: () => onSend,
    regenerate: () => regenerate,
    send: () => send,
    setHorizontalConversation: () => setHorizontalConversation,
    setPromptListener: () => setPromptListener,
    setPureConversation: () => setPureConversation,
    setTextarea: () => setTextarea,
    waitForIdle: () => waitForIdle
  });
  function getNav() {
    return document.querySelector("nav");
  }
  function getHistoryBlocks() {
    const nav = getNav();
    if (!nav)
      return [];
    const result = Array.from(nav.querySelectorAll("ol")).map((ol) => ol.parentElement);
    return result;
  }
  function getHistoryBlockTitle(historyBlock) {
    var _a;
    return ((_a = historyBlock.querySelector("h3")) == null ? void 0 : _a.textContent) || "";
  }
  function getHistoryBlocksWithTitle() {
    const historyBlocks = getHistoryBlocks();
    const result = historyBlocks.map((historyBlock) => ({
      block: historyBlock,
      title: getHistoryBlockTitle(historyBlock)
    }));
    return result;
  }
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
  function getContinueGeneratingButton() {
    const form = document.querySelector("form");
    if (!form)
      return;
    const buttons = form.querySelectorAll("button");
    const result = Array.from(buttons).find((button) => {
      var _a;
      return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("continue generating");
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
  function getResponseElementHTMLs() {
    return Array.from(document.querySelectorAll(".markdown")).map((m) => m.innerHTML);
  }
  function getLastResponseElement() {
    const responseElements = document.querySelectorAll(".group.w-full");
    return responseElements[responseElements.length - 1];
  }
  function getLastResponse() {
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
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  }
  function send(message) {
    return __async(this, null, function* () {
      setTextarea(message);
      const textarea = getTextarea();
      if (!textarea)
        return;
      while (textarea.value === message) {
        textarea.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
        yield new Promise((resolve) => setTimeout(resolve, 100));
      }
    });
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
  function waitForIdle() {
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
          var _a, _b;
          const prompt_texts = new_value;
          const isLong = prompt_texts.length > 60;
          if (prompt_texts.length > 0) {
            let firstTime = true;
            while (prompt_texts.length > 0) {
              const waitTime = isLong && !document.hasFocus() ? 30 * 1e3 : 2e3;
              if (!firstTime) {
                yield new Promise((resolve) => setTimeout(resolve, waitTime));
              }
              if (!firstTime && isGenerating()) {
                continue;
              } else if (getContinueGeneratingButton()) {
                (_a = getContinueGeneratingButton()) == null ? void 0 : _a.click();
                continue;
              } else if (getRegenerateButton() && !getTextarea()) {
                yield new Promise((resolve) => setTimeout(resolve, 10 * 1e3));
                (_b = getRegenerateButton()) == null ? void 0 : _b.click();
                continue;
              }
              firstTime = false;
              yield send(prompt_texts.shift() || "");
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
  function getNewModelSelectButtons() {
    return Array.from(document.querySelectorAll("[class^='group/button']"));
  }
  function hasNewModelSelectButtons() {
    return getNewModelSelectButtons().length > 0;
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

  // src/index.ts
  var import_chatgpt = __toESM(require_chatgpt2(), 1);
  function initialize() {
    return __async(this, null, function* () {
      yield new Promise((resolve) => window.addEventListener("load", resolve));
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
    });
  }
  function main() {
    return __async(this, null, function* () {
      yield initialize();
      chatgpt_exports.send("hello");
      yield chatgpt_exports.waitForIdle();
      (0, import_chatgpt.send)("hello from selctive import!");
    });
  }
  (function() {
    main();
  })();
})();
