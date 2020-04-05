(function() {
	'use strict'

	const $ = elem => document.querySelector(elem);

	function localizar() {
		if ('geolocation' in navigator) {
			const posisao = navigator.geolocation.getCurrentPosition(function(position) {
				const obj = {
					latitude: position.coords.latitude, 
					longitude : position.coords.longitude
				};

				$('.latitude-text').innerHTML = `${obj.latitude}`;
				$('.longitude-text').innerHTML = `${obj.longitude}`;
				console.log(obj)
			});
		} else {
			return false;
		}
	}

	localizar()
})();