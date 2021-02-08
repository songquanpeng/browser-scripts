// ==UserScript==
// @name        一键开启 Github1s 页面
// @namespace   github
// @author      伟大鱼塘
// @description 需配合 https://github.com/conwnet/github1s 使用
// @include     https://github.com/
// @match       https://github.com/*
// @version     1.0.1
// ==/UserScript==

{
  const href = `https://github1s.com${location.pathname}`;
  const btn =
    `<a class="btn" target="_blank" href="${href}">` +
    'Editor' +
    '</a>';
  document
    .querySelector('.btn.ml-2.d-none.d-md-block')
    .insertAdjacentHTML('beforeBegin', btn);
}