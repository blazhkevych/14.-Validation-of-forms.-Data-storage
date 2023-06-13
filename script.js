

// Function to set data in local storage
function setData(key, value) {
	localStorage.setItem(key, value);
}

// Function to get data from local storage
function getData(key) {
	return localStorage.getItem(key);
}

// Function to delete all data from local storage
function deleteData() {
	localStorage.clear();
}

// Function to validate email format
function validateEmail(email) {
	const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}

// Function to validate password format
function validatePassword(password) {
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
	return passwordRegex.test(password);
}

function loadpageIndex() {
	// Registration Form Validation
	document.getElementById('registrationForm').addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// Clear previous error messages
		clearErrors();

		// Get form inputs
		const email = document.getElementById('email').value;
		const password = document.getElementById('password').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		// Validate email
		if (!validateEmail(email)) {
			showError('email', 'Invalid email');
			return;
		}

		// Validate password
		if (!validatePassword(password)) {
			showError('password', 'Invalid password');
			return;
		}

		// Validate password confirmation
		if (password !== confirmPassword) {
			showError('confirmPassword', 'Passwords do not match');
			return;
		}

		// Store data in local storage
		setData('email', email);
		setData('password', password);

		// Redirect to user information page
		window.location.href = 'user.html';
	});
}
function loadpageUser() {
	// User Info Form Validation
	document.getElementById('userInfoForm').addEventListener('submit', function (event) {
		event.preventDefault(); // Prevent the default form submission behavior

		// Clear previous error messages
		clearErrors();

		// Get form inputs
		const name = document.getElementById('name').value;
		const surname = document.getElementById('surname').value;
		const birthYear = document.getElementById('birthYear').value;
		const gender = document.getElementById('gender').value;
		const phoneNumber = document.getElementById('phoneNumber').value;
		const skype = document.getElementById('skype').value;

		// Validate name
		if (!validateName(name)) {
			showError('name', 'Invalid name');
			return;
		}

		// Validate surname
		if (!validateSurname(surname)) {
			showError('surname', 'Invalid surname');
			return;
		}

		// Validate birth year
		if (!validateBirthYear(birthYear)) {
			showError('birthYear', 'Invalid birth year');
			return;
		}

		// Validate gender
		if (!validateGender(gender)) {
			showError('gender', 'Please select a gender');
			return;
		}

		// Validate phone number
		if (phoneNumber && !validatePhoneNumber(phoneNumber)) {
			showError('phoneNumber', 'Invalid phone number');
			return;
		}

		// Store data in local storage
		setData('name', name);
		setData('surname', surname);
		setData('birthYear', birthYear);
		setData('gender', gender);
		setData('phoneNumber', phoneNumber);
		setData('skype', skype);

		// Redirect to user information page
		window.location.href = 'user.html';
	});
}
// Validate name
function validateName(name) {
	const nameRegex = /^[a-zA-Z]+$/;
	return nameRegex.test(name);
}

// Validate surname
function validateSurname(surname) {
	const surnameRegex = /^[a-zA-Z]+$/;
	return surnameRegex.test(surname);
}

// Validate birth year
function validateBirthYear(birthYear) {
	const currentYear = new Date().getFullYear();
	return birthYear >= 1900 && birthYear <= currentYear;
}

// Validate gender
function validateGender(gender) {
	return gender !== '';
}

// Validate phone number
function validatePhoneNumber(phoneNumber) {
	const phoneNumberRegex = /^[0-9\s\(\)\-]{10,12}$/;
	return phoneNumberRegex.test(phoneNumber);
}

// Clear error messages
function clearErrors() {
	const errorElements = document.getElementsByClassName('error');
	for (let i = 0; i < errorElements.length; i++) {
		errorElements[i].textContent = '';
	}
}

// Show error message
function showError(fieldId, errorMessage) {
	const errorElement = document.getElementById(fieldId + 'Error');
	errorElement.textContent = errorMessage;
}

// Delete local storage and redirect to registration page
function deleteLocalStorageAndRedirect() {
	deleteData();
	window.location.href = 'index.html';
}
