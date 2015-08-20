$(function(){
    var flowerTemplate = _.template($('#flower-template').html());
    var flowerHtml = flowerTemplate(flower);
    console.log(flower.color);
    console.log(flowerHtml);
    $("#container").append(flowerHtml);
});