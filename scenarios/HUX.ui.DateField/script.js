require(["hux/ui/DateField"], function(DateField) {
    	
  window.df1 = new DateField({
    renderTo: 'body',
    onChange : function(){
        let val = this.getValue();
        let date = this.getDate();
        console.log(val);
        console.log(date);
        console.log("------")
    }
  })
  
  
});