require(["hux/ui/ComboBox"], function (ComboBox) {
  var dataPool =
    "Lorem ipsum dolor piff paff puff"
  .split(" ")

  cb = new ComboBox({
    renderTo: "body",
    width: 300,
    minLength: 1,
    required: true,
    
    data: function (input, deferred) {
      var result = [],
        i;
      for (i = 0; i < dataPool.length; i++) {
        if (dataPool[i].indexOf(input) != -1)
          result.push({
            text: dataPool[i],
            
          });
      }
      deferred.resolve(result);

    },

/*
    items :[{text:'A', whatever: Math.random()},{text:'B', whatever: Math.random()}],
*/			
    onSelect: function (item) {
      console.log(item.data);
    },
    renderer: {
      listItem: function (item) {
        return item.text;
      },
      selectedItem: function (item) {
        return item.text;
      }
    },
  });
  var value = {text:'C', whatever: Math.random()}
  // cb.addItem(value)
  cb.setValue(value)
  
  console.log(cb.getValue())
});