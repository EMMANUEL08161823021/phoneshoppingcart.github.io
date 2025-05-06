const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');

dotenv.config();

const products = [
    {
        name: 'iPhone 14',
        weight: '172g',
        height: '146.7mm',
        battery: 'Up to 20 hours',
        capacity: '128GB',
        amount: 799,
        category: 'Phones',
        image: '/images/iphone14.png',
    },
    {
        name: 'iPhone 14',
        weight: '172g',
        height: '146.7mm',
        battery: 'Up to 20 hours',
        capacity: '128GB',
        amount: 799,
        category: 'Phones',
        image: '/images/iphone14.png',
    },
    {
        name: 'iPhone 13',
        weight: '172g',
        height: '146.7mm',
        battery: 'Up to 20 hours',
        capacity: '128GB',
        amount: 799,
        category: 'Phones',
        image: '/images/iphone14.png',
    },
    {
        name: 'iPhone 12',
        weight: '172g',
        height: '146.7mm',
        battery: 'Up to 20 hours',
        capacity: '128GB',
        amount: 799,
        category: 'Phones',
        image: '/images/iphone14.png',
    },
    {
        name: 'MacBook Air 2022',
        weight: '1.24kg',
        height: '11.3mm',
        battery: 'Up to 18 hours',
        capacity: '256GB',
        amount: 1199,
        category: 'Laptops',
        image: '/images/macbookair2022.png',
    },
    {
        name: 'iPad Pro',
        weight: '682g',
        height: '280.6mm',
        battery: 'Up to 10 hours',
        capacity: '256GB',
        amount: 1099,
        category: 'Ipads',
        image: '/images/ipadpro.png',
    },
    {
        name: 'Apple Watch Series 8',
        weight: '42.3g',
        height: '45mm',
        battery: 'Up to 18 hours',
        capacity: '32GB',
        amount: 399,
        category: 'Watches',
        image: '/images/applewatch8.png',
    },
];

const seedProducts = async () => {
    try {
        console.log('MONGO_URI:', process.env.MONGO_URI);

        await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'gadgetDb',
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
        });
        console.log('MongoDB connected');

        await Product.deleteMany({});
        console.log('Existing products cleared');

        const insertedProducts = await Product.insertMany(products, { timeout: 30000 });
        console.log(`Inserted ${insertedProducts.length} products`);

        await mongoose.disconnect();
        console.log('MongoDB disconnected');
    } catch (err) {
        console.error('Insertion error:', err);
        if (err.name === 'MongoServerSelectionError') {
            console.error('Could not connect to MongoDB. Check MONGO_URI, network, or Atlas whitelist.');
        } else if (err.name === 'MongoBulkWriteError') {
            console.error('Bulk write error. Check schema or duplicate keys.');
        }
        process.exit(1);
    }
};

seedProducts();