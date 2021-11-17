let circles = document.querySelectorAll('.disable_slider-circle');

circles.forEach((circle) => {
	circle.addEventListener('click', function () {
		this.parentElement.classList.toggle('disabled-bg');
		this.classList.toggle('disabled');

		// TODO send disable action to content.js
		if (!this.classList.contains('disabled')) {
			//
			console.log(this.id, 'is disabled');
			// TODO write send disable action
		}
	});
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request.greeting);
});
