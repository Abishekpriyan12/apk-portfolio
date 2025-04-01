// ===== src/models/Project.js =====
import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  imageUrl: String,
  url: String,
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);
