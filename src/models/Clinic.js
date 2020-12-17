import mongoose from 'mongoose';

const { Schema } = mongoose;

const ClinicSchema = new Schema({
  NAME: {
    type: String,
    required: true,
  },
  ENDEREÇO: {
    type: String,
    required: true,
  },
  EMAIL: {
    type: String,
    required: true,
  },
  CEP: {
    type: String,
    required: true,
  },
  WHATSAPP: {
    type: String,
    required: true,
  },
  PPRA: {
    type: Boolean,
    default: false
  },
  PCMSO: {
    type: Boolean,
    default: false
  },
  EXCLI: {
    type: Boolean,
    default: false
  },
  EXCOM: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
});

export default mongoose.model('Clinic', ClinicSchema);
