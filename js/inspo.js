$(document).ready(function(){
  //set bool for quote
  var hasQuote = false;
  //get quote and update page
	$(".get-quote-button").on("click", function(){
		$.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?", function(data){
      var quote = data;
      $(".quote-content").text(quote.quoteText);
      $(".quote-source").text("~" + quote.quoteAuthor);
      $('.tweet-quote').attr('href', 'https://twitter.com/home/?status=' + encodeURIComponent('"' + quote.quoteText + '" ' + quote.quoteAuthor));
    });
    //change bool 
    hasQuote = true;
    //use bool to change css style
    if(hasQuote){
      $(".quote").addClass('hasQuote')
    }
  });
  //open links in new tab
  $('.ext').on("click", function(){
    window.open(this.href, "_blank")
  })
});
