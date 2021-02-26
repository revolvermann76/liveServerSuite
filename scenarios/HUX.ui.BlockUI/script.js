require(["hux/ui/BlockUI"], function(BlockUI) {

  HUX._imageLocation = "{{repo 'hux6'}}src/images";
  var whatever = $("<div>")
    .css({
      width: "200px",
      height: "200px",
      border: "1px solid red"
    })
    .appendTo("body")

  var whatever1 = $("<div>")
    .css({
      width: "100px",
      height: "50px",
      border: "1px solid red"
    })
    .appendTo("body")

  var whatever2 = $("<div>")
    .css({
      width: "50px",
      height: "100px",
      border: "1px solid red"
    })
    .appendTo("body")

  var blockUI = new BlockUI({
    include: "spinner"
  });

  var blockUI1 = new BlockUI({
    include: "spinner",
    block: whatever
  });

  var blockUI2 = new BlockUI({
    include: "spinner",
    block: whatever1
  });

  var blockUI3 = new BlockUI({
    include: "spinner",
    block: whatever2
  });
  
  $("<button>")
    .text("Block Screen")
    .appendTo("body")
    .click(function() {
      blockUI.show();
      window.setTimeout(function() {
        blockUI.hide();
      }, 2000);
    });

  $("<button>")
    .text("Block boxes")
    .appendTo("body")
    .click(function() {
      blockUI1.show();
      blockUI2.show();
      blockUI3.show();
      window.setTimeout(function() {
        blockUI1.hide();
        blockUI2.hide();
        blockUI3.hide();
      }, 2000);
    });


});