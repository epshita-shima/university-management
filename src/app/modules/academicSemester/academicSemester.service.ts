import httpStatus from 'http-status';
import APIError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constants';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new APIError(httpStatus.BAD_REQUEST, 'Invalid semestre code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};
export const AcademicSemesterService = {
  createSemester,
};
