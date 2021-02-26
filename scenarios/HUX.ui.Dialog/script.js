require(["hux/ui/dialogs/Dialog", "hux/ui/basic/Button"], 
function(Dialog, Button) {
  $("body")
    .css("padding", "50px");

  window.dia = new Dialog({
    title: "Wohnungen",
        subtitle : "Whhhhhooooopppp",
    buttons: [new Button({
      text: "Peng"
    })],
    width: 900,
    height: 500,
    content: "bla",
        showHelpButton : true,
        onHelp : function(){
            alert(123454)
        }
  });
  dia.open();
});