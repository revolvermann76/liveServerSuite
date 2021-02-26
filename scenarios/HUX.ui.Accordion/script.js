require(["hux/ui/Accordion", 'hux/ui/basic/TextField', "hux/ui/basic/Container", 'hux/ui/Expander'],
function (Accordion, TextField, Container, Expander) {
  HUX._imageLocation = "/hux/trunk/src/less/images";

  var xyz = new Container({
    css: {
      "background-color": "red",
      "width": "50px",
      "height": "10px"
    }
  });

  var exp = new Expander({
    header: {
      text: "Namen",
      icon: "vi-meldewesen"


    },
    tools: [xyz],
    content: {
      layout: "hform",
      defaultItem: {
        type: TextField
      },
      items: [{
          label: "Vorname"
        },
        {
          label: "Rufname"
        },
        {
          label: "Nachname"
        }
      ]
    }
  });

  window.accordion = new Accordion({
    items: [
        exp,
      {
        header: "Eigenschaften",
        content: {
          layout: "hform",
          defaultItem: {
            type: TextField
          },
          items: [{
              label: "Volljährig"
            },
            {
              label: "Optionsdeutsch"
            }
          ]
        }
      }
    ],
    expandByHeaders: false,
    renderTo: "body"
  });
});

});
document.addEventListener("DOMContentLoaded", function (event) {

require(["hux/ui/Accordion", 'hux/ui/basic/TextField', "hux/ui/basic/Container", 'hux/ui/Expander'],
function (Accordion, TextField, Container, Expander) {
  HUX._imageLocation = "/hux/trunk/src/less/images";

  var xyz = new Container({
    css: {
      "background-color": "red",
      "width": "50px",
      "height": "10px"
    }
  });

  var exp = new Expander({
    header: {
      text: "Namen",
      icon: "vi-meldewesen"


    },
    tools: [xyz],
    content: {
      layout: "hform",
      defaultItem: {
        type: TextField
      },
      items: [{
          label: "Vorname"
        },
        {
          label: "Rufname"
        },
        {
          label: "Nachname"
        }
      ]
    }
  });

  window.accordion = new Accordion({
    items: [
        exp,
      {
        header: "Eigenschaften",
        content: {
          layout: "hform",
          defaultItem: {
            type: TextField
          },
          items: [{
              label: "Volljährig"
            },
            {
              label: "Optionsdeutsch"
            }
          ]
        }
      }
    ],
    expandByHeaders: false,
    renderTo: "body"
  });
});