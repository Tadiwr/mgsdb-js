"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
var student_1 = require("../../domain/entities/student");
var StudentModel = /** @class */ (function (_super) {
    __extends(StudentModel, _super);
    function StudentModel(id, firstname, surname, dob, gender, form, phone_number, email) {
        return _super.call(this, id, firstname, surname, dob, gender, form, phone_number, email) || this;
    }
    StudentModel.fromJson = function (data) {
        return new StudentModel(data["id"], data["firstname"], data["surname"], data["dob"], data["gender"], data["form"], data["phone_number"], data["email"]);
    };
    StudentModel.prototype.toSqlStatement = function () {
        var tableName = 'student_info';
        return "\n            INSERT INTO ".concat(tableName, "\n            (firstname, surname, dob, gender, form, phone_number, email)\n            VALUE (\n                '").concat(this.firstname, "',\n                '").concat(this.surname, "',\n                '").concat(this.dob, "',\n                '").concat(this.gender, "',\n                ").concat(this.form, ",\n                '").concat(this.phone_number, "',\n                '").concat(this.email, "'\n            )\n        ");
    };
    StudentModel.prototype.getUpdateSql = function () {
        var tableName = 'student_info';
        return "\n            UPDATE ".concat(tableName, "\n            \n            SET firstname = '").concat(this.firstname, "',\n                surname ='").concat(this.surname, "',\n                dob ='").concat(this.dob, "',\n                gender ='").concat(this.gender, "',\n                form =").concat(this.form, ",\n                phone_number ='").concat(this.phone_number, "',\n                email ='").concat(this.email, "'\n\n            WHERE student_id = ").concat(this.student_id, ";\n        ");
    };
    return StudentModel;
}(student_1.Student));
exports.StudentModel = StudentModel;
