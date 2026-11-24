import { MongoMemoryServer } from 'mongodb-memory-server';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, 'data/db');

if (!fs.existsSync(dbPath)) {
  fs.mkdirSync(dbPath, { recursive: true });
}

console.log('\x1b[36m🚀 Starting Local MongoDB Instance on port 27018 with persistent storage...\x1b[0m');

try {
  const mongod = await MongoMemoryServer.create({
    instance: {
      port: 27018,
      dbName: 'career_guidance_db',
      dbPath: dbPath,
      storageEngine: 'wiredTiger'
    }
  });

  const uri = mongod.getUri();
  console.log(`\x1b[32m✔ Local MongoDB Server running successfully on:\x1b[0m ${uri}`);
  console.log(`\x1b[32m✔ Target Database:\x1b[0m career_guidance_db`);
  console.log(`\x1b[32m✔ Persistent Data Directory:\x1b[0m ${dbPath}`);

  // Keep process alive
  process.on('SIGINT', async () => {
    console.log('Shutting down MongoDB server...');
    await mongod.stop();
    process.exit(0);
  });
} catch (err) {
  console.error('\x1b[31m✖ Error starting MongoDB instance:\x1b[0m', err.message);
}
