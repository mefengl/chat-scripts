// ==UserScript==
// @name         chatgpt sensible
// @namespace    https://github.com/mefengl
// @version      0.5.19
// @description  sensible to me
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @author       mefengl
// @match        https://chat.openai.com/*
// @grant        none

// @name:en      ChatGPT Sensible
// @description:en Sensible to me
// @name:zh-CN   聊天GPT明智
// @description:zh-CN 对我来说明智
// @name:es      ChatGPT Sensato
// @description:es Sensato para mí
// @name:hi      चैटजीपीटी संवेदनशील
// @description:hi मेरे लिए संवेदनशील
// @name:ar      ChatGPT حساس
// @description:ar حساس بالنسبة لي
// @name:pt      ChatGPT Sensato
// @description:pt Sensato para mim
// @name:ru      ChatGPT Разумный
// @description:ru Разумно для меня
// @name:ja      ChatGPTセンシブル
// @description:ja 私にとって感覚的
// @name:de      ChatGPT Sinnvoll
// @description:de Sinnvoll für mich
// @name:fr      ChatGPT Sensible
// @description:fr Sensible pour moi
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
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var chatgpt_exports = {};
  __export(chatgpt_exports, {
    getConversation: () => getConversation,
    getLastResponse: () => getLastResponse,
    getLastResponseElement: () => getLastResponseElement,
    getModelSelectButton: () => getModelSelectButton,
    getRegenerateButton: () => getRegenerateButton,
    getStopGeneratingButton: () => getStopGeneratingButton,
    getSubmitButton: () => getSubmitButton,
    getTextareaValue: () => getTextareaValue,
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
  var bard_exports = {};
  __export(bard_exports, {
    getInputArea: () => getInputArea,
    getLastPrompt: () => getLastPrompt,
    getLatestPromptText: () => getLatestPromptText,
    getRegenerateButton: () => getRegenerateButton2,
    getSubmitButton: () => getSubmitButton2,
    getTextarea: () => getTextarea2,
    onSend: () => onSend2,
    send: () => send2
  });
  function getSubmitButton2() {
    return document.querySelector('button[aria-label="Send message"]');
  }
  function getInputArea() {
    return document.querySelector(".input-area");
  }
  function getTextarea2() {
    const inputArea = getInputArea();
    return inputArea ? inputArea.querySelector("textarea") : null;
  }
  function getRegenerateButton2() {
    return document.querySelector('button[aria-label="Retry"]');
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
  function send2(text) {
    const textarea = getTextarea2();
    if (!textarea)
      return;
    textarea.value = text;
    textarea.dispatchEvent(new Event("input"));
    const submitButton = getSubmitButton2();
    if (!submitButton)
      return;
    submitButton.click();
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
  var bingchat_exports = {};
  __export(bingchat_exports, {
    getActionBar: () => getActionBar,
    getChatTurns: () => getChatTurns,
    getConversation: () => getConversation2,
    getLastChatTurn: () => getLastChatTurn,
    getLastResponse: () => getLastResponse2,
    getLastResponseText: () => getLastResponseText,
    getNewChatButton: () => getNewChatButton,
    getRegenerateButton: () => getRegenerateButton3,
    getStopGeneratingButton: () => getStopGeneratingButton2,
    getSubmitButton: () => getSubmitButton3,
    getSuggestionBar: () => getSuggestionBar,
    getSuggestionBarButtons: () => getSuggestionBarButtons,
    getTextarea: () => getTextarea3,
    onSend: () => onSend3,
    send: () => send3
  });
  function getActionBar() {
    var _a, _b, _c;
    return ((_c = (_b = (_a = document.querySelector("cib-serp")) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector("cib-action-bar")) == null ? void 0 : _c.shadowRoot) || null;
  }
  function getSubmitButton3() {
    const actionBar = getActionBar();
    if (!actionBar) {
      return null;
    }
    return actionBar.querySelector('button[aria-label="Submit"]');
  }
  function getTextarea3() {
    const actionBar = getActionBar();
    if (!actionBar) {
      return null;
    }
    return actionBar.querySelector("textarea");
  }
  function getStopGeneratingButton2() {
    var _a, _b;
    const actionBar = getActionBar();
    if (!actionBar) {
      return null;
    }
    const stopGeneratingButton = (_b = (_a = actionBar.querySelector("cib-typing-indicator")) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector('button[aria-label="Stop Responding"]');
    if (!stopGeneratingButton) {
      return null;
    }
    if (stopGeneratingButton.disabled) {
      return null;
    }
    return stopGeneratingButton;
  }
  function getNewChatButton() {
    const actionBar = getActionBar();
    if (!actionBar) {
      return null;
    }
    return actionBar.querySelector('button[aria-label="New topic"]');
  }
  function getConversation2() {
    var _a, _b, _c;
    return ((_c = (_b = (_a = document.querySelector("cib-serp")) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector("cib-conversation")) == null ? void 0 : _c.shadowRoot) || null;
  }
  function getChatTurns() {
    const conversation = getConversation2();
    if (!conversation) {
      return null;
    }
    return Array.from(conversation.querySelectorAll("cib-chat-turn")).map((t) => t.shadowRoot);
  }
  function getSuggestionBar() {
    var _a;
    const conversation = getConversation2();
    if (!conversation) {
      return null;
    }
    return ((_a = conversation.querySelector("cib-suggestion-bar")) == null ? void 0 : _a.shadowRoot) || null;
  }
  function getSuggestionBarButtons() {
    const suggestionBar = getSuggestionBar();
    if (!suggestionBar) {
      return [];
    }
    const suggestionItems = Array.from(suggestionBar.querySelectorAll("cib-suggestion-item"));
    return suggestionItems.map((i) => {
      var _a;
      return (_a = i.shadowRoot) == null ? void 0 : _a.querySelector("button");
    });
  }
  function getRegenerateButton3() {
    const suggestionBarButtons = getSuggestionBarButtons();
    if (!suggestionBarButtons.length) {
      return null;
    }
    return suggestionBarButtons[0];
  }
  function getLastChatTurn() {
    const chatTurns = getChatTurns();
    if (!chatTurns) {
      return null;
    }
    return chatTurns[chatTurns.length - 1];
  }
  function getLastResponse2() {
    var _a;
    const lastChatTurn = getLastChatTurn();
    if (!lastChatTurn) {
      return null;
    }
    return ((_a = lastChatTurn.querySelectorAll("cib-message-group")[1]) == null ? void 0 : _a.shadowRoot) || null;
  }
  function getLastResponseText() {
    var _a;
    const lastResponse = getLastResponse2();
    if (!lastResponse) {
      return null;
    }
    const message = Array.from(lastResponse.querySelectorAll("cib-message")).map((m) => m.shadowRoot).find((m) => m == null ? void 0 : m.querySelector("cib-shared"));
    return ((_a = message == null ? void 0 : message.textContent) == null ? void 0 : _a.trim()) || null;
  }
  function send3(text) {
    const textarea = getTextarea3();
    if (!textarea) {
      return;
    }
    textarea.value = text;
    textarea.dispatchEvent(new Event("input"));
    const submitButton = getSubmitButton3();
    if (!submitButton) {
      return;
    }
    submitButton.click();
  }
  function onSend3(callback) {
    const textarea = getTextarea3();
    if (!textarea)
      return;
    textarea.addEventListener("keydown", function(event) {
      if (event.key === "Enter" && !event.shiftKey) {
        callback();
      }
    });
    const sendButton = getSubmitButton3();
    if (!sendButton)
      return;
    sendButton.addEventListener("mousedown", callback);
  }

  // src/onSend/index.ts
  function onSend4(callback) {
    const textarea = chatgpt_exports.getTextarea();
    if (!textarea)
      return;
    textarea.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        callback();
      }
    });
    const sendButton = chatgpt_exports.getSubmitButton();
    if (!sendButton)
      return;
    sendButton.addEventListener("click", callback);
  }
  var onSend_default = onSend4;

  // src/autoCopyWhenSend/index.ts
  function autoCopyWhenSend() {
    onSend_default(() => {
      navigator.clipboard.writeText(chatgpt_exports.getTextareaValue());
    });
  }

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
      autoCopyWhenSend();
    });
  }
  (function() {
    main();
  })();
})();
