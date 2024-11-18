// play with jQuery
$('body').hide().fadeIn(3000);

//hide all images, hide all the links
$('img').hide();
//$('a').hide(); <-- hide links

//test the event
$('h1').click(hidesection);
function hidesection(){
    $(this).text("Hiding......");
    $('body').children('p').slideToggle();
}

//test for each
$('a').each(change);
function change(){
    var links = $(this).attr('href');
    console.log(links);
    $(this).attr('href',"https://www.google.com");
}

$('img').each(imgchange);
function imgchange(){
    
}
