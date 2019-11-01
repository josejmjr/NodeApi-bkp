const mongoose = require('mongoose');
const Product = mongoose.model('Product');

Product.create({
        title: 'Apple',
        description: 'MacBook',
        url: 'http://www.apple.com'
});

module.exports = {
    async index(req, res){
        const products = await Product.find();

        return res.json(products);
    },
}

