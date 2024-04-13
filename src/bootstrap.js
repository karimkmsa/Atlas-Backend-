import { globalError } from "./middleware/globalErrorMiddleware.js";
import ClassLevelRouter from "./modules/Admin/class/class.routes.js";
import subjectRouter from "./modules/Admin/subject/subject.routes.js";
import teacherRouter from "./modules/Admin/teacher/teacher.routes.js";
import StudentRoutes from "./modules/Student/student.routes.js"
import ParentRoutes from "./modules/Parent/parent.routes.js"
import GradeRoutes from "./modules/grades/grades.routes.js"

import { AppError } from "./utils/AppError.js";

export function bootstrap(app){
    app.get('/', (req, res) => res.send('Hello World!'))  

    app.use("/api/v1/teacher",teacherRouter)
    app.use("/api/v1/subject",subjectRouter)
    app.use("/api/v1/class",ClassLevelRouter)
    app.use('/api/v1/student',StudentRoutes)
    app.use('/api/v1/Parent',ParentRoutes)
    app.use('/api/v1/Grade',GradeRoutes)
  // url error
  app.use("*", (req, res, next) => {
    next(new AppError(`invalid url ${req.originalUrl}`, 404));
  });

  // globalError
  app.use(globalError);
}
