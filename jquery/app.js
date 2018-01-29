var $h1 = $('<h1> fuck u</h1>')
$h1.css('color', 'red')
$h1.hide()
$('body').append($h1)
$h1.slideDown()


$('h1').click(function(event) {
  console.log('clicked h1');
  var url = 'https://www.reddit.com/.json'
  $.get(url)
    .then(function(response) {
      var posts = response.data.children
      var $ul = $('<ul></ul>')
      for (var i = 0; i < posts.length; i++) {
        var title = posts[i].data.title;
        var $li = $('<li>' + title + '</li>')
        $ul.append($li)
      }
      $('body').append($ul)
    })
    .catch(function(error) {
      console.error(error);
    })
})
