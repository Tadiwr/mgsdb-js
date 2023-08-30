export class StudentInfo {

    studentId : string;
    firstName : string;
    surname : string;
    dob : Date;
    gender : Gender 

    constructor(
        studentId : string,
        firstName : string,
        surname : string,
        dob : Date,
        gender : Gender
    ) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;
    }
}

export enum Gender {
    male = "MALE",
    female = "FEMALE"
}