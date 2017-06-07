$('.newQuote').on("click",function(){
  $('.thequote').text();
  $('.author').text();
$.ajax({
  type: "GET",
  url:  "https://random-quote-generator.herokuapp.com/api/quotes/random",
  success: function(randomQuote){
    $('.thequote').text(randomQuote.quote);
    $('.author').text( "- " + randomQuote.author);
  },
  }); 
});
