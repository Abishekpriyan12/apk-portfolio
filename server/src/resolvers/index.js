// server/src/resolvers/index.js

import dotenv from 'dotenv';
dotenv.config();

import Profile from '../models/Profile.js';
import Project from '../models/Project.js';
import nodemailer from 'nodemailer';



const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',  // explicitly Gmail
  port: 465,               // implicit‐SSL
  secure: true,
  auth: {
    user: process.env.SMTP_USER,  // your.full@gmail.com
    pass: process.env.SMTP_PASS,  // 16-char App Password
  },
  logger: true,
  debug: true,
});

// Immediately verify connectivity:
transporter.verify(err => {
  if (err) console.error('✘ SMTP verify failed:', err);
  else     console.log('✔ SMTP ready (smtp.gmail.com:465)');
});


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
    sendMessage: async (_, { name, email, message }) => {
      console.log('📨 sendMessage called:', { name, email, message });
      try {
        const info = await transporter.sendMail({
          from: `"Contact Form" <${process.env.SMTP_USER}>`,
          to: process.env.MAIL_TO,
          subject: `New message from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });
        console.log('✅ Mail sent:', info.messageId);
        return true;
      } catch (err) {
        console.error('✘ sendMail error:', err);
        return false;
      }
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
