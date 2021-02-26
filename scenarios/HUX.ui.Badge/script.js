require(["hux/ui/Badge", "hux/ui/basic/Button", "hux/ui/buttons/IconButton"],
function (Badge, Button, IconButton) {
  var but = new Button({
    text: 'Whatever',
    renderTo: 'body'
  });

  new Badge({
    category: 'error',
    pinTo: but,
    text: '9'
  });

  $('body').append('<br />');

  var ibut = new IconButton({
    icon: 'vi-meldewesen',
    renderTo: 'body',
    //	inverse : true
  });

  new Badge({
    category: 'success',
    pinTo: ibut,
    text: '3'
  });
  $('body').append('<br />');
  $('body').append('<br />');
  $('body').append('<br />');

  new Badge({
    text: "Something",
    renderTo: "body",
    //disabled: true
  });
  $('body').append('<br />');

  new Badge({
    text: "Primary",
    renderTo: "body",
    //disabled: true,
    category: 'primary'
  });
  $('body').append('<br />');

  new Badge({
    text: "Error",
    renderTo: "body",
    //disabled: true,
    category: 'error'
  });
  $('body').append('<br />');

  new Badge({
    text: "Success",
    renderTo: "body",
    //disabled: true,
    category: 'success'
  });
  $('body').append('<br />');

  new Badge({
    text: "Warning",
    renderTo: "body",
    //disabled: true,
    category: 'warn',
    tooltip:"Test"
  });
});