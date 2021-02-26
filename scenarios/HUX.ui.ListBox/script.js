require(["hux/ui/ListBox", "hux/ui/Icon"], function (ListBox) {
    window.box = new ListBox({
    renderTo: "body",
    required: true,
    selectable: true,
    emptyText: 'keine Einträge'
  });

    box.items.add({text: 'Eintrag'});
    box.items.add({text: 'noch ein Eintrag'});

});
