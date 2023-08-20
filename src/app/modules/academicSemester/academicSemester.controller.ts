import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendReponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constrants/pagination';

const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );

    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
    next();
  }
);

const getAllSemesters = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, ['searchTerm']);
    const paginationOptions = pick(req.query, paginationFields);
    console.log(paginationOptions);
    const result = await AcademicSemesterService.getAllSemesters(
      filters,
      paginationOptions
    );
    sendReponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester retrived successfully',
      meta: result.meta,
      data: result.data,
    });
    next();
  }
);
export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
};
