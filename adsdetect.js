  $( document ).ready(function() {
    console.log('document loaded');
    function areAdsBlocked(callback) {
      var URL = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      fetch(URL, {
        method: 'HEAD', 
        mode: 'no-cors'
      })
      .then(response => callback(false)) //Response was received --> ads are NOT blocked
      .catch(error => callback(true));   //No response           --> ads are blocked
    }
    function checkAdBlocker() {
      areAdsBlocked(function(isBlocked){
        if(isBlocked){
          $('#result').text('Please, Disabled Your Ad-Block For This Pages.');
          $('#result').css('background-color', 'white');
          // TODO: Add code here which handles if visitors block ads!
        } else {
          $('#result').text('Ads Allowed');
          $('#result').css('background-color', 'white');
        }
      })
    }
    checkAdBlocker();
  });
