"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
/**
 * An Entity Represents all the info about a student that is needed
 * for them to be registered into the School Database
 */
var Student = /** @class */ (function () {
    function Student(id, firstname, surname, dob, gender, form, phone_number, email) {
        this.student_id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
        this.form = form;
        this.phone_number = phone_number;
        this.email = email;
    }
    return Student;
}());
exports.Student = Student;
