import { globalError } from "./middleware/globalErrorMiddleware.js";
import ClassLevelRouter from "./modules/Admin/class/class.routes.js";
import subjectRouter from "./modules/Admin/subject/subject.routes.js";
import teacherRouter from "./modules/Admin/teacher/teacher.routes.js";
import ParentRoutes from "./modules/Parent/parent.routes.js"
import GradeRoutes from "./modules/grades/grades.routes.js"
import AdminStudent from "./modules/Admin/student/student.routes.js"
import complaintRoutes from "./modules/complaints&Recommend/complaints.routes.js"
import adminAuth from "./modules/Admin/adminFeatures/auth.routes.js"

import { AppError } from "./utils/AppError.js";

export function bootstrap(app){
    app.get('/', (req, res) => res.send('Hello World!'))

    app.use("/api/v1/admin/auth",adminAuth)
    app.use("/api/v1/admin/teacher",teacherRouter)
    app.use("/api/v1/admin/subject",subjectRouter)
    app.use("/api/v1/admin/class",ClassLevelRouter)
    app.use("/api/v1/admin/student",AdminStudent)
    app.use('/api/v1/parent',ParentRoutes)
    app.use('/api/v1/grade',GradeRoutes)
    app.use('/api/v1/complaints',complaintRoutes)

  // url error
  app.use("*", (req, res, next) => {
    next(new AppError(`invalid url ${req.originalUrl}`, 404));
  });

  // globalError
  app.use(globalError);
}
