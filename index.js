
Notification.requestPermission();

console.log(Notification.requestPermission())

window.addEventListener('load', function() {
   if ('serviceWorker' in navigator) {  
    navigator.serviceWorker.register('sw.js').then(function(reg) {
      if(reg.installing) {
        console.log('Service worker installing');
      } else if(reg.waiting) {
        console.log('Service worker installed');
      } else if(reg.active) {
        console.log('Service worker active');
      }
      reg.pushManager.subscribe().then(function(subscription) {
        console.log("Endpoint:" + subscription.endpoint)
        console.log("Key" + subscription.getKey('p256dh'))
        window.alert(subscription.endpoint)
      });
    });  
  } else {  
    console.log('Service workers aren\'t supported in this browser.');  
  }  
});
