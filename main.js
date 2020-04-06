(function() {
	'use strict'

	const $ = elem => document.querySelector(elem);

		navigator.geolocation.getCurrentPosition(function(e) {
			const position = {
				lat: e.coords.latitude,
				lng: e.coords.longitude
			}

			console.log(position);
			
			const lat = document.createElement('p');
			const lng = document.createElement('p');

			lat.innerHTML = position.lat;
			lng.innerHTML = position.lng;

			$('.location').appendChild(lat);
			$('.location').appendChild(lng);
			
			$('.location').style.textAlign = 'center';
			$('.location').style.marginTop = '20px';
		})

	function initMap() {
		const leng = {
			lat: -19.8975,
			lng: -43.9625
		}

		const options = {
			center: leng,
			zoom: 13
		}

		const map = new google.maps.Map(document.getElementById('map'), options);
	}
})();