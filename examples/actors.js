var imdb = require('../index');

imdb('nm0000237', function(err, data) {
  if(err)
    console.log(err.stack);

  if(data)
    console.log(data);
});
