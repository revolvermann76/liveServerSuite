require(["hux/ui/ItemView", "hux/ui/ListBox", "hux/ui/buttons/IconButton"], function (ItemView, ListBox, IconButton) {

  iv = new ItemView({

    icon: 'vi-meldewesen',
    title: 'Whatever',
    text: 'Lirum Larum',
    iconVisible: true,
    invalid: false,
    buttons: [
        {
            type: IconButton,
            icon: "vi-meldewesen"
        }
    ],
    onClick : function(){
        alert(1234)
    }
  });
  iv2 = new ItemView({

    icon: 'vi-meldewesen',
    title: 'Whatever2',
    invalid: true
  });
  
  new ListBox({
    renderTo: 'body',
    selectable: true,
    items: [iv, iv2]
  });

});

