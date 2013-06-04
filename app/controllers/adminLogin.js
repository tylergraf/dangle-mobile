$.loginButton.addEventListener('click', function(e){

  var username = $.email.getValue(),
      password = $.password.getValue();

  Ti.ajax({
    url: 'http://localhost:5000/api/login',
    type:'POST',
    dataType: 'json',
    data: JSON.stringify({
      username: username,
      password: password
    }),
    beforeSend: function(xhr){
      xhr.setRequestHeader("Content-Type", "application/json");
    },
    success: function(data){
      Alloy.Globals.userLoggedIn(data);
    },
    error: function(xhr, textStatus, error){
      alert('Incorrect email or password')
    }
  });
});