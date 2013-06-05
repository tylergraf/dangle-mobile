// // tasks collection
var tasks = Alloy.Collections.tasks;
tasks.fetch();

$.buTTon.addEventListener('click',function(){
  var controller = Alloy.Globals.controllers.one;
  var views = controller.getViews();
  console.log(JSON.stringify(views));
  // $.one.remove($.buTTon);
  // view.buTTon.remove();
  // for (n in views){
  //   $.one.remove(views[n]);
  // }
});

