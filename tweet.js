$('.share').on("click",function(){ //start of function & gets button
  
var getQuote = document.getElementById("thequote").innerHTML, //get author and quote from HTML
		getAuthor = document.getElementById("author").innerHTML;
		 
  
   window.open("https://twitter.com/intent/tweet?url=" + "&text=" + getQuote + "%0D%0A%0D%0A" + getAuthor + "&Ryan&", "twitterwindow","height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
}); //opens up a twitter parent page with quote, and author! 
