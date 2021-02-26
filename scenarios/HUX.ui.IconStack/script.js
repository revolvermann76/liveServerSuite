require(["hux/ui/buttons/IconButton"], function (IconButton) {

  var cnt = $('<div>')
    .css({
      'padding': '25px'
    })
    .appendTo('body');


  // NORMAL

  cnt
    .append("Normal<br/>");

  new IconButton({
    icon: "vi-meldewesen",
    renderTo: cnt
  });
  cnt
    .append("<br/>Normal disabled<br/>");

  new IconButton({
    icon: "vi-meldewesen",
    renderTo: cnt,
    disabled: true
  });


  // FLAT
  cnt
    .append("<br/><br/><br/>Flat<br/>");
  new IconButton({
    icon: "vi-meldewesen",
    renderTo: cnt,
    flat: true
  });
  cnt
    .append("<br/>Flat disabled<br/>");

  new IconButton({
    icon: "vi-meldewesen",
    renderTo: cnt,
    disabled: true,
    flat: true
  });


  // LARGE
  cnt
    .append("<br/><br/><br/>Large<br/>");
  new IconButton({
    icon: "vi-meldewesen",
    scale : "large",
    renderTo: cnt,
  });
  
  

  // INVERSE

  var blueCnt = $('<div>')
    .css({
      'background-color': '#004987',
      'padding': '25px'
    })
    .appendTo('body');

  blueCnt
    .append("<span style='color:white;'>Inverse</span><br/>");
    
  new IconButton({
    icon: "vi-meldewesen",
    renderTo: blueCnt,
    inverse: true
  });
  
  blueCnt
    .append("<br/><span style='color:white;'>Inverse disabled<span><br/>");

  new IconButton({
    icon: "vi-meldewesen",
    renderTo: blueCnt,
    disabled: true,
    inverse: true,
  });
});
  