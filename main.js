(function() {
	'use strict'

	const $ = elem => document.querySelector(elem);

	function setPosition() {

		navigator.geolocation.watchPosition(function(e) {
			const position = {
				lat: e.coords.latitude,
				lng: e.coords.longitude
			}

			console.log(position);
				
			const lat = document.createElement('p');
			const lng = document.createElement('p');

			lat.innerHTML = `<b>Latitude:</b>  ${position.lat}`;
			lng.innerHTML = `<b>Longitude:</b> ${position.lng}`;

			$('.location').appendChild(lat);
			$('.location').appendChild(lng);
		});
	}

	setPosition();
})();