const $slideshow = document.querySelector('#slideshow');
const $imagePreviewer = document.querySelector('#image-previewer');
const $backdrop = document.querySelector('#backdrop');
const $closeButton = document.querySelector('#close-button');
const $nextButton = document.querySelector('#next-button');
const $prevButton = document.querySelector('#prev-button');
let counter = 1;

const assignImageSource = () => {
	$imagePreviewer.src = `/images/${counter}.jpg`;
};

const endSlideshow = () => {
	$backdrop.classList.add('hide');
};

const openSlideshow = $slideshow.addEventListener('click', event => {
	$backdrop.classList.remove('hide');
	event.preventDefault();
});

$nextButton.addEventListener('click', () => {
	if (counter !== 12) {
		counter = counter + 1;
		assignImageSource(counter);
	} else {
		endSlideshow();
	}
});

$prevButton.addEventListener('click', () => {
	if (counter !== 1) {
		counter = counter - 1;
		assignImageSource(counter);
	} else {
		endSlideshow();
	}
});

$closeButton.addEventListener('click', () => {
	endSlideshow();
});
