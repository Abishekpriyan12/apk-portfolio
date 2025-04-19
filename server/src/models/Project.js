import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    tagline: { type: String },             // your new “short headline”
    description: { type: String, required: true },

    features: {                             // bullet‑point list
      type: [String],
      default: []
    },
    technologies: {                         // tech‑pill list
      type: [String],
      default: []
    },

    category: {
      type: String,
      enum: ['WEB_DEV', 'DIGITAL_MEDIA', 'VIDEOGRAPHY'],
      required: true,
    },

    imageUrl:  { type: String },            // screenshot / poster
    projectUrl:{ type: String },            // live link
    videoUrl:  { type: String },            // demo video link

    comingSoon: {                           // optional flag
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model('Project', projectSchema);
