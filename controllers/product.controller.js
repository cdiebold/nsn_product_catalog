exports.getAllProducts = (req, res) => {
  console.log("I made it to the product route");
  res.render("product-index", { path: '/products'});
};

exports.getProductDetail = (req,res,next) => {
  const nsn = req.params.nsn;
  const part_number = req.params.part_number;

  // query db for product that matches that nsn and part number

  res.redirect('/');
};
