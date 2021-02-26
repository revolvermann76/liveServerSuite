require(["hux/ui/DropdownBox", "hux/ui/TextItem"], function (DropdownBox, TextItem) {

  let datapool = {
    "OHNE_ANGABE": {
      text: "ohne Angabe",
      icon: "vi-unknown-gender"
    },
    "MAENNLICH": {
      text: "männlich",
      icon: "vi-male"
    },
    "WEIBLICH": {
      text: "weiblich",
      icon: "vi-female"
    },
    "DIVERS": {
      text: "divers",
      icon: "vi-intersexual"
    }
  }

  var ddb = new DropdownBox({
    renderTo: "body",
    width: 300,
    data: ["OHNE_ANGABE", "MAENNLICH","WEIBLICH","DIVERS" ],
    renderer: {
      listItem: function (item) {
        const elem = new TextItem({
          text: datapool[item].text,
          icon: datapool[item].icon,
        });
        return $(elem.element);
      },
      selectedItem: function (item) {
        return datapool[item].text;
      }.bind(this),
    },

  });
  /*
        ddb.addValue({
          text: 'Marc',
          value: 'Marc'
        });
  */
  window.ddb = ddb;

  ddb.setSelectedIndex(0);
  console.log(ddb.getValue());
  window.ddb = ddb;
});
