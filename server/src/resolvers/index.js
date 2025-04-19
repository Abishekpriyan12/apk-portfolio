// server/src/resolvers/index.js
import Profile from '../models/Profile.js';
import Project from '../models/Project.js';

const resolvers = {
  Query: {
    // Returns your single profile document, including all nested fields
    getProfile: async () => {
      return await Profile.findOne();
    },

    // If you ever need to fetch projects stand‑alone
    getProjects: async (_, { category }) => {
      const filter = {};
      if (category) filter.category = category;
      return await Project.find(filter).sort({ createdAt: -1 });
    },
  },

  Profile: {
    // Resolve the nested `projects` field on Profile
    projects: async (parent) => {
      // single‑user setup: return all projects
      return await Project.find().sort({ createdAt: -1 });
    }
  },

  Mutation: {
    // createProfile now accepts all of the nested arrays
    createProfile: async (
      _,
      {
        firstName,
        lastName,
        tagline,
        resumeUrl,
        socialLinks,
        education,
        experience,
        certifications
      }
    ) => {
      const newProfile = new Profile({
        firstName,
        lastName,
        tagline,
        resumeUrl,
        socialLinks,
        education,
        experience,
        certifications
      });
      return await newProfile.save();
    },

    // updateProfile updates all those fields too
    updateProfile: async (
      _,
      {
        _id,
        firstName,
        lastName,
        tagline,
        resumeUrl,
        socialLinks,
        education,
        experience,
        certifications
      }
    ) => {
      const updates = {
        firstName,
        lastName,
        tagline,
        resumeUrl,
        socialLinks,
        education,
        experience,
        certifications
      };
      return await Profile.findByIdAndUpdate(_id, updates, { new: true });
    },

    // createProject now takes a single `input` object matching ProjectInput
    createProject: async (_, { input }) => {
      const newProject = new Project(input);
      return await newProject.save();
    },

    // updateProject likewise
    updateProject: async (_, { _id, input }) => {
      return await Project.findByIdAndUpdate(_id, input, { new: true });
    }
  }
};

export default resolvers;
