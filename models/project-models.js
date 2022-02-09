import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'


const projectCommentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxLength: 300 },
  microPay: { type: Number, min: 1 },
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
} , {
  timestamps: true,
})

const projectSchema = new mongoose.Schema({
  website: { type: String, required: true, maxlength: 250 },
  hyperlink: { type: String, required: true, maxLength: 200 },
  credit: { type: String, required: true, maxLength: 250 },
  description: { type: String, required: true, maxLength: 400 },
  video: { type: String, required: true },
  categoryTag: [{ type: String }],
  comments: [projectCommentSchema],
  loved: { type: Boolean },
  favouritedBy: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  addedBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
})

projectSchema.plugin(mongooseUniqueValidator)

export default mongoose.model('Projects', projectSchema)