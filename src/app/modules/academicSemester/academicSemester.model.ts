import { Schema, model } from 'mongoose';
import {
  IAcademicSemester,
  AcademicSemesterModel,
} from './academicSemester.interface';
import { academicSemesterMonths } from './academicSemester.constants';

const academicSemesterSchema = new Schema<IAcademicSemester>({
  title: { type: String, required: true, enum: ['Autumn', 'Summer', 'Fall'] },
  year: { type: Number, required: true },
  code: { type: String, required: true, enum: ['01', '02', '03'] },
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

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemeter',
  academicSemesterSchema
);
