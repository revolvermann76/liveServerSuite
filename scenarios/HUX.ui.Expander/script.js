require(["hux/ui/Expander"], function (Expander) {
  new Expander({
      renderTo : 'body',
      header: {
        text: "Look, I'm the header"
      },
      content : {
        text: "And I'm a content"
      }
  })
});