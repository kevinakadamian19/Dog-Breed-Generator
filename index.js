'use strict';

const searchURL = 'https://dog.ceo/api/breed';

function searchBreed() {
	
}

function getRandomDoggo() {
	fetch('https://dog.ceo/api/breed/hound/images/random')
	.then(response => response.json())
	.then(responseJson => console.log(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function displayRandomDoggo() {


}

function formSubmission() {
	$('form').submit(event => {
		event.preventDefault();
		getRandomDoggo();
	});
}

function renderDoggos() {
	console.log('App is loaded. Waiting for doggos!');
	formSubmission();
}

renderDoggos();