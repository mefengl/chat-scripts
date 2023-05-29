// ==UserScript==
// @name         chat-octopus
// @namespace    https://github.com/mefengl
// @version      0.2.16
// @description  🐙 let octopus send multiple messages for you
// @icon         https://www.google.com/s2/favicons?sz=64&domain=openai.com
// @author       mefengl
// @match        https://chat.openai.com/*
// @match        https://bard.google.com/*
// @match        https://www.bing.com/search?q=Bing+AI*
// @require      https://cdn.staticfile.org/jquery/3.6.1/jquery.min.js
// @grant        GM_openInTab
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addValueChangeListener
// @license      MIT

// @name:en      Chat Octopus
// @description:en 🐙 let octopus send multiple messages for you
// @name:zh-CN   聊天章鱼
// @description:zh-CN 🐙 让章鱼为您发送多条信息
// @name:es      Chat Pulpo
// @description:es 🐙 deja que el pulpo envíe múltiples mensajes por ti
// @name:hi      चैट ऑक्टोपस
// @description:hi 🐙 आपके लिए कई संदेश भेजने के लिए ऑक्टोपस की अनुमति दें
// @name:ar      أخطبوط الدردشة
// @description:ar 🐙 دع الأخطبوط يرسل رسائل متعددة نيابة عنك
// @name:pt      Chat Polvo
// @description:pt 🐙 deixe o polvo enviar várias mensagens para você
// @name:ru      Чат-осьминог
// @description:ru 🐙 позвольте осьминогу отправлять несколько сообщений за вас
// @name:ja      チャットオクトパス
// @description:ja 🐙 タコがあなたに代わって複数のメッセージを送る
// @name:de      Chat-Oktopus
// @description:de 🐙 Lassen Sie den Oktopus mehrere Nachrichten für Sie senden
// @name:fr      Chat Poulpe
// @description:fr 🐙 laissez la pieuvre envoyer plusieurs messages pour vous
// ==/UserScript==
"use strict";
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

  // ../../packages/chatkit/dist/chunk-QXAXOUZS.mjs
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // ../../packages/chatkit/dist/chunk-4HXFAWD7.mjs
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

  // ../../packages/chatkit/dist/chunk-SIBHE5N3.mjs
  var bing_exports = {};
  __export(bing_exports, {
    getActionBar: () => getActionBar,
    getChatTurns: () => getChatTurns,
    getConversation: () => getConversation2,
    getLastChatTurn: () => getLastChatTurn,
    getLastResponse: () => getLastResponse2,
    getLastResponseText: () => getLastResponseText,
    getNewChatButton: () => getNewChatButton,
    getRegenerateButton: () => getRegenerateButton2,
    getStopGeneratingButton: () => getStopGeneratingButton2,
    getSubmitButton: () => getSubmitButton2,
    getSuggestionBar: () => getSuggestionBar,
    getSuggestionBarButtons: () => getSuggestionBarButtons,
    getTextarea: () => getTextarea2,
    onSend: () => onSend2,
    send: () => send2
  });
  function getActionBar() {
    var _a, _b, _c;
    return ((_c = (_b = (_a = document.querySelector("cib-serp")) == null ? void 0 : _a.shadowRoot) == null ? void 0 : _b.querySelector("cib-action-bar")) == null ? void 0 : _c.shadowRoot) || null;
  }
  function getSubmitButton2() {
    const actionBar = getActionBar();
    if (!actionBar) {
      return null;
    }
    return actionBar.querySelector('button[aria-label="Submit"]');
  }
  function getTextarea2() {
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
  function getRegenerateButton2() {
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
  function send2(text) {
    const textarea = getTextarea2();
    if (!textarea) {
      return;
    }
    textarea.value = text;
    textarea.dispatchEvent(new Event("input"));
    const submitButton = getSubmitButton2();
    if (!submitButton) {
      return;
    }
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

  // ../../packages/chatkit/dist/chunk-ABU253YF.mjs
  var bard_exports = {};
  __export(bard_exports, {
    getInputArea: () => getInputArea,
    getLastPrompt: () => getLastPrompt,
    getLatestPromptText: () => getLatestPromptText,
    getRegenerateButton: () => getRegenerateButton3,
    getSubmitButton: () => getSubmitButton3,
    getTextarea: () => getTextarea3,
    onSend: () => onSend3,
    send: () => send3
  });
  function getSubmitButton3() {
    return document.querySelector('button[aria-label="Send message"]');
  }
  function getInputArea() {
    return document.querySelector(".input-area");
  }
  function getTextarea3() {
    const inputArea = getInputArea();
    return inputArea ? inputArea.querySelector("textarea") : null;
  }
  function getRegenerateButton3() {
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
  function send3(text) {
    const textarea = getTextarea3();
    if (!textarea)
      return;
    textarea.value = text;
    textarea.dispatchEvent(new Event("input"));
    const submitButton = getSubmitButton3();
    if (!submitButton)
      return;
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

  // src/index.js
  (function() {
    "use strict";
    const default_menu_all = {};
    const menu_all = GM_getValue("menu_all", default_menu_all);
    const menus = [
      { checker: () => location.href.includes("chat.openai"), name: "openai", value: true },
      { checker: () => location.href.includes("bard.google"), name: "bard", value: true },
      { checker: () => location.href.includes("Bing+AI"), name: "bing", value: true }
    ];
    menus.forEach((menu) => {
      $(() => menu.checker() && GM_setValue(menu.name, true));
      if (GM_getValue(menu.name) == true) {
        default_menu_all[menu.name] = menu.value;
      }
    });
    for (let name in default_menu_all) {
      if (!(name in menu_all)) {
        menu_all[name] = default_menu_all[name];
      }
    }
    const menu_id = GM_getValue("menu_id", {});
    function registerMenuCommand(name, value) {
      const menuText = ` ${name}\uFF1A${value ? "\u2705" : "\u274C"}`;
      const commandCallback = () => {
        menu_all[name] = !menu_all[name];
        GM_setValue("menu_all", menu_all);
        update_menu();
        location.reload();
      };
      return GM_registerMenuCommand(menuText, commandCallback);
    }
    function update_menu() {
      for (let name in menu_all) {
        const value = menu_all[name];
        if (menu_id[name]) {
          GM_unregisterMenuCommand(menu_id[name]);
        }
        menu_id[name] = registerMenuCommand(name, value);
      }
      GM_setValue("menu_id", menu_id);
    }
    update_menu();
    let chatgpt_last_prompt = "";
    $(() => {
      if (menu_all.openai && location.href.includes("chat.openai")) {
        chatgpt_exports.onSend(() => {
          const textarea = chatgpt_exports.getTextarea();
          if (!textarea) {
            return;
          }
          const prompt = textarea.value;
          chatgpt_last_prompt = prompt;
          GM_setValue("bard_prompt_texts", [prompt]);
          GM_setValue("bing_prompt_texts", [prompt]);
        });
      }
    });
    let last_trigger_time = +/* @__PURE__ */ new Date();
    $(() => {
      if (location.href.includes("chat.openai")) {
        GM_addValueChangeListener("chatgpt_prompt_texts", (name, old_value, new_value) => {
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
                if (!firstTime && chatgpt_exports.getRegenerateButton() == void 0) {
                  continue;
                }
                firstTime = false;
                const prompt_text = prompt_texts.shift();
                if (prompt_text === chatgpt_last_prompt) {
                  continue;
                }
                chatgpt_exports.send(prompt_text);
              }
            }
          }), 0);
          GM_setValue("chatgpt_prompt_texts", []);
        });
      }
    });
    let bard_last_prompt = "";
    $(() => __async(this, null, function* () {
      if (menu_all.bard && location.href.includes("bard.google")) {
        while (!bard_exports.getSubmitButton()) {
          yield new Promise((resolve) => setTimeout(resolve, 500));
        }
        bard_exports.onSend(() => {
          const textarea = bard_exports.getTextarea();
          if (!textarea) {
            return;
          }
          let prompt = textarea.value;
          if (!prompt) {
            prompt = bard_exports.getLatestPromptText();
          }
          bard_last_prompt = prompt;
          GM_setValue("chatgpt_prompt_texts", [prompt]);
          GM_setValue("bing_prompt_texts", [prompt]);
        });
      }
    }));
    let lastTriggerTime = +/* @__PURE__ */ new Date();
    if (location.href.includes("bard.google")) {
      GM_addValueChangeListener("bard_prompt_texts", (name, old_value, new_value) => {
        if (+/* @__PURE__ */ new Date() - lastTriggerTime < 500) {
          return;
        }
        lastTriggerTime = +/* @__PURE__ */ new Date();
        setTimeout(() => __async(this, null, function* () {
          const promptTexts = new_value;
          if (promptTexts.length > 0) {
            let firstTime = true;
            while (promptTexts.length > 0) {
              if (!firstTime) {
                yield new Promise((resolve) => setTimeout(resolve, 2e3));
              }
              if (!firstTime && bard_exports.getRegenerateButton() == void 0) {
                continue;
              }
              firstTime = false;
              const promptText = promptTexts.shift();
              if (promptText === bard_last_prompt) {
                continue;
              }
              bard_exports.send(promptText);
            }
          }
        }), 0);
        GM_setValue("bard_prompt_texts", []);
      });
    }
    let bing_last_prompt = "";
    $(() => __async(this, null, function* () {
      if (menu_all.bing && location.href.includes("Bing+AI")) {
        while (!bing_exports.getSubmitButton()) {
          yield new Promise((resolve) => setTimeout(resolve, 500));
        }
        bing_exports.onSend(() => {
          const textarea = bing_exports.getTextarea();
          if (!textarea) {
            return;
          }
          const prompt = textarea.value;
          bing_last_prompt = prompt;
          GM_setValue("chatgpt_prompt_texts", [prompt]);
          GM_setValue("bard_prompt_texts", [prompt]);
        });
      }
    }));
    let last_trigger_time_bing = +/* @__PURE__ */ new Date();
    if (location.href.includes("Bing+AI")) {
      GM_addValueChangeListener("bing_prompt_texts", (name, old_value, new_value) => {
        if (+/* @__PURE__ */ new Date() - last_trigger_time_bing < 500) {
          return;
        }
        last_trigger_time_bing = +/* @__PURE__ */ new Date();
        setTimeout(() => __async(this, null, function* () {
          const prompt_texts = new_value;
          if (prompt_texts.length > 0) {
            let firstTime = true;
            while (prompt_texts.length > 0) {
              if (!firstTime) {
                yield new Promise((resolve) => setTimeout(resolve, 2e3));
              }
              if (!firstTime && bing_exports.getStopGeneratingButton() != void 0) {
                continue;
              }
              firstTime = false;
              const prompt_text = prompt_texts.shift();
              if (prompt_text === bing_last_prompt) {
                continue;
              }
              bing_exports.send(prompt_text);
            }
          }
        }), 0);
        GM_setValue("bing_prompt_texts", []);
      });
    }
  })();
})();
