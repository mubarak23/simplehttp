const http = new easyhttp();

//get post
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

//Get single post

http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//Create Data
const data = {
  title: 'Custom post',
  user_id: 2,
  body: 'this is a custom post'
};
//POST request
http.post('https://jsonplaceholder.typicode.com/posts', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//Updating post

http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(
  err,
  post
) {
  if (err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

//Delete a post
http.delete('https://jsonplaceholder.typicode.com/posts/5', function(
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
