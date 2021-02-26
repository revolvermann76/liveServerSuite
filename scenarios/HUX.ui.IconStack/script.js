require(["hux/ui/IconStack", "hux/ui/Icon"], function(IconStack, Icon) {

    var tl = new IconStack({
        stack: [
        
            { //Objekt mit Kontextinformationen und fertigem Icon-Widget
                color: "orange",
                icon: new Icon({
                  icon: "vi-meldewesen",
                  width: "300px",
                  height: "300px",
                  color: "green"
                })
            },
            
            "vi-missing", //Einfach nur der Name des VI-Icons
            
            { //Skaliert, gefärbt und in eine Ecke geschubst
                icon: "vi-success",
                color: "white",
                stretch: 0.25,
                position: "bottom-left"
            },
            { //SVG-Beispiel 
                icon: "/trunk/spielwiese/fuehrerscheinwesen.svg",
                color: "yellow"
            },
            
            { //PNG-Beispiel (Färben geht nicht)
                icon: "/trunk/spielwiese/icon.png",
                stretch: 0.25,
                position: "center",
                color: "#f00" //nutzlos
            }
        ],
        width: 300, //Dimensionen des IconStacks
        height: 300,
        renderTo: "body"
    });

});