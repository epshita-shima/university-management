import express, { Application } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/user/user.route';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// application route
app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
// testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Working successfully')
//   throw new Error('Testing Error logger')
//   //   Promise.reject(new Error('Unhandel Promise Rejection'))
// })

//global error handeler

app.use(globalErrorHandler);

export default app;
