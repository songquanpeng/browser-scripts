// ==UserScript==
// @name         Enhanced LeetCode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add some functions for LeetCode
// @author       JustSong
// @match        https://leetcode.cn/problems/*
// @match        https://leetcode.com/problems/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=leetcode.cn
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  let url = location.href;
  if (url.startsWith("https://leetcode.cn")) {
    url = url.replace("https://leetcode.cn", "https://leetcode.com");
  } else {
    url = url.replace("https://leetcode.com", "https://leetcode.cn");
  }
  let elements = document.getElementsByTagName("a");
  let targetElement = undefined;
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute("aria-label") == "feedback") {
      targetElement = elements[i];
      break;
    }
  }
  if (targetElement) {
    targetElement.href = url;
    targetElement.target = "_self";
  }
  setTimeout(function () {
    elements = document.getElementsByClassName("text-brand-orange");
    targetElement = undefined;
    for (let i = 0; i < elements.length; i++) {
      if (
        elements[i].innerText === "Premium" ||
        elements[i].innerText === "Plus 会员"
      ) {
        elements[i].innerText = "Switch";
        targetElement = elements[i].parentElement.parentElement;
        break;
      }
    }
    if (targetElement) {
      targetElement.href = url;
      targetElement.target = "_self";
    }
  }, 1000);
})();
