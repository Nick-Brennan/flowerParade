//This is the short-hand form of the jquery document.ready()
$(function(){

	  //this line takes the script template(#flower-template) from the inline HTML script and creates a function using underscore.js
    var flowerTemplate = _.template($('#flower-template').html());

     //this line uses the generated function to produce HTML dynamically.
    var flowerHtml = flowerTemplate(flower);
    
    //this line appends the dynamically generated HTML to a <div> with the id "container"
    $("#container").append(flowerHtml);
});