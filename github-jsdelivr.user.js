// ==UserScript==
// @name        Github jsDelivr Quick Link
// @namespace   Github
// @author      JustSong
// @match       https://github.com/justsong-lab/images/*
// @version     0.1.0
// ==/UserScript==

(function () {
    "use strict";
  
    window.copyJsDelivrLink = function () {
      let href = document.location.href.split("/");
      let owner = href[3];
      let repo = href[4];
      let path = href.slice(7).join("/");
      let jsDelivrLink = `https://cdn.jsdelivr.net/gh/${owner}/${repo}/${path}`;
      window.copyText(jsDelivrLink);
    };
  
    window.copyText = function (text) {
      const textArea = document.getElementById("hiddenTextArea");
      textArea.textContent = text;
      document.body.append(textArea);
      textArea.select();
      document.execCommand("copy");
    };
  
    function main() {
      let hiddenTextArea = document.createElement("textarea");
      hiddenTextArea.setAttribute("id", "hiddenTextArea");
      hiddenTextArea.style.cssText = "height: 0px; width: 0px";
      document.body.appendChild(hiddenTextArea);
      const btn = `<button class="btn" id="copyJsDelivrBtn">Copy jsDelivr Link</button>`;
      document
        .querySelector("#blob-more-options-details")
        .insertAdjacentHTML("beforeBegin", btn);
      document
        .getElementById("copyJsDelivrBtn")
        .addEventListener("click", window.copyJsDelivrLink);
    }
  
    main();
})();
  