// ==UserScript==
// @name        Bypass Highland Coffee
// @namespace   https://codefelony.com
// @description Go fight HighlandCoffee hotspot!
// @author      Moriarty
// @include     http://*
// @include     https://*
// @version     0.1.0
// @grant       none
// ==/UserScript==
var isHighlandCoffee = (document.forms[0].action.indexOf('/nodogsplash_auth/') > - 1) ? true : false;
if (isHighlandCoffee) {
    console.info('Fucking HighlandCoffee HotSpot...');
    document.getElementsByName('redir') [0].value = window.location.href;
    document.forms[0].submit();
} else {
    console.warn('There is no hotspot to bypass, fuck Highland!');
}
