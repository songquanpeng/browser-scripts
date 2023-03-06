// ==UserScript==
// @name         Enhanced arXiv
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Add some functions for arXiv
// @author       JustSong
// @match        https://arxiv.org/abs/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function createButton(prompt, callback) {
        return `<button style="margin:0 8px;" class="button is-small" onclick='window.${callback}()'>${prompt}</button>`
    }

    function createLinkButton(prompt, link, filename) {
        return `<a href="${link}" download="${filename}" class="button is-small">${prompt}</a>`
    }

    function main() {
        init();
        let targetElement = document.getElementsByClassName("authors")[0];
        let copyTitleButton = createButton("Copy Title", "copyTitle");
        let copyPDFLinkButton = createButton("Copy PDF Link", "copyPDFLink");
        let searchGoogleButton = createButton("Search With Google", "searchGoogle");
        let searchGoogleScholarButton = createButton("Search With Google Scholar", "searchGoogleScholar");
        let downloadCNButton = createLinkButton("Download from mirror", `http://xxx.itp.ac.cn/pdf/${window.location.href.split('/')[4]}.pdf`, getPaperTitle());
        let downloadOriginButton = createLinkButton("Download", `https://arxiv.org/pdf/${window.location.href.split('/')[4]}.pdf`, getPaperTitle());
        targetElement.insertAdjacentHTML('beforeend', copyTitleButton);
        targetElement.insertAdjacentHTML('beforeend', copyPDFLinkButton);
        targetElement.insertAdjacentHTML('beforeend', searchGoogleButton);
        targetElement.insertAdjacentHTML('beforeend', searchGoogleScholarButton);
        targetElement.insertAdjacentHTML('beforeend', downloadCNButton);
        targetElement.insertAdjacentHTML('beforeend', downloadOriginButton);
    }

    function init() {
        let hiddenTextArea = document.createElement('textarea');
        hiddenTextArea.setAttribute("id", "hiddenTextArea");
        hiddenTextArea.style.cssText = "display:hidden;";
        document.body.appendChild(hiddenTextArea);
        window.copyText = copyText;
        window.copyTitle = copyTitle;
        window.getPaperTitle = getPaperTitle;
        window.copyPDFLink = copyPDFLink;
        window.searchGoogle = searchGoogle;
        window.searchGoogleScholar = searchGoogleScholar;
        window.savePDF = savePDF;
    }

    function copyText(text) {
        const textArea = document.getElementById('hiddenTextArea');
        textArea.textContent = text;
        document.body.append(textArea);
        textArea.select();
        document.execCommand("copy");
    }

    function getPaperTitle() {
        let title = document.getElementsByClassName("title")[0].textContent;
        title = title.replace("Title:", "");
        return title;
    }

    function copyTitle() {
        let title = window.getPaperTitle();
        window.copyText(title)
    }

    function copyPDFLink() {
        let link = document.getElementsByClassName("download-pdf")[0].href;
        window.copyText(link)
    }

    function searchGoogle() {
        let title = window.getPaperTitle();
        window.open(`https://www.google.com/search?q=${title}`);
    }

    function searchGoogleScholar() {
        let title = window.getPaperTitle();
        window.open(`https://scholar.google.com/scholar?q=${title}`);
    }

    function savePDF() {

    }
    main();
})();
