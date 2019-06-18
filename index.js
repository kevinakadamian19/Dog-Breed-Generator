'use strict';

function getRandomDoggo() {
	let breed = $('#js-search-breed').val();
	fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
	.then(response => response.json())
	.then(responseJson => displayRandomDoggo(responseJson))
	.catch(error => alert('Something went wrong. Try again later.'));
}

function displayRandomDoggo(responseJson) {
	console.log(responseJson);
	$('.results').append(
		`<img src="${responseJson.message}" alt="Random Dog Breed">`
		);
	$('.results').removeClass('hidden');
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