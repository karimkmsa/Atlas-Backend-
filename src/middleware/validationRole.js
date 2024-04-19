import { adminModel } from "../../databases/models/admin.models.js";
import { parentModel } from "../../databases/models/parent.models.js";
import { studentModel } from "../../databases/models/student.model.js";
import { teacherModel } from "../../databases/models/teacher.models.js";

 const selectModel = (role) => {
    let userCollection;

    if (role === 'student') {
        userCollection = studentModel;
    } else if (role === 'teacher') {
        userCollection = teacherModel;
    } else if (role === 'admin') {
        userCollection = adminModel;
    }
    else if (role === 'parent') {
        userCollection = parentModel;
    }
     else {
        return null;
    }
    return userCollection

}



export{
    selectModel
}