$(function() {
  $.getJSON('info.json', function(data){
    var template = $("#booksTemplate").html();
    var html = Mustache.to_html(template, data);
    $("#booksBox").html(html);

    $("#booksBox").cycle({
      fx: 'turnDown',
      pause: 1,
      next: "#next",
      prev: "#prev",
      speed: 1000,
      timeout: 5000,
      cleartype: true,
      cleartypeNoBg: true
    });
  });
});
