require(["hux/ui/AbstractExpander"], function (AbstractExpander) {
  new AbstractExpander({
    renderTo : 'body',
    header : {
      text :"I'm the header"
    },
    content : {
      text : "Here comes the content"
    }

  })
});