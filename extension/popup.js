let circles = document.querySelectorAll('.disable_slider-circle');

circles.forEach((circle) => {
	circle.addEventListener('click', function () {
		this.parentElement.classList.toggle('disabled-bg');

		this.classList.toggle('disabled');
	});
});
