// ==UserScript==
// @name chatgpt-init
// @namespace https://github.com/mefengl
// @version 0.1.19
// @description Init ChatGPT with prompt from internet
// @author mefengl
// @match https://chat.openai.com/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @grant GM_xmlhttpRequest
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
        clickFollowUpButton: () => clickFollowUpButton,
        getButton: () => getButton,
        getContinueGeneratingButton: () => getContinueGeneratingButton,
        getConversation: () => getConversation,
        getCopyLinkButton: () => getCopyLinkButton,
        getFollowUpButtons: () => getFollowUpButtons,
        getHistoryBlockTitle: () => getHistoryBlockTitle,
        getHistoryBlocks: () => getHistoryBlocks,
        getHistoryBlocksWithTitle: () => getHistoryBlocksWithTitle,
        getInitialButtons: () => getInitialButtons,
        getLastResponse: () => getLastResponse,
        getLastResponseElement: () => getLastResponseElement,
        getModelSelectButton: () => getModelSelectButton,
        getNav: () => getNav,
        getNewModelSelectButtons: () => getNewModelSelectButtons,
        getRegenerateButton: () => getRegenerateButton,
        getResponseElementHTMLs: () => getResponseElementHTMLs,
        getShareChatButton: () => getShareChatButton,
        getStopGeneratingButton: () => getStopGeneratingButton,
        getSubmitButton: () => getSubmitButton,
        getTextarea: () => getTextarea,
        getTextareaValue: () => getTextareaValue,
        hasNewModelSelectButtons: () => hasNewModelSelectButtons,
        isConversationStarted: () => isConversationStarted2,
        isGenerating: () => isGenerating,
        isHorizontalConversation: () => isHorizontalConversation,
        onSend: () => onSend,
        regenerate: () => regenerate,
        send: () => send2,
        sendArray: () => sendArray,
        setHorizontalConversation: () => setHorizontalConversation,
        setPromptListener: () => setPromptListener,
        setPureConversation: () => setPureConversation,
        setTextarea: () => setTextarea,
        waitForIdle: () => waitForIdle
      });
      module.exports = __toCommonJS(chatgpt_exports);
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
      function getNewSubmitButton() {
        return document.querySelector('button[data-testid="send-button"]');
      }
      function getSubmitButton() {
        if (getNewSubmitButton()) {
          return getNewSubmitButton();
        }
        const textarea = getTextarea();
        if (!textarea)
          return;
        return textarea.nextElementSibling;
      }
      function getInitialButtons() {
        return Array.from(document.querySelectorAll('button[as="button"]')).filter((button) => button.querySelectorAll(".truncate").length === 2);
      }
      function getFollowUpButtons() {
        return Array.from(document.querySelectorAll('button[as="button"]')).filter((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().match(/[.!?]$/);
        });
      }
      function clickFollowUpButton(index) {
        const followUpButtons = getFollowUpButtons();
        if (followUpButtons.length === 0)
          return;
        if (index === void 0 || index < 0 || index >= followUpButtons.length) {
          index = Math.floor(Math.random() * followUpButtons.length);
        }
        followUpButtons[index].click();
      }
      function getButton(text) {
        return Array.from(document.querySelectorAll('button[as="button"]')).find((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes(text);
        });
      }
      function getRegenerateButton() {
        return getButton("regenerate");
      }
      function getContinueGeneratingButton() {
        return getButton("continue");
      }
      function getNewStopGeneratingButton() {
        return document.querySelector('button[aria-label="Stop generating"]');
      }
      function getStopGeneratingButton() {
        return getNewStopGeneratingButton() || getButton("stop");
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
      function send2(message) {
        return __async(this, null, function* () {
          var _a;
          setTextarea(message);
          const textarea = getTextarea();
          if (!textarea)
            return;
          while (textarea.value === message) {
            textarea.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", bubbles: true }));
            (_a = getSubmitButton()) == null ? void 0 : _a.click();
            yield new Promise((resolve) => setTimeout(resolve, 100));
          }
          for (let i = 0; i < 10; i++) {
            if (isGenerating()) {
              break;
            }
            yield new Promise((resolve) => setTimeout(resolve, 1e3));
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
        if (getNewStopGeneratingButton()) {
          return true;
        }
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
      function sendArray(messages) {
        return __async(this, null, function* () {
          var _a, _b;
          let firstTime = true;
          const isLong = messages.length > 60;
          while (messages.length > 0) {
            const waitTime = isLong && !document.hasFocus() ? 20 * 1e3 : 2e3;
            if (!firstTime) {
              yield new Promise((resolve) => setTimeout(resolve, waitTime));
            }
            if (isGenerating()) {
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
            if (messages.length === 0) {
              break;
            }
            yield send2(messages.shift() || "");
          }
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
              sendArray(new_value);
              GM_setValue(key, []);
            }), 0);
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
      function isConversationStarted2() {
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
        if (!isConversationStarted2())
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
      function getShareChatButton() {
        return document.querySelector('button[aria-label="Share chat"]');
      }
      function getCopyLinkButton() {
        return Array.from(document.querySelectorAll('button[as="button"]')).filter((button) => {
          var _a;
          return (_a = button.textContent) == null ? void 0 : _a.trim().toLowerCase().includes("copy link");
        })[0];
      }
    }
  });

  // ../../packages/chatkit/chatgpt.js
  var require_chatgpt2 = __commonJS({
    "../../packages/chatkit/chatgpt.js"(exports, module) {
      module.exports = require_chatgpt();
    }
  });

  // src/index.ts
  var import_chatgpt = __toESM(require_chatgpt2(), 1);
  function initialize() {
    return __async(this, null, function* () {
      yield new Promise((resolve) => window.addEventListener("load", resolve));
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
    });
  }
  function fetchTextFromUrl(url) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        GM_xmlhttpRequest({
          method: "GET",
          url,
          onload: (response) => {
            if (response.status >= 200 && response.status < 300) {
              resolve(response.responseText);
            } else {
              reject(new Error(`Failed to load the URL. Status: ${response.status}`));
            }
          },
          onerror: (error) => {
            reject(error);
          }
        });
      });
    });
  }
  function main() {
    return __async(this, null, function* () {
      yield initialize();
      try {
        if ((0, import_chatgpt.isConversationStarted)()) {
          return;
        }
        const url = "https://pastebin.com/raw/TR3fNcGa";
        const text = yield fetchTextFromUrl(url);
        (0, import_chatgpt.send)(text);
      } catch (error) {
        console.error("Failed to fetch the text:", error);
      }
    });
  }
  (function() {
    main();
  })();
})();
