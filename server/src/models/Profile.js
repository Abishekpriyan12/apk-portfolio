// server/src/models/Profile.js
import mongoose from 'mongoose';

const socialLinkSchema = new mongoose.Schema({
  platform: { type: String, required: true },
  url:      { type: String, required: true },
});

const educationSchema = new mongoose.Schema({
  dateRange:   { type: String, required: true },
  title:       { type: String, required: true },
  institution: { type: String, required: true },
  description: String,
});

// ← UPDATED:
const experienceSchema = new mongoose.Schema({
  dateRange:  { type: String, required: true },
  role:       { type: String, required: true },
  company:    { type: String, required: true },
  companyUrl: { type: String },         // new
  logo:       { type: String },         // new
  location:   { type: String },         // new
  summary:    { type: String },         // new (your one‑line summary)
  bullets:    [String],                 // new (array of bullet points)
  techStack:  [String],                 // new (array of tech tags)
});

const certificationSchema = new mongoose.Schema({
  title:     { type: String, required: true },
  authority: { type: String, required: true },
  year:      { type: Number, required: true },
});

const profileSchema = new mongoose.Schema(
  {
    firstName:   { type: String, required: true },
    lastName:    { type: String, required: true },
    tagline:     String,
    resumeUrl:   String,
    socialLinks: [socialLinkSchema],
    education:   [educationSchema],
    experience:  [experienceSchema],   // ← now uses the updated schema
    certifications: [certificationSchema],
  },
  { timestamps: true }
);

export default mongoose.model('Profile', profileSchema);
