// ==UserScript==
// @name         chatgpt-page-summary-button
// @description  🍓 let ChatGPT summary the web page you are reading in one click
// @author       mefengl
// @version      0.1.4
// @namespace    https://github.com/mefengl
// @require      https://cdn.jsdelivr.net/npm/@mozilla/readability@0.4.3/Readability.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @license      MIT
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener

// @name:en      ChatGPT Page Summary Button
// @description:en 🍓 let ChatGPT summarize the web page you are reading in one click
// @name:zh-CN   ChatGPT 页面摘要按钮
// @description:zh-CN 🍓 让 ChatGPT 一键总结您正在阅读的网页
// @name:es      Botón de resumen de página de ChatGPT
// @description:es 🍓 permite que ChatGPT resuma la página web que estás leyendo con un solo clic
// @name:hi      ChatGPT पृष्ठ सारांश बटन
// @description:hi 🍓 ChatGPT को वेबपेज जो आप पढ़ रहे हैं को एक क्लिक में संक्षेप में देने दें
// @name:ar      زر ملخص الصفحة لـ ChatGPT
// @description:ar 🍓 دع ChatGPT يلخص صفحة الويب التي تقرأها بنقرة واحدة
// @name:pt      Botão de resumo de página do ChatGPT
// @description:pt 🍓 permita que o ChatGPT resuma a página da web que você está lendo com um clique
// @name:ru      Кнопка резюме страницы ChatGPT
// @description:ru 🍓 позволяет ChatGPT кратко описывать веб-страницу, которую вы читаете, одним щелчком мыши
// @name:ja      ChatGPTページ要約ボタン
// @description:ja 🍓 ChatGPTで読んでいるWebページをワンクリックで要約
// @name:de      ChatGPT-Seitenzusammenfassungs-Button
// @description:de 🍓 Lassen Sie ChatGPT die Webseite, die Sie gerade lesen, mit einem Klick zusammenfassen
// @name:fr      Bouton de résumé de page ChatGPT
// @description:fr 🍓 laissez ChatGPT résumer la page Web que vous lisez en un seul clic
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
        setPromptListener: () => setPromptListener2,
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
        textarea.dispatchEvent(new Event("input"));
      }
      function send(message) {
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
      function setPromptListener2(key = "prompt_texts") {
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
                  send(prompt_text);
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

  // src/createButton/index.ts
  function createButton(callback) {
    if (window.location.href.includes("chat.openai")) {
      return;
    }
    const hideRight = document.title.match(/[\u4e00-\u9fa5]/) ? "-130px" : "-120px";
    const button = document.createElement("button");
    button.innerHTML = "\u7F51\u9875\u603B\u7ED3";
    button.style.position = "fixed";
    button.style.width = "140px";
    button.style.top = "180px";
    button.style.right = hideRight;
    button.style.zIndex = "999999";
    button.style.backgroundColor = "#F8BBC6";
    button.style.color = "#fff";
    button.style.opacity = "0.8";
    button.style.border = "none";
    button.style.borderRadius = "4px";
    button.style.padding = "10px 16px";
    button.style.fontSize = "18px";
    button.style.cursor = "pointer";
    button.style.transition = "right 0.3s";
    document.body.appendChild(button);
    button.addEventListener("mouseenter", () => {
      button.style.right = "-10px";
    });
    button.addEventListener("mouseleave", () => {
      button.style.right = hideRight;
    });
    document.addEventListener("fullscreenchange", () => {
      if (document.fullscreenElement) {
        button.style.display = "none";
      } else {
        button.style.display = "block";
      }
    });
    button.addEventListener("click", callback);
  }
  var createButton_default = createButton;

  // src/SimpleArticleSegmentation/index.ts
  var MIN_PARAGRAPH_LENGTH = 1600;
  var MAX_PARAGRAPH_LENGTH = 1800;
  var SimpleArticleSegmentation = class {
    constructor(text) {
      this.text = text;
    }
    segment() {
      const paragraphs = [];
      const sentences = this.text.split(new RegExp("(?<=[.!?])\\s+"));
      let paragraph = "";
      for (const sentence of sentences) {
        if (paragraph.length + sentence.length + 1 <= MAX_PARAGRAPH_LENGTH) {
          paragraph += (paragraph.length > 0 ? " " : "") + sentence;
        } else {
          if (paragraph.length >= MIN_PARAGRAPH_LENGTH) {
            paragraphs.push(paragraph);
            paragraph = sentence;
          } else {
            paragraph += " " + sentence;
          }
        }
      }
      if (paragraph.length >= MIN_PARAGRAPH_LENGTH) {
        paragraphs.push(paragraph);
      }
      return paragraphs;
    }
  };
  var SimpleArticleSegmentation_default = SimpleArticleSegmentation;

  // src/getParagraphs/index.ts
  function getParagraphs() {
    try {
      let docClone = document.cloneNode(true);
      let article = new Readability(docClone).parse();
      if (article && article.textContent) {
        const segmenter = new SimpleArticleSegmentation_default(article.textContent);
        const paragraphs = segmenter.segment();
        for (let i = 0; i < paragraphs.length; i++) {
          paragraphs[i] = paragraphs[i].trim();
        }
        return paragraphs;
      } else {
        console.warn("Readability.js could not extract any text content from this page.");
        return [];
      }
    } catch (error) {
      console.error("An error occurred while using Readability.js:", error);
      return [];
    }
  }
  var getParagraphs_default = getParagraphs;

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
      const key = "prompt_texts";
      (0, import_chatgpt.setPromptListener)(key);
      const summaryWeb = () => __async(this, null, function* () {
        const paragraphs = getParagraphs_default();
        console.log(paragraphs);
        const prompt_texts = paragraphs.map((paragraph) => {
          return `"""
${paragraph}
"""
Summarize this paragraph into a bulleted list of the most important information, prefix with emoji. Use Markdown syntax to optimize the display format:`;
        });
        console.log(prompt_texts);
        GM_setValue(key, prompt_texts);
      });
      createButton_default(summaryWeb);
    });
  }
  (function() {
    main();
  })();
})();
