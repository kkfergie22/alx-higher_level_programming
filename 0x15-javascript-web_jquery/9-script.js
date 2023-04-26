$(document).ready(function () {
  $.ajax({
    url: 'https://fourtonfish.com/hellosalut/?lang=fr',
    type: 'GET',
    success: function (data) {
      $('DIV#hello').text(data.hello);
    }
  });
});

