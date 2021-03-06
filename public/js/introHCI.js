'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	 $('#colorBtn').click(randomizeColors);
}
function add(result){
	console.log(result);
	// var selector = '#'+result.id;
	var projectHTML = '<img src=' + result.image + ' class="detailsImage"/>' +
	'<p>' + result.title + '</p>' +
	'<p>' + result.date + '</p>' +
	'<p>' + result.summary + '</p>';

	var selector = '#project'+result.id + ' .details';
	console.log($(selector).length)
	$(selector).html(projectHTML);
}
/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);
	


	console.log("User clicked on project " + idNumber);
	
	var url = 'project/' + idNumber;
	console.log(url);
	$.get(url, add)
}