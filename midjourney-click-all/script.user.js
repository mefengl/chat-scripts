// ==UserScript==
// @name midjourney-click-all
// @namespace https://github.com/mefengl
// @version 0.0.4
// @description Click all the buttons in a row at once
// @author mefengl
// @match https://discord.com/channels/*
// @icon https://www.google.com/s2/favicons?sz=64&domain=midjourney.com
// @grant none
// @license MIT
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

  // ../../packages/midkit/dist/index.mjs
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  function getButtonContainers() {
    return Array.from(document.querySelectorAll("[id^='message-accessorie'] [class^='children']"));
  }
  var CLONE_BUTTON_CLASS = "cloned-button";
  function getButtons(temp) {
    const buttons = temp.querySelectorAll("button");
    const originalButtons = Array.from(buttons).filter((button) => !button.classList.contains(CLONE_BUTTON_CLASS));
    return originalButtons;
  }
  function oneMoreButton(temp) {
    const buttons = getButtons(temp);
    const lastButton = buttons[buttons.length - 1];
    const cloneButton = lastButton.cloneNode();
    cloneButton.classList.add(CLONE_BUTTON_CLASS);
    lastButton.parentNode.insertBefore(cloneButton, lastButton.nextSibling);
    return cloneButton;
  }
  function getSubmitButton() {
    return document.querySelector('button[type="submit"]');
  }
  function submitForm() {
    return __async(this, null, function* () {
      const submitButton = getSubmitButton();
      if (!submitButton) {
        console.log("No submit button found");
        return;
      }
      submitButton.click();
    });
  }
  function getFormNumber() {
    const forms = document.querySelectorAll("form");
    return forms.length;
  }
  function clickAllButtonsWithConfirm(temp) {
    return __async(this, null, function* () {
      const buttons = getButtons(temp);
      for (const button of buttons) {
        button.click();
        while (getFormNumber() === 1) {
          yield sleep(500);
          console.log("Opening...");
        }
        submitForm();
        while (getFormNumber() === 2) {
          yield sleep(500);
          console.log("Submitting...");
        }
      }
    });
  }
  function isClicking(button) {
    return button.querySelector("div > div").getAttribute("aria-hidden") === "true";
  }
  function clickAllButtons(temp) {
    return __async(this, null, function* () {
      const buttons = getButtons(temp);
      buttons.pop();
      for (const button of buttons) {
        button.click();
        while (!isClicking(button)) {
          yield sleep(10);
          console.log("Waiting for clicking...");
        }
        while (isClicking(button)) {
          yield sleep(500);
          console.log("Clicking...");
        }
      }
    });
  }
  function smartClickAllButtons(temp) {
    return __async(this, null, function* () {
      const buttons = getButtons(temp);
      const testText = buttons[0].textContent;
      if (testText == null ? void 0 : testText.startsWith("U")) {
        yield clickAllButtons(temp);
      } else {
        yield clickAllButtonsWithConfirm(temp);
      }
    });
  }

  // src/index.ts
  function initialize() {
    return __async(this, null, function* () {
      yield new Promise((resolve) => window.addEventListener("load", resolve));
      yield new Promise((resolve) => setTimeout(resolve, 1e4));
    });
  }
  function main() {
    return __async(this, null, function* () {
      yield initialize();
      const buttonContainers = getButtonContainers();
      for (const buttonContainer of buttonContainers) {
        const clickAllButton = oneMoreButton(buttonContainer);
        clickAllButton.textContent = "ALL";
        clickAllButton.addEventListener("click", () => {
          smartClickAllButtons(buttonContainer);
        });
      }
    });
  }
  (function() {
    main();
  })();
})();
