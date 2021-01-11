// ==UserScript==
// @name         维基百科繁体自动切简体
// @namespace    https://iamazing.cn/
// @version      0.1
// @description  自动跳转
// @author       JustSong
// @match        https://zh.wikipedia.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let pathname = window.location.pathname;
    if (!pathname.startsWith("/zh-cn/")) window.location.pathname = pathname.replace(pathname.split('/')[1], "zh-cn");
})();
