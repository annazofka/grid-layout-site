const $allImages = document.querySelector('#list-of-images');
const $slideshow = document.querySelector('#slideshow');
const $imagePreviewer = document.querySelector('#image-previewer');
const $backdrop = document.querySelector('#backdrop');
const $closeButton = document.querySelector('#close-button');
const $nextButton = document.querySelector('#next-button');
const $prevButton = document.querySelector('#prev-button');
let counter = 0;

const assignImageSource = imageId => {
	$imagePreviewer.src = `/images/${imageId}.jpg`;
};

const startSlideshow = () => {
	$backdrop.classList.remove('hide');
};

const endSlideshow = () => {
	$backdrop.classList.add('hide');
};

$allImages.addEventListener('click', event => {
	if (event.target.localName === 'img') {
		const imageId = event.target.id;
		counter = imageId * 1;
		assignImageSource(imageId);
		startSlideshow();
	}
});

const openSlideshow = $slideshow.addEventListener('click', event => {
	counter = 0;
	startSlideshow();
	event.preventDefault();
});

$nextButton.addEventListener('click', event => {
	event.stopPropagation();
	if (counter < 11) {
		counter = counter + 1;
		assignImageSource(counter);
	} else {
		endSlideshow();
	}
});

$nextButton.addEventListener('keydown', event => {
	event.stopPropagation();
	if (counter < 11) {
		counter = counter + 1;
		assignImageSource(counter);
	} else {
		endSlideshow();
	}
});

$prevButton.addEventListener('click', event => {
	event.stopPropagation();
	if (counter > 0) {
		counter = counter - 1;
		assignImageSource(counter);
	} else {
		endSlideshow();
	}
});

$closeButton.addEventListener('click', () => {
	endSlideshow();
});

$imagePreviewer.addEventListener('click', event => {
	event.stopPropagation();
});
