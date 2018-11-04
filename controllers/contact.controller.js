exports.getContactPage = (req, res) => {
  res.render('contact', { path: '/contact' });
};

exports.postComment = (req, res) => {

  console.log(req.body);
  res.redirect('/');
};
