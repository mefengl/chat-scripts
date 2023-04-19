// ==UserScript==
// @name         chatgpt twice
// @namespace    https://github.com/mefengl
// @version      0.0.6
// @description  ask question twice!
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @author       mefengl
// @match        https://chat.openai.com/*
// @grant        none
// @license      MIT

// @name:en      ChatGPT Twice
// @description:en Ask question twice!
// @name:zh-CN   聊天GPT两次
// @description:zh-CN 提问两次！
// @name:es      ChatGPT Dos veces
// @description:es ¡Haz la pregunta dos veces!
// @name:hi      चैटजीपीटी दो बार
// @description:hi सवाल दो बार पूछें!
// @name:ar      ChatGPT مرتين
// @description:ar اطرح السؤال مرتين!
// @name:pt      ChatGPT Duas vezes
// @description:pt Faça a pergunta duas vezes!
// @name:ru      ChatGPT Дважды
// @description:ru Задайте вопрос дважды!
// @name:ja      ChatGPT 2回
// @description:ja 質問を2回行う！
// @name:de      ChatGPT Zweimal
// @description:de Stelle die Frage zweimal!
// @name:fr      ChatGPT Deux fois
// @description:fr Posez la question deux fois !
// ==/UserScript==
(() => {
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

  // ../../packages/chatkit/dist/index.mjs
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
              if (!firstTime && chatgpt.isGenerating()) {
                continue;
              }
              firstTime = false;
              const prompt_text = prompt_texts.shift() || "";
              chatgpt.send(prompt_text);
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
  var chatgpt = {
    getTextarea,
    getSubmitButton,
    getRegenerateButton,
    getStopGeneratingButton,
    getLastResponseElement,
    getLastResponse,
    getTextareaValue,
    setTextarea,
    send,
    regenerate,
    onSend,
    isGenerating,
    waitForIdle,
    setPromptListener,
    getConversation,
    getModelSelectButton,
    isConversationStarted,
    setPureConversation,
    isHorizontalConversation,
    setHorizontalConversation
  };
  var chatgpt_default = chatgpt;

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
      while (true) {
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
        const lastResponseElement = chatgpt_default.getLastResponseElement();
        if (!lastResponseElement) {
          continue;
        }
        if (lastResponseElement.childElementCount === 1) {
          yield new Promise((resolve) => setTimeout(resolve, 1e3));
          yield chatgpt_default.waitForIdle();
          const duplicatedChild = lastResponseElement.children[0].cloneNode(true);
          lastResponseElement.appendChild(duplicatedChild);
          chatgpt_default.regenerate();
        }
      }
    });
  }
  (function() {
    return __async(this, null, function* () {
      yield main();
    });
  })();
})();
