 //Als de server de Query heeft vergeleken met de database, en de matching users terugstuurt

 var onReceiveServ = function(response) {

  $('#searchResult p').remove();
   for (i = 0; i < response.length; i++) {


     $('#searchResult').append("<p>" + response[i] + "</p>");

   }

 };


 //Als je op search klikt

 var onSubmitFunc = function(e) {

   e.preventDefault();
   var result = $('#searchRes').val();
   //$('#searchResult h4').remove();
   $('#searchResult p').remove();
   $.post('/searchResults', result, onReceiveServ);

 };

 $('form').submit(onSubmitFunc);

 //Als je een Key indrukt in de zoekbar

 var onKeyPress = function() {

   var result = $('#searchRes').val();

   if (result === '') {

     $('#searchResult p').remove();
     return
   }

   $.post('/searchResults', result, onReceiveServ);

 }

 $('#searchRes').keyup(onKeyPress);