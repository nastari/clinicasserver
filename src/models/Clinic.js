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
    type: String,
    default: false
  },
  PCMSO: {
    type: String,
    default: false
  },
  EXCLI: {
    type: String,
    default: false
  },
  EXCOM: {
    type: String,
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
