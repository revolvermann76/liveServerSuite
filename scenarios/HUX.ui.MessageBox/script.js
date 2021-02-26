require(["hux/ui/dialogs/MessageBox"], 
  function(MessageBox) {

  var mb = new MessageBox({
    category: "warn",
    title: 'Testtitel',
    html: 'Whatever',
    closeOnOuterClick: false,
    onOk: function(){
       alert('callback')
    }
  });

  mb.open()
});
