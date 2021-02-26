// get hux-version
let huxVersion = document.documentElement.getAttribute("data-hux-version") || 6;

let styles = [
  "/hux"+huxVersion+"/src/main/hux/fonts/vi-font/css/vi-font.css",
  "/dejavu/org/vois/base/fonts/dejavu-font/css/dejavu-font.css",
  "/hux"+huxVersion+"/src/main/hux/themes/vois/less/hux-js-theme.less",
  "styles.less"
];

function loadCssStyle(path) {
  let link = document.createElement("link");
  link.setAttribute("type", "text/css");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", path);
  document.head.appendChild(link);
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



// set title of the document
let path = location.pathname.replace("/scenarios/", "");
path = path.substring(0, path.indexOf("/"));
document.head.getElementsByTagName("title")[0].innerHTML = path;

loadScript(
  "/hux"+huxVersion+"/lib/require/require-2.1.17.js", 
  false,
  function(){
    require.config({
      baseUrl: "/", //"/hux"+huxVersion+"/src/main/hux/js",
      paths: {
        "hux": "/hux"+huxVersion+"/src/main/hux/js/hux"
      },
    });

    require(["/less/less.js"], function(less){
      less.modifyVars({
        'version': '~\'[data-version="'+huxVersion+'"]\''
      })
      for(let i = 0; i < styles.length; i++){
        if(styles[i].toLowerCase().endsWith(".css")){
          loadCssStyle(styles[i]);
        }else if(styles[i].toLowerCase().endsWith(".less")){
          let link = document.createElement("link");
          window.lnk = link;
          link.setAttribute("type", "text/css");
          link.setAttribute("rel", "stylesheet/less");
          link.setAttribute("href", styles[i]);
          less.sheets.push(link);
          less.async = false;
          less.logLevel = 0;
          less.refresh(false);
          //document.head.appendChild(link);
        }
      }
    })

    require(['hux/core/Core'], function(HUX){
        HUX.VERSION = huxVersion+'.0';
    });

    loadScript("./script.js", true); // add user script
  }
);// add requirejs

