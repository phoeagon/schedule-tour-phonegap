  console.log( "onreadycb" )
  onreadycb=function () {
    var url = "http://202.120.40.52:8400/";
    var iframe = window.open( url , '_blank', 'location=no');
    // Announce that we have a camera.
    iframe.addEventListener("loadstop", function(event) {
      iframe.contentWindow.postMessage({
        cameraEnabled: navigator.camera != null && navigator.camera.getPicture != null 
      }, url);
    }, false);
    // Listen for requests to use it.
    window.addEventListener("message", function(event) {
      if (event.origin == url) {
            eval( event.data )
      }
    }, false);
  }
  console.log( "onready" )
  document.addEventListener("deviceready", onreadycb, false);
  $(document).ready( onreadycb )
