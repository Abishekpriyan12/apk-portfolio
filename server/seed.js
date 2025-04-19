
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';

// Models
import Profile from './src/models/Profile.js';
import Project from './src/models/Project.js';

// Load environment variables
dotenv.config();

// Read and parse the JSON data
const rawData = fs.readFileSync('./seed.json', 'utf-8');
const seedData = JSON.parse(rawData);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  seed();
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// Main function to seed data
async function seed() {
    try {
      await Profile.deleteMany({});
      await Project.deleteMany({});
  
      if (seedData.profile) {
        await Profile.create(seedData.profile);
        console.log('📌 Profile seeded successfully');
      }
  
      if (Array.isArray(seedData.projects)) {
        await Project.insertMany(seedData.projects);
        console.log(`📌 ${seedData.projects.length} projects seeded successfully`);
      }
  
      await mongoose.connection.close();
      console.log('🚪 MongoDB connection closed. All done!');
    } catch (error) {
      console.error('❌ Error while seeding:', error);
      await mongoose.connection.close();
    }
  }
  
