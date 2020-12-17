import mongoose from 'mongoose';

const { Schema } = mongoose;

const ClinicSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  endereco: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cep: {
    type: String,
    required: true,
  },
  telefone: {
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
