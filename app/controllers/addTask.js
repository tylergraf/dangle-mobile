// // kids collection
var kids = Alloy.Collections.kids;
kids.fetch();

var num = 1;
// set the kid who will get the task
$.kidsList.addEventListener('click',function(e) {
  var kidViews = this.getChildren();
  
  if(typeof e.source.kidId !== 'undefined'){
    var kidId = e.source.kidId;
    var opacity = e.source.getOpacity();
    for (var i = 0; i < kidViews.length; i++) {
      // kidViews[i].setTop(num);
      kidViews[i].setOpacity(1);
    };
    if(opacity === 1){
      e.source.setOpacity(0.7);
      $.kidId.setValue(kidId);
    } else {
      e.source.setOpacity(1);
      $.kidId.setValue('');
    }
  }
  console.log(JSON.stringify($.kidId.getValue()));
});

// navigate back to adminDashboard
$.navBack.addEventListener('click',function() {
  var nav = require('navigation');
  var controllers = Alloy.Globals.controllers;

  // navigate back to adminDashboard view
  nav.close(controllers.adminDashboard);
});


// click on repeat days view
$.repeatDays.addEventListener('click',function(e){
  var repeatValue = $.repeatValue,
      el = e.source,
      repeatValueText = repeatValue.getText();
  
  repeatValue.setText(el.day);

  console.log(JSON.stringify(e));
  if(el.selected){
    el.selected = false;
    el.setColor('#9D1C52');
  } else {
    el.selected = true;
    el.setColor('#fff');
  }
});

// **************************
// Getting add Task to work
// **************************

$.addTaskButton.addEventListener('click', function() {
  // deps
  var taskMiddleware = require('taskMiddleware');
  
  // form data
  var data = {
    title: $.taskTitle.getValue(),
    value: $.taskValue.getValue(),
    kidId: $.kidId.getValue(),
    completed: false,
    // type: $.type.value,
    // due: $.due.value,
    repeated: $.repeatValue.getText()
  };
  console.log(JSON.stringify(data));
  taskMiddleware.addTask(data, function() {  
    // close addKid view
    var nav = require('navigation');
    var controllers = Alloy.Globals.controllers;

    // navigate back to adminDashboard view
    nav.close(controllers.adminDashboard);
  });
});

// focus on title text field
$.taskTitle.addEventListener('focus',function(e){
  // add event listenter to blur text field if click somewhere else
  $.addTask.addEventListener('click', blurChoreTitle);
});
// focus on value text field
$.taskValue.addEventListener('focus',function(e){
  // add event listenter to blur text field if click somewhere else
  $.addTask.addEventListener('click', blurChoreValue);
});


function blurChoreTitle(e) {
  console.log(JSON.stringify(e));
  if(e.source.id !== 'taskTitle' && e.source.id !== 'navBack'){
    $.taskTitle.blur();
    $.addTask.removeEventListener('click', blurChoreTitle);
  }
}

function blurChoreValue(e) {
  console.log(JSON.stringify(e));
  if(e.source.id !== 'taskValue' && e.source.id !== 'navBack'){
    $.taskValue.blur();
    $.addTask.removeEventListener('click', blurChoreValue);
  }
}


function setKidId() {
  
}


// utility functions

function getKidId() {
  console.log();
  
}
