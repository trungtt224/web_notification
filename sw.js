self.addEventListener('push', function(event) {
	var icon = 'troll.png';
	var tag = 'push';
	event.waitUntil (
		self.registration.showNotification('Warning! Notification', {
			body : 'Hello',
			icon : icon,
			tag : tag
		})
	);
})