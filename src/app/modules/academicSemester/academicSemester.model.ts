import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import {
  academicSemesterCodes,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constants';
import APIError from '../../../errors/ApiError';
import httpStatus from 'http-status';
const academicSemesterSchema = new Schema<IAcademicSemester>({
  title: { type: String, required: true, enum: academicSemesterTitles },
  year: { type: Number, required: true },
  code: { type: String, required: true, enum: academicSemesterCodes },
  startMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonths,
  },
  endMonth: {
    type: String,
    required: true,
    enum: academicSemesterMonths,
  },
});

academicSemesterSchema.pre('save', async function (next) {
  const isExit = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExit) {
    throw new APIError(
      httpStatus.CONFLICT,
      'Academic semestre is already exit'
    );
  }
  next();
});
export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemeter',
  academicSemesterSchema
);
