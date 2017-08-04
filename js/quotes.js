$(document).ready(function() {
  function fetchQoute() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      }
    })
      .done(update)
      .fail(handleErr);
  }

  function update(response) {
    if (response.quoteText.trim().length > 100) {
      fetchQoute();
    } else {
      $('.quotes-content span').html(response.quoteText.trim());
    }
  }

  function handleErr(jqxhr, textStatus, err) {
    console.log('Request Failed: ' + textStatus + ', ' + err);
  }

  fetchQoute();
});
