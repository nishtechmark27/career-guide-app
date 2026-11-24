import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env is loaded from server directory
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27018/career_guidance_db';
const DB_NAME = process.env.DB_NAME || 'career_guidance_db';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URI, {
      dbName: DB_NAME,
      autoIndex: true, // Build indexes automatically
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging
    });

    console.log(`\x1b[32m✔ MongoDB Connected Successfully:\x1b[0m ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`);
    return conn;
  } catch (error) {
    console.error(`\x1b[31m✖ MongoDB Connection Error:\x1b[0m ${error.message}`);
    console.log(`\x1b[33mℹ Target URI: ${MONGODB_URI}\x1b[0m`);
    // Do not terminate process; allow auto-reconnect and graceful error handling
    return null;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log('\x1b[33m⚠ MongoDB connection lost. Attempting reconnection...\x1b[0m');
});

mongoose.connection.on('error', (err) => {
  console.error('\x1b[31m✖ MongoDB runtime error:\x1b[0m', err.message);
});

export default connectDB;
