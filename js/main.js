
function interrogate () {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log(fullName);

	function ageQuestion(message) {

		var age = prompt(message);
		age = parseInt(age);

		if(isNaN(age)) {
			ageQuestion('How old are you? Use numbers, please.');
			return false;

		}

		if (age >= 18) {
			console.log('User is an adult');
		} else if (age >=13){
				console.log('User is a teenager')
		} else {
				console.log('User is a child');
		}

	}

	ageQuestion('How old are you?');

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase !== 'assembly') {
		console.log('Hello');
	} else if (lastName === 'Assembly'){
			console.log('Bye');
	}

	var faveColour = prompt('What is your fave colour?');
	faveColour = faveColour.toLowerCase().trim();
	if (faveColour === 'red'||
		faveColour === 'green'||
		faveColour === 'blue' ||
		faveColour === 'yellow') {
		$('h1').css('color', faveColour);
	}

}

//When the page loads
$(function() {

	$('img').on('click', interrogate);


	//When the user clicks a h3
	$('h3').on('click', function() {

		//Hide the next element
		$(this).next().slideToggle(200);

	});


});