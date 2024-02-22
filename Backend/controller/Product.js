const Product = require("../models/Product");

const mongoose = require("mongoose");

exports.getAllProducts = async (req, res) => {
  try {
    const productArray = await Product.find({});
    res.json({ products: productArray });
  } catch (error) {
    console.log(error);
  }
};

exports.getSearchResults = async (req, res) => {
  try {
    const searchmethod = req.query.method;
    const searchString = req.query.searchString;
    let foundProducts;
    if (searchmethod == 'tags') {
      foundProducts = await Product.find({ tags: searchString });
    }
    else {
      foundProducts = await Product.find({ title: new RegExp(searchString, 'i') })
    }
    res.status(201).json({ foundProducts });
  } catch (error) {
    console.log(error);
  }
}

exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.query.productId;
    const product = await Product.find({ _id: id });
    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};



exports.postProduct = async (req, res) => {
  try {
    // const productDetails = req.body;
    const { title, description, age, price,owner, address,tags } = req.body;
    const images = req.files.map(file => "http://localhost:8000/images/"+file.filename);

    let newProduct = new Product({
      title: title,
      expectedPrice: price,
      oldness: age,
      description: description,
      owner: owner,
      imgs: images,
      address: address,
      tags:tags
    });
    await newProduct.save();
    res.status(201).json({ message: "Product Added Successfully !" });
  } catch (error) {
    console.log(error);
  }
};
