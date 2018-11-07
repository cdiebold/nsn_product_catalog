exports.getContactPage = (req, res) => {
  res.render('contact', { path: '/contact' });
};

exports.postComment = (req, res) => {
  const title = req.body.title;
  const message = req.body.message;
  const comment = new Comment(title, message);
  // save to database
  // if valid email it.
  console.log(req.body);
  res.redirect('/');
};
