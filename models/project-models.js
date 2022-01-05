import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const projectSchema = new mongoose.Schema({
  projectTitle: { type: String, required: true, maxlength: 150 },
  primaryDescription: { type: String, required: true, maxLength: 250 },
  secondaryDescription: { type: String, maxLength: 400 },
  primaryImage: { type: String, required: true },
  secondaryImage: [{ type: String }],
  categoryTag: [{ type: String }],
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: false },
})

projectSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('Projects', projectSchema)