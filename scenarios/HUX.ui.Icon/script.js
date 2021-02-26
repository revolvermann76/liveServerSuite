require(["hux/ui/Icon"], function (Icon) {
    	
  var inverse = false;
  new Icon({
    icon: "vi-meldewesen", //"{{repo 'hux6'}}src/main/hux/themes/vois/images/add.svg",
    renderTo: 'body',
    //disabled: true,
    //size: 500,
    backgroundColor : 'red',
    //scale : 'small',
    inverse : inverse,
    //color : 'orange',
    size : 100,
      onPostConstruct : function(){
          $(this.element).on('mouseenter', function(){
              alert(123)
          })
      }
  });

  if(inverse){
    document.body.style.backgroundColor = '#004987';
  }
  
});