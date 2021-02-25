// get hux-version
let huxVersion = document.documentElement.getAttribute("data-hux-version") || 6;

// set title of the document
let path = location.pathname.replace("/scenarios/", "");
path = path.substring(0, path.indexOf("/"));
document.head.getElementsByTagName("title")[0].innerHTML = path;

// add jQuery
let jqScript = document.createElement("script");
jqScript.setAttribute("src", "/jquery/jquery.min.js");
document.head.appendChild(jqScript);

// add requirejs
let rqScript = document.createElement("script");
rqScript.setAttribute("src", "/hux"+huxVersion+"/lib/require/require-2.1.17.js");
document.head.appendChild(rqScript);

// add script.js
let script = document.createElement("script");
script.setAttribute("src", "./script.js");
document.head.appendChild(script);