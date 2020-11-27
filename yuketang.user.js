// ==UserScript==
// @name         雨课堂自动播放
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.yuketang.cn/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const urls = [
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512098",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512101",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512105",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512109",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512122",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512124",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512128",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512131",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512135",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512139",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512143",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512147",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512151",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512155",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512173",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512176",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512178",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512183",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512186",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512189",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512193",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512196",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512200",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512204",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512207",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512210",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512213",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512216",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512220",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512224",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512240",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512243",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512246",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512249",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512251",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512253",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512256",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512258",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512264",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512266",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512268",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512270",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512272",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512274",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512276",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512278",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512284",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512286",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512288",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512290",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdVtmaA/4687913/video/4512292",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512100",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512104",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512108",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512138",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512142",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512146",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512150",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512153",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512157",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512161",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512166",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512169",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512172",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512175",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512179",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512190",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512194",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512198",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512202",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512205",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512217",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512221",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512225",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512229",
        "https://gsscut.yuketang.cn/pro/lms/8A8NHdWLARS/4687914/video/4512232"
    ];

     window.getVideoLength = function() {
        let lengthString = document.getElementsByClassName("xt_video_player_current_time_display")[0].children[1].textContent;
        let minute = lengthString.split(":")[1];
        minute = parseInt(minute);
        let second = lengthString.split(":")[2];
        second = parseInt(second);
        let bufferSecond = 10;
        return minute*60 + second + bufferSecond;
    };

     window.setupTwoSpeed = function() {
        document.getElementsByClassName("xt_video_player_common_list")[0].children[0].click();
    };

    window.playVideo = function() {
        let playBtnText = document.getElementsByClassName("xt_video_player_play_btn")[0].children[0].textContent;
        if (playBtnText === "播放") {
            console.log("Video not playing, start playing now.");
            document.getElementsByClassName("xt_video_player_play_btn")[0].click();
        }
    };

    function main() {
        console.log("Script start.");
        window.playVideo();
        let currentPageUrl = window.location.href;
        let i = urls.indexOf(currentPageUrl);
        if (i + 1 < urls.length && i !== -1) {
            window.nextPageUrl = urls[i+1];
            console.log("Next page is: ", window.nextPageUrl);
            let seconds = window.getVideoLength();
            console.log("Video length: " + seconds + " seconds.");
            setTimeout(function(){
                console.log("Going to next page.")
                window.location.href = window.nextPageUrl;
            }, seconds * 1000);
        }
    }

    setTimeout(main, 5000);

})();