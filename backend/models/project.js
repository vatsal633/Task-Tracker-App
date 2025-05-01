import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  user: { type: String, ref: 'login', required: true },
  title: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'task'}]
});

const project = mongoose.model('Projects',projectSchema)
export default project