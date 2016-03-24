    function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      window.location.href="/main.html";
    };

    function onSuccess(googleUser){
      console.log('logged in as:' + googleUser.getBasicProfile().getName());
    };

    function renderButton(){
      gapi.signin2.render('g-signin2', {
        "scope": 'profile email',
        'width' : 240,
        'height': 50,
        'longtitle': true,
        'onSuccess': onSuccess
      });
    }