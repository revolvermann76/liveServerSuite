require(["hux/ui/basic/Image", "hux/core/Core"], function (Image, HUX) {

  console.info(HUX);
  new Image({

    renderTo: document.body,
    width: 64,
    height: 64,
    baseColor: 'blue',
    //                                         src: HUX._imageLocation + "/" + "add.svg",
    src: "/hux6/src/main/hux/themes/vois/images/add.svg"
  });

});