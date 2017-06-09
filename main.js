$('.newQuote').on("click",function(){ //start of function 
  $('.thequote').text(); //button
  $('.author').text(); //button
$.ajax({
  type: "GET", //calls API
  url:  "https://random-quote-generator.herokuapp.com/api/quotes/random", //API
  success: function(randomQuote){ // What happens when it works!
    $('.thequote').text(randomQuote.quote); //You get random quote pulled from server
    $('.author').text( "- " + randomQuote.author); //get author of quote! 
  },
  }); 
}); 
