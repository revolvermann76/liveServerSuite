document.addEventListener("DOMContentLoaded", function(event) { 
  require(["hux/ui/basic/Button"], function (Button) {
    new Button({
      text: "{{var 'pi'}}",
      renderTo: "body",
      //disabled: true,
      scale: "large",
      default: true,
      icon :           'vi-meldewesen'
    })
  });
  
});