// ===== src/resolvers/index.js =====
import Project from '../models/Project.js'; // Mongoose model we'll define soon
import { uploadToCloudinary } from '../utils/cloudinary.js';

const resolvers = {
  Query: {
    projects: async () => {
      return await Project.find().sort({ _id: -1 });
    },
  },

  Mutation: {
    createProject: async (_, { title, description, imageUrl, url }) => {
      // if imageUrl is a local path/base64, upload to Cloudinary
      let finalImageUrl = '';
      if (imageUrl) {
        finalImageUrl = await uploadToCloudinary(imageUrl);
      }

      const newProject = new Project({
        title,
        description,
        imageUrl: finalImageUrl,
        url
      });
      return await newProject.save();
    },
  },
};

export default resolvers;
