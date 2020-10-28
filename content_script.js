// ==UserScript==
// @name        Перенос виджета в МоемСкладе
// @namespace   http://online.moysklad.ru/
// @description Перенос виджета в МоемСкладе
// @include     https://online.moysklad.ru/*
// @version     1
// @grant       none
// ==/UserScript==

window.addEventListener ("load", myMain, false);

function myMain (evt) {
    var jsInitChecktimer = setInterval (checkForJS_Finish, 111);
    function checkForJS_Finish () {
        if ( document.querySelector ("div.iframe-holder")) {
            clearInterval (jsInitChecktimer);
            	var element = document.querySelector('div.iframe-holder');
            	var newParent = document.querySelector('div.b-delivery-footer');
            	newParent.append(element);
        }
    }
}
