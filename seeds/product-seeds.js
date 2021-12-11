const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 14.99,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: 'Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Bucket Hats',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Cozy Sweaters',
    price: 12.99,
    stock: 20,
    category_id: 3,
  },
  {
    product_name: 'Distressed Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
