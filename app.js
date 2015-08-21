//This is the short-hand form of the jquery document.ready()
$(function(){
    var comment = "The first scientific description of a Gerbera was made by J.D. Hooker in Curtis's Botanical Magazine in 1889 when he described Gerbera jamesonii, a South African species also known as Transvaal daisy or Barberton Daisy";
    var flower = new Flower("Daisy", "pink", 89, false, "Africa", 0, comment);

	  //this line takes the script template(#flower-template) from the inline HTML script and creates a function using underscore.js
    var flowerTemplate = _.template($('#flower-template').html());

     //this line uses the generated function to produce HTML dynamically.
    var flowerHtml = flowerTemplate(flower);
    console.log(flowerHtml);
    //this line appends the dynamically generated HTML to a <div> with the id "container"
    $("#container").append(flowerHtml);
});