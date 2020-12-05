import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    const connectionObj = await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log(`Connected to DB: ${connectionObj.connection.host}`.cyan);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connectToDB;
