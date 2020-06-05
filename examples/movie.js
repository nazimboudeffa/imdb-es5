var imdb = require('../index');

imdb('tt0110912', function(err, data) {
  if(err)
    console.log(err.stack);

  if(data)
    console.log(data);
});
