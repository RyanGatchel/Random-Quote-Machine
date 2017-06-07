$('.share').on("click",function(){
  
var getQuote = document.getElementById("thequote").innerHTML,
		getAuthor = document.getElementById("author").innerHTML;
		 
  
   window.open("https://twitter.com/intent/tweet?url=" + "&text=" + getQuote + "%0D%0A%0D%0A" + getAuthor + "&Ryan&", "twitterwindow","height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
});
