import { globalError } from "./middleware/globalErrorMiddleware.js";
import ClassLevelRouter from "./modules/Admin/class/class.routes.js";
import subjectRouter from "./modules/Admin/subject/subject.routes.js";
import AdminteacherRouter from "./modules/Admin/teacher/teacher.routes.js";
import MedicalRecord from "./modules/medicalRecord/medicalRecord.routes.js"
import GradeRoutes from "./modules/grades/grades.routes.js"
import AdminStudent from "./modules/Admin/student/student.routes.js"
import complaintRoutes from "./modules/complaints&Recommend/complaints.routes.js"
import adminAuth from "./modules/Admin/adminFeatures/auth.routes.js"
import parentRouter from "./modules/Admin/parent/parent.routes.js"
import loginRouter from "./modules/auth/auth.routes.js";
import enrollmentRouter from "./modules/Admin/enrollment/enrollment.routes.js";
import { AppError } from "./utils/AppError.js";


export function bootstrap(app){
    app.get('/', (req, res) => res.send('Hello World!'))
    app.use("/api/v1/user/auth",loginRouter)
    app.use("/api/v1/admin/auth",adminAuth)
    app.use("/api/v1/admin/enrollment",enrollmentRouter)
    app.use("/api/v1/admin/teacher",AdminteacherRouter)
    app.use("/api/v1/admin/parent",parentRouter)
    app.use("/api/v1/admin/student",AdminStudent)
    app.use("/api/v1/admin/subject",subjectRouter)
    app.use("/api/v1/admin/class",ClassLevelRouter)
    app.use('/api/v1/medicalrecord-recommdations',MedicalRecord)
    app.use('/api/v1/grade',GradeRoutes)
    app.use('/api/v1/complaint',complaintRoutes)

  // url error
  app.use("*", (req, res, next) => {
    next(new AppError(`invalid url ${req.originalUrl}`, 404));
  });

  // globalError
  app.use(globalError);
}
