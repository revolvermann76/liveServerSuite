require(["hux/ui/RadioButton"], function(RadioButton) {
  var inverse = true;
  
  window.but = new RadioButton({
    text: "option 1",
    renderTo: "body",
    group: 'testGroup',
    inverse: inverse,
    onSelect: function(){
        console.log(233645747)
    }
  });
  
  $("body")
    .append("<br/>")
    
  new RadioButton({
    text: "option 2",
    renderTo: "body",
    group: 'testGroup',
    inverse: inverse
  });
  
  if(inverse){
      $('body').css('background-color','#003765');
      
  }
      $('body').css('background', 'orange')
});