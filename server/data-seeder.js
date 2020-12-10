import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import products from './data/products.js';
import users from './data/users.js';
import Order from './models/Order.js';
import Product from './models/Product.js';
import User from './models/User.js';
import colors from 'colors';

dotenv.config();
connectToDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Importing data...'.blue.bold);
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers.find(user => user.isAdmin === true);
    products.map(product => (product.user = adminUser));
    await Product.insertMany(products);
    console.log('Data imported successfully!'.green.bold);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log('Data destroyed successfully'.red.bold);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
