// ==UserScript==
// @name         Bilibili 自动点赞
// @namespace    https://iamazing.cn/
// @version      0.1
// @description  自动给指定的 UP 主点赞
// @author       JustSong
// @match        https://www.bilibili.com/video/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(()=>{
        let username = document.getElementsByClassName("username")[0].text;
        username = username.trim();
        let targetUsernames = ["红警魔鬼蓝天"];
        if (!targetUsernames.includes(username)) {
            return;
        }
        let targetElement = document.getElementsByClassName("toolbar-left")[0].children[0];
        if (targetElement.classList.value === "like on") {
            return;
        }
        targetElement.click();
        document.getElementsByClassName("bpx-player-dm-input")[0] = "前排提醒：点赞投币支持";
        document.getElementsByClassName("bpx-player-dm-btn-send")[0].children[0].click();
    }, 10000);
})();
