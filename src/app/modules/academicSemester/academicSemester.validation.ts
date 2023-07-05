import { z } from 'zod';
import { academicSemesterMonths } from './academicSemester.constants';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autumn', 'Summer', 'Fall'], {
      required_error: 'Title is Required',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum(['01', '02', '03'], {
      required_error: 'code is required',
    }),
    stratMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'Start Month is required',
    }),
    endMonth: z.enum([...academicSemesterMonths] as [string, ...string[]], {
      required_error: 'End Month is required',
    }),
  }),
});
export const AcademicSemesterValidation = { createAcademicSemesterZodSchema };
