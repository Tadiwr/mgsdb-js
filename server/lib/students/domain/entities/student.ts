import { Gender, StudentInfo as StudentInfo } from "./student_info";
import { StudentPayment } from "./student_payment";
/**
 * Represents all the info about a student that is needed
 * for them to be registered into the School Database
 */
export class Student {
    studentId : string;
    firstName : string;
    surname : string;
    dob : Date;
    gender : Gender
    classID : string;
    studentPayment : StudentPayment;

    constructor(
        classID : string,
        studentId : string,
        firstName : string,
        surname : string,
        dob : Date,
        gender : Gender,
        paymentStatus? : StudentPayment
    ) {
        this.classID = classID;
        this.studentId = studentId;
        this.firstName = firstName;
        this.surname = surname;
        this.dob = dob;
        this.gender = gender;

        if(paymentStatus == undefined) {
            this.studentPayment = StudentPayment.fromDefault(this.studentId)
        } else {
            this.studentPayment = paymentStatus
        }
    }

    
    public get studentInfo() : StudentInfo {
        return new StudentInfo(
            this.studentId,
            this.firstName,
            this.surname,
            this.dob,
            this.gender
        )
    }

    
    public get paymentStatus() : StudentPayment {
        return this.studentPayment 
    }
    
    
}