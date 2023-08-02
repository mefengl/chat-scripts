// ==UserScript==
// @name         bard-page-translate-button
// @description  🍓 let Bard translate the web page you are reading in one click
// @author       mefengl
// @version      0.1.6
// @namespace    https://github.com/mefengl
// @require      https://cdn.jsdelivr.net/npm/@mozilla/readability@0.4.3/Readability.min.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bard.google.com
// @license      MIT
// @match        *://*/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_addValueChangeListener
// @updateURL    https://github.com/mefengl/chat-scripts/raw/main/bard-page-translate-button/script.user.js

// @name:en      Bard Page Translate Button
// @description:en 🍓 let Bard translate the web page you are reading in one click
// @name:zh-CN   Bard 页面翻译按钮
// @description:zh-CN 🍓 让 Bard 一键翻译您正在阅读的网页
// @name:es      Botón de traducción de página de Bard
// @description:es 🍓 permite que Bard traduzca la página web que estás leyendo con un solo clic
// @name:hi      Bard पृष्ठ अनुवाद बटन
// @description:hi 🍓 Bard को वेबपेज जो आप पढ़ रहे हैं को एक क्लिक में अनुवाद करने दें
// @name:ar      زر ترجمة الصفحة لـ Bard
// @description:ar 🍓 دع Bard يترجم صفحة الويب التي تقرأها بنقرة واحدة
// @name:pt      Botão de tradução de página do Bard
// @description:pt 🍓 permita que o Bard traduza a página da web que você está lendo com um clique
// @name:ru      Кнопка перевода страницы Bard
// @description:ru 🍓 позволяет Bard переводить веб-страницу, которую вы читаете, одним щелчком мыши
// @name:ja      Bardページ翻訳ボタン
// @description:ja 🍓 Bardで読んでいるWebページをワンクリックで翻訳
// @name:de      Bard-Seitenübersetzungs-Button
// @description:de 🍓 Lassen Sie Bard die Webseite, die Sie gerade lesen, mit einem Klick übersetzen
// @name:fr      Bouton de traduction de page Bard
// @description:fr 🍓 laissez Bard traduire la page Web que vous lisez en un seul clic
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

  // ../../packages/chatkit/dist/bard/index.js
  var require_bard = __commonJS({
    "../../packages/chatkit/dist/bard/index.js"(exports, module) {
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
      var bard_exports = {};
      __export(bard_exports, {
        getInputArea: () => getInputArea,
        getLastPrompt: () => getLastPrompt,
        getLatestPromptText: () => getLatestPromptText,
        getRegenerateButton: () => getRegenerateButton,
        getResponseElementHTMLs: () => getResponseElementHTMLs,
        getSparkleResting: () => getSparkleResting,
        getSparkleThinking: () => getSparkleThinking,
        getSubmitButton: () => getSubmitButton,
        getTextarea: () => getTextarea,
        isGenerating: () => isGenerating,
        onSend: () => onSend,
        send: () => send,
        setPromptListener: () => setPromptListener2,
        setTextarea: () => setTextarea
      });
      module.exports = __toCommonJS(bard_exports);
      function getSparkleResting() {
        return document.querySelector("img[src*=sparkle_resting]");
      }
      function getSparkleThinking() {
        return document.querySelector("img[src*=sparkle_thinking]");
      }
      function getSubmitButton() {
        return document.querySelector('button[aria-label="Send message"]');
      }
      function getInputArea() {
        return document.querySelector(".input-area");
      }
      function getTextarea() {
        const inputArea = getInputArea();
        return inputArea ? inputArea.querySelector("textarea") : null;
      }
      function setTextarea(message) {
        const textarea = getTextarea();
        if (!textarea)
          return;
        textarea.value = message;
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
      }
      function getRegenerateButton() {
        return document.querySelector('button[aria-label="Retry"]');
      }
      function getResponseElementHTMLs() {
        return Array.from(document.querySelectorAll(".model-response-text .markdown")).map((m) => m.innerHTML);
      }
      function getLastPrompt() {
        const promptElements = document.querySelectorAll(".query-text");
        const lastPrompt = promptElements[promptElements.length - 1];
        return lastPrompt;
      }
      function getLatestPromptText() {
        const lastPrompt = getLastPrompt();
        if (!lastPrompt)
          return "";
        const lastPromptText = lastPrompt.textContent;
        return lastPromptText || "";
      }
      function isGenerating() {
        return getSparkleThinking() !== null;
      }
      function send(message) {
        return __async(this, null, function* () {
          var _a;
          setTextarea(message);
          const textarea = getTextarea();
          if (!textarea)
            return;
          while (textarea.value === message) {
            yield new Promise((resolve) => setTimeout(resolve, 100));
            (_a = getSubmitButton()) == null ? void 0 : _a.click();
          }
          for (let i = 0; i < 10; i++) {
            if (isGenerating()) {
              return;
            }
            yield new Promise((resolve) => setTimeout(resolve, 1e3));
          }
        });
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
      function setPromptListener2(key = "prompt_texts") {
        let last_trigger_time = +/* @__PURE__ */ new Date();
        if (location.href.includes("bard.google")) {
          GM_addValueChangeListener(key, (name, old_value, new_value) => __async(this, null, function* () {
            if (+/* @__PURE__ */ new Date() - last_trigger_time < 500) {
              return;
            }
            last_trigger_time = +/* @__PURE__ */ new Date();
            setTimeout(() => __async(this, null, function* () {
              const prompt_texts = new_value;
              const isLong = prompt_texts.length > 60;
              if (prompt_texts.length > 0) {
                let firstTime = true;
                while (prompt_texts.length > 0) {
                  const waitTime = isLong && !document.hasFocus() ? 20 * 1e3 : 2e3;
                  if (!firstTime) {
                    yield new Promise((resolve) => setTimeout(resolve, waitTime));
                  }
                  if (!firstTime && isGenerating()) {
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
    }
  });

  // ../../packages/chatkit/bard.js
  var require_bard2 = __commonJS({
    "../../packages/chatkit/bard.js"(exports, module) {
      module.exports = require_bard();
    }
  });

  // src/index.ts
  var import_bard = __toESM(require_bard2(), 1);

  // ../../packages/monkit/dist/index.mjs
  var MenuManager = class {
    constructor(default_menu_all) {
      this.default_menu_all = default_menu_all;
      this.menu_all = GM_getValue("menu_all", this.default_menu_all);
      for (const name in this.default_menu_all) {
        if (!(name in this.menu_all)) {
          this.menu_all[name] = this.default_menu_all[name];
        }
      }
      this.menu_id = GM_getValue("menu_id", {});
      this.update_menu();
    }
    registerMenuCommand(name, value) {
      if (name === "chat_language") {
        return GM_registerMenuCommand(`${name}\uFF1A${value}`, () => {
          const language = prompt("Please input the language you want to use", value.toString());
          if (language) {
            this.menu_all[name] = language;
            GM_setValue("menu_all", this.menu_all);
            this.update_menu();
            location.reload();
          }
        });
      }
      const menuText = ` ${name}\uFF1A${value ? "\u2705" : "\u274C"}`;
      const commandCallback = () => {
        this.menu_all[name] = !this.menu_all[name];
        GM_setValue("menu_all", this.menu_all);
        this.update_menu();
        location.reload();
      };
      return GM_registerMenuCommand(menuText, commandCallback);
    }
    update_menu() {
      for (const name in this.menu_all) {
        const value = this.menu_all[name];
        if (this.menu_id[name]) {
          GM_unregisterMenuCommand(this.menu_id[name]);
        }
        this.menu_id[name] = this.registerMenuCommand(name, value);
      }
      GM_setValue("menu_id", this.menu_id);
    }
    getMenuValue(name) {
      return this.menu_all[name];
    }
  };
  function getLocalLanguage() {
    const userLanguage = navigator.language;
    const languageNames = new Intl.DisplayNames([userLanguage], { type: "language" });
    const readableLanguage = languageNames.of(userLanguage);
    return readableLanguage;
  }

  // src/createButton/index.ts
  function createButton(callback, buttonText) {
    if (window.location.href.includes("bard.google"))
      return;
    const hideRight = document.title.match(/[\u4e00-\u9fa5]/) ? "-130px" : "-120px";
    const button = document.createElement("button");
    button.innerHTML = buttonText;
    button.style.position = "fixed";
    button.style.width = "140px";
    button.style.top = "300px";
    button.style.right = hideRight;
    button.style.zIndex = "999999";
    button.style.background = "linear-gradient(45deg, #C275B7, #907FDB, #29A5E8)";
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
  var MIN_PARAGRAPH_LENGTH = 3200;
  var MAX_PARAGRAPH_LENGTH = 3600;
  var TOKEN_LETTER_TO_CHARACTER_RATIO = 0.6;
  var SimpleArticleSegmentation = class {
    constructor(text) {
      this.text = text;
    }
    containsAsianCharacters(str) {
      const regex = /[\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Han}\p{Script=Hangul}]/gu;
      return regex.test(str);
    }
    segment() {
      const paragraphs = [];
      if (this.containsAsianCharacters(this.text)) {
        let i = 0;
        const maxParagraphLength = Math.floor(MAX_PARAGRAPH_LENGTH * TOKEN_LETTER_TO_CHARACTER_RATIO);
        while (i < this.text.length) {
          const paragraph = this.text.substring(i, i + maxParagraphLength);
          paragraphs.push(paragraph);
          i += maxParagraphLength;
        }
      } else {
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
      if (article == null ? void 0 : article.textContent) {
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
      yield new Promise((r) => window.addEventListener("load", r));
      yield new Promise((r) => setTimeout(r, 1e3));
    });
  }
  (() => __async(void 0, null, function* () {
    yield initialize();
    const menu = new MenuManager({ "chat_language": getLocalLanguage() || "Chinese" });
    const lang = menu.getMenuValue("chat_language");
    const setPrompts = (paras) => GM_setValue("prompt_texts", paras.map((p, i) => `Answer me in several paragraphs in ${lang} language,
Translate below paragraphs:

${p}${i + 1}/${paras.length}

ps: answer in several paragraphs in ${lang} language`));
    (0, import_bard.setPromptListener)("prompt_texts");
    createButton_default(() => __async(void 0, null, function* () {
      return setPrompts(getParagraphs_default());
    }), navigator.language.startsWith("zh") ? "\u9875\u9762\u7FFB\u8BD1" : "Page Translate");
  }))();
})();
