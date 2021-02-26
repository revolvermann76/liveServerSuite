require(["hux/ui/basic/Link"], function(Link) {
  new Link({
    text: "Peng",
    renderTo: "body"
  });
  
  new Link({
    text: "Puff",
    disabled : true,
    renderTo: "body"
  });
});