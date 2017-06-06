$(document).ready( function() {

	/*----------------------/
	/* COUNTDOWN
	/*---------------------*/

	/* the date value below is for demo purpose only
	 * normally you would provide the value with format YYYY, MM, DD in which the countdown should stop counting
	 */
	var dateUntil = new Date(new Date().getFullYear() + 1, -5, 0);

	/*
		STOP CHANGING THE REST OF THE CODES UNLESS YOU KNOW WHAT YOU ARE DOING
	*/

	$('.countdown').countdown({ 
		until: dateUntil, 
	});
});