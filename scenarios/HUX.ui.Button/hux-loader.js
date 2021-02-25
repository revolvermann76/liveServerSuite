function loadCssStyle(path) {
  let link = document.createElement("link");
  link.setAttribute("type", "text/css");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", path);
  document.head.appendChild(link);
}


function loadLessStyle(path) {
  //TODO
}

function loadScript(href, defer,  onLoad){
  let script = document.createElement("script");
  if(onLoad){
    script.onload = onLoad
  }
  script.setAttribute("src", href);
  if(defer){
    script.setAttribute("defer", '');
  }
  document.head.appendChild(script);
}

// get hux-version
let huxVersion = document.documentElement.getAttribute("data-hux-version") || 6;

// set title of the document
let path = location.pathname.replace("/scenarios/", "");
path = path.substring(0, path.indexOf("/"));
document.head.getElementsByTagName("title")[0].innerHTML = path;

loadCssStyle("/hux"+huxVersion+"/src/main/hux/fonts/vi-font/css/vi-font.css");
loadCssStyle("/dejavu/org/vois/base/fonts/dejavu-font/css/dejavu-font.css");
loadLessStyle("/hux"+huxVersion+"/src/main/hux/themes/vois/less/hux-js-theme.less")


loadScript(
  "/hux"+huxVersion+"/lib/require/require-2.1.17.js", 
  false,
  function(){
    loadScript("./script.js", true); // add user script
  }
);// add requirejs

