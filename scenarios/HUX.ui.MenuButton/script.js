require(["hux/ui/buttons/MenuButton"], function(MenuButton) {
  var menu = new MenuButton({
    title: "menu title",
    width: 300,
    items: [
      {
        icon: "vi-info",
        text: "menu item 1",
        shortcut: "Strg+4",
        action: function() {
          alert('action 1');
        }
            },
      {
        text: "menu item 2",
        shortcut: "Strg+G",
        action: function() {
          alert('action 2');
        }
            },
      {
        icon: "vi-warning",
        text: "menu item 3",
        shortcut: "Strg+Alt+Entf",
        action: function() {
          alert('action 3');
        },
        disabled: true
            }
        ],
    renderTo: "body"
  });

});
