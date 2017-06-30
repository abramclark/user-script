// ==UserScript==
// @name         google-direct-links
// @namespace    http://newhive.com/abram/user-script
// @version      0.1
// @description  Make Google search results direct links instead of redirects
// @author       quuxman
// @match        https://www.google.com/search?q=*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

Array.from(document.getElementsByClassName('r')).forEach(el =>{
    var link = el.getElementsByTagName('a')[0];
    link.onclick = undefined;
    var url = query_param(link.search, 'url');
    if(url) link.href = url;
});

function query_param(query_str, key) {
    for(var x of query_str.split('&')) {
        var [k, v] = x.split('=');
        if(k == key) return v;
    }
    return undefined;
}

})();
