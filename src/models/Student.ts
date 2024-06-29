import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
  name: string;
  email: string;
  phone: string;
  enrollNumber: string;
  dateOfAdmission: string;
}

const StudentSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  enrollNumber: { type: String, required: true, unique: true },
  dateOfAdmission: { type: String, required: true },
});

export default mongoose.model<IStudent>("Student", StudentSchema);
