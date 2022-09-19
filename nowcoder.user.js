// ==UserScript==
// @name         牛客网手机版转电脑版
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://m.nowcoder.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nowcoder.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let id = location.href.split("=")[1];
    location = `https://www.nowcoder.com/questionTerminal/${id}`;
})();